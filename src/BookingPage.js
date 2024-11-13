// Imports
import {useNavigate} from "react-router-dom";
import './BookingPage.css';

export function BookingPage({availableTimes, updateTimes}) {
    const navigate = useNavigate(); //Init navigate

    const handleSubmit = (formData) => {
        formData.preventDefault();
        console.log('Form submitted!');  //Logs submission in console
        navigate("/confirmed");  // Go to booking confirmation page
        const submitAPI = function(formData) {
            return true;
        };
        try {
            // Call the submitAPI function and pass formData
            const response = submitAPI(formData);
            
            console.log('Form successfully submitted:', response);
            navigate('/confirmed');
        } catch (e) {
            console.log('Error submitting form:');
        }
    };

    
    return(
        <>
            <h1 class="booking">Booking Page</h1>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={updateTimes}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time ">
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                        {time}
                    </option>
          ))}
                </select>
                
                <label for="guests">Number of guests</label>
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