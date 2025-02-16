import React from 'react';
import './styles/Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Lanstar Technologies</h3>
          <p>Software Developer | May 2024 - Present</p>
          <ul>
            <li>Developed software with the latest web technologies.</li>
            <li>Maintained and implemented solutions for user problems.</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>Freelance Web Developer</h3>
          <p>Remote | Jan 2024 - May 2024</p>
          <ul>
            <li>Developed custom websites tailored to client needs.</li>
            <li>Enhanced user engagement through modern UI/UX design.</li>
          </ul>
        </div>
        {/* Add more experiences */}
      </div>
    </section>
  );
};

export default Experience;