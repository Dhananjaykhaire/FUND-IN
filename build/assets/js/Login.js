document.getElementById("toggle-link").addEventListener("click", function (e) {
    e.preventDefault();

    const formTitle = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const confirmPasswordGroup = document.getElementById("confirm-password-group");
    const fullNameGroup = document.getElementById("full-name-group");
    const toggleLink = document.getElementById("toggle-link");
    const successMessage = document.getElementById("success-message");

    // Toggle between Login and Register
    if (formTitle.innerText === "Login") {
        formTitle.innerText = "Register";
        submitBtn.innerText = "Register";
        confirmPasswordGroup.style.display = "block"; // Show confirm password for registration
        fullNameGroup.style.display = "block"; // Show full name field for registration
        toggleLink.innerText = "Login"; // Change link text
        toggleLink.dataset.mode = "login"; // Add a data attribute to track mode
        successMessage.style.display = "none"; // Hide success message on switch
    } else {
        formTitle.innerText = "Login";
        submitBtn.innerText = "Login";
        confirmPasswordGroup.style.display = "none"; // Hide confirm password for login
        fullNameGroup.style.display = "none"; // Hide full name field for login
        toggleLink.innerText = "Register"; // Change link text
        toggleLink.dataset.mode = "register"; // Add a data attribute to track mode
        successMessage.style.display = "none"; // Hide success message on switch
    }
});

document.getElementById("auth-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formTitle = document.getElementById("form-title").innerText;

    if (formTitle === "Register") {
        const fullName = document.getElementById("full-name").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Check if full name is filled
        if (!fullName) {
            alert("Full Name is required for registration.");
            return;
        }

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
