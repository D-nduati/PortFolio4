import React from 'react';
import './styles/Resume.css'
const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume & Cover Letter</h2>
      <div className="download-buttons">
        <a href="/path/to/resume.pdf" download className="download-button">
          Download Resume
        </a>
        <a href="/path/to/cover-letter.pdf" download className="download-button">
          Download Cover Letter
        </a>
      </div>
    </section>
  );
};

export default Resume;