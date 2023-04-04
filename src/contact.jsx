import React from 'react';
import {FaHome,FaEnvelope,FaPhone} from 'react-icons/fa'
function Contact() {
  return (
    <div>
     <div className='aboutme' id='contact'>
    <h2>contact me</h2>
  <div className='row'>
   
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31646.
763592470412!2d5.7324519373774745!3d7.482312513350978!2m3!1f0!2f0!3f0!3m2!
1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c1212d629e42552!2sNifes%20Aaua!5e0!
3m2!1sen!2sng!4v1677171282981!5m2!1sen!2sng" 
width="1333" height="450" className="border-0"
 allowFullScreen="" loading="lazy" 
 referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>
     <div className='row'>

  
    
<div className='contact-grid'>
  <div className='contact-phone'>
  <h2>let's talk:</h2>
  <div className='each-phone'>
<FaHome className='fa-contact'/>
<h3 style={{marginBottom:'6px'}}>address</h3>
<address>akungba akoko,ondo state.nigeria</address>
</div>
 <div className='each-phone'>
<FaPhone className='fa-contact'/>
<h3 style={{marginBottom:'6px'}}>phone number</h3>
<a href='tel:07038513843' style={{marginBottom:'15px'}}><p>07038513843</p></a>
</div>
 <div className='each-phone'>
<FaEnvelope className='fa-contact'/>
<h3 style={{marginBottom:'6px'}}>email me</h3>
<a href='mailto:boluabiola2020'><p>boluabiola2020</p></a>
</div>
  </div>
  <div className='customer-contact'>
    <h2>your details:</h2>
    <form action='https://formspree.io/f/xayzdgwn' method='POST'>
      <div className='each-customer'>
        <label htmlFor='name'>your fullname</label><br></br>
        <input type='text' name='fullname' required/>
        </div>
         <div className='each-customer'>
        <label htmlFor='number'>your contact</label><br></br>
        <input type='number' name='contact' required/>
        </div>
         <div className='each-customer'>
        <label htmlFor='email'>your email</label><br></br>
        <input type='email' name='email' required/>
        </div>
         <div className='each-customer'>
        <label htmlFor='name'>your subject</label><br></br>
        <input type='text' name='subject' required/>
        </div>
        <button type='submit'>submit</button>
      </form>
    
  </div>
  <form action="https://formspree.io/f/xayzdgwn" method='POST'>

  <div className='text-area'>
  <h2> work to be done:</h2>
    <textarea name='textarea'></textarea><br></br>
    <button type='submit'>send</button>
  </div>
  </form>
</div>
 </div>
    </div>
   
     
    </div>
  );
}

export default Contact;
