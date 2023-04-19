import React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import MyBooking from '../Components/User/MyBooking';
import { BrowserRouter } from 'react-router-dom';


const MockMyBooking = () => {
    return(
        <BrowserRouter >
            <MyBooking />
        </BrowserRouter>
    )
}


describe('MyBooking', () => {
  it('renders the data from the API', async () => {
    const responseData = [
        {
            id: 1,
            customerName: "Vikas Ambekar",
            customerMobNo: 7900001883,
            theaterName: "Kurla PVR,Mumbai",
            movieName: "John Wick: Chapter 4",
            seatsBooked: [
                "5-5"
            ],
            numberSeats: 1,
            showTimings: "10:00AM",
            bookingDate: "2023-4-11",
            totalCost: 180,
            email: "ambekarviks@gmail.com"
        }
    ];

   axios.get.mockResolvedValueOnce({ data: responseData });
   render(<MockMyBooking />)
   const text = await screen.findByText(/Kurla PVR,Mumbai/i)
   expect(text).toBeInTheDocument

   const movieName = await screen.findByText(/John Wick: Chapter 4/i)
   expect(movieName).toBeInTheDocument
  });
});
