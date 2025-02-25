import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="home-header">
      <Link to="/">
        <img
          src="/images/LOGO GD.png" 
          alt="Logo"
          className="logo"
        />
      </Link>
      <nav className="header-nav">
        <Link to="/" className="nav-button">HOME</Link>
        <Link to="/projects" className="nav-button">PROJECTEN</Link>
        <Link to="/about" className="nav-button">WAT WE DOEN</Link>
        <Link to="/contact" className="nav-button">CONTACT</Link>
      </nav>
    </header>
  );
};

export default Header;