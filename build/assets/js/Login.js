document.getElementById("toggle-link").addEventListener("click", function (e) {
    e.preventDefault();
    const formTitle = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const confirmPasswordGroup = document.getElementById("confirm-password-group");
    const successMessage = document.getElementById("success-message");

    // Toggle between Login and Register
    if (formTitle.innerText === "Login") {
        formTitle.innerText = "Register";
        submitBtn.innerText = "Register";
        confirmPasswordGroup.style.display = "block"; // Show confirm password for registration
        document.getElementById("toggle-form").innerHTML = 'Already have an account? <a href="#" id="toggle-link">Login</a>';
        successMessage.style.display = "none"; // Hide success message on switch
    } else {
        formTitle.innerText = "Login";
        submitBtn.innerText = "Login";
        confirmPasswordGroup.style.display = "none"; // Hide confirm password for login
        document.getElementById("toggle-form").innerHTML = 'Don\'t have an account? <a href="#" id="toggle-link">Register</a>';
        successMessage.style.display = "none"; // Hide success message on switch
    }
});

document.getElementById("auth-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const formTitle = document.getElementById("form-title").innerText;

    if (formTitle === "Register") {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return; // Stop further execution if passwords don't match
        }

        // Show success message if registration is successful
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";

        // Auto-hide the message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    } else {
        // Logic for login (e.g., check credentials)
        alert("Login successful!"); // You can replace this with actual login logic
    }
});
