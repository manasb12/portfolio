import React from 'react';
import './Home.css';
import ContactLinks from './ContactLinks';
import './ContactLinksStyle.css';

function Home() {
    return (
        <div id="home" className="homeContainer">
            <div>
                <div className="myName">
                    <h1>MANAS BANSAL</h1>
                    <p>Computer Science Student | Toronto, ON</p>
                </div>
                <div className="profile-img"></div>
                <div className="about-me-home">
                    <p>Hello! I am a third-year Computer Science Student at York University. I love to 
                        code and learn new skills. I am motivated to become a good developer and put my skills
                        into proper use. I am particularly interested in <span>Full Stack Development</span> and <span>Mobile Development</span>
                    </p>
                </div>
                <ContactLinks />
            </div>
        </div>
    )
}

export default Home; 