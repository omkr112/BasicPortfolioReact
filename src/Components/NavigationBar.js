import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <b><Link to="/" className="logo">Portfolio</Link></b>
        <ul className="nav-links">
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
