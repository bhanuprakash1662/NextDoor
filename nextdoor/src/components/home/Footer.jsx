import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/terms-of-service" className="footer-link">Terms of Service</a>
          <a href="/contact" className="footer-link">Contact Us</a>
        </div>
        <div className="footer-social-media">
          <a href="https://www.facebook.com" className="social-link">Facebook</a>
          <a href="https://www.twitter.com" className="social-link">Twitter</a>
          <a href="https://www.instagram.com" className="social-link">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
