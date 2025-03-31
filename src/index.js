import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router";import App from './components/App.jsx'
import About from './components/About.jsx';
import Experience from './components/Exerience.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/experience",
		element: <Experience />,
	},
	{
		path: "/projects",
		element: <Projects />,
	},
	{
		path: "/resume",
		element: <Resume />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
]);




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


	<RouterProvider router={router} />
);


