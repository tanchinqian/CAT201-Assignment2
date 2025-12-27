import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const [showNotification, setShowNotification] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show notification
        setShowNotification(true);

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            message: ''
        });

        // Auto-hide notification after 3 seconds
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className="contact-page">

            {/* Success Notification */}
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

            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1>Let's Build Something Amazing</h1>
                    <p>
                        Ready to transform your business with cutting-edge technology?
                        Get in touch with our team today.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-main-section">
                <div className="contact-container">

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <h2>Send Us a Message</h2>
                        <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company Ltd."
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+60 12-345 6789"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Project Details *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project, goals, and timeline..."
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info-wrapper">
                        <h2>Get in Touch</h2>

                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <div className="info-content">
                                <h3>Visit Our Office</h3>
                                <p>11800, Universiti Sains Malaysia,<br />Gelugor, Penang, Malaysia</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <div className="info-content">
                                <h3>Call Us</h3>
                                <p>+60 19-708 1826</p>
                                <p className="subtext">Mon-Fri: 9AM - 5PM</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📧</div>
                            <div className="info-content">
                                <h3>Email Us</h3>
                                <p>info@hanzex.com</p>
                                <p className="subtext">We'll respond within 24 hours</p>
                            </div>
                        </div>

                        <div className="social-section">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a href="#" className="social-icon">LinkedIn</a>
                                <a href="#" className="social-icon">Instagram</a>
                                <a href="#" className="social-icon">Twitter</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Contact;