import React from 'react';
import {FaCode,FaPhone,FaEnvelope} from 'react-icons/fa'
function About() {
  return (
    <div>
    <div className='aboutme' id='about'>
    <h2>about me</h2>
    </div>
    <div className='row'>
    <div className='flex-about'>
<div className='header-img'>
  <img src='images/portpics_2.jpg'/>
  <div className='design-img'></div>
</div>
<div className='content-about'>
  <div className='flex-icon'>
<div className='each-icon con'>
<FaCode  className='each-fa'/>
<h2>a programmer</h2>
</div>
<div className='each-icon con'>
<FaCode className='each-fa'/>
<h2>a developer</h2>
</div>
<div className='each-icon'>
<FaCode  className='each-fa'/>
<h2>a web designer</h2>
</div>
  </div>
  <div className='main-content'>
    <p>I'm well sound and a creative web deigner and a developer. I spent most of my time in nigeria and that is where 
    i base. i started coding right from when i was 18 years old and that really helps my growth in coding</p>
    <div className='slight-icon'>
      <h3>hire me:</h3>
      <div className='slight-a'>
      <a href='tel:07038513843'><FaPhone className='fa-slight sec'/></a>
      <a href='mailto:boluabiola2020@gmail.com'><FaEnvelope className='fa-slight'/></a>
      </div>
      
    </div>
  </div>
</div>
</div>
    </div>
    </div>
  );
}

export default About;
