import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="animated-text">Your Name</h1>
        <p className="animated-text">Full-Stack Web & Software Developer</p>
        <a href="/path/to/resume.pdf" download className="resume-button floating-button">Download Resume</a>
        <a href="#projects" className="view-projects-button floating-button">View Projects</a>
      </div>
    </section>
  );
};

export default Home;