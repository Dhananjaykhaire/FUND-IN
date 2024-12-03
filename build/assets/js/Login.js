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
        confirmPasswordGroup.style.display = "block"; 
        fullNameGroup.style.display = "block"; 
        toggleLink.innerText = "Login";
        toggleLink.setAttribute("data-mode", "login"); 
        successMessage.style.display = "none"; 
    } else {
        formTitle.innerText = "Login";
        submitBtn.innerText = "Login";
        confirmPasswordGroup.style.display = "none"; 
        fullNameGroup.style.display = "none"; 
        toggleLink.innerText = "Register";
        toggleLink.setAttribute("data-mode", "register"); 
        successMessage.style.display = "none"; 
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
            return; 
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return; 
        }

        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);

        alert("Register successful!"); 
        window.location.href = "index.html"; 

        
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    } else {
    
        alert("Login successful!"); 
        window.location.href = "index.html"; 
        
         // Login functionality with Firebase
    const passwordInput = document.getElementById("passwordInput"); // Added for login
    const email = emailInput.value;
    const password = passwordInput.value;

    const firebaseConfig = {
        apiKey: "AIzaSyBVX06Q0ZLXSBjcNlLJCvTN-x7ueBxIKyI",
        authDomain: "fund-in-5ff6f.firebaseapp.com",
        databaseURL: "https://fund-in-5ff6f-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "fund-in-5ff6f",
        storageBucket: "fund-in-5ff6f.appspot.com",
        messagingSenderId: "256974909181",
        appId: "1:256974909181:web:6eded49610b9be72369894",
        measurementId: "G-4F00LL1T5Q"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

    // Get a reference to the authentication service
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully logged in
        const user = userCredential.user;
        console.log("Logged in user:", user);
        alert("Login successful!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle login errors (e.g., display error message)
        console.error("Login error:", errorCode, errorMessage);
        alert("Login failed: " + error);
      });
    }
}
