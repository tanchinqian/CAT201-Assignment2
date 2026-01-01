import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: 'SmartCity IoT Dashboard',
            category: 'IoT',
            description: 'Real-time monitoring of urban traffic and energy consumption with live data visualization.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
            tech: ['React', 'Node.js', 'MQTT', 'Chart.js']
        },
        {
            id: 2,
            title: 'Neuromarket AI',
            category: 'AI',
            description: 'Predictive analytics tool for retail businesses to forecast trends using machine learning.',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
            tech: ['Python', 'TensorFlow', 'React', 'AWS']
        },
        {
            id: 3,
            title: 'EduTrack System',
            category: 'Web',
            description: 'Comprehensive student management portal for local universities with grade tracking.',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop',
            tech: ['React', 'Firebase', 'Tailwind']
        },
        {
            id: 4,
            title: 'LuxStay Realty',
            category: 'Web',
            description: 'Award-winning landing page for a luxury real estate firm featuring immersive animations.',
            image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1000&auto=format&fit=crop',
            tech: ['React', 'GSAP', 'UI/UX']
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="page-container projects-page">

            {/* Hero Section */}
            <section className="projects-hero">
                <div className="projects-hero-content">
                    <h1>Our Work Speaks for Itself</h1>
                    <p>
                        Explore how we help businesses transform their digital presence
                        through innovation and engineering excellence.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <div className="filter-container">
                {['All', 'Web', 'IoT', 'AI'].map(category => (
                    <button
                        key={category}
                        className={`filter-btn ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <section className="projects-grid-section">
                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-img-wrapper">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <div className="project-category">{project.category}</div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="project-cta">
                <h2>Have a project in mind?</h2>
                <p>Let's build something amazing together.</p>
                <button className="start-project-btn" onClick={() => { navigate('/contact'); setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100); }}>Start Your Project</button>
            </section>

        </div>
    );
};

export default Projects;
