import React from 'react';
import {ReactComponent as Logo} from './Logo.svg';
import { BrowserRouter as Router,
    Route, Routes, Link } from "react-router-dom";

export function Nav() {
    return(
        <header>
            <nav className="navbar">
                <Logo style={{marginTop: '2rem', marginBottom: '2rem'}}alt="Little Lemon" />
                <ul className="navbar">
                <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/menu">MENU</Link></li>
                    <li><Link to="/booking">RESERVATIONS</Link></li>
                    <li><Link to="/orderonline">ORDER ONLINE</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                </ul>
            </nav>
        </header>
    );
    
}


