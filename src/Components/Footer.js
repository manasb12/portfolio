import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faReact} from "@fortawesome/free-brands-svg-icons";
import resume from "./Manas_Bansal_Resume.pdf";
import ContactLinks from './ContactLinks.js';


function Footer() {
    return (
        <div id="contact" className="footer-container">
            <h1 id="container-title">Contact Me</h1>
            <ContactLinks/>
            <h1 className="resume-title">My Resume: <a href={resume} target="_blank"><FontAwesomeIcon title="Download Resume" className="icon resume" icon={faFileAlt} size="1x"/></a></h1>
            <h1 className="ea-footer">manasb@my.yorku.ca</h1>
            <h1 className="ea-footer">Toronto, Ontario / Canada</h1>
            <h4>Made with ReactJS<FontAwesomeIcon className="react-icon-footer" icon={faReact}/></h4>
        </div>


    )
}

export default Footer;