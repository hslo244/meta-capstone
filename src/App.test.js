import { render, screen } from '@testing-library/react';
// import App from './App';
import BookingForm from './BookingForm';

test('renders bookingform heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Booking Page");
  expect(headingElement).toBeInTheDocument();
});

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
  render(<BookingForm />);
  const timesElement = screen.getByText("Book Now");
});