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


  document.getElementById("signInButton").addEventListener("click", () => {
    window.location.href = "login.html";
  });

  const searchBtn = document.querySelector('.search-btn');
  const searchBar = document.querySelector('.search-bar');
  
  searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active'); 
  });
  
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    searchBar.classList.remove('active');

    // Replace 'YOUR_SITE_KEY' with your actual reCAPTCHA Site Key
const siteKey = "6Leq_JAqAAAAAD9-olbro_idbv5xSu4kSC6G98rj";

// Create the reCAPTCHA element
const recaptchaDiv = document.createElement("div");
recaptchaDiv.className = "g-recaptcha";
recaptchaDiv.setAttribute("data-sitekey", siteKey);

// Append the reCAPTCHA element to a specific location in your form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact"); // Replace with your form's ID
  form.appendChild(recaptchaDiv);

  // Load the reCAPTCHA script
  const script = document.createElement("script");
  script.src = "https://www.google.com/recaptcha/api.js";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
});

 
    });
