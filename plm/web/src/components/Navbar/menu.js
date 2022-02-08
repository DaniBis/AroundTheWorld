import React, {useState} from 'react';
import './../../style/menu.css';
import Close from './../../images/cancel.png';
import Home from './../home';
import CV from './../CV';
import activStyle from './../activStyle';
import travel from './../travel';
import ContactForm from './../../components/contactForm/ContactForm';
import footerItems from './../../templates/footer';
import menuBar from './../../images/menu-bar.png';
import {Sidebar, SidebarLi, MainMenu} from './../../style/mobileMenuStyle';
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";


const Navbar = () =>{

  const [toggle, setToggle] = useState(false);

  const navigation = [
      { link: '/', text: 'Home' },
      { link: 'CV', text: 'Curriculum Vitae' },
      { link: 'activStyle', text: 'Lifestyle' },
      { link: 'travel', text: 'Around the globe' },
    ];

    return(
        <Router>
        <header className="App-header">
        <nav>

          {/* MOBILE MENU */}

          <Sidebar toggle={toggle}>  
          <div className="mobileIcon" onClick={() => setToggle(!toggle)}>
            <img src={Close} alt="close" />
          </div>
          {toggle && ( <ul className="menu-mobile">
            {navigation.map(nav => (
                <li key={nav.text}>
                   <a href={nav.link} >
                    {nav.text}
                  </a>
                </li>
            ))}
            </ul>)}
          </Sidebar>

          {/* DESKTOP MENU */}

          <div className="logo">
          <Link to="/"> Dan's Website </Link>
          </div>
          <div className="mobileIcon" onClick={() => setToggle(!toggle)}>
             <img src={menuBar} alt="menu-bar"/>
          </div>
          
          <ul className="menu">
            {navigation.map(nav => (
                <li className='item' key={nav.text}>
                   <a href={nav.link} >
                    {nav.text}
                  </a>
                </li>
            ))}
            </ul>
          </nav>

          <Switch>
            <Route path="/activStyle" component={activStyle} />
            <Route path="/CV" component={CV} />
            <Route path="/travel" component={travel} />
            <Route path="/contact" component={ContactForm} />
            <Route path="/" component={Home} />
          </Switch>
        </header>
        <body className="body">
          <footerItems />
        </body>
      </Router>
    )
}

export default Navbar;