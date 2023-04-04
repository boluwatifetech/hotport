import React from 'react';
 const fetch=[{
  images:'images/2.jpeg',
  title:'movie-camp',
  link:'https://campmovie.netlify.app',
  },
  {
  images:'images/img5.jpg',
   title:'e-commerce',
   link:'https://seyi-ecommerce.netlify.app',
  },
  {
  images:'images/back1.jpeg',
   title:'food app',
   link:'https://visionary-figolla-92cbed.netlify.app',
  },
]
function Port() {
  return (
    <div>
     <div className='aboutme' id='port'>
    <h2>my latest work</h2>
    </div>
    <div className='row'>
    <div className='grid-port'>
     {
      fetch.map((fetch)=>{
        return(
          <div className='flex-port' key={fetch.id}>
          <div className='img-contain'>
            <img src={fetch.images}/>
            </div>
           <div className='header-3'>
            <h3>{fetch.title}</h3>
            </div>
            <div className='btn'>
            <a href={fetch.link}><button>visit</button></a>
            </div>
          </div>
        )
      })
     }
    </div>
  </div>
  </div>
  
  );
}

export default Port;
