'use strict';



/**
 * Navbar toggle
 */

const navOpenbtn = document.querySelector("[data-nav-Open-btn]");
const navbar = document.querySelector ("[data-navbar]");
const navClosebtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenbtn, navClosebtn];

for (let i = 0; i < navElemArr.length; i++){
    navElemArr[i].addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
}
/**
 * Toggle navbar when click any navbar link
 */
const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i< navbarLinks.length; i++){
    navbarLinks[i].addEventListener("click", function (){
        navbar.classList.remove("active");
    });
}
 /**
  * Header active when window scroll down
  */
 const header = document.querySelector("[data-header]");

 window.addEventListener("scroll", function(){
   window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
 });