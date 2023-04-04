import React from 'react';
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';

function Header() {

  return (
    <div>
      <header>
       <div className='marquee'>
       <marquee style={{marginTop:'100px',textAlign:'center'}}>boluwatife abiola, i'm a certified frontend developer </marquee> 
    </div>
      <div className='row'>
      <div className='flex-header'>
<div className='about-header'>
<h2>HEY!!, My Name Is</h2>
<h1>abiola boluwatife</h1>
<h3>a frontend developer</h3>
<p>I am an expert when it comes in developing application 
and <br></br> desining websites with great experience,I am available for <br></br> 
 any job offers for company or remote jobs. </p>
<div className='fa-header'>
<a href='https://facebook.com/BoluSeyi'><FaFacebook className='fa-head'/></a>
<a href='https://twitter.com/BoluwatifeAbiola'><FaTwitter className='fa-head'/></a>
<a href='https://instagram.com/blaqstix_01'><FaInstagram className='fa-head'/></a>
</div>
</div>
<div className='header-img'>
  <img src='images/portpics_2.jpg'/>
  <div className='design-img'></div>
</div>
   </div>
      </div>

      </header>
    </div>
  );
}

export default Header;
