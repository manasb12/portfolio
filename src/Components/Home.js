import React from 'react';
import './Home.css';

function Home() {
    return (
        <div id="home" className="homeContainer">
            <div>
                <div className="myName">
                    <h1>
                        <span>M</span>ANAS <span>B</span>ANSAL
                    </h1>
                </div>
                <div className="profile-img"></div>
                <div className="about-description">
                    Hello! I am a third-year BSc Honours Computer Science Student 
                    at York University. I love to code and learn new skills. I am interested 
                    in <span>Full Stack Development</span> and <span>Mobile Development</span>
                </div>

            </div>
        </div>
    )
}

export default Home;