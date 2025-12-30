import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Tan Chin Qian',
      role: 'Project Manager & Lead Developer',
      image: '/Cq.png',
      linkedin: 'https://www.linkedin.com/in/tan-chin-qian-5146641b5',
      email: 'tanchinqian@gmail.com'
    },
    {
      id: 2,
      name: 'Chong Han Zheng',
      role: 'Backend Architect & Cloud Specialist',
      image: '/Hz.png',
      linkedin: 'https://www.linkedin.com/in/chong-han-zheng-8bb613339',
      email: 'chonghanzheng@gmail.com'
    },
    {
      id: 3,
      name: 'Elson Ooi Yin Feng',
      role: 'UI/UX Designer & Frontend Engineer',
      image: '/Elson.png',
      linkedin: 'https://www.linkedin.com/in/elson-ooi-yin-feng-666005314',
      email: 'elsonooi2005@gmail.com'
    },
    {
      id: 4,
      name: 'Lau Jun Hao',
      role: 'System Analyst & QA Engineer',
      image: '/Jh.png',
      linkedin: 'https://www.linkedin.com/in/jun-hao-lau-8874a6276',
      email: 'goku0123321@gmail.com'
    },
  ];

  return (
    <div className="page-container">

      {/* Team Header Section */}
      <div className="team-header">
        <h1>Our Team</h1>
        <p>
          Meet the minds behind HanZex. We are a passionate team of developers,
          designers, and strategists dedicated to your digital success.
        </p>
      </div>

      {/* Team Grid Section */}
      <div className="team-content">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="img-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="card-body">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>

                <div className="team-socials">
                  <a
                    href={member.linkedin}
                    target="_blank" // this tells browser to open new link in a new tab
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn contact-btn"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Video Section */}
      <section className="corporate-video-section">
        <div className="video-content">
          <h2>Our Story</h2>
          <p>
            See how HanZex transforms ideas into reality. We believe in transparency,
            collaboration, and pushing the boundaries of technology.
          </p>
        </div>

        <div className="video-wrapper">
          <video
            controls
            className="main-video"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="office-info-section">
        <div className="office-container">

          <div className="office-text">
            <h2>Visit Our HQ</h2>
            <p className="address">
              11800, Universiti Sains Malaysia,<br />
              Gelugor, Penang, Malaysia.
            </p>
            <p className="contact-detail">📞 +60 19-708 1826</p>
          </div>

          <div className="hours-card">
            <h3>Working Hours</h3>
            <ul className="hours-list">
              <li>
                <span>Mon - Fri</span>
                <span className="time">9:00 AM - 5:00 PM</span>
              </li>
              <li>
                <span>Saturday</span>
                <span className="time">10:00 AM - 2:00 PM</span>
              </li>
              <li>
                <span>Sunday</span>
                <span className="time closed">Closed</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-team-section">
        <div className="join-content">
          <h2>Want to join the HanZex team?</h2>
          <p>We are always looking for talented developers and innovators to help us build the future.</p>
          <button className="join-btn">See Open Positions</button>
        </div>
      </section>

    </div>
  );
};

export default Team;