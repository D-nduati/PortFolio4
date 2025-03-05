import React, { useState } from 'react';
import './styles/Projects.css';
import img1 from '../assets/img1.png'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Social Media Application',
      description: 'Designed a fully-functional social media platform with real-time updates and notifications.',
      technologies: ['ReactJS', 'Node.js', 'MongoDB'],
      image: img1,  
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Developed an e-commerce platform with shopping cart functionality and user authentication.',
      technologies: ['ReactJS', 'Express', 'MongoDB'],
      image: 'https://via.placeholder.com/600x400?text=E-Commerce+Platform',  // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Created a personal portfolio website to showcase my skills and projects.',
      technologies: ['ReactJS', 'CSS'],
      image: 'https://via.placeholder.com/600x400?text=Portfolio+Website',  // Replace with actual image URL
    },
    {
      id: 4,
      title: 'Task Manager Application',
      description: 'Built a task manager app with the ability to add, update, and delete tasks.',
      technologies: ['ReactJS', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/600x400?text=Task+Manager+App',  // Replace with actual image URL
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Developed a blog platform with CRUD functionality for managing posts.',
      technologies: ['ReactJS', 'Node.js', 'MySQL'],
      image: 'https://via.placeholder.com/600x400?text=Blog+Platform',  // Replace with actual image URL
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Created a weather dashboard that fetches real-time weather data from an API.',
      technologies: ['ReactJS', 'OpenWeather API'],
      image: 'https://via.placeholder.com/600x400?text=Weather+Dashboard',  // Replace with actual image URL
    },
    {
      id: 7,
      title: 'Chat Application',
      description: 'Built a real-time chat application using WebSockets for instant messaging.',
      technologies: ['ReactJS', 'Socket.io'],
      image: 'https://via.placeholder.com/600x400?text=Chat+App',  // Replace with actual image URL
    },
    {
      id: 8,
      title: 'Finance Tracker',
      description: 'Developed an application to track expenses, incomes, and manage budgets.',
      technologies: ['ReactJS', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/600x400?text=Finance+Tracker',  // Replace with actual image URL
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => openModal(project)}>
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <p><strong>Technologies Used:</strong> {selectedProject.technologies.join(', ')}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;


// import React, { useState } from 'react';
// import './styles/Projects.css';

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: 'Social Media Application',
//       description: 'Designed a fully-functional social media platform with real-time updates and notifications.',
//       technologies: ['ReactJS', 'Node.js', 'MongoDB'],
//       image: 'url-to-image-1',
//     },
//     {
//       id: 2,
//       title: 'E-Commerce Website',
//       description: 'Built a scalable e-commerce platform with payment integration and order management.',
//       technologies: ['ReactJS', 'Express.js', 'MongoDB', 'Stripe'],
//       image: 'url-to-image-2',
//     },
//     {
//       id: 3,
//       title: 'Real-Time Chat Application',
//       description: 'Developed a chat application with real-time messaging, user authentication, and custom emojis.',
//       technologies: ['ReactJS', 'Node.js', 'Socket.io', 'MongoDB'],
//       image: 'url-to-image-3',
//     },
//     {
//       id: 4,
//       title: 'Task Management System',
//       description: 'Created a task management application to track daily tasks, set priorities, and collaborate with teams.',
//       technologies: ['ReactJS', 'Node.js', 'MongoDB', 'JWT'],
//       image: 'url-to-image-4',
//     },
//     {
//       id: 5,
//       title: 'Blog Platform',
//       description: 'Developed a blog platform with features for writing, editing, and commenting on articles.',
//       technologies: ['ReactJS', 'Node.js', 'MongoDB', 'Express.js'],
//       image: 'url-to-image-5',
//     },
//     {
//       id: 6,
//       title: 'Weather Forecasting App',
//       description: 'Built a weather app that fetches real-time weather data from an API and displays forecasts.',
//       technologies: ['ReactJS', 'OpenWeather API', 'CSS'],
//       image: 'url-to-image-6',
//     },
//     {
//       id: 7,
//       title: 'Portfolio Website',
//       description: 'Designed and developed a personal portfolio to showcase my skills and projects.',
//       technologies: ['ReactJS', 'CSS', 'JavaScript'],
//       image: 'url-to-image-7',
//     },
//     {
//       id: 8,
//       title: 'Fitness Tracker',
//       description: 'Created a fitness tracker application to monitor physical activity and progress over time.',
//       technologies: ['ReactJS', 'Node.js', 'MongoDB'],
//       image: 'url-to-image-8',
//     },
//   ];

//   const openModal = (project) => {
//     setSelectedProject(project);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section id="projects" className="projects-section">
//       <h2>Projects</h2>
//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div key={project.id} className="project-card" onClick={() => openModal(project)}>
//             <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>
//       {selectedProject && (
//         <div className="project-modal">
//           <div className="modal-content">
//             <h3>{selectedProject.title}</h3>
//             <p>{selectedProject.description}</p>
//             <p><strong>Technologies Used:</strong> {selectedProject.technologies.join(', ')}</p>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Projects;


// import React, { useState } from 'react';
// import './styles/Projects.css';

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: 'Social Media Application',
//       description: 'Designed a fully-functional social media platform with real-time updates and notifications.',
//       technologies: ['ReactJS', 'Node.js', 'MongoDB'],
//       image: 'url-to-image',
//     },
  
//   ];

//   const openModal = (project) => {
//     setSelectedProject(project);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section id="projects" className="projects-section">
//       <h2>Projects</h2>
//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div key={project.id} className="project-card" onClick={() => openModal(project)}>
//             <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>
//       {selectedProject && (
//         <div className="project-modal">
//           <div className="modal-content">
//             <h3>{selectedProject.title}</h3>
//             <p>{selectedProject.description}</p>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Projects;