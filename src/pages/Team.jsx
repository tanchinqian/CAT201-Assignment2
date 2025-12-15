import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Alice Smith', role: 'Project Lead' },
    { id: 2, name: 'Bob Jones', role: 'Developer' },
    { id: 3, name: 'Charlie Day', role: 'Designer' },
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