import './App.css';
// import {Header} from './Header.js';
import {Nav} from './Nav.js'
import {Main} from './Main.js'
import { BrowserRouter as Router,
  Route, Routes, Link } from "react-router-dom";
import {BookingPage} from './BookingPage';

function App() {
  return (
    <>
      {/* <Header/> */}
      <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </>
    </Router>
    </>
  );
}

export default App;
