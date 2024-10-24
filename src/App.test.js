import { render, screen } from '@testing-library/react';
// import App from './App';
import BookingPage from './BookingPage';
initializeTimes = initializeTimes()
const timesElement = require('./BookingPage')

// test('renders bookingform heading', () => {
//   render(<BookingPage />);
//   const headingElement = screen.getByText("Booking Page");
//   expect(headingElement).toBeInTheDocument();
// });

// test("Adds one", () => {
//   // render the App component
//   render(<App />); 
  
//   // save the heading in a variable
//   const heading = screen.getByTestId("currentNumber"); 
  
//   // save the button in a variable
//   const btn = screen.getByTestId("addOne"); 
  
//   // click the btn
//   fireEvent.click(btn); 
  
//   // test assumption
//   expect(heading).toHaveTextContent("2");
// });

test('initializing times', () => {
  expect(initializeTimes()).toBe('9:00AM');
});