import React from 'react';
import {ReactComponent as Logo} from './Logo.svg'

export function Nav() {
    return(
        <nav>
            <Logo alt="Little Lemon" />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderonline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
    
}


