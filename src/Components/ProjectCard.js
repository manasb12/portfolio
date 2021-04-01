import React from 'react';
import './ProjectCard.css';


function ProjectCard(props) {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={props.src} alt={props.name}/>
            </div>
            <div className="card-description">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <h3>{props.tech}</h3>
            </div>
        </div>
    )
}

export default ProjectCard; 