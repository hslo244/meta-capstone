import React from "react";
import { BookingPage } from "./BookingPage";
import { render, fireEvent, act } from '@testing-library/react';

describe('BookingPage', () => {
    describe('with valid inputs', () => {
        it('calls the handleSubmit function', async () => {
            const mockOnSubmit = jest.fn();
            const { getByLabelText, getByRole } = render(<BookingPage onSubmit={mockOnSubmit} />);

            await act(async () => {
                fireEvent.change(getByLabelText('Date'), { target: { value: '2024-12-31' } });
                fireEvent.change(getByLabelText('Time'), { target: { value: '18:00' } });
                fireEvent.change(getByLabelText('Guests'), { target: { value: '2' } });
                fireEvent.change(getByLabelText('Occasion'), { target: { value: '1' } });
                fireEvent.click(getByRole('button', { name: 'Submit' }));
            });

            expect(mockOnSubmit).toHaveBeenCalledWith({
                date: '2024-12-31',
                time: '18:00',
                guests: '2',
                occasion: '1'
            });
        })
    })   
    
    // describe('with invalid inputs', () => {
    //     it('renders invalid date and time errors', async () => {
    //         const {getByLabelText, container} = render(<BookingPage />);

    //         await act(async () => {
    //             const dateInput = getByLabelText('Date');
    //         });
    //     })
    // })   
})