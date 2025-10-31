"use strict";

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("main-mobile_hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", function(event) {
    event.preventDefault();
    mobileMenu.classList.toggle("hidden");
    hamburger.classList.toggle("menu-open");
  });
});