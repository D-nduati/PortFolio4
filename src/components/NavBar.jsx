import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './styles/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  // Change navbar color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">David Nduati</div>
      <div className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <Link to="/home" smooth={true} onClick={() => setIsMobile(false)}>Home</Link>
        <Link to="/about" smooth={true} onClick={() => setIsMobile(false)}>About</Link>
        <Link to="/experience" smooth={true} onClick={() => setIsMobile(false)}>Experience</Link>
        <Link to="/projects" smooth={true} onClick={() => setIsMobile(false)}>Projects</Link>
        <Link to="/resume" smooth={true} onClick={() => setIsMobile(false)}>Download Resume</Link>
        <Link to="/contact" smooth={true} onClick={() => setIsMobile(false)}>Contact</Link>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
