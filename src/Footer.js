import React from 'react';
import './Footer.css';
import Restaurant from './restaurant.jpg'

export function Footer() {
    return (
        <footer>
            <div>
                <img src={Restaurant} alt='Place' class="placeImg"/>
            </div>
            <div>
                <h2>Navigation</h2>
                <p>Home</p>
            </div>
            <div>
                <h2>Location</h2>
                <p>Chicago</p>
            </div>
            <div>
                <h2>Location</h2>
                <p>Chicago</p>
            </div>
            <div>
                <h2>Location</h2>
                <p>Chicago</p>
            </div>
        </footer>
    );
}
