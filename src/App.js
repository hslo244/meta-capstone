import './App.css';
// import {Header} from './Header.js';
import {Nav} from './Nav.js'
// import {Main} from './Main.js'
import { BrowserRouter as Router,
  Route, Routes } from "react-router-dom";
import {BookingPage} from './BookingPage';
import {Homepage} from './Homepage'
import { useState, useEffect } from 'react';
import { useReducer } from 'react';

/*Init reducer */
const reducer = (state,action) => {

};

// Main function
function App() {

  /*Init state for time selector */
  const initializeTimes = {time: '00:00'};
  useEffect(() => { 
    fetch(Date) 
      .then((response) => response.json()) 
      .then((jsonData) => updateTimes(jsonData)); 
      // .catch((error) => console.log(error)); 
  }, []); 
  
  const [state, dispatch] = useReducer(reducer, initializeTimes);

  // Update times based on selected date
  const updateTimes = (selectedDate) => {
    console.log(`Date selected: ${selectedDate}`);
    
    setAvailableTimes([
      '09:00 AM',
      '10:00 AM',
      '11:00 AM',
      '12:00 PM',
      '01:00 PM',
      '02:00 PM',
      '03:00 PM',
      '04:00 PM',
      '05:00 PM',
    ]);
    dispatch({type: 'update_times'});
  };

  /*Options for the time selector*/
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);
  

  return (
    <>
      {/* <Header/> */}
      {/* Makes the nav buttons work */}
      <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} updateTimes={updateTimes}/>} />
        </Routes>
      </>
    </Router>
    </>
  );
}

export default App;
