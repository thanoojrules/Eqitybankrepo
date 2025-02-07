document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!"); // Ensure script is running

    // Open signup/login forms when buttons are clicked
    document.getElementById("openSignup").addEventListener("click", function () {
        document.getElementById("authContainer").style.display = "block";
        document.getElementById("signupContainer").style.display = "block";
        document.getElementById("loginContainer").style.display = "none";
    });

    document.getElementById("openLogin").addEventListener("click", function () {
        document.getElementById("authContainer").style.display = "block";
        document.getElementById("signupContainer").style.display = "none";
        document.getElementById("loginContainer").style.display = "block";
    });

    // Handle user signup
    document.getElementById("signupForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload
        console.log("Signup button clicked!"); // Debugging

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();

        // Ensure input is not empty
        if (!fullName || !email || !password) {
            alert("All fields are required.");
            return;
        }

        console.log("Sending data:", { fullName, email, password }); // Debugging

        try {
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, email, password }),
            });

            console.log("Signup Response Status:", response.status);

            // Parse JSON response
            const data = await response.json();
            console.log("Signup Response Data:", data);

            if (response.ok) {
                alert("Signup successful!");
                document.getElementById("signupContainer").style.display = "none";
                document.getElementById("loginContainer").style.display = "block";
            } else {
                alert("Error: " + (data.error || "Unknown error occurred"));
            }
        } catch (error) {
            console.error("Signup Error:", error);
            alert("Signup failed. Please try again.");
        }
    });

    // Handle user login
    document.getElementById("loginForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload
        console.log("Login button clicked!"); // Debugging

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        // Ensure input is not empty
        if (!email || !password) {
            alert("Email and password are required.");
            return;
        }

        console.log("Sending login data:", { email, password });

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            console.log("Login Response Status:", response.status);

            // Parse JSON response
            const data = await response.json();
            console.log("Login Response Data:", data);

            if (response.ok) {
                alert("Login successful!");
                window.location.href = "homepage.html";
            } else {
                document.getElementById("loginError").innerText = data.error || "Login failed. Try again.";
            }
        } catch (error) {
            console.error("Login Error:", error);
            document.getElementById("loginError").innerText = "Login failed. Please try again.";
        }
    });
});