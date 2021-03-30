import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const ContactLinks = () => {
    return (
        <div>
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
        </div>
    )
}

export default ContactLinks;