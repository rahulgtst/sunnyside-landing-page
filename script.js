"use strict";

const menuIcon = document.querySelector("#menu-icon");
const mobileMenu = document.querySelector("#mobile-menu");

let mobileMenuVisible = false;

menuIcon.addEventListener("click", () => {
  if (mobileMenuVisible) {
    mobileMenu.style.display = "none";
    mobileMenuVisible = false;
  } else {
    mobileMenu.style.display = "flex";
    mobileMenuVisible = true;
  }
});
