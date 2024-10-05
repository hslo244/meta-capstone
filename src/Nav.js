import React from 'react';
import {ReactComponent as Logo} from './Logo.svg'
import { Link } from "react-router-dom";

export function Nav() {
    return(
        <header>
            <nav class='navbar'>
                <Logo style={{marginTop: '2rem', marginBottom: '2rem'}}alt="Little Lemon" />
                <ul class="navbar">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/menu">MENU</a></li>
                    <li><a href="/reservations">RESERVATIONS</a></li>
                    <li><a href="/orderonline">ORDER ONLINE</a></li>
                    <li><a href="/login">LOGIN</a></li>
                </ul>
            </nav>
        </header>
    );
    
}


