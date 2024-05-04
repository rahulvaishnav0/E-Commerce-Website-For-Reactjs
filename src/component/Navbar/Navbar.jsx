import React, { useState } from 'react';
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <header className='bg-red-950 w-100% h-12'>

        <div className="logo">
            <h1 className='text-left text-xl m-0  p-2 uppercase text-white'>Coral</h1>
        </div>
        <div className="hamburger-menu " >
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}> 
            <ul className='text-center text-white uppercase list-style'>
                <li to="/Home">Home</li>
                <li to="/About">About</li>
                <li to="/Services">Services</li>
                <li to="/Contact">Contact</li>
            </ul>
            
        <div id="button">
      
            <button className='px-3 py-1.5 text-white m-1 bg-teal-900 hover:rounded-2xl ' id="btn">Account </button>
            <button className='px-3 py-1.5 text-white m-1 bg-teal-900 hover:rounded-2xl' id="btn">Shopping </button>
            
        </div>
        </div>
          
      </header>
    </>
  )
}

export default Navbar;
