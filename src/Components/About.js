import React from 'react';
import SkillBar from './SkillBar.js';
import './About.css';

function About() {
    return (
        <div id="about" className="aboutContainer">
            <div className="home-desc">
                <h1 className="section-header">Education</h1>
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
            </div>
            <div className="home-skills">
                <h1 className="section-header">Skills</h1>
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