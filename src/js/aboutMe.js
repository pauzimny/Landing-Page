const aboutMeContainer = document.querySelector(".about-me__text-container");

aboutMeContent = [
  {
    id: 1,
    content:
      "Hello, I am an another person who want to change career and join IT industry! "
  },
  {
    id: 2,
    content: `About a year ago, in August 2018, after almost 10 years in retail industry, I realized I achieved my goals as a manager and I want something creative and challenging in a different way. At some point, I found this in IT and started to learn front-end technologies. I used some Udemy courses to get basic knowledge about CSS,Javascript and Node.js. I also attended to "Akademia Developera" courses made by PGS Software. Both I was awarded diploma. I made a few non-commercial projects as a training my skills. `
  },
  {
    id: 3,
    content:
      "For now, I learnt basics of CSS, Javascript, React and Node.js. I used GIT for my work flow, MongoDB and Mongoose as a database, Contentful as CMS, Sass and Material-ui for styling, Webpack and Babel for bundling and transpiling code, Firebase and Zeit.now as a serverless hosting. I also worked i.a with React Router, Redux Form, Local Storage, Handlebars, Lodash, Axios, Nodemailer and JQuery. I know basics of coding simple unit tests using Jest and Enzyme. I keep learning Redux and my plan is to get started with Gatsby.js and GraphQL."
  },
  {
    id: 4,
    content:
      "I am fascinated about amount of technologies and solutons used in fron-end development. I'm looking for opportunity to get my first commercial experience in company where I could learn, get many good practices and use my skills to be a member of a team building projects. I offer readiness for continued development my skills and effective work."
  }
];

aboutMeContent.forEach(paragraph => {
  const aboutMeParagraph = document.createElement("p");
  aboutMeParagraph.classList.add("about-me__text__paragraph");
  aboutMeParagraph.textContent = paragraph.content;
  aboutMeContainer.appendChild(aboutMeParagraph);
});
