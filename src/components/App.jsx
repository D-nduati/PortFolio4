import React from 'react';
import Home from './Home';
import About from './About';
import Experience from './Exerience';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Navbar from './NavBar' 
import Footer from './Footer'; // Optional: Add a Footer component
import './App.css'; // Global styles

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <Home />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Resume Section */}
      <Resume />

      {/* Contact Section */}
      <Contact />

      {/* Footer (Optional) */}
      <Footer />
    </div>
  );
};

export default App;