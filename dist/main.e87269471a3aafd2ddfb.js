/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/aboutMe.js":
/*!***************************!*\
  !*** ./src/js/aboutMe.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var aboutMeContainer = document.querySelector(\".about-me__text-container\");\naboutMeContent = [{\n  id: 1,\n  content: \"About a year ago, in August 2018, after almost 10 years in retail industry, I realized I achieved my goals as a manager and now I want to do something creative and challenging on a different field. I found this in IT and started to learn front-end technologies. I took couple Udemy courses to get basic knowledge about CSS, Javascript and Node.js. I also attended to two \\u201CAkademia Developera\\u201D courses organized by PGS Software \\u2013 basic and advanced. After both I was awarded with diplomas. I made a few non-commercial projects to train my skills. \"\n}, {\n  id: 2,\n  content: \"When it comes to my skills, I know basics of CSS, Javascript, React and Node.js. I use GIT for my workflow, MongoDB and Mongoose as a database, Contentful as CMS, Sass and Material-ui for styling, Webpack and Babel for bundling and transpiling code, Firebase and Zeit.now for serverless hosting. I also worked with i.a React Router, Redux Form, Local Storage, Handlebars, Lodash, Axios, Nodemailer and JQuery. I do simple unit tests using Jest and Enzyme. I keep developing in Redux and my plan is to get started with Gatsby.js and GraphQL.\"\n}, {\n  id: 3,\n  content: \"I am fascinated about number of technologies and solutions used in fron-end development. I am looking for an opportunity to get my first commercial experience in a company where I could learn, gain some good practices and use my skills. I am eager to become a member of a team, to participate in building various projects. I am more than willing to develop further and to work efficiently in an inspiring environment.\"\n}];\naboutMeContent.forEach(function (paragraph) {\n  var aboutMeParagraph = document.createElement(\"p\");\n  aboutMeParagraph.classList.add(\"about-me__text__paragraph\");\n  aboutMeParagraph.textContent = paragraph.content;\n  aboutMeContainer.appendChild(aboutMeParagraph);\n});\n\n//# sourceURL=webpack:///./src/js/aboutMe.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.sass */ \"./src/style/style.sass\");\n/* harmony import */ var _style_style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/js/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ \"./src/js/projects.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_projects_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sections_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections.js */ \"./src/js/sections.js\");\n/* harmony import */ var _sections_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sections_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _aboutMe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aboutMe.js */ \"./src/js/aboutMe.js\");\n/* harmony import */ var _aboutMe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aboutMe_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var mobileNav = document.querySelector(\".nav\");\nvar mobileBtn = document.querySelector(\".nav-mobile__button\");\n\nvar showMenu = function showMenu(e) {\n  mobileNav.classList.toggle(\"active\");\n  mobileBtn.classList.toggle(\"active-btn\");\n  e.stopPropagation();\n};\n\nvar hideMenu = function hideMenu() {\n  mobileNav.classList.remove(\"active\");\n  mobileBtn.classList.remove(\"active-btn\");\n};\n\nmobileBtn.addEventListener(\"click\", showMenu);\ndocument.body.addEventListener(\"click\", hideMenu);\n\n//# sourceURL=webpack:///./src/js/menu.js?");

