import React from 'react';
import About from './about'
import Port from './port'
import Skill from './skill'
import Contact from './contact'
import Footer from './footer'
import Nav from './nav';
import Header from './header';
import {BrowserRouter as Router} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

function Appport() {
  return (
    <div>
    <Router>
    <Nav/>
    <Header/>
    
    <About/>
    
    <Skill/>
    <Port/>
    <Contact/>
    <Footer/>
    </Router>
    </div>
  );
}

export default Appport;


     

