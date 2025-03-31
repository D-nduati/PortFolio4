import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="profile-header">
          <h1 className="animated-text">David Nduati</h1>
          <div className="title-container">
            <span className="job-title">Full-Stack Developer</span>
            <span className="job-divider">|</span>
            <span className="job-title">Software Engineer</span>
          </div>
        </div>
        
        <p className="intro-text">
          I build exceptional digital experiences with modern technologies.
          Specializing in React, Node.js, and cloud-native solutions.
        </p>
        
        <div className="expertise-section">
          <h3 className="expertise-title">Core Expertise</h3>
          <ul className="expertise-list">
            <li>Frontend: React, Next.js, TypeScript, Redux</li>
            <li>Backend: Node.js, Express, Python, Django</li>
            <li>Database: MongoDB, PostgreSQL, Firebase</li>
            <li>DevOps: Docker, AWS, CI/CD Pipelines</li>
            <li>UI/UX: Responsive Design, Figma, TailwindCSS</li>
          </ul>
        </div>
        
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
        
        <div className="button-container">
          <a 
            href="resume.pdf" 
            download="David_Nduati_Resume.pdf" 
            className="resume-button floating-button"
          >
            <i className="fas fa-download"></i> Download Resume
          </a>
          <a href="#contact" className="contact-button floating-button">
            <i className="fas fa-envelope"></i> Contact Me
          </a>
          <a href="#projects" className="projects-button floating-button">
            <i className="fas fa-code"></i> View Projects
          </a>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      
      <div className="background-shapes">
        <div className="circle-shape"></div>
        <div className="square-shape"></div>
        <div className="triangle-shape"></div>
      </div>
    </section>
  );
};

export default Home;