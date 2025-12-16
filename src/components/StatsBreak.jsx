import React from 'react';
import './StatsBreak.css';

const StatsBreak = () => {
  return (
    <section className="stats-break">
      <div className="stats-overlay">
        <div className="stats-content">
          <h2>Transforming Ideas into Reality</h2>
          <p>We don't just write code; we build the future of your business.</p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50+</h3>
              <span>Projects Completed</span>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <span>Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <span>Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBreak;