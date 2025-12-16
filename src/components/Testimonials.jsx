import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    // Reviews from our customers
    const reviews = [
        {
            name: "Dr. Aiman",
            company: "HealthCare Plus",
            comment: "HZ Digital transformed our patient booking system. Highly professional team!",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            name: "Sarah Lee",
            company: "Fire Phoenix Cafe",
            comment: "The website is so fast and looks great on mobile. Our sales increased by 20%.",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            name: "Mr. Chong",
            company: "T. Logistics Co.",
            comment: "Great communication throughout the project. They really understand SMEs.",
            rating: "⭐⭐⭐⭐⭐"
        }
    ];

    return (
        <section className="testimonials-section">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Trusted by businesses across Malaysia</p>

            <div className="testimonials-grid">
                {reviews.map((review, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="quote-icon">“</div>
                        <p className="review-text">{review.comment}</p>
                        <div className="review-footer">
                            <div className="review-info">
                                <h4>{review.name}</h4>
                                <span className="company-name">{review.company}</span>
                            </div>
                            <div className="review-rating">{review.rating}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;