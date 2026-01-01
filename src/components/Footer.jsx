import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // show scroll up button when scroll down 300px
  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // this is the function to scroll up smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);
    // Hide notification after 3 seconds
    setTimeout(() => {
        setShowNotification(false);
    }, 3000);
    // Reset form
    e.target.reset();
  };

  return (
    <footer className="footer" id="footer">
      
      {/* Success Notification - Standardized */}
      {showNotification && (
        <div className="notification-overlay">
            <div className="notification-box">
                <div className="notification-icon">✓</div>
                <div className="notification-content">
                    <h3>Message Sent Successfully!</h3>
                    <p>We will get back to you within 24 hours.</p>
                </div>
                <button
                    className="notification-close"
                    onClick={() => setShowNotification(false)}
                >
                    ×
                </button>
            </div>
        </div>
      )}

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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </div>

        {/* Right side: contact us form */}
        <div className="footer-right">
          <h3>Get in Touch</h3>
          <form className="footer-form" onSubmit={handleSubmit}>
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

      {/* scroll up button */}
      {showTopBtn && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &#8593;
        </button>
      )}
    </footer>
  );
};

export default Footer;