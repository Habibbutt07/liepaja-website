import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Liepaja City</h3>
            <p>Official website of Liepaja municipality. Your gateway to city services, information, and community updates.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Information</h4>
            <p>Address: Rožu iela 6, Liepāja, LV-3401</p>
            <p>Phone: +371 12 345 678</p>
            <p>Email: info@liepaja.lv</p>
          </div>
          <div className="footer-section">
            <h4>Office Hours</h4>
            <p>Monday - Friday: 8:00 - 17:00</p>
            <p>Saturday: 9:00 - 13:00</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Liepaja City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


