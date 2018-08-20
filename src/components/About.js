import React from 'react';
import './About.css';

function About() {
  return (
    <main className="About wrapper">
      <div className="titles">
        <h2>Front-End</h2>
        <h2>/</h2>
        <h2>React</h2>
        <h2>/</h2>
        <h2>Web</h2>
        <h2>/</h2>
        <h2>JavaScript</h2>
        <h2>/</h2>
        <h2>MERN</h2>
      </div>

      <div className="Technologies">
        <h2>Technologies</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS - Flexbox, Grid, Animations, Frameworks/Bootstrap, SASS, BEM, Responsive, Mobile-first</li>
          <li>JavaScript - ES5, ES6/ES2015-2018, AJAX, Fetch API, jQuery, OOP, Functional</li>
          <li>React - JSX, Redux, React-Router, Animations</li>
          <li>Node.js - Express, Templating/EJS, NPM, REST</li>
          <li>NoSQL - MongoDB (Mongoose)</li>
          <li>PWAs, SPAs, MPAs, static websites</li>
          <li>Git - Github, GitLab, GitFlow</li>
          <li>Testing - Jasmine, Jest, Mocha, Chai</li>
          <li>Cloud/Deployment - AWS, Heroku, Github Pages, Google App Engine, Firebase</li>
        </ul>
      </div>
    </main>
  );
}

export default About;