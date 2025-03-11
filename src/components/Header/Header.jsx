import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="home-header">
      <Link to="/">
        <img
          src="/images/LOGO WIT NT.png" 
          alt="Logo"
          className="logo"
        />
      </Link>
      <button 
        className="hamburger" 
        onClick={() => setIsActive(!isActive)}
        aria-label="Menu"
            >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`header-nav ${isActive ? 'active' : ''}`}>
        <Link to="/" className="nav-button"onClick={() => setIsActive(false)}>HOME</Link>
        <Link to="/projects" className="nav-button"onClick={() => setIsActive(false)}>PROJECTEN</Link>
        <Link to="/about" className="nav-button" onClick={() => setIsActive(false)}>WAT WE DOEN</Link>
        <Link to="/contact" className="nav-button"onClick={() => setIsActive(false)}>CONTACT</Link>
      </nav>
    </header>
  );
};

export default Header;