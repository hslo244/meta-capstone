// Header.js
import React from 'react';
import './Header.css';
import { BrowserRouter as Router,
    Route, Routes, Link } from "react-router-dom";
import ReactLogo from './Logo.svg';

export function Header() {
    const toggleMobileMenu = () => {
        document.querySelector('.menu-icon').classList.toggle('open');
    };
    
    return (
        <header className="mobile-header">
            <img src={ReactLogo} alt="React Logo" className="logo"/>
            <div className="menu-icon" onClick={toggleMobileMenu}>
                &#9776;
                <div className='mobile-menu'>
                    <ul className="mobile-menu">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/menu">MENU</Link></li>
                        <li><Link to="/booking">RESERVATIONS</Link></li>
                        <li><Link to="/orderonline">ORDER ONLINE</Link></li>
                        <li><Link to="/login">LOGIN</Link></li>
                    </ul>
                </div>
                
            </div>
        </header>
    );
}