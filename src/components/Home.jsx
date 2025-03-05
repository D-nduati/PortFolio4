import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="animated-text">David</h1>
        <p className="animated-text">Full-Stack Web & Software Developer | Passionate About Coding, Building, and Creating Solutions</p>
        <p className="intro-text">I specialize in ReactJS, NodeJS, ExpressJS, and more. I believe in writing clean, efficient code that drives innovation.</p>
        <div className="button-container">
        <a href="resume.pdf" download="David Nduati Resume.pdf" className="resume-button floating-button">
  Download Resume
</a>

          <a href="#projects" className="view-projects-button floating-button">View Projects</a>
        </div>
      </div>
      <div className="background-shapes">
        <div className="circle-shape"></div>
        <div className="square-shape"></div>
      </div>
    </section>
  );
};

export default Home;
