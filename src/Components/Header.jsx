import React from 'react';
import Navbar from './Navbar';
 

function Header() {
  return <div id = 'main'>
      <Navbar/>
      <div className='name'>
          {/* <h1><span>Welcome to the </span> New Genration of Banking </h1>
           <p className='details'>Not your average banking experience~
           </p> */}
           {/* <a href="#" className='cv-btn'>Download</a> */}
      </div>
      
  </div>;
}

export default Header;
