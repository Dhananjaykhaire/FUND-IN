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

 // Replace this URL with the link to your Google Form
const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeAwFTCdwCswOifhLofvvpkYwk-gpxx8wSwZ8A34JcYeswGMg/viewform?usp=preview";

document.getElementById("joinUsButton").addEventListener("click", () => {
  // Open the Google Form in a new tab
  window.open(googleFormUrl, "_blank");
});

  // Attach an event listener to the "Support Us Today" button
document.getElementById("Support Us Today").addEventListener("click", function () {
  // Google Form link
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeOMy9N1AESKHvP0-YmeBcNZ0Xvs_IJNnG5xYhyI7JtZO1-3A/viewform";

  // Open the form in a new tab
  window.open(googleFormUrl, "_blank");
});

// Attach an event listener to the "View Events" button by ID
document.getElementById("view-events-btn").addEventListener("click", function () {
  // URL of the event
  const eventUrl = "https://mimer.edu.in/health-camps/";

  // Redirect to the event URL
  window.location.href = eventUrl; // Opens in the same tab
});

// Attach an event listener to the "View Events" button by ID
document.getElementById("next-events-btn").addEventListener("click", function () {
  // URL of the event
  const eventUrl = "https://www.volunteerindiaispiice.com/empowering-underprivileged-children-through-summer-camps-in-india/";

  // Redirect to the event URL
  window.location.href = eventUrl; // Opens in the same tab
});

// Attach an event listener to the "View Events" button by ID
document.getElementById("later-events-btn").addEventListener("click", function () {
  // URL of the event
  const eventUrl = "https://dmgglobal.com/disaster-response-base-camps/";

  // Redirect to the event URL
  window.location.href = eventUrl; // Opens in the same tab
});