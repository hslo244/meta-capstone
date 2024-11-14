import React from "react";
import { BookingPage } from "./BookingPage";

const Booking = (props) => {
    <BookingPage availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm}/>
}