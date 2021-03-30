import React from 'react';
import './Home.css';
import './Modal';
import ModalContainer from './Modal';
import ContactLinks from './ContactLinks';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import resume from './Manas_Bansal_Resume.pdf';

function Home() {
    return (
        <div id="home" className="homeContainer">
            <div className="homeContainer-content">
                <div className="myName">
                    <hr></hr>
                    <h1>Manas Bansal</h1>
                </div>
                <div className="about-description">
                    <h1>A third-year BSc Honours Computer Science Student
                    at York University. I love to code and learn new skills.
                    I constantly aspire to become a better developer by working
                    on various projects. I am interested
                    in <span>Full Stack Development</span> and <span>Mobile Development</span></h1>
                    <hr></hr>
                    <div className="contacts-home">
                        <ul>
                            <li>
                            <a href={resume} target="_blank"><FontAwesomeIcon title="Download Resume" className="icon" icon={faFilePdf} size="1x"/></a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/manas-bansal-59016314b/"
                                    target="_blank"
                                    rel="noreferrer">
                                    <FontAwesomeIcon className="icon" icon={faLinkedin} size="1x" /
                                    ></a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/manasb12"
                                    target="_blank"
                                    rel="noreferrer"
                                ><FontAwesomeIcon className="icon" icon={faGithub} size="1x" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;