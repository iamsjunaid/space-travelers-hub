import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
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
      <nav>
        <ul>
          <li>
            <Link
              to="/rockets"
              onClick={() => setActiveLink('/rockets')}
              className={activeLink === '/rockets' ? 'active' : ''}
            >
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>title</li>
        </ul>
        <ul>
          <li>
            <Link
              to="/rockets"
              onClick={() => setActiveLink('/rockets')}
              className={activeLink === '/rockets' ? 'active' : ''}
            >
              Rockets
            </Link>
          </li>
          <li>
            <Link
              to="/missions"
              onClick={() => setActiveLink('/missions')}
              className={activeLink === '/missions' ? 'active' : ''}
            >
              Missions
            </Link>
          </li>
          <li>
            <Link
              to="/dragons"
              onClick={() => setActiveLink('/dragons')}
              className={activeLink === '/dragons' ? 'active' : ''}
            >
              Dragons
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              onClick={() => setActiveLink('/quote')}
              className={activeLink === '/quote' ? 'active' : ''}
            >
              My Profile
            </Link>
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
