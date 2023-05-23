const firstList = document.querySelector(".feat-list");
const secondList = document.querySelector(".company-list");
const firstLi = document.getElementById("featLi");
const secondLi = document.getElementById("companyLi");
const firstArrow = document.getElementById("featArrow");
const secondArrow = document.getElementById("compArrow");
const menuHam = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".right-nav");

firstLi.addEventListener("click", () => {
  firstList.classList.toggle("show");
  firstList.classList.toggle("display-list");
  firstArrow.classList.toggle("rotate");
});
secondLi.addEventListener("click", () => {
  secondList.classList.toggle("show");
  secondList.classList.toggle("display-list");
  secondArrow.classList.toggle("rotate");
});

menuHam.addEventListener("click", () => {
  menuHam.classList.toggle("active");
  sideMenu.classList.toggle("show-menu");
  container.classList.toggle("blur");
});
