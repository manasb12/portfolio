import React from 'react';
import './Home.css';
import './Modal';
import ModalContainer from './Modal';

function Home() {
    return (
        <div id="home" className="homeContainer">
            <div>
                <div className="myName">
                    <h1>Manas Bansal</h1>
                </div>
                <div className="profile-img"></div>
                <div className="about-description">
                    Hello! I am a third-year BSc Honours Computer Science Student 
                    at York University. I love to code and learn new skills. I am interested 
                    in <span>Full Stack Development</span> and <span>Mobile Development</span>
                </div>
                <ModalContainer />
            </div>
        </div>
    )
}

export default Home;