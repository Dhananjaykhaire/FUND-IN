document.getElementById("toggle-link").addEventListener("click", toggleForm);
document.getElementById("auth-form").addEventListener("submit", handleFormSubmit);

function toggleForm(e) {
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
        fullNameGroup.style.display = "block"; // Show full name for registration
        toggleLink.innerText = "Login";
        toggleLink.setAttribute("data-mode", "login"); // Update mode
        successMessage.style.display = "none"; // Hide success message on switch
    } else {
        formTitle.innerText = "Login";
        submitBtn.innerText = "Login";
        confirmPasswordGroup.style.display = "none"; // Hide confirm password for login
        fullNameGroup.style.display = "none"; // Hide full name for login
        toggleLink.innerText = "Register";
        toggleLink.setAttribute("data-mode", "register"); // Update mode
        successMessage.style.display = "none"; // Hide success message on switch
    }
}

function handleFormSubmit(e) {
    e.preventDefault();

    const formTitle = document.getElementById("form-title").innerText;

    if (formTitle === "Register") {
        const fullName = document.getElementById("full-name").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (!fullName) {
            alert("Full Name is required for registration.");
            return; // Stop further execution if full name is missing
        }

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
}
