// Register
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = { name, email, password };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration Successful!");
        window.location.href = "login.html";
    });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && email === storedUser.email && password === storedUser.password) {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid Credentials!");
        }
    });
}

// Dashboard display
if (window.location.pathname.includes("dashboard.html")) {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
        document.getElementById("userName").textContent = storedUser.name;
    } else {
        window.location.href = "login.html";
    }
}

// Logout
function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}