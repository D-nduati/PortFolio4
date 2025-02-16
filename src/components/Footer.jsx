import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="social-links">
        <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
        <a href="https://github.com/yourusername">GitHub</a>
        <a href="mailto:youremail@example.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;