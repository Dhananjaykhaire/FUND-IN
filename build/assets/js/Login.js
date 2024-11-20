import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
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

// Toggle Form Logic
document.getElementById("toggle-link").addEventListener("click", function (e) {
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
  } else {
    formTitle.innerText = "Login";
    submitBtn.innerText = "Login";
    confirmPasswordGroup.style.display = "none";
    fullNameGroup.style.display = "none";
    toggleLink.innerText = "Register";
  }
});

// Form Submission Logic
document.getElementById("auth-form").addEventListener("submit", function (e) {
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

    // Register with Firebase Auth
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Registration successful!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  } else {
    // Login with Firebase Auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  }
});
