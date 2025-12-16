import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Tan Chin Qian', role: 'Project Manager & Lead Developer' },
    { id: 2, name: 'Chong Han Zheng', role: 'Backend Architect & Cloud Specialist' },
    { id: 3, name: 'Elson Ooi Yin Feng', role: 'UI/UX Designer & Frontend Engineer' },
    { id: 4, name: 'Lau Jun Hao', role: 'System Analyst & QA Engineer' },
  ];

  return (
    <div className="page-container">

      <div className="team-content">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Team;