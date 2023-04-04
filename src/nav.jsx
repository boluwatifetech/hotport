import React,{useRef} from 'react';
import {FaTimes,FaBars,FaPhone,FaEnvelope,FaUser,FaCode} from 'react-icons/fa'
import {HashLink as Link} from 'react-router-hash-link'
function Nav() {
    const navRef=useRef()
    const handleNav=()=>{
navRef.current.classList.toggle('response-nav')
    }
  return(
      <div>
    <nav>
  
            <h2>blaqstix</h2>
    
        <div ref={navRef} className='nav'>
            <ul>
            <div  className='middle-nav'>
    <Link to='#about' className='smoth' smooth> <li><a href='#'   onClick={handleNav}> <FaUser className='fine'/> About </a></li></Link>
    <Link to='#skill' className='smoth' smooth> <li><a href='#'   onClick={handleNav}> <FaCode className='fine'/> skill </a></li></Link>
    <Link to='#port' className='smoth' smooth> <li><a href='#'  onClick={handleNav}> <FaEnvelope className='fine-go'/> Portfolio</a></li></Link>
   <Link to='#contact' className='smoth' smooth><li><a href='#'  onClick={handleNav}> <FaPhone className='fine'/> Contact Me</a></li></Link>  
           <FaTimes onClick={handleNav} className='nav-link close'/>
           </div>
              
          
           </ul>
          
            
</div>
 <div className='last-nav'>
<FaBars onClick={handleNav} className='nav-link open'/>
               

<Link to='#contact' smooth><button className='nav-btn'>hire me</button></Link>
</div>
      </nav>
      


    </div>
  );
}

export default Nav;
