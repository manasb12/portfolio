import React from 'react';
import ProjectCard from './ProjectCard.js';
import './ProjectCard.css';

import texteditorImage from "../img/texteditor.PNG";
import spaceAttackImage from '../img/spaceAttackImage.PNG';
import groceryGoImage from '../img/GroceryGo.PNG';
import mortgageCalculatorImage from '../img/MortCalc.jpg';

function Projects() {
    return (
        <div id="projects" className="container">
            <h1 className="section-heading">P r o j e c t s</h1>
            <div className="subContainer">
                <ProjectCard 
                    src={texteditorImage}
                    name="BRIM Text Editor"
                    description="A Text Editor made in Python using the TKinter module. The main
                    motivation behind this editor is simplicity while providing various themes, 
                    color choices and other useful features!"
                    tech="Python, TKinter"
                />
                <ProjectCard 
                    src={spaceAttackImage}
                    name="The Spikey Adventure"
                    description="A 2D platformer made in Java with menu system, multiple levels each consisting
                    of new challenges to collect coins and progress through the game."
                    tech="Java, Paint.NET"
                />
            </div>
            <div className="subContainer">
                <ProjectCard 
                    src={groceryGoImage}
                    name="Grocery GO"
                    description="An online grocery shopping website made from scratch. 
                    Displays food items in categories and allows to search for a 
                    particular item. Designed a clean and user friendly interface"
                    tech="HTML . CSS . JavaScript . CSV"
                />
                <ProjectCard 
                    src={mortgageCalculatorImage}
                    name="Mortgage Calculator"
                    description="A Mortgage Calculator app that analyzes monthly mortgage payments 
                    based on principal amount, amoritization and interest. Text to Speech function reads
                    out the leftover payments after each year."
                    tech="Android Studio, Java"
                />
            </div>
        </div>
    )
}

export default Projects; 