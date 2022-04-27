import React from 'react';
import ContactForm from './../components/contactForm/ContactForm';
import './../style/CV.css';
import Dan from './../images/Dan.svg';
import Footer from './../templates/footer';

export default function CV() {
    return (
        <div>
             <div className="introduction">
                <h1> Front-End Developer </h1>
                <h4> I'm a front-end developer who enjoys playing around with UI/UX </h4>
                <img src={Dan} alt="Dan" />
            </div>
            <div className="shortDescription row">
                <div className="shortDescription col">
                <h1>Hello, I'm Daniel, <a href="#">Let's have a chat!</a></h1>
                <p> I've been a programmer before but I lost my interest for a while until new technologies to play with came on the market now I want to get back on my path and develop as much as possible in this direction as I have a big dream to fill when it comes to web development. You can have a look at my <a href="#qualifications">skills</a> and <a href="https://github.com/DaniBis">projects</a> and let me know if you have any quesions.</p>
                </div>
            </div>
            <div className="skillsList">
                <img src='./ux-design.png' alt="UX" />
                <h3>Front-End Developer</h3>
                <div id= "qualifications">
                    <div className = "iLearnt">
                        <h4>Things I've learned:</h4>
                        <p>Javascript</p>
                        <p>Html</p>
                        <p>CSS</p>
                        <p>React.js</p>
                        <p>MongoDB</p>
                        <p>SQL</p>
                        <p>CSS Frameworks</p>
                        <p>Javascript</p>
                        <p>More...</p>
                    </div>
                    <div className = "iUse">
                        <h4>Tools I'm using:</h4>
                        <p>Visual Studio Code</p>
                        <p>Atom</p>
                        <p>Git</p>
                        <p>React Router</p>
                        <p>Npm</p>
                        <p>Yarn</p>
                        <p>Flexbox</p>
                        <p>Bootstrap</p>
                        <p>More...</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}