import React from 'react';
import './../style/footer.css';
import github from './../images/github.png';
import email from './../images/email.png';
import linkedin from './../images/linkedin.png';
import ContactForm from '../handlers/ContactForm';

class Footer extends React.Component {
    render(){
        return (
            <div className="footerItems">
                 <div>
                 <h2 onClick={ContactForm}>Let's talk!</h2>
                     <p>I'm always looking for oportunities!</p>
                 </div>
                 <div className="wrapper">
                    <a href="https://github.com/DaniBis"><img src={github} alt="github" /></a>
                    <a href="mailto:bisceanudaniel@gmail.com"><img src={email} alt="email" /></a>
                    <a href="https://www.linkedin.com/in/daniel-bisceanu-37977711a/"><img src={linkedin} alt="linkedin" /></a>
                 </div>
                 &copy; Daniel Bisceanu
            </div>
        );
    }
}

export default Footer;