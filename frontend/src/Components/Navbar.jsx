import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>HMS</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#">Shop Travel</a></li>
          <li><a href="#">List Your Property</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Trips</a></li>
          <li className="nav-link-btn"><button className="btn-search">Signin/Login</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
