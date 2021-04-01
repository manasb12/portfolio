import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt, faFilePdf} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './ContactLinksStyle.css';
import resume from './Manas_Bansal_Resume.pdf';

const ContactLinks = () => {
    return (
        <div className="contact-links-container">
        <ul>
            <li>
                <a href={resume} target="_blank"><FontAwesomeIcon className="icon" icon={faFilePdf} size="2x"/></a>
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
        </div>
    )
}

export default ContactLinks;