const mobileNav = document.querySelector(".nav");
const mobileBtn = document.querySelector(".nav-mobile__button");

const showMenu = () => {
  mobileNav.classList.toggle("active");
  console.log("show");
  mobileBtn.classList.toggle("active-btn");
};

mobileBtn.addEventListener("click", showMenu);
