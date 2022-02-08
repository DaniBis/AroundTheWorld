import React from 'react';
import './../style/footer.css';
import github from './../images/github.png';
import email from './../images/email.png';
import linkedin from './../images/linkedin.png';
import ContactForm from '../components/contactForm/ContactForm';
import Container from './../components/Container';

   function footerItems(onSubmit,triggerText){
    return  class Footer extends React.Component {
        triggerText = 'Let us Talk';
        onSubmit = (event) => {
                event.preventDefault(event);
                console.log(event.target.name.value);
                console.log(event.target.email.value);
                console.log(event.target.message.value);
             };
            render(){
                return (
                    <div className="footerItems">
                        <div>
                        <Container triggerText={triggerText} onSubmit={onSubmit} />
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
}

export default footerItems;