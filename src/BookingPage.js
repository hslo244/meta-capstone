// Imports
import './BookingPage.css';
import { fetchAPI } from "./api";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function BookingPage() {

    // const [newDate, setNewDate] = useState('');
    // const [newTime, setNewTime] = useState('');
    // const [guests, setGuests] = useState('');
    // const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData)
        console.log(payload);
    };

    return(
        <>
            <h1 class="booking">Booking Page</h1>
            <form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <label>Date</label>
                    <input type='date' name='date' required/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <label>Time</label>
                    <input type='time' name='time' required/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <label>Guests</label>
                    <input type='number' name='guests' min='1' max='4' required/>
                </Form.Group>
                <label>Occasion</label>
                <Form.Select aria-label="Default select example">
                    <option value="1">Birthday</option>
                    <option value="2">Anniversary</option>
                </Form.Select>
                <div className='submit'>
                    <Button type="submit" variant="primary" className='submit'>Submit</Button>
                </div>
            </form>
        </>
    );
}