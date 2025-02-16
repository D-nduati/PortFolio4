import React from 'react';
import './styles/About.css'
const About = () => {

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        Ambitious and results-driven Computer Science graduate with a strong background in full-stack web and software development. Expertise in modern web technologies. Proven ability to deliver user-centered solutions that enhance performance and user experience.
      </p>
      <h3>Technical Skills</h3>
      <div className="skills-grid">
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">JavaScript</div>
        <div className="skill">ReactJS</div>
        <div className="skill">Node.js</div>
        <div className="skill">Python</div>
        <div className="skill">Java</div>
        <div className="skill">MySQL</div>
        <div className="skill">Git</div>
        <div className="skill">Docker</div>
      </div>
    </section>
  );
};

export default About;