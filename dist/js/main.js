const menuBtn = document.querySelector(".menu-btn");
const hamburguer = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNavbar = document.querySelector(".menu-nav");
const navbarItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

const tooglemenu = () => {
  if (!showMenu) {
    hamburguer.classList.add("open");
    nav.classList.add("open");
    menuNavbar.classList.add("open");
    navbarItems.forEach((item) => {
      item.classList.add("open");
    });
    showMenu = true;
  } else {
    hamburguer.classList.remove("open");
    nav.classList.remove("open");
    menuNavbar.classList.remove("open");

    navbarItems.forEach((item) => {
      item.classList.remove("open");
    });
    showMenu = false;
  }
};

menuBtn.addEventListener("click", tooglemenu);
