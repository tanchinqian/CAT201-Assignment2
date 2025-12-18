import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left side: logo and info */}
        <div className="footer-left">
          <h2 className='footer-logo'>HanZex</h2>
          <p className="footer-desc">
            We build scalable, secure, and intelligent digital solutions for the future.
          </p>
        </div>

        {/* Middle side: contact details */}
        <div className="contact-details">
          <div className="contact-item">
              <span className="icon">📍</span>
              <p>11800, USM, Penang, Malaysia</p>
            </div>
            <div className="contact-item">
              <span className="icon">📧</span>
              <p>info@hanzex.com</p>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <p>+60 19-708 1826</p>
            </div>

            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
        </div>

        {/* Right side: contact us form */}
        <div className="footer-right">
          <h3>Get in Touch</h3>
          <form className="footer-form">
            <div className="input-group">
                <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
                <input type="email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
                <textarea rows="4" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" className="footer-btn">Send Message</button>
          </form>
        </div>
      </div>

      <p className='footer-bottom'>&copy; {new Date().getFullYear()} HanZex. All rights reserved.</p>
    </footer>
  );
};

export default Footer;