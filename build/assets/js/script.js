'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

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

