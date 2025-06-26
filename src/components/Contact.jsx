import React from 'react';
import './styles/Contact.css'
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-links"><button>
      <a href="mailto:davidnduati78@gmail.com?subject=Hello&body=I wanted to reach out...">Email</a></button>

      <button>  <a href="https://linkedin.com/in/david-nduati">LinkedIn</a></button>
       <button> <a href="https://github.com/D-nduati">GitHub</a></button>
      </div>
    </section>
  );
};

export default Contact;