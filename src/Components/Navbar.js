import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul>
                    <li>
                        <a href="#experience" className="nav-links">Experience</a>
                    </li>
                    <li>
                        <a href="#projects" className="nav-links">Projects</a>
                    </li>
                    <li>
                        <a href="#about" className="nav-links">About Me</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-links">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;