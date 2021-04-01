import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul>
                    <li>
                        <a href="#" className="nav-links">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="nav-links">About Me</a>
                    </li>               
                    <li>
                        <a href="#experience" className="nav-links">Experience</a>
                    </li>
                    <li>
                        <a href="#projects" className="nav-links">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar; 