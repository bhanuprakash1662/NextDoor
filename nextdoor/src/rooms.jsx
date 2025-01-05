import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Rooms.css'; // Import the CSS file

const mockRoomData = [
  {
    "id": 1,
    "city": "Hyderabad - Banjara Hills",
    "dateFrom": "2025-01-05",
    "dateTo": "2025-01-10",
    "roomPic": "https://example.com/images/room_banjara_hills.jpg",
    "price": 150,
    "rating": 4.7
  },
  {
    "id": 2,
    "city": "Hyderabad - Jubilee Hills",
    "dateFrom": "2025-01-06",
    "dateTo": "2025-01-12",
    "roomPic": "https://example.com/images/room_jubilee_hills.jpg",
    "price": 180,
    "rating": 4.8
  },
  {
    "id": 3,
    "city": "Hyderabad - Hitech City",
    "dateFrom": "2025-01-08",
    "dateTo": "2025-01-14",
    "roomPic": "https://example.com/images/room_hitech_city.jpg",
    "price": 200,
    "rating": 4.9
  },
  {
    "id": 4,
    "city": "Hyderabad - Gachibowli",
    "dateFrom": "2025-01-09",
    "dateTo": "2025-01-15",
    "roomPic": "https://example.com/images/room_gachibowli.jpg",
    "price": 170,
    "rating": 4.6
  },
  {
    "id": 5,
    "city": "Hyderabad - Charminar",
    "dateFrom": "2025-01-07",
    "dateTo": "2025-01-13",
    "roomPic": "https://example.com/images/room_charminar.jpg",
    "price": 120,
    "rating": 4.3
  },
  {
    "id": 6,
    "city": "Hyderabad - Kondapur",
    "dateFrom": "2025-01-10",
    "dateTo": "2025-01-16",
    "roomPic": "https://example.com/images/room_kondapur.jpg",
    "price": 160,
    "rating": 4.5
  },
  {
    "id": 7,
    "city": "Hyderabad - Madhapur",
    "dateFrom": "2025-01-11",
    "dateTo": "2025-01-17",
    "roomPic": "https://example.com/images/room_madhapur.jpg",
    "price": 190,
    "rating": 4.7
  },
  {
    "id": 8,
    "city": "Hyderabad - Secunderabad",
    "dateFrom": "2025-01-08",
    "dateTo": "2025-01-13",
    "roomPic": "https://example.com/images/room_secunderabad.jpg",
    "price": 130,
    "rating": 4.4
  },
  {
    "id": 9,
    "city": "Hyderabad - Begumpet",
    "dateFrom": "2025-01-06",
    "dateTo": "2025-01-11",
    "roomPic": "https://example.com/images/room_begumpet.jpg",
    "price": 140,
    "rating": 4.5
  },
  {
    "id": 10,
    "city": "Hyderabad - Abids",
    "dateFrom": "2025-01-09",
    "dateTo": "2025-01-14",
    "roomPic": "https://example.com/images/room_abids.jpg",
    "price": 125,
    "rating": 4.2
  },
  {
    "id": 11,
    "city": "Hyderabad - Kukatpally",
    "dateFrom": "2025-01-12",
    "dateTo": "2025-01-18",
    "roomPic": "https://example.com/images/room_kukatpally.jpg",
    "price": 150,
    "rating": 4.6
  },
  {
    "id": 12,
    "city": "Hyderabad - Uppal",
    "dateFrom": "2025-01-07",
    "dateTo": "2025-01-14",
    "roomPic": "https://example.com/images/room_uppal.jpg",
    "price": 100,
    "rating": 4.2
  },
  {
    "id": 13,
    "city": "Hyderabad - Miyapur",
    "dateFrom": "2025-01-09",
    "dateTo": "2025-01-16",
    "roomPic": "https://example.com/images/room_miyapur.jpg",
    "price": 135,
    "rating": 4.4
  },
  {
    "id": 14,
    "city": "Hyderabad - LB Nagar",
    "dateFrom": "2025-01-10",
    "dateTo": "2025-01-15",
    "roomPic": "https://example.com/images/room_lb_nagar.jpg",
    "price": 110,
    "rating": 4.3
  },
  {
    "id": 15,
    "city": "Hyderabad - Mehdipatnam",
    "dateFrom": "2025-01-08",
    "dateTo": "2025-01-13",
    "roomPic": "https://example.com/images/room_mehdipatnam.jpg",
    "price": 125,
    "rating": 4.5
  },
  {
    "id": 16,
    "city": "Hyderabad - Ameerpet",
    "dateFrom": "2025-01-05",
    "dateTo": "2025-01-11",
    "roomPic": "https://example.com/images/room_ameerpet.jpg",
    "price": 140,
    "rating": 4.4
  },
  {
    "id": 17,
    "city": "Hyderabad - Dilsukhnagar",
    "dateFrom": "2025-01-09",
    "dateTo": "2025-01-14",
    "roomPic": "https://example.com/images/room_dilsukhnagar.jpg",
    "price": 120,
    "rating": 4.3
  },
  {
    "id": 18,
    "city": "Hyderabad - Tarnaka",
    "dateFrom": "2025-01-06",
    "dateTo": "2025-01-12",
    "roomPic": "https://example.com/images/room_tarnaka.jpg",
    "price": 115,
    "rating": 4.2
  },
  {
    "id": 19,
    "city": "Hyderabad - SR Nagar",
    "dateFrom": "2025-01-07",
    "dateTo": "2025-01-14",
    "roomPic": "https://example.com/images/room_sr_nagar.jpg",
    "price": 130,
    "rating": 4.4
  },
  {
    "id": 20,
    "city": "Hyderabad - Himayatnagar",
    "dateFrom": "2025-01-05",
    "dateTo": "2025-01-10",
    "roomPic": "https://example.com/images/room_himayatnagar.jpg",
    "price": 150,
    "rating": 4.6
  },
  {
    "id": 21,
    "city": "Hyderabad - Somajiguda",
    "dateFrom": "2025-01-08",
    "dateTo": "2025-01-13",
    "roomPic": "https://example.com/images/room_somajiguda.jpg",
    "price": 155,
    "rating": 4.7
  },
  {
    "id": 22,
    "city": "Hyderabad - Malakpet",
    "dateFrom": "2025-01-06",
    "dateTo": "2025-01-12",
    "roomPic": "https://example.com/images/room_malakpet.jpg",
    "price": 100,
    "rating": 4.1
  },
  {
    "id": 23,
    "city": "Hyderabad - Attapur",
    "dateFrom": "2025-01-09",
    "dateTo": "2025-01-15",
    "roomPic": "https://example.com/images/room_attapur.jpg",
    "price": 135,
    "rating": 4.3
  },
  {
    "id": 24,
    "city": "Hyderabad - Kothapet",
    "dateFrom": "2025-01-10",
    "dateTo": "2025-01-14",
    "roomPic": "https://example.com/images/room_kothapet.jpg",
    "price": 120,
    "rating": 4.2
  },
  {
    "id": 25,
    "city": "Hyderabad - Chandanagar",
    "dateFrom": "2025-01-07",
    "dateTo": "2025-01-13",
    "roomPic": "https://example.com/images/room_chandanagar.jpg",
    "price": 145,
    "rating": 4.5
  },
  {
    "id": 26,
    "city": "Hyderabad - Banjara Hills",
    "dateFrom": "2025-01-05",
    "dateTo": "2025-01-10",
    "roomPic": "https://example.com/images/room_banjara_hills.jpg",
    "price": 150,
    "rating": 4.7
  }
];

const Rooms = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm, startDate, endDate } = location.state || {};
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    if (searchTerm || (startDate && endDate)) {
      const filtered = mockRoomData.filter((room) => {
        const isCityMatch = searchTerm
          ? room.city.toLowerCase().includes(searchTerm.toLowerCase())
          : true;
        const isDateMatch =
          startDate && endDate
            ? new Date(startDate) >= new Date(room.dateFrom) &&
              new Date(endDate) <= new Date(room.dateTo)
            : true;
        return isCityMatch && isDateMatch;
      });
      setFilteredRooms(filtered);
    } else {
      setFilteredRooms(mockRoomData);
    }
  }, [searchTerm, startDate, endDate]);

  const handleBookNow = (room) => {
    navigate('/room-details', { state: { room } }); // Navigate to RoomDetails
  };

  return (
    <div className="rooms-container">
      <h1 className="rooms-title">Available Rooms</h1>
      <div className="rooms-details">
        <p><strong>Search Term:</strong> {searchTerm || "Not provided"}</p>
        <p><strong>Start Date:</strong> {startDate || "Not provided"}</p>
        <p><strong>End Date:</strong> {endDate || "Not provided"}</p>
        <p>Explore the available rooms based on your search criteria!</p>
      </div>

      <div className="rooms-list">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div key={room.id} className="room-card">
              <img
                src={room.roomPic}
                alt={`Room in ${room.city}`}
                className="room-image"
              />
              <div className="room-details">
                <h3 className="room-city">{room.city}</h3>
                <p>
                  <strong>Available from:</strong> {room.dateFrom}
                </p>
                <p>
                  <strong>Available to:</strong> {room.dateTo}
                </p>
                <p>
                  <strong>Price:</strong> ${room.price} per night
                </p>
                <p>
                  <strong>Rating:</strong> {room.rating}/5
                </p>
                <button
                  className="book-button"
                  onClick={() => handleBookNow(room)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No rooms are available for the selected search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Rooms;
// const Rooms = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { searchTerm, startDate, endDate } = location.state || {};
//   const [filteredRooms, setFilteredRooms] = useState([]);
//   const [floatingRooms, setFloatingRooms] = useState([]);

//   useEffect(() => {
//     // Select random top 5 rooms for floating display
//     const topRatedRooms = [...mockRoomData]
//       .sort((a, b) => b.rating - a.rating)
//       .slice(0, 5);
//     setFloatingRooms(topRatedRooms);

//     if (searchTerm || (startDate && endDate)) {
//       const filtered = mockRoomData.filter((room) => {
//         const isCityMatch = searchTerm
//           ? room.city.toLowerCase().includes(searchTerm.toLowerCase())
//           : true;
//         const isDateMatch =
//           startDate && endDate
//             ? new Date(startDate) >= new Date(room.dateFrom) &&
//               new Date(endDate) <= new Date(room.dateTo)
//             : true;
//         return isCityMatch && isDateMatch;
//       });
//       setFilteredRooms(filtered);
//     } else {
//       setFilteredRooms(mockRoomData);
//     }
//   }, [searchTerm, startDate, endDate]);

//   const handleBookNow = (roomId) => {
//     alert(`Room with ID ${roomId} booked successfully!`);
//   };

//   return (
//     <div className="rooms-container">
//       <h1 className="rooms-title">Available Rooms</h1>
//       <div className="rooms-details">
//         <p><strong>Search Term:</strong> {searchTerm || "Not provided"}</p>
//         <p><strong>Start Date:</strong> {startDate || "Not provided"}</p>
//         <p><strong>End Date:</strong> {endDate || "Not provided"}</p>
//         <p>Explore the available rooms based on your search criteria!</p>
//       </div>

//       {(!startDate && !endDate && floatingRooms.length > 0) && (
//         <div>
//           <h2 className="rooms-title">Featured Rooms</h2>
//           <div className="rooms-list">
//             {floatingRooms.map((room) => (
//               <div key={room.id} className="room-card">
//                 <img
//                   src={room.roomPic}
//                   alt={`Room in ${room.city}`}
//                   className="room-image"
//                 />
//                 <div className="room-details">
//                   <h3 className="room-city">{room.city}</h3>
//                   <p>
//                     <strong>Available from:</strong> {room.dateFrom}
//                   </p>
//                   <p>
//                     <strong>Available to:</strong> {room.dateTo}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> ${room.price} per night
//                   </p>
//                   <p>
//                     <strong>Rating:</strong> {room.rating}/5
//                   </p>
//                   <button
//                     className="book-button"
//                     onClick={() => handleBookNow(room.id)}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <h2 className="rooms-title">Filtered Rooms</h2>
//       <div className="rooms-list">
//         {filteredRooms.length > 0 ? (
//           filteredRooms.map((room) => (
//             <div key={room.id} className="room-card">
//               <img
//                 src={room.roomPic}
//                 alt={`Room in ${room.city}`}
//                 className="room-image"
//               />
//               <div className="room-details">
//                 <h3 className="room-city">{room.city}</h3>
//                 <p>
//                   <strong>Available from:</strong> {room.dateFrom}
//                 </p>
//                 <p>
//                   <strong>Available to:</strong> {room.dateTo}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> ${room.price} per night
//                 </p>
//                 <p>
//                   <strong>Rating:</strong> {room.rating}/5
//                 </p>
//                 <button
//                   className="book-button"
//                   onClick={() => handleBookNow(room.id)}
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No rooms are available for the selected search criteria.</p>
//         )}
//       </div>

//       <button
//         onClick={() => navigate(-1)}
//         className="back-button"
//       >
//         Back
//       </button>
//     </div>
//   );
// };

// export default Rooms;