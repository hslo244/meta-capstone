import React from 'react';
import {ReactComponent as Logo} from './Logo.svg'

export function Nav() {
    return(
        <nav class='navbar'>
            <Logo style={{marginTop: '1rem'}}alt="Little Lemon" />
            <ul class="navbar">
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/menu">MENU</a></li>
                <li><a href="/reservations">RESERVATIONS</a></li>
                <li><a href="/orderonline">ORDER ONLINE</a></li>
                <li><a href="/login">LOGIN</a></li>
            </ul>
        </nav>
    );
    
}


