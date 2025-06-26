import React from 'react';
import './styles/About.css';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiHtml5, SiCss3 } from 'react-icons/si';
// import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';


const About = () => {
  const skills = [
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
  ];

// const skills = [
//   { name: "React", icon: <FaReact /> },
//   { name: "Node.js", icon: <FaNodeJs /> },
//   { name: "JavaScript", icon: <FaJs /> },
//   { name: "HTML5", icon: <FaHtml5 /> },
//   { name: "CSS3", icon: <FaCss3Alt /> },
//   { name: "Git", icon: <FaGitAlt /> },
// ];

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

        <div className="experience-section">
          <h3 className="subsection-title">My Journey</h3>
          <ul className="timeline">
            <li>
              <span className="timeline-date">JUL 2024 - PRESENT</span>
              <span className="timeline-role">Full-Stack Developer</span>
              <span className="timeline-company">Lanstar Tecnologies Limited (Nairobi)</span>
              <p className="timeline-description">
                Develop soft wares with the latest web technologies that are seamless
                to use.
                Maintain, implement and solve different problems users faces            </p>
            </li>
            <li>
              <span className="timeline-date">Jan 2024 -May 2024</span>
              <span className="timeline-role">Intern Web Developer</span>
              <span className="timeline-company">The Jitu (Nyeri)</span>
              <p className="timeline-description">
                Spearheaded the development of user-friendly web applications using
                ReactJS and Redux, improving user satisfaction by 30%.            </p>
            </li>
            <li>
              <span className="timeline-date">MAR 2020 - DEC2020</span>
              <span className="timeline-role">Attachment Web Developer</span>
              <span className="timeline-company">Appllo Comptronics (Murang`a,)</span>
              <p className="timeline-description">
                Enhanced user engagement through modern UI/UX design.
                Integrated third-party APIs, expanding functionality and improving
                user experience.
                Collaborated on a team project to develop a Library Store web
                application, improving team efficiency using GitHub.            </p>
            </li>
            <li>
              <span className="timeline-date">2019 - 2023</span>
              <span className="timeline-role">B.Sc. in Computer Science</span>
              <span className="timeline-company">Dedan Kimathi University Of Tecnology</span>
              <p className="timeline-description">
                Specialized in Software Engineering, Algorithms, and Database Systems.
              </p>
            </li>
          </ul>
        </div>

        <h3 className="skills-title">Technical Skills</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              // data-aos="fade-up"
              // data-aos-delay={index * 100}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;