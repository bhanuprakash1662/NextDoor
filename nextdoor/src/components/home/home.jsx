// import React from "react";
import NavbarComp from "./navbar";
import Back_pic from "../../assests/images/back_pic.png";
import "./Home.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DateSearchAndBook from './search';
import Rooms from '../../rooms';
import RoomDetails from "./RoomDetails"
import Payment from "./Payment";
import Confirmation from "./Confirmation";



function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${Back_pic})`,
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        minHeight: "100vh", // Ensures it covers the full viewport height
      }}
    >
      <NavbarComp />
      <Router>
      <Routes>
       
        <Route path="/" element={<DateSearchAndBook />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room-details" element={<RoomDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default Home;
