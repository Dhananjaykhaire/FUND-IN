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

  
    });
