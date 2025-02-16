import React from 'react';
import './styles/Contact.css'
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:youremail@example.com">Email</a>
        <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
        <a href="https://github.com/yourusername">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;