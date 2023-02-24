import React, { useEffect, useRef, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    
    const [navState, setnavState] = useState(false);

    const handleMenu = () =>{
        setnavState(!navState);

    }

    const NotActiveNav = 'nav-links ';
    const ActiveNav = 'nav-links activeMenu';
    

    return (
    <nav>

        <Link to="/home" className='nav-logo'> Bean Scene </Link>
        
        <section className={navState ? ActiveNav : NotActiveNav}>

            <NavLink to="/home" className ={({isActive}) =>`nav-link ${isActive ? 'active' : ''}`} onClick={handleMenu}>Home</NavLink>
            <NavLink to="/shop" className='nav-link' onClick={handleMenu}>Menu </NavLink>
            <NavLink to="/about" className='nav-link' onClick={handleMenu}>About Us</NavLink>
            <NavLink to="/contact-us" className='nav-link' onClick={handleMenu}>Contact Us</NavLink>
            <NavLink to="/login" className='nav-btn yellow-button ' onClick={handleMenu}>Login</NavLink>
            
        </section>

        <button className={navState ? 'hamBtn off' : 'hamBtn'} onClick={handleMenu}>
            <div className='first-span'/>
            <div className='second-span'/>
            <div className='third-span'/>
        </button>


    </nav>
  )
}
