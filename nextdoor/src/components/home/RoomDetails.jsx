import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RoomDetails.css';


const RoomDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room } = location.state || {};

  if (!room) {
    return (
      <div className="error-container">
        <h1>Room Not Found</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const handleConfirmBooking = () => {
    alert("Your room booking has been confirmed!");
    navigate('/');
  };

  return (
    <div className="room-details-container">
      <h1>Room Details</h1>
      <img
        src={room.roomPic}
        alt={`Room in ${room.city}`}
        className="room-image"
      />
      <div className="room-details-info">
        <h2>{room.city}</h2>
        <p><strong>Available from:</strong> {room.dateFrom}</p>
        <p><strong>Available to:</strong> {room.dateTo}</p>
        <p><strong>Price:</strong> ${room.price} per night</p>
        <p><strong>Rating:</strong> {room.rating}/5</p>
        <button
          className="confirm-booking-button"
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </button>
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          Back to Rooms
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
