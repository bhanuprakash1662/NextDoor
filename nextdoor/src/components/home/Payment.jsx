import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Payment.css"

const Payment = () => {
  const { state: { room } } = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    // Assuming payment is successful, navigate to confirmation page
    navigate('/confirmation', { state: { room } });
  };

  return (
    <div className="payment-container">
      <h2>Payment for Room in {room.city}</h2>
      <img
        src={room.roomPic}
        alt={`Room in ${room.city}`}
        className="room-image"
        style={{ width: '300px', height: 'auto' }} // Decreasing the image size
      />
      <div className="payment-options">
        <h3>Select Payment Method</h3>
        <button onClick={() => setPaymentMethod('UPI')}>Pay via UPI</button>
        <button onClick={() => setPaymentMethod('Card')}>Pay via Card</button>
      </div>

      {paymentMethod && (
        <div className="payment-form">
          <h4>{paymentMethod} Payment</h4>
          <input type="text" placeholder="Enter Payment Details" />
          <button onClick={handlePayment}>Make Payment</button>
        </div>
      )}
    </div>
  );
};

export default Payment;
