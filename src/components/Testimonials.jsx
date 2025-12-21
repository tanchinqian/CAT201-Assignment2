import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            name: "Dr. Aiman",
            company: "HealthCare Plus",
            comment: "HanZex transformed our patient booking system. Highly professional team!",
        },
        {
            name: "Sarah Lee",
            company: "Fire Phoenix Cafe",
            comment: "The website is so fast and looks great on mobile. Our sales increased by 20%.",
        },
        {
            name: "Mr. Chong",
            company: "T. Logistics Co.",
            comment: "Great communication throughout the project. They really understand SMEs.",
        },
        {
            name: "Emily Tan",
            company: "Penang Arts Centre",
            comment: "Beautiful design and seamless user experience. Highly recommended!",
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-scroll
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // this can change slide every 5 seconds
        return () => clearInterval(interval);
    }, [activeIndex]);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    return (
        <section className="testimonials-section">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Trusted by businesses across Malaysia</p>

            <div className="carousel-container">
                {/* Left Arrow */}
                <button className="nav-btn prev-btn" onClick={prevSlide}>&#10094;</button>

                <div className="carousel-viewport">
                    <div 
                        className="carousel-track" 
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {reviews.map((review, index) => (
                            <div key={index} className="carousel-slide">
                                <div className="testimonial-card">
                                    <div className="quote-icon">“</div>
                                    <p className="review-text">{review.comment}</p>
                                    <div className="review-footer">
                                        <div className="review-info">
                                            <h4>{review.name}</h4>
                                            <span className="company-name">{review.company}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button className="nav-btn next-btn" onClick={nextSlide}>&#10095;</button>
            </div>

            {/* Dots Indicator */}
            <div className="carousel-dots">
                {reviews.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;