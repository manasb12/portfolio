import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import resume from "./Manas_Bansal_Resume.pdf";


function Footer() {
    return (
        <div id="contact" className="footer-container">
            <h1 id="container-title">Contact Me</h1>
            <ul>
                <li>
                    <a href="mailto:manasb@my.yorku.ca"><FontAwesomeIcon className="icon" icon={faEnvelope} size="2x"/></a>
                </li>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/manas-bansal-59016314b/" 
                        target="_blank" 
                        rel="noreferrer">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x"/
                    ></a>
                </li>
                <li>
                    <a 
                        href="https://github.com/manasb12" 
                        target="_blank" 
                        rel="noreferrer"
                        ><FontAwesomeIcon className="icon" icon={faGithub} size="2x"/></a>
                </li>
            </ul>
            <h1>My Resume: <a href={resume} target="_blank"><FontAwesomeIcon title="Download Resume" className="icon" icon={faFileAlt} size="1x"/></a></h1>
            <h1 className="ea-footer">manasb@my.yorku.ca</h1>
            <h1 className="ea-footer">Toronto, Ontario / Canada</h1>
        </div>


    )
}

export default Footer;