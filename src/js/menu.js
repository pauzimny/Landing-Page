const mobileNav = document.querySelector(".nav");
const mobileBtn = document.querySelector(".nav-mobile__button");
// const mobileBar=document.querySelector(".fa-bars");

const showMenu = () => {
  mobileNav.classList.toggle("active");
  mobileBtn.classList.toggle("active-btn");
};

mobileBtn.addEventListener("click", showMenu);
