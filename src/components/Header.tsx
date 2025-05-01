
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/landing">
            <div className="logo-circle"></div>
            <span>AETHERIA</span>
          </Link>
        </div>

        <div className={`mobile-menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li className={isActive('/landing') ? 'active' : ''}>
              <Link to="/landing" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className={isActive('/about') ? 'active' : ''}>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className={isActive('/chat') ? 'active' : ''}>
              <Link to="/chat" onClick={() => setMenuOpen(false)}>Chat</Link>
            </li>
            <li className={isActive('/settings') ? 'active' : ''}>
              <Link to="/settings" onClick={() => setMenuOpen(false)}>Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
