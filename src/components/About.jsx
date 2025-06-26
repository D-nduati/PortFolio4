import React from 'react';
import './styles/About.css';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiHtml5, SiCss3 } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Ambitious and results-driven Computer Science graduate with expertise in full-stack development. 
          Passionate about building <span className="highlight">scalable</span>, <span className="highlight">performant</span>, and 
          <span className="highlight"> user-centered</span> solutions using modern web technologies.
        </p>
        
        <h3 className="skills-title">Technical Skills</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;