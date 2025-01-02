import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Rooms.css'; // Import the CSS file

const mockRoomData = [
  { id: 1, name: 'Deluxe Room', isAvailable: true, availableFrom: '2024-12-01', availableTo: '2024-12-10' },
  { id: 2, name: 'Standard Room', isAvailable: true, availableFrom: '2024-12-05', availableTo: '2024-12-20' },
  { id: 3, name: 'Suite', isAvailable: false, availableFrom: '2024-12-15', availableTo: '2024-12-25' },
  // Add more rooms as needed
];

const Rooms = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm, startDate, endDate } = location.state || {};
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = mockRoomData.filter((room) => {
        return (
          room.isAvailable &&
          new Date(startDate) >= new Date(room.availableFrom) &&
          new Date(endDate) <= new Date(room.availableTo)
        );
      });
      setFilteredRooms(filtered);
    } else {
      setFilteredRooms(mockRoomData);
    }
  }, [startDate, endDate]);

  return (
    <div className="rooms-container">
      <h1 className="rooms-title">Available Rooms</h1>
      <div className="rooms-details">
        <p><strong>Search Term:</strong> {searchTerm || 'Not provided'}</p>
        <p><strong>Start Date:</strong> {startDate || 'Not provided'}</p>
        <p><strong>End Date:</strong> {endDate || 'Not provided'}</p>
        <p>Explore the available rooms based on your search criteria!</p>
      </div>
      <div className="rooms-list">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div key={room.id} className="room-card">
              <h3>{room.name}</h3>
              <p>Available from: {room.availableFrom}</p>
              <p>Available to: {room.availableTo}</p>
            </div>
          ))
        ) : (
          <p>No rooms are available for the selected dates.</p>
        )}
      </div>
      <button
        onClick={() => navigate(-1)}
        className="back-button"
      >
        Back
      </button>
    </div>
  );
};

export default Rooms;
