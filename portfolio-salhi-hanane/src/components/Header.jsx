import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo-portfolio.png" alt="Logo" />
        <span className="logo-text">SALHI Hanane </span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>
      <div className="contact-button">
        <a href="#contact" className="btn-contact">CONTACT</a>
      </div>
    </header>
  );
};

export default Header;
