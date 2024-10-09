import './App.css';
// import {Header} from './Header.js';
import {Nav} from './Nav.js'
// import {Main} from './Main.js'
import { BrowserRouter as Router,
  Route, Routes } from "react-router-dom";
import {BookingPage} from './BookingPage';
import {Homepage} from './Homepage'
import { useState } from 'react';

function App() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
])

  return (
    <>
      {/* <Header/> */}
      <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>} />
        </Routes>
      </>
    </Router>
    </>
  );
}

export default App;
