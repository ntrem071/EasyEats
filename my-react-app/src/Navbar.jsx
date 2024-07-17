import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from './img/1609972.png';

import './Navbar.css';

export const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false);

  return (
  <nav> 
    <div className='top-bar'>
        <div className='nav-title'>
            <img src={logo} width="50" height="50" />      
            <Link to="/EasyEats" className="nav-logo">Easy Eats</Link>        
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}  onClick={() => {setMenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>        
    </div>
    <ul className={menuOpen ? "open" : ""} >    
        <li><NavLink to="/EasyEats/plan">Plans</NavLink></li>
        <li><NavLink to="/EasyEats/recipe">Recipes</NavLink></li>
        <li><NavLink to="/EasyEats/faq">FAQs</NavLink></li>
    </ul>z
  </nav>


  );
}
