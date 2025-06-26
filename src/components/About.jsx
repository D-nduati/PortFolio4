import React from 'react';
import './styles/About.css';


const About = () => {

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>

        <div className="about-text">
          <p>
            I'm a passionate <span className="highlight">Computer Science graduate</span> and
            <span className="highlight"> Full-Stack Developer</span> with a strong foundation in building
            modern, scalable, and high-performance web applications. My approach combines
            <span className="highlight"> problem-solving</span>, <span className="highlight">clean code</span>, and
            <span className="highlight"> user-centric design</span> to deliver impactful digital experiences.
          </p>

          <p>
            With hands-on experience in both frontend and backend development, I specialize in turning ideas into
            functional and elegant solutions. I thrive in collaborative environments and continuously seek to
            expand my knowledge in emerging technologies.
          </p>

          <p>
            When I'm not coding, you can find me contributing to open-source projects, exploring new frameworks,
            or optimizing applications for better performance and accessibility.
          </p>
        </div>
        </div>

       

       
    </section>
  );
};

export default About;