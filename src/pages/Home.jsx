import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Build Your Future</h1>
          <p className="hero-subtitle">
            Create stunning digital experiences with our simple, powerful platform. 
            Start building today.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        
      </section>


    
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          
          <div className="feature-card">
            <h3>🚀 Fast Speed</h3>
            <p>Our platform is optimized for lightning-fast performance.</p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure</h3>
            <p>Your data is protected by enterprise-grade security standards.</p>
          </div>

          <div className="feature-card">
            <h3>🎨 Modern Design</h3>
            <p>Beautiful layouts that look great on any device.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;