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
          <li>HTML5 - Semantic Elements, Accessibility (WAI-ARIA)</li>
          <li>CSS - Flexbox, Grid, Animations, Frameworks/Bootstrap, SASS, BEM, Responsive, Mobile-first, CSS Modules</li>
          <li>JavaScript - ES5, ES6/ES2015-2018, AJAX, Fetch API, jQuery, OOP, Functional</li>
          <li>React - JSX, Redux, React-Router, Animations, CSS Modules, CSS-In-JS (Styled-Components), Testing (Jest w/ Enzyme)</li>
          <li>Node.js - Express, Templating/EJS, NPM, REST</li>
          <li>NoSQL - MongoDB (Mongoose)</li>
          <li>PWAs, SPAs, MPAs, static websites</li>
          <li>Git - Github, GitLab, GitFlow</li>
          <li>Testing - unit and integration tests, snapshot testing, Jest, Enzyme, Jasmine</li>
          <li>Cloud/Deployment - AWS, Heroku, Github Pages, Google App Engine, Firebase</li>
        </ul>
      </div>
    </main>
  );
}

export default About;