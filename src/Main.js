import { CallToAction } from './CallToAction';
import {Specials} from './Specials';
import {App} from './App.js';
import './Main.css';

export function Main() {
    return(
        <>
            <CallToAction/>
            <Specials/>
            {/* <Routes> 
                <Route path="/" element={<App />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes> */}
        </>
    );
}