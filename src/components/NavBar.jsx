import React, { useState, useEffect } from 'react';
import { NavLink ,Link} from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMobile(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <NavLink to="/" className="navbar-brand" onClick={closeMobileMenu}>
        David Nduati
      </NavLink>
      
      <div className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={closeMobileMenu}
        >
          Home
        </NavLink>

        <NavLink 
          to="about" 
          smooth={true} 
          className="nav-link"
          onClick={closeMobileMenu}
        >
          About
        </NavLink>
        <NavLink 
          to="blogs" 
          smooth={true} 
          className="nav-link"
          onClick={closeMobileMenu}
        >
          Blogs
        </NavLink>

        <NavLink 
          to="/experience" 
          smooth={true} 
          className="nav-link"
          onClick={closeMobileMenu}
        >
          Experience
        </NavLink>

        <NavLink 
          to="/projects" 
          smooth={true} 
          className="nav-link"
          onClick={closeMobileMenu}
        >
          Projects
        </NavLink>

        <NavLink 
          to="/resume" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={closeMobileMenu}
        >
          Download Resume
        </NavLink>

        <Link 
          to="/contact" 
          smooth={true} 
          className="nav-link"
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
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