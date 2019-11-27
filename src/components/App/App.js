import React, { useState } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import ProjectsList from '../ProjectsList/ProjectsList';
import SearchForm from '../SearchForm/SearchForm';
import Contact from '../Contact/Contact';
import reacteasycode from '../../assets/thumbnails/react-easy-code-thumb.JPG';
import rheastagram from '../../assets/thumbnails/rheastagram-thumb.jpeg';
import marvel from '../../assets/thumbnails/marvel-thumb.jpg';
import imessage from '../../assets/thumbnails/imessage-thumb.jpeg';
import reactimageeditor from '../../assets/thumbnails/react-image-editor-thumb.jpg';
import lolapi from '../../assets/thumbnails/lol-api-thumb.jpg';
import khtui from '../../assets/thumbnails/kht-ui-thumb.png';
import ktportfolio from '../../assets/thumbnails/kt-portfolio-thumb.JPG';
import randomuserredux from '../../assets/thumbnails/random-user-redux-thumb.jpg';


function App() {
  const [filterTag, changeFilterTag] = useState('');
  const [projects] = useState([
    {
      id: 0,
      title: 'React Easy Code',
      sourceCodeUrl: 'https://github.com/KristofferTroncoso/react-easy-code',
      liveDemoUrl: 'https://github.com/KristofferTroncoso/react-easy-code',
      screenshot: reacteasycode,
      description: 'A simple code highlighting React component library written in TypeScript deployed to NPM.',
      tags: [
        'react',
        'typescript',
        'npm',
        'webpack',
        'babel',
        'styledcomponents',
        'storybook'
      ]
    },
    {
      id: 1,
      title: 'Rheastagram (Instagram clone)',
      sourceCodeUrl: 'https://github.com/KristofferTroncoso/Rheastagram',
      liveDemoUrl: 'https://master.d3bmzm8bmp8ok9.amplifyapp.com/',
      screenshot: rheastagram,
      description: 'A full stack serverless Instagram clone using React and AWS',
      tags: [
        'react',
        'aws',
        'graphql',
        's3',
        'cognito',
        'dynamodb',
        'reactrouter',
        'emotion',
        'flexbox',
        'grid',
        'rhea'
      ]
    },
    {
      id: 2,
      title: 'Marvel API Character Search',
      sourceCodeUrl: 'https://codepen.io/HarryPirate/pen/rvXxdP',
      liveDemoUrl: 'https://codepen.io/HarryPirate/full/rvXxdP',
      screenshot: marvel,
      description: 'This app uses the official Marvel API. Axios is used to make a GET request and retrieve a character\'s details.',
      tags: [
        'react',
        'flexbox',
        'api',
        'rhea'
      ]
    },
    {
      id: 3,
      title: 'iMessage Group Chat (React)',
      sourceCodeUrl: 'https://codesandbox.io/s/j7wk47lpzy',
      liveDemoUrl: 'https://j7wk47lpzy.codesandbox.io/',
      screenshot: imessage,
      description: 'An iMessage group chat simulator. Each phone/user is a component that shares the same state of messages. The demo can scale up to dozens of phones/users.',
      tags: [
        'react',
        'css',
        'flexbox'
      ]
    },
    {
      id: 4,
      title: 'React CSS Image Editor',
      sourceCodeUrl: 'https://codepen.io/HarryPirate/pen/VddxpX',
      liveDemoUrl: 'https://codepen.io/HarryPirate/pen/VddxpX',
      screenshot: reactimageeditor,
      description: 'Using React and the power of JavaScript, we can manipulate CSS dynamically. We can also save custom filters just by saving the current state of the input sliders.',
      tags: [
        'react',
        'css',
        'rhea'
      ]
    },
    {
      id: 5,
      title: 'LoL API Search Demo',
      sourceCodeUrl: 'https://github.com/KristofferTroncoso/lol-search-api-demo',
      liveDemoUrl: 'https://github.com/KristofferTroncoso/lol-search-api-demo',
      screenshot: lolapi,
      description: 'Using the official League Of Legends / Riot Games API, we can get data of any of the millions of gamers playing the game and display them on screen.',
      tags: [
        'nodejs',
        'express',
        'ejs',
        'api',
        'responsive',
        'flexbox'
      ]
    },
    {
      id: 6,
      title: 'KHT UI',
      sourceCodeUrl: 'https://github.com/KristofferTroncoso/kht-ui',
      liveDemoUrl: 'https://github.com/KristofferTroncoso/kht-ui',
      screenshot: khtui,
      description: 'Personal React UI component library. Storybook for component development in isolation and user-facing documentation.',
      tags: [
        'react',
        'typescript',
        'styledcomponents',
        'storybook',
        'webpack',
        'npm'
      ]
    },
    {
      id: 7,
      title: 'Kristoffer Troncoso Portfolio',
      sourceCodeUrl: 'https://github.com/KristofferTroncoso/KristofferTroncoso.github.io/tree/dev-branch',
      liveDemoUrl: 'https://www.kristoffertroncoso.com/',
      screenshot: ktportfolio,
      description: 'My portfolio website was created with a focus on speed and practicality. A React SPA deployed to GitHub Pages.',
      tags: [
        'react',
        'flexbox',
        'json',
        'responsive',
        'PWA'
      ]
    },
    {
      id: 8,
      title: 'Random User Redux',
      sourceCodeUrl: 'https://codesandbox.io/s/lmjp23qxq',
      liveDemoUrl: 'https://lmjp23qxq.codesandbox.io/',
      screenshot: randomuserredux,
      description: 'A simple user profile search using React with Redux. Random users are fetched using the randomuser.me 3rd-party api',
      tags: [
        'react',
        'redux',
        'flexbox',
        'api'
      ]
    }
  ]);

  const handleChange = e => {
    changeFilterTag(e.target.value);
  }

  const clearFilterTag = e => {
    changeFilterTag('');
  }

  return (
    <div className="App">
      <Navbar />
      <About />
      <h2 className="wrapper">Projects:</h2>
      <SearchForm handleChange={handleChange} projects={projects} filterTag={filterTag} clearFilterTag={clearFilterTag} />
      <ProjectsList projects={projects} filterTag={filterTag} changeFilterTag={(tagToFilter) => changeFilterTag(tagToFilter)} />
      <Contact />
    </div>
  );
}

export default App;