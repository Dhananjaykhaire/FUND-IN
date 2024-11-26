// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBVX06Q0ZLXSBjcNlLJCvTN-x7ueBxIKyI",
    authDomain: "fund-in-5ff6f.firebaseapp.com",
    databaseURL: "https://fund-in-5ff6f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fund-in-5ff6f",
    storageBucket: "fund-in-5ff6f.appspot.com",
    messagingSenderId: "256974909181",
    appId: "1:256974909181:web:6eded49610b9be72369894",
    measurementId: "G-4F00LL1T5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Add Event Listeners
document.getElementById("toggle-link").addEventListener("click", toggleForm);
document.getElementById("auth-form").addEventListener("submit", handleFormSubmit);

// Toggle between Login and Register
function toggleForm(e) {
    e.preventDefault();

    const formTitle = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const confirmPasswordGroup = document.getElementById("confirm-password-group");
    const fullNameGroup = document.getElementById("full-name-group");
    const toggleLink = document.getElementById("toggle-link");
    const successMessage = document.getElementById("success-message");

    if (formTitle.innerText === "Login") {
        formTitle.innerText = "Register";
        submitBtn.innerText = "Register";
        confirmPasswordGroup.style.display = "block";
        fullNameGroup.style.display = "block";
        toggleLink.innerText = "Login";
        successMessage.style.display = "none";
    } else {
        formTitle.innerText = "Login";
        submitBtn.innerText = "Login";
        confirmPasswordGroup.style.display = "none";
        fullNameGroup.style.display = "none";
        toggleLink.innerText = "Register";
        successMessage.style.display = "none";
    }
}

// Handle Form Submit
async function handleFormSubmit(e) {
    e.preventDefault();

    const formTitle = document.getElementById("form-title").innerText;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (formTitle === "Register") {
        const fullName = document.getElementById("full-name").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (!fullName) {
            alert("Full Name is required for registration.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        try {
            // Register the user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User registered:", user);

            // Show success message
            const successMessage = document.getElementById("success-message");
            successMessage.style.display = "block";

            // Auto-hide the message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 3000);

            // Switch to Login mode automatically
            document.getElementById("toggle-link").click();
        } catch (error) {
            console.error("Error during registration:", error.message);
            alert(`Registration failed: ${error.message}`);
        }
    } else {
        try {
            // Log in the user with Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User logged in:", user);

            // Redirect to main page after login
            window.location.href = "main.html"; // Replace with your main page
        } catch (error) {
            console.error("Error during login:", error.message);
            alert(`Login failed: ${error.message}`);
        }
    }
}
