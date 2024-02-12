


import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Assuming you have a separate CSS file

import logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="logo-contact">
          
          <div className="contact-info">
            <img src={logo} alt="Logo" />
            <div><FaPhone /> Phone: +123456789</div>
            <div><FaEnvelope /> info@flyo.com</div>
          </div>
        </div>
      </div>

      <div className="footer-column">
        <ul>
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="footer-column">
        <ul>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>

      <div className="footer-column">
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
