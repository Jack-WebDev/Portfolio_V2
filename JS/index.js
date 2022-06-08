const hamburger = document.querySelector(".hamburger");
const modal = document.getElementById("modal");
const closeIcon = document.querySelector(".close-icon");
const body = document.querySelector("body");

const headerHeight = document.querySelector('.header').offsetHeight;


document.documentElement.style.setProperty('--scroll-padding', headerHeight - 1 + "px");

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    modal.close();
    body.style.overflow = "auto";
  });
});

hamburger.addEventListener("click", () => {
  modal.classList.add("fade-in");
  modal.addEventListener(
    "animationend",
    () => {
      modal.classList.remove("fade-in");
    },
    { once: true }
  );
  modal.showModal();
  body.style.overflow = "clip";
});

closeIcon.addEventListener("click", () => {
  modal.classList.add("fade-out");
  modal.addEventListener(
    "animationend",
    () => {
      modal.close();
      modal.classList.remove("fade-out");
    },
    { once: true }
  );
  body.style.overflow = "auto";
});

modal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") {
    modal.close();
    body.style.overflow = "auto"
  }
});
