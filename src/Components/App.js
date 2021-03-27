import React from 'react';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Footer from './Footer.js';

function App() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Experience/>
            <Projects/>
            <Footer/>
        </div>
    )
}


export default App;