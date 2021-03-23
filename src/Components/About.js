import React from 'react';
import SkillBar from './SkillBar.js';
import './About.css';
import resume from './Manas_Bansal_Resume.pdf';

function About() {
    return (
        <div id="about" className="aboutContainer">
            <div className="home-desc">
                <h1 className="section-header">A b o u t</h1>
                <p>
                    Hello! My name is Manas Bansal 
                    and I am a third-year <span>BSc Honours Computer Science</span> student at <span>York University.</span> 
                </p>
                <p>
                    Throughout my journey at York, I have taken many practical and theoretical courses including: 
                    <span> 
                        <ul>
                            <li>Advanced Object Oriented Programming</li>
                            <li>Introduction to Mobile Computing</li>
                            <li>Introduction to Database Systems</li>
                            <li>Operating Systems</li>
                            <li>Theory of Computation</li>
                        </ul>
                    </span>
                </p>
                <p>
                    I have Software Development exposure through my work experience and my various projects.
                    I am interested in <span>Full Stack Development</span> and <span>Mobile Development.</span>
                </p>
                <p>Check out <a className="resume-link" href={resume} target="_blank" rel="noreferrer">My Resume</a></p>
            </div>
            <div className="home-skills">
                <h1 className="section-header">S k i l l s</h1>
                <SkillBar skill="Java"/>
                <SkillBar skill="HTML-CSS"/>
                <SkillBar skill="JavaScript"/>
                <SkillBar skill="Python"/>
                <SkillBar skill="React"/>
                <SkillBar skill="C"/>
            </div>
        </div>
    )
}

export default About;