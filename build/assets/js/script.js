'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});

// Modal and Form Elements
const authModal = document.getElementById("authModal");
const authToggleBtn = document.getElementById("authToggleBtn");
const closeModal = document.getElementById("closeModal");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const showSignUp = document.getElementById("showSignUp");
const showSignIn = document.getElementById("showSignIn");

// Show Modal with Sign In Form
authToggleBtn.addEventListener("click", () => {
  authModal.style.display = "block";
  signInForm.classList.add("active");
  signUpForm.classList.remove("active");
});

// Close Modal
closeModal.addEventListener("click", () => {
  authModal.style.display = "none";
});

// Switch to Sign Up Form
showSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  signInForm.classList.remove("active");
  signUpForm.classList.add("active");
});

// Switch to Sign In Form
showSignIn.addEventListener("click", (e) => {
  e.preventDefault();
  signUpForm.classList.remove("active");
  signInForm.classList.add("active");
});

// Close Modal on Outside Click
window.addEventListener("click", (event) => {
  if (event.target === authModal) {
    authModal.style.display = "none";
  }
});
