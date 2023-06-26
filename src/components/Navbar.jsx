import React from 'react';
import logo from '../images/planet.png';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <img src={logo} alt="logo" />
      </li>
      <li>title</li>
    </ul>
    <ul>
      <li>link1</li>
      <li>link2</li>
      <li>link3</li>
    </ul>
  </nav>
);

export default Navbar;
