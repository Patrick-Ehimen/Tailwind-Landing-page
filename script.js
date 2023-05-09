const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

const closeMenu = function () {
  menu.classList.add("hidden");
};
// const btnCloseMenu = document.querySelector(".close-modal");
menu.addEventListener("click", closeMenu);
