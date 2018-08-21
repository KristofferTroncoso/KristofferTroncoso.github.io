import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="headerbg">
        <header className="header wrapper">
          <h1>Kristoffer Troncoso - NYC</h1>
          <nav>
            <a href="https://github.com/KristofferTroncoso" target="_blank" rel="noopener noreferrer">
              <img className="github" src="https://s3.amazonaws.com/ktpublic-pics/GitHub-Mark-120px-plus.png" alt="Github" title="Github" />
            </a>
            <a href="https://codepen.io/HarryPirate/" target="_blank" rel="noopener noreferrer">
              <img className="codepen" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png" alt="Codepen" title="Codepen" />
            </a>
            <a href="https://codesandbox.io/u/KristofferTroncoso" target="_blank" rel="noopener noreferrer">
              <img className="codesandbox" src="./assets/codesandboxlogo.png" alt="CodeSandbox" title="CodeSandbox" />
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;