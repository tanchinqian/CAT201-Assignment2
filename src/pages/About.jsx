import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="page-container">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Engineering Digital Excellence</h1>
          <p>
            We don't just build software. We craft robust digital ecosystems that
            power the next generation of businesses.
          </p>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section className="philosophy-section">
        <div className="section-header">
          <h2>Our Philosophy</h2>
        </div>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <h3>Transparency First</h3>
            <p>No hidden costs, no jargon. We believe in clear, honest communication at every step.</p>
          </div>
          <div className="philosophy-card">
            <h3>Agile Mindset</h3>
            <p>We adapt to change quickly, ensuring your product evolves with market demands.</p>
          </div>
          <div className="philosophy-card">
            <h3>Long-term Partnership</h3>
            <p>We are not just vendors; we are your technical partners for the long haul.</p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology-section">
        <div className="section-header">
          <h2>Our Methodology</h2>
          <p>From concept to launch, our process is designed for success.</p>
        </div>
        <div className="methodology-steps">
          <div className="step-item">
            <div className="step-number">01</div>
            <h3>Discovery</h3>
            <p>We dive deep into your business goals and requirements.</p>
          </div>
          <div className="step-item">
            <div className="step-number">02</div>
            <h3>Strategy</h3>
            <p>We architect a scalable solution tailored to your needs.</p>
          </div>
          <div className="step-item">
            <div className="step-number">03</div>
            <h3>Development</h3>
            <p>Our engineers build with clean, maintainable code.</p>
          </div>
          <div className="step-item">
            <div className="step-number">04</div>
            <h3>Launch & Scale</h3>
            <p>We deploy, monitor, and help you grow.</p>
          </div>
        </div>
      </section>

      {/* Technology Foundation Section */}
      <section className="tech-stack-section">
        <div className="section-header">
          <h2>Our Digital Foundation</h2>
          <p>We leverage cutting-edge standards to build systems that last.</p>
        </div>
        <div className="tech-categories">
          <div className="tech-category">
            <h3>Seamless Experiences</h3>
            <p className="tech-desc">
              We craft intuitive, responsive interfaces that delight users and drive engagement across all devices.
            </p>
          </div>
          <div className="tech-category">
            <h3>Robust Performance</h3>
            <p className="tech-desc">
              Our backend systems are engineered for speed, security, and reliability under heavy loads.
            </p>
          </div>
          <div className="tech-category">
            <h3>Global Scalability</h3>
            <p className="tech-desc">
              Cloud-native architecture ensures your business can grow without technical limitations.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="section-header">
          <h2>Industries We Serve</h2>
        </div>
        <div className="industries-grid">
          <div className="industry-card">E-Commerce</div>
          <div className="industry-card">FinTech</div>
          <div className="industry-card">Healthcare</div>
          <div className="industry-card">Logistics</div>
          <div className="industry-card">Education</div>
          <div className="industry-card">Real Estate</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to transform your business?</h2>
          <p>Let's discuss how our technical expertise can solve your challenges.</p>
          <a href="#footer" className="cta-btn">Let's Discuss Your Project</a>
        </div>
      </section>


    </div>
  );
};

export default About;