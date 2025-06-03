import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import App from './components/App.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx'; 
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Navbar from './components/NavBar.jsx';
import ErrorPage from './components/ErrorPage.jsx'; 



const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <App>{children}</App>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: 'about', element: <About /> },
      { path: 'experience', element: <Experience /> },
      { path: 'projects', element: <Projects /> },
      { path: 'resume', element: <Resume /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>
);