import triviaReact from '../../assets/projects/trivia-react.png';
import chefsDen from '../../assets/projects/chefsden.jpg';
import knockout from '../../assets/projects/knockout.jpg';
import scrapoogle from '../../assets/projects/scrapoogle.jpg';
import freightSys from '../../assets/projects/freight-sys.jpg';
import hangman from '../../assets/projects/hangman.jpg';
import rps from '../../assets/projects/rps.jpg';
import trivia from '../../assets/projects/trivia.jpg';
import clicky from '../../assets/projects/clicky.jpg';
import peachCo from '../../assets/projects/peachco.gif';
import binaryCalc from '../../assets/projects/binary-calc.png';
import ajax from '../../assets/projects/ajax.png';
import scrapooglePng from '../../assets/projects/scrapoogle.png';

export const projects = [
  {
    name: 'Weird Trivia Fun - Using React',
    img: triviaReact,
    projectLink: 'https://glacial-bastion-18712.herokuapp.com',
    githubLink: 'https://github.com/bagglerock/Trivia-React',
    description:
      'This is a Trivia Game made up of nonsense questions and answers. It might not make any sense but there are correct answers. The questions and answers are shuffled so memorizing the placement of the answers will not help. Written using ReactJS, Bootstrap, and CSS grid. Bootstrap was just used to help quickly create each of the components. CSS grid was just used to help layout certain parts of the app.',
    technologies: 'Node.js, Express.js, React, Bootstrap 4+, css modules set to true, Javascript, HTML, CSS',
  },
  {
    name: "Chef's Den",
    img: chefsDen,
    projectLink: 'https://immense-plateau-63304.herokuapp.com/',
    githubLink: 'https://github.com/bagglerock/Chefs-Den',
    description:
      'An application dedicated to your food needs.  This uses Yummly API to get the recipes and displays them using a combination of JQuery and Handlebars.  It uses MySQL to save your favorites and login information.',
    technologies: 'Node.js, Express.js, Handlebars, bcrypt, MySQL, Sequelize, Javascript, jQuery, HTML, CSS',
  },
  {
    name: 'Knockout Fitness',
    img: knockout,
    projectLink: 'http://knockoutfitnessmuaythai.com',
    githubLink: 'https://github.com/bagglerock/knockout-fitness',
    description: 'This is a website built for Knockout Fitness Muay Thai in Brick NJ.',
    technologies: 'HTML, CSS, jQuery',
  },
  {
    name: 'Scrappy-Scraper',
    img: scrapoogle,
    projectLink: 'https://agile-coast-42538.herokuapp.com/',
    githubLink: 'https://github.com/bagglerock/Scrappy-Scraper',
    description:
      'This app is designed to pull articles from news.google.com with the headline, a brief summary and a link to the actual article.  When update is hit, it will give a list of all the articles that news.google.com provies at the time.  Anything highlighted with a background in green is an article that had previously been saved.  In the saved articles, you have the ability to store any new notes.',
    technologies: 'Node.js, Express.js, Handlebars, MongoDB, Mongoose, Axios, Cheerio, Javascript, jQuery, HTML, CSS',
  },
  {
    name: 'Freight Systems NJ',
    img: freightSys,
    projectLink: 'https://bagglerock.github.io/freight-sys',
    githubLink: 'https://github.com/bagglerock/freight-sys',
    description: 'Website for Freight Systems of NJ.  A Logistics company for your shipping needs.',
    technologies: 'HTML, CSS, jQuery',
  },
  {
    name: 'Hangman',
    img: hangman,
    projectLink: 'https://bagglerock.github.io/Hangman-Game',
    githubLink: 'https://github.com/bagglerock/Hangman-Game',
    description:
      'Hangman game for the browser.  Musicians are the subject and spotify comes up on correct guess. Written using HTML, CSS and Javascript',
    technologies: 'Javascript, HTML, CSS, Bootstrap',
  },
  {
    name: 'Rock Paper Scissors',
    img: rps,
    projectLink: 'https://bagglerock.github.io/RPS-Multiplayer',
    githubLink: 'https://github.com/bagglerock/RPS-Multiplayer',
    description: 'Multiplayer Rock, Paper, Scissors with chat.  Written using HTML, CSS, Bootstrap, and the Firebase API',
    technologies: 'Javascript, jQuery, Firebase, HTML, CSS',
  },
  {
    name: 'Trivia Game',
    img: trivia,
    projectLink: 'https://bagglerock.github.io/TriviaGame/',
    githubLink: 'https://github.com/bagglerock/TriviaGame',
    description:
      'This is a fun little take on Trivia.  I could not think of any questions or answers so I wanted to create a list of questions and answers that made absolutely no sense. This is written in basic HTML using some Bootstrap, a little CSS, Javascript and Jquery.  ',
    technologies: 'Javascript, jQuery, HTML, CSS, Bootstrap',
  },
  {
    name: 'Clicky Game',
    img: clicky,
    projectLink: 'https://mysterious-stream-83031.herokuapp.com/',
    githubLink: 'https://github.com/bagglerock/clicky-game',
    description:
      'Clicky Game is a small little game much like memory.  Try not to click on the same picture twice and build up your score.  This was my first React App that I had made.',
    technologies: 'MERN',
  },
  {
    name: 'PeachCo Lister 3.0',
    img: peachCo,
    projectLink: 'https://limitless-reaches-23686.herokuapp.com',
    githubLink: 'https://github.com/bagglerock/peachco-react',
    description:
      'A browser based application that holds product information and lists products onto Ebay. At the moment the repo is private.  It was originally written using HTML, CSS, Javascript and PHP, but I wanted to make a Single Page version that would be optimized for the tablet.  This one uses React with a Node Backend.  Products are stored in a MySQL database, and sent to Ebay using the npm-package called ebay-api.  Images are sent to another server using the npm package jsftp.',
    technologies: 'ReactJS, MySQL, NodeJS, Express, jsftp, node-ebay-api, multer',
  },
  {
    name: 'Binary Calculator',
    img: binaryCalc,
    projectLink: 'https://bagglerock.github.io/Binary-Calculator/',
    githubLink: 'https://github.com/bagglerock/Binary-Calculator',
    description: 'A binary calculator that is written in HTML, CSS, and Javascript',
    technologies: '',
  },
  {
    name: 'Ajax Event Base Class',
    img: ajax,
    projectLink: 'https://bagglerock.github.io/ajax-event-base-class/',
    githubLink: 'https://github.com/bagglerock/ajax-event-base-class',
    description:
      'A small practice project where I made ajax calls in pure Javascript.  It changes data using a click event in a small section of the page acting like a single page application',
    technologies: '',
  },
  {
    name: 'Scrapoogle',
    img: scrapooglePng,
    projectLink: 'https://vast-taiga-79745.herokuapp.com',
    githubLink: 'https://github.com/bagglerock/Scrapoogle',
    description:
      'This is a rewrite of the Scrappy Scraper site using ReactJS with Node backend.  CSS Modules are used in this one to maintain simplicity.',
    technologies: '',
  },
];
