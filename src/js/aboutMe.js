const aboutMeContainer = document.querySelector(".about-me__text-container");

aboutMeContent = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloresdignissimos corporis nulla optio veritatis, sint neque minus explicabo perferendis quasi, veniamatque est cumque eum dolorem laudantium eos exercitationem voluptatibus."
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloresdignissimos corporis nulla optio veritatis, sint neque minus explicabo perferendis quasi, veniamatque est cumque eum dolorem laudantium eos exercitationem voluptatibus."
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloresdignissimos corporis nulla optio veritatis, sint neque minus explicabo perferendis quasi, veniamatque est cumque eum dolorem laudantium eos exercitationem voluptatibus."
  }
];

aboutMeContent.forEach(paragraph => {
  const aboutMeParagraph = document.createElement("p");
  aboutMeParagraph.classList.add("about-me__text__paragraph");
  aboutMeParagraph.textContent = paragraph.content;
  aboutMeContainer.appendChild(aboutMeParagraph);
});
