import React from 'react';
import './Navbar.css';

const Navbar = ({ visible }) => {
  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <ul>
        <li className="nav-link"><a href="#landing">Home</a></li>
        <li className="nav-link"><a href="#aboutme">About Me</a></li>
        <li className="nav-link"><a href="#qualifications">My Qualifications</a></li>
        <li className="nav-link"><a href="#journey">My Journey</a></li>
        <li className="nav-link"><a href="#projects">Projects</a></li>
        <li className="nav-link"><a href="#hobbies">Hobbies</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
