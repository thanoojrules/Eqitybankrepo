document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
});

// js/login.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
  
        // Change the redirection URL to homepage.html
        window.location.href = 'homepage.html';
      });
    }
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
