import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Confirmation.css"

const Confirmation = () => {
  const { state: { room } } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <h2>Booking Confirmed!</h2>
      <p>Your room in {room.city} has been successfully booked.</p>
      <p>Price: ${room.price} per night</p>
      <p><strong>Booking Dates:</strong> {room.dateFrom} to {room.dateTo}</p>
      <button className="back-to-home" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default Confirmation;
