import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}><h1 className="nav-logo">HanZex</h1></Link>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </div>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
        <Link to="/about" className="nav-item" onClick={closeMenu}>About</Link>
        <Link to="/projects" className="nav-item" onClick={closeMenu}>Portfolio</Link>
        <Link to="/team" className="nav-item" onClick={closeMenu}>Team</Link>
        <Link to="/contact" className="nav-item" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;