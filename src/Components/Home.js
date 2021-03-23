import React from 'react';
import './Home.css';
import Contacts from './Contacts.js';

function Home() {
    return (
        <div id="home" className="homeContainer">
            <div>
                <div className="myName">
                    <h1>
                        <span>M</span>ANAS <span>B</span>ANSAL
                    </h1>
                    <p>Computer Science Student | Toronto, ON</p>
                </div>
                <div className="profile-img"></div>
                <Contacts />
            </div>
        </div>
    )
}

export default Home;