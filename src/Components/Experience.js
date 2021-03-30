import React from 'react';
import './JobComponent.css';
import './GlobalStyles.css';

function Experience() {
    return ( 
        <div id="experience" className="main">
            <h1 id="headerTitle">Experience</h1>
             <hr className="heading-hr"></hr>
   
              <div className="experienceContainer">
                    <SubComponent
                        src="https://pbs.twimg.com/profile_images/1258154808134922242/sUXk1gdX_400x400.jpg"
                        jobTitle = "Senior Technical Student"
                        company = "Toronto Hydro"
                    />
                    <ul>
                        <li>Upcoming Intern at Toronto Hydro in Project Management department starting Summer 2021</li>
                    </ul>
                </div>
           
            <hr></hr>
            <div className="experienceContainer">
                <SubComponent
                    src="https://media-exp1.licdn.com/dms/image/C4E0BAQHt4ygkEQqRng/company-logo_200_200/0/1593551853945?e=1619049600&v=beta&t=G6qibBc88exIO104DLHECUUw8-6c7PvbhwjbQz5GhfY"
                    jobTitle="Smart Systems Intern"
                    company="Cortellucci Vaughan Hospital"/>
                <ul>
                    <li>Currently working in the ICAT department at Canada's first Smart Hospital</li>
                    <li>Validated smart devices ensuring they are on, connected and displaying correct information</li>
                    <li>Performed extensive MRT tests and organized database spreadhseets</li>
                    <li>Continually collborated with the Application Integration team to validate views expected by clinicians.</li>
                </ul>
            </div>
            <hr></hr>
            <div className="experienceContainer">
                <SubComponent
                    src="https://media.glassdoor.com/sqll/141035/york-university-squarelogo.png"
                    jobTitle="Peer Tutor"
                    company="Lassonde School of Engineering"/>
                <ul>
                    <li>Selected by course instructor to mentor other students due to
                    {<br></br>}excellent performance in 'Net Centric Introduction to Computing'
                    </li>
                    <li>Helped students with flowcharts and coding in HTML, CSS and JavaScript</li>
                </ul>
            </div>
        </div>
    )
}

function SubComponent(props) {
    return (
        <div>
            <img src={props.src}/>
            <h1>{props.jobTitle}</h1>
            <h3>{props.company}</h3>
        </div>
    )
}

export default Experience;