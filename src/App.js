import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="contact-button">
          <a href="mailto:ilse@grootsdesign.com" style={{ color: 'white', textDecoration: 'none' }}>
            Contact Me
          </a>
        </button>
        <img
          src="/images/main.png"
          alt="Background Image"
          className="full-screen-image"
        />
        <div className="stripe">
          <span className="stripe-text">COMING ONLINE SOON</span>
        </div>
        <img
          src="/images/logo.png"
          alt="Overlay Image"
          className="overlay-image"
        />
      </header>
    </div>
  );
}

export default App;
