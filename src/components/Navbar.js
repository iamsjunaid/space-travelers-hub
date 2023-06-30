import React, { useState, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import logo from '../images/planet.png';
import '../styles/Navbar.css';
import RocketsList from './navigation/RocketsList';
import MissionsList from './navigation/MissionsList';
import DragonsList from './navigation/DragonsList';
import MyProfile from './navigation/MyProfile';

function Navbar() {
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink('/rockets'); // Set '/rockets' as the default active link
  }, []);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={() => setActiveLink('/rockets')}
              className={activeLink === '/rockets' ? 'active' : ''}
            >
              <img src={logo} alt="logo" />
            </NavLink>
          </li>
          <li>
            <h1>Space Travelers&apos; Hub</h1>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to="/rockets"
              onClick={() => setActiveLink('/rockets')}
              className={activeLink === '/rockets' ? 'active' : ''}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              onClick={() => setActiveLink('/missions')}
              className={activeLink === '/missions' ? 'active' : ''}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dragons"
              onClick={() => setActiveLink('/dragons')}
              className={activeLink === '/dragons' ? 'active' : ''}
            >
              Dragons
            </NavLink>
          </li>
          <li className="vertical-bar" />
          <li>
            <NavLink
              to="/profile"
              onClick={() => setActiveLink('/quote')}
              className={activeLink === '/quote' ? 'active' : ''}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" />
        <Route path="/rockets" element={<RocketsList />} />
        <Route path="/missions" element={<MissionsList />} />
        <Route path="/dragons" element={<DragonsList />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default Navbar;