/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var projectsList = document.querySelector(\".projects__list\");\nvar allProjects = [{\n  name: \"Weather App\",\n  description: \"Build with Create React App. PWA with React Hooks, Local Storage to save data, Sass and Material-UI for styling. I also wrote some tests using Jest and Enzyme. Deployed with Firebase.\",\n  img: \"../assets/weather-app.png\",\n  site: \"https://weather-app-3dcd4.firebaseapp.com/\",\n  code: \"https://github.com/pauzimny/front-dev-advanced-weather-app\"\n}, {\n  name: \"Natural Cosmetics Blog\",\n  description: \"Build with Create React App. SPA using React Router, andContentful as CMS. Sending emails via Nodemailer. Deployed with Firebase.\",\n  img: \"../assets/cosmetics-blog.png\",\n  site: \"https://natural-cosmetics-blog.firebaseapp.com/\",\n  code: \"https://github.com/pauzimny/spa-react-router\"\n}, {\n  name: \"Landing page\",\n  description: \"Created with Vanilla Javascript and JQuery for Navigation animation.Styled with Sass\",\n  img: \"../assets/landing.png\",\n  site: \"https://dist.zimnypaulina.now.sh\",\n  code: \"https://github.com/pauzimny/Landing-Page\"\n}, {\n  name: \"Search songs with iTunes\",\n  description: \"Build with Create React App, fetch artists, songs etc. from iTunes API\",\n  img: \"../assets/songs.png\",\n  site: \"https://songsearcher-34dba.firebaseapp.com/\",\n  code: \"https://github.com/pauzimny/pgs-internship\"\n}, {\n  name: \"Slider\",\n  description: \"Vanilla Javascript simple project. Switch between slides using <-- and -->\",\n  img: \"../assets/slider.png\",\n  site: \"https://pauzimny.github.io/Banner/\",\n  code: \"https://github.com/pauzimny/Banner\"\n}];\nallProjects.forEach(function (project) {\n  var projectsProject = document.createElement(\"li\");\n  projectsProject.classList.add(\"projects__project\");\n  projectsProject.innerHTML = \"\\n    <h4 class=\\\"projects__name\\\">\\n                                \".concat(project.name, \"</h4>\\n                            <div class=\\\"projects__container\\\">\\n                                <p class=\\\"projects__description\\\">\").concat(project.description, \"</p>\\n                                    <div class=\\\"projects__image\\\" style=\\\"background-image:url(\").concat(project.img, \")\\\">\\n                                    <div class=\\\"projects__hover\\\">\\n                                        <p class=\\\"projects__site\\\">\\n                                            <a href= \").concat(project.site, \" class=\\\"projects__link\\\">\\n                                                <i class=\\\"fas fa-desktop style\\\"></i>\\n                                                <span class=\\\"projects__text\\\">Visit\\n                                                    site\\n                                                </span>\\n                                            </a>\\n                                        </p>\\n                                        <p class=\\\"projects__code\\\">\\n                                            <a href= \").concat(project.code, \"\\n                                                class=\\\"projects__link\\\">\\n                                                <i class=\\\"fab fa-github style\\\"></i>\\n                                                <span class=\\\"projects__text\\\">View\\n                                                    code\\n                                                </span>\\n                                            </a>\\n                                        </p>\\n    \\n                                    </div>\\n                                </div>\\n    \\n                            </div>\\n    \");\n  projectsList.appendChild(projectsProject);\n});\n\n//# sourceURL=webpack:///./src/js/projects.js?");

/***/ }),

/***/ "./src/js/sections.js":
/*!****************************!*\
  !*** ./src/js/sections.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var navBtns = document.querySelectorAll(\".nav__item\");\n$(\".nav__item:first-child\").on(\"click\", function () {\n  $(\"body,html\").animate({\n    scrollTop: $(\".home\").offset().top\n  }, 500);\n});\n$(\".nav__item:nth-child(2)\").on(\"click\", function () {\n  $(\"body,html\").animate({\n    scrollTop: $(\".about-me\").offset().top\n  }, 2000);\n});\n$(\".nav__item:nth-child(3)\").on(\"click\", function () {\n  $(\"body,html\").animate({\n    scrollTop: $(\".technologies\").offset().top\n  }, 3000);\n});\n$(\".nav__item:nth-child(4)\").on(\"click\", function () {\n  $(\"body,html\").animate({\n    scrollTop: $(\".projects\").offset().top\n  }, 4000);\n});\n$(\".nav__item:nth-child(5)\").on(\"click\", function () {\n  $(\"body,html\").animate({\n    scrollTop: $(\".footer\").offset().top\n  }, 5000);\n});\n$(document).bind(\"scroll\", function (e) {\n  $(\"section\").each(function () {\n    if ($(this).offset().top < window.pageYOffset + 5 && $(this).offset().top + $(this).height() > window.pageYOffset + 5) {\n      window.location.hash = $(this).attr(\"id\");\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/sections.js?");

/***/ }),

/***/ "./src/style/style.sass":
/*!******************************!*\
  !*** ./src/style/style.sass ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/style.sass?");

/***/ })

/******/ });