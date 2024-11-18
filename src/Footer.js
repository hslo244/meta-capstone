import React from 'react';
import './Footer.css';
import Logo from './Logo.svg';

export function Footer() {
    return (
        <footer>
            <div>
                <img src={Logo} alt='Little Lemon' class="logoImg"/>
            </div>
            <div class='footer1'>
                <h2>Navigation</h2>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
            </div>
            <div class='footer1'>
                <h2>Location</h2>
                <p>Chicago</p>
                <p>Chicago</p>
                <p>Chicago</p>
                <p>Chicago</p>
            </div>
            <div class='footer1'>
                <h2>Location</h2>
                <p>Chicago</p>
                <p>Chicago</p>
                <p>Chicago</p>
                <p>Chicago</p>
            </div>
            <div class='footer1'>
                <h2>Location</h2>
                <p>Chicago</p>
                <p>Chicago</p>
                <p>Chicago</p>
                <p>Chicago</p>
            </div>
        </footer>
    );
}
