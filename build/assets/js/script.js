'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-Open-btn]");
const navbar = document.querySelector ("[data-navbar]");
const navClosebtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navClosebtn];

for (let i = 0; i < navElemArr.length; i++){
    navElemArr[i].addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
}
/**
 * toggle navbar when click any navbar link
 */
const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i< navbarLinks.length; i++){
    navbarLinks[i].addEventListener("click", function (){
        navbar.classList.remove("active");
    });
}
 /**
  * header active when window scroll down
  */
 const header = document.querySelector("[data-header]");

 window.addEventListener("scroll", function(){
   window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
 });