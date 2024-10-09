


export function BookingPage({availableTimes}) {
    

    
    return(
        <>
            <h1>Booking Page</h1>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date"/>
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