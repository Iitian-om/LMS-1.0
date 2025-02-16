import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <h1>EduHub<sub className="logo-subtext" style={{ fontWeight: 100, fontSize: "45%" }}>by IIT Patna</sub></h1>
      </div>
      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/meet-our-team">Meet Our Team</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;