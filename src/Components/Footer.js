import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import resume from "./Manas_Bansal_Resume.pdf";
import ContactLinks from './ContactLinks.js';


function Footer() {
    return (
        <div id="contact" className="footer-container">
            <h1 id="container-title">Contact Me</h1>
            <ContactLinks/>
            <h1>My Resume: <a href={resume} target="_blank"><FontAwesomeIcon title="Download Resume" className="icon" icon={faFileAlt} size="1x"/></a></h1>
            <h1 className="ea-footer">manasb@my.yorku.ca</h1>
            <h1 className="ea-footer">Toronto, Ontario / Canada</h1>
        </div>


    )
}

export default Footer;