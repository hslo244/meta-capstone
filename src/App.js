import './App.css';
// import {Header} from './Header.js';
import {Nav} from './Nav.js'
// import {Main} from './Main.js'
import { BrowserRouter as Router,
  Route, Routes } from "react-router-dom";
import {BookingPage} from './BookingPage';
import {Homepage} from './Homepage'
import { useState} from 'react';
// import { useReducer } from 'react';
import { ConfirmedBooking } from './ConfirmedBooking.js';
import { SubmitForm } from './submitForm.js';
import { fetchAPI } from './api.js';


/*Init reducer */
// const reducer = (state,action) => {

// };

// Main function
function App() {
  const [date, setDate] = useState(new Date());
  /*Init state for time selector */
  
  function initializeTimes(date) {
    return fetchAPI(date)
  }
  
  // Update times based on selected date
  function updateTimes(date) {
    const newDate = new Date(date)
    return fetchAPI(newDate)
  }

  /*Options for the time selector*/
  const [availableTimes, setAvailableTimes] = useState(initializeTimes(date));
  
  return (
    <>
      {/* <Header/> */}
      {/* Makes the nav buttons work */}
      <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} aria-label='Home'/>
          <Route path="/booking" element={<BookingPage submitForm={SubmitForm} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} updateTimes={updateTimes}/>} />
          <Route path="/confirmed" element={<ConfirmedBooking/>}/>
        </Routes>
      </>
    </Router>
    </>
  );
}

export default App;
