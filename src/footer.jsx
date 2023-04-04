import React from 'react';
import {FaFacebook,FaInstagram,FaTwitter,FaPhone,FaEnvelope} from 'react-icons/fa';
function Footer() {
  return (
    <div>
      <footer>
      <div className='flex-footer'>
        <div className='copy'>
<small>copyright &copy; blaqstix portfolio 2022</small>

<div className='links'>
<a href='https://facebook.com/Bolu Abiola'><FaFacebook className='fa-footer'/></a>
   <a href='https://instagram.com/blaqstix_01'><FaInstagram className='fa-footer'/></a>
     <a href='https://twitter.com/Boluwatife Abiola'><FaTwitter className='fa-footer'/></a>
        <a href='tel:07038513843'><FaPhone className='fa-footer'/></a>
        <a href='mailto:boluabiola2020@gmail.com'><FaEnvelope className='fa-footer'/></a>
       </div>
         
        </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
