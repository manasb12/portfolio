import React from 'react';
import './About.css';

function SkillBar(props) {
    return (
        <div className="skillbar-main">
            <p>{props.skill}</p>
            <div className="skills-container">
                <div className={`skills ${props.skill}`}></div>
            </div>
        </div>
    )
}

export default SkillBar;