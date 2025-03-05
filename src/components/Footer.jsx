import React from 'react';
import './styles/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    <div className="social-links">
      <a href="mailto:davidnduati78@gmail.com?subject=Hello&body=I wanted to reach out...">Email</a>

        <a href="https://linkedin.com/in/david-nduati">LinkedIn</a>
        <a href="https://github.com/D-nduati">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;