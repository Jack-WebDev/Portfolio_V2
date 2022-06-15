const hamburger = document.querySelector(".hamburger");
const modal = document.getElementById("modal");
const closeIcon = document.querySelector(".close-icon");
const body = document.querySelector("body");
const btnMore = document.querySelector(".btn__more");
const moreItems = document.querySelector(".projects__container");

const headerHeight = document.querySelector(".header").offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  headerHeight - 1 + "px"
);

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});

hamburger.addEventListener("click", () => {
  modal.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  modal.classList.remove("active");
});

btnMore.addEventListener("click", () => {
  moreItems.classList.toggle("active");
});
