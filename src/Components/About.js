import React from 'react';
import SkillBar from './SkillBar.js';
import './About.css';
import html from 'programming-languages-logos/src/html/html_48x48.png';
import css from 'programming-languages-logos/src/css/css_48x48.png';
import javascript from 'programming-languages-logos/src/javascript/javascript_48x48.png';
import react from '../img/react_48x48.png';
import java from 'programming-languages-logos/src/java/java_48x48.png';
import python from 'programming-languages-logos/src/python/python_48x48.png';
import sql from '../img/SQL_48x48.png';

function About() {
    return (
        <div id="about" className="aboutContainer">
            <div className="home-desc">
                <h1 className="section-header">About Me</h1>
                <hr className="heading-hr"></hr>
                <div className="skills-container">
                    <div className="frontEnd-skills">
                        <div className="frontEnd-skills-list">
                            <h1>FRONT-END SKILLS</h1>
                            <ul className="frontEndList">
                                <li>ReactJS</li>
                                <li>HTML / CSS</li>
                                <li>JavaScript</li>
                                <li>Bootstrap</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>
                        <div className="frontEnd-skills-img"></div>
                    </div>
                    <hr></hr>
                    <div className="backEnd-skills">
                        <div className="backEnd-skills-img"></div>
                        <div className="backEnd-skills-list">
                            <h1>BACK-END SKILLS</h1>
                            <ul className="backEndList">
                                <li>Java</li>
                                <li>Python</li>
                                <li>SQL</li>
                                <li>Git</li>
                                <li>Kotlin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="home-skills">
                <h1 className="section-header">Skills</h1>
                <SkillBar skill="Java"/>
                <SkillBar skill="HTML-CSS"/>
                <SkillBar skill="JavaScript"/>
                <SkillBar skill="Python"/>
                <SkillBar skill="React"/>
                <SkillBar skill="C"/>
    </div>*/}
        </div>
    )
}

const Education = () => {
    return (
        <p>
            Throughout my studies at York University, I have taken many practical and theoretical courses including:
            <span>
                <ul>
                    <li>Advanced Object Oriented Programming</li>
                    <li>Introduction to Mobile Computing</li>
                    <li>Introduction to Database Systems</li>
                    <li>Operating Systems</li>
                    <li>Theory of Computation</li>
                    <li>Fundamentals of Data Structures</li>
                    <li>Software Tools</li>
                </ul>
            </span>
            <p>I have also worked on many school projects,
            assignments and labs
                    </p>
            <p>Currently I have an overall GPA of <span>3.0 / 4.0</span> in my degree</p>
        </p>
    )
}

export default About;