import React from 'react';
import './Navbar.css';
import codesandboxlogo from '../../assets/icons/codesandboxlogo.png';

function Navbar() {
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
            <img className="codesandbox" src={codesandboxlogo} alt="CodeSandbox" title="CodeSandbox" />
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;