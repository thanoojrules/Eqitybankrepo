document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "dashboard.html";
});

document.getElementById("openSignup").addEventListener("click", function() {
    document.getElementById("authContainer").style.display = "block";
    document.getElementById("signupContainer").style.display = "block";
    document.getElementById("loginContainer").style.display = "none";
});

document.getElementById("openLogin").addEventListener("click", function() {
    document.getElementById("authContainer").style.display = "block";
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
});
