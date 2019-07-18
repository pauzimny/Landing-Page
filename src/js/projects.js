const projectsList = document.querySelector(".projects__list");

const allProjects = [
  {
    name: "Weather App",
    description:
      "Build with Create React App. PWA with React Hooks, Local Storage to save data, Sass and Material-UI for styling. I also wrote some tests using Jest and Enzyme. Deployed with Firebase.",
    img: "../src/assets/weather-app.png",
    site: "https://weather-app-3dcd4.firebaseapp.com/",
    code: "https://github.com/pauzimny/front-dev-advanced-weather-app"
  },
  {
    name: "Natural Cosmetics Blog",
    description:
      "Build with Create React App. SPA using React Router, andContentful as CMS. Sending emails via Nodemailer. Deployed with Firebase.",
    img: "../src/assets/cosmetics-blog.png",
    site: "https://natural-cosmetics-blog.firebaseapp.com/",
    code: "https://github.com/pauzimny/spa-react-router"
  },
  {
    name: "Landing page",
    description:
      "Created with Vanilla Javascript and JQuery for Navigation animation.Styled with Sass",
    img: "../src/assets/landing.png",
    site: "https://pauzimny.github.io/Banner/",
    code: "https://github.com/pauzimny/Landing-Page"
  },
  {
    name: "Search songs with iTunes",
    description: "Build with Create React App, fetch data from iTunes API",
    img: "../src/assets/songs.png",
    site: "https://songsearcher-34dba.firebaseapp.com/",
    code: "https://github.com/pauzimny/pgs-internship"
  },
  {
    name: "Slider",
    description: "Vanilla Javascript simple project",
    img: "",
    site: "#",
    code: "https://github.com/pauzimny/Banner"
  }
];

allProjects.forEach(project => {
  const projectsProject = document.createElement("li");
  projectsProject.classList.add("projects__project");
  projectsProject.innerHTML = `
    <h4 class="projects__name">
                                ${project.name}</h4>
                            <div class="projects__container">
                                <p class="projects__description">${
                                  project.description
                                }</p>
                                    <div class="projects__image" style="background-image:url(${
                                      project.img
                                    })">
                                    <div class="projects__hover">
                                        <p class="projects__site">
                                            <a href= ${
                                              project.site
                                            } class="projects__link">
                                                <i class="fas fa-desktop style"></i>
                                                <span class="projects__text">Visit
                                                    site
                                                </span>
                                            </a>
                                        </p>
                                        <p class="projects__code">
                                            <a href= ${project.code}
                                                class="projects__link">
                                                <i class="fab fa-github style"></i>
                                                <span class="projects__text">View
                                                    code
                                                </span>
                                            </a>
                                        </p>
    
                                    </div>
                                </div>
    
                            </div>
    `;

  projectsList.appendChild(projectsProject);
});
// const projectsProject = document.createElement("li");
// projectsProject.classList.add("projects__project");
// projectsProject.innerHTML = `
// <h4 class="projects__name">
//                             ${allProjects[0].name}</h4>
//                         <div class="projects__container">
//                             <p class="projects__description">${
//                               allProjects[0].description
//                             }</p>
//                                 <div class="projects__image">
//                                 <div class="projects__hover">
//                                     <p class="projects__site">
//                                         <a href= ${
//                                           allProjects[0].site
//                                         } class="projects__link">
//                                             <i class="fas fa-desktop style"></i>
//                                             <span class="projects__text">Visit
//                                                 site
//                                             </span>
//                                         </a>
//                                     </p>
//                                     <p class="projects__code">
//                                         <a href= ${allProjects[0].code}
//                                             class="projects__link">
//                                             <i class="fab fa-github style"></i>
//                                             <span class="projects__text">View
//                                                 code
//                                             </span>
//                                         </a>
//                                     </p>

//                                 </div>
//                             </div>

//                         </div>
// `;

// projectsList.appendChild(projectsProject);
