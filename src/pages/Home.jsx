import React from 'react';
import FeatureCard from '../components/FeatureCard';
import './Home.css';

const Home = () => {

  const features = [
    {
      title: "Fast Speed",
      desc: "Our platform is optimized for lightning-fast performance.",
      icon: "🚀" 
    },
    {
      title: "Secure",
      desc: "We prioritize data protection with top-tier security standards.",
      icon: "🔒"
    },
    {
      title: "Scalable",
      desc: "Solutions that grow with your business without breaking.",
      icon: "📈"
    }
  ];

  return (
    <div className="home-container">
      
      {/*HERO SECTION*/}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Innovating Your Digital Future</h1>
          <p className="hero-subtitle">
            We provide cutting-edge Web Development, IoT Solutions, and AI integration 
            for businesses in Malaysia.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
        
      </section>

      {/*MISSION & VISION SECTION*/}
      <section className="mission-section">
        <div className="mission-container">
            <div className="mission-box">
                <h2>Our Mission</h2>
                <p>To empower local SMEs with scalable software solutions that drive efficiency and growth.</p>
            </div>
            <div className="mission-box">
                <h2>Our Vision</h2>
                <p>To become the leading Tech Consultancy in Penang by 2028 through innovation and excellence.</p>
            </div>
        </div>
      </section>
    
      {/*SERVICES SECTION*/}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="features-grid">
            {features.map((item, index) => (
              <FeatureCard 
                key={index}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;