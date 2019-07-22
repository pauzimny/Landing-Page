const navBtns = document.querySelectorAll(".nav__item");

$(".nav__item:first-child").on("click", () => {
  $("body,html").animate(
    {
      scrollTop: $(".home").offset().top
    },
    500
  );
});

$(".nav__item:nth-child(2)").on("click", () => {
  $("body,html").animate(
    {
      scrollTop: $(".about-me").offset().top
    },
    1000
  );
});

$(".nav__item:nth-child(3)").on("click", () => {
  $("body,html").animate(
    {
      scrollTop: $(".technologies").offset().top
    },
    2000
  );
});

$(".nav__item:nth-child(4)").on("click", () => {
  $("body,html").animate(
    {
      scrollTop: $(".projects").offset().top
    },
    2500
  );
});

$(".nav__item:nth-child(5)").on("click", () => {
  $("body,html").animate(
    {
      scrollTop: $(".footer").offset().top
    },
    2700
  );
});
