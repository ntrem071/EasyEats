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
            <Link to="/" className="nav-logo">Easy Eats</Link>        
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}  onClick={() => {setMenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>        
    </div>
    <ul className={menuOpen ? "open" : ""} >    
        <li><NavLink to="/plan">Plans</NavLink></li>
        <li><NavLink to="/recipe">Recipes</NavLink></li>
        <li><NavLink to="/faq">FAQs</NavLink></li>
    </ul>
  </nav>


  );
}
