import React, {useState} from 'react';
import logo from  '../images/logo.png';

function Navbar() {
   const [nav,setnav] = useState(false);

   const changeBackground = () => {
       if(windows.scrollY >= 50) {
           setnav(true);
       }else {
           setnav(false);   
       }
   }
   window.addEventListener('scroll', changeBackground);

  return (
      <nav className={}>
        <a href="#" className="logo">
            <img src={} alt="" />

        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        
        <label className='menu-icon' for='menu-btn'>
            <span classname='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Features</a></li>
        </ul>
      </nav>
  ) 
  
}

export default Navbar;
