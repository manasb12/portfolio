import React from 'react';
import ProjectCard from './ProjectCard.js';
import './ProjectCard.css';

import texteditorImage from "../img/texteditor.PNG";
import spaceAttackImage from '../img/spaceAttackImage.PNG';
import groceryGoImage from '../img/GroceryGo.PNG';
import mortgageCalculatorImage from '../img/MortCalc.jpg';
import ProjectsArray from './ProjectsArray';


function Projects() {
    return (
        <div id="projects" className="container">
            <h1 className="section-heading">Projects</h1>
            <hr className="heading-hr"></hr>
            <div className="subContainer">
                <ProjectCard
                    src={texteditorImage}
                    name="BRIM Text Editor"
                    description="A Text Editor made in Python using the TKinter module. The main motivation behind this editor is simplicity while providing various themes, color choices and other useful features!"
                    tech="Python, TKinter"
                />
                <ProjectCard
                    src={spaceAttackImage}
                    name="Space Attack"
                    description="A 2D top down shooter made in Java using Swing library. Added Menu System, powerups, various levels of difficulties."
                    tech="Java, Swing, Paint.NET"
                />
            </div>
            <div className="subContainer">
                <ProjectCard
                    src={groceryGoImage}
                    name="Grocery GO"
                    description="An online grocery shopping website made from scratch. Displays food items in categories and allows to search for a particular item. Designed a clean and user friendly interface"
                    tech="HTML, CSS, JavaScript, CSV"
                />
                <ProjectCard
                    src={mortgageCalculatorImage}
                    name="Mortgage Calculator"
                    description="A Mortgage Calculator app which calculates 
                    monthly mortgage payments using principal, amoritization and interest amounts.
                    Text to Speech functionality reads out the leftover payments after each year"
                    tech="Java, Android Studio"
                />
            </div>
        </div>
    )
}

export default Projects;