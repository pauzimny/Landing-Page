const aboutMeContainer = document.querySelector(".about-me__text-container");

aboutMeContent = [
  {
    id: 1,
    content: `About a year ago, in August 2018, after almost 10 years in retail industry, I realized I achieved my goals as a manager and now I want to do something creative and challenging on a different field. I found this in IT and started to learn front-end technologies. I took couple Udemy courses to get basic knowledge about CSS, Javascript and Node.js. I also attended to two “Akademia Developera” courses organized by PGS Software – basic and advanced. After both I was awarded with diplomas. I made a few non-commercial projects to train my skills. `
  },
  {
    id: 2,
    content:
      "When it comes to my skills, I know basics of CSS, Javascript, React and Node.js. I use GIT for my workflow, MongoDB and Mongoose as a database, Contentful as CMS, Sass and Material-ui for styling, Webpack and Babel for bundling and transpiling code, Firebase and Zeit.now for serverless hosting. I also worked with i.a React Router, Redux Form, Local Storage, Handlebars, Lodash, Axios, Nodemailer and JQuery. I do simple unit tests using Jest and Enzyme. I keep developing in Redux and my plan is to get started with Gatsby.js and GraphQL."
  },
  {
    id: 3,
    content:
      "I am fascinated about number of technologies and solutions used in fron-end development. I am looking for an opportunity to get my first commercial experience in a company where I could learn, gain some good practices and use my skills. I am eager to become a member of a team, to participate in building various projects. I am more than willing to develop further and to work efficiently in an inspiring environment."
  }
];

aboutMeContent.forEach(paragraph => {
  const aboutMeParagraph = document.createElement("p");
  aboutMeParagraph.classList.add("about-me__text__paragraph");
  aboutMeParagraph.textContent = paragraph.content;
  aboutMeContainer.appendChild(aboutMeParagraph);
});
