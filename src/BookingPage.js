import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import './BookingPage.css';

export function BookingPage({ availableTimes, updateTimes, onSubmit }) {
    const [selectedDate, setSelectedDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        onSubmit(payload);
    };


    return (
        <>
            <h1 className="booking">Booking Page</h1>
            <form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <label htmlFor="res-date">Date</label>
                    <input type='date' id="res-date" name='date' required />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <label htmlFor="res-time">Time</label>
                    <input type='time' id="res-time" name='time' required />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <label htmlFor="res-guests">Guests</label>
                    <input type='number' id="res-guests" name='guests' min='1' max='4' required />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <label htmlFor="res-occasion">Occasion</label>
                    <Form.Select id="res-occasion" name="occasion" aria-label="Default select example">
                        <option value="1">Birthday</option>
                        <option value="2">Anniversary</option>
                    </Form.Select>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </form>
        </>
    );
}