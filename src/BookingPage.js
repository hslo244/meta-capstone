// Imports
import {useNavigate} from "react-router-dom";
import './BookingPage.css';
import { fetchAPI, submitAPI } from "./api";

export function BookingPage({availableTimes, updateTimes}) {
    
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            date: formData.get('res-date'),
            time: formData.get('res-time'),
            guests: formData.get('guests'),
            occasion: formData.get('occasion')
        };

        const response = await submitAPI(data);
        if (response.success) {
            navigate('/confirmation');
        } else {
            alert('There was an error with your reservation. Please try again.');
        }
    };

    function initializeTimes(date) {
        return fetchAPI(date)
    }

    function updateTimes(date) {
        const newDate = new Date(date)
        return fetchAPI(newDate)
    }

    return(
        <>
            <h1 class="booking">Booking Page</h1>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="res-date" required />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time ">
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                        {time}
                    </option>
          ))}
                </select>
                
                <label for="guests" required>Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"/>
                
                <label htmlFor="occasion">Occasion</label>
                
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"/>
            </form>
        </>
    );
}