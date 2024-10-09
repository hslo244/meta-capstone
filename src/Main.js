import { CallToAction } from './CallToAction';
import {Specials} from './Specials';
import { BookingPage } from './BookingPage';
import { BrowserRouter as Router,
    Route, Routes, Link } from "react-router-dom";
import { CustomersSay } from './CustomersSay';
import './Main.css';

export function Main() {
    
    return(
        <>
            <CallToAction/>
            <Specials/>
            <CustomersSay/>
        </>
    );
}