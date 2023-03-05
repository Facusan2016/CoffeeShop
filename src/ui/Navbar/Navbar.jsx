import React, { useEffect, useRef, useState} from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    
    const [navState, setnavState] = useState(false);
    const { counterItems } = useSelector((state) => state.shopCart);

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
            <NavLink to="/shop" className='nav-link' onClick={handleMenu}>Shop</NavLink>
            <NavLink to="/about" className='nav-link' onClick={handleMenu}>About Us</NavLink>
            <NavLink to="/contact-us" className='nav-link' onClick={handleMenu}>Contact Us</NavLink>
            <NavLink to="/shop-cart" className='nav-btn' onClick={handleMenu}>
                <img src='/shopping-cart.svg'></img>
                {counterItems}
            </NavLink>
            
        </section>

        <button className={navState ? 'hamBtn off' : 'hamBtn'} onClick={handleMenu}>
            <div className='first-span'/>
            <div className='second-span'/>
            <div className='third-span'/>
        </button>


    </nav>
  )
}
