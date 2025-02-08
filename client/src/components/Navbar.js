import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>
                    EduHub <sub className="logo-subtext" style={{ fontWeight: 100, fontSize: "45%" }}>by IIT Patna</sub>
                </h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><Link to="/meet-our-team">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;