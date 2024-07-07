import React from 'react';
import './components.css';
import AnimatedTrail from './AnimatedTrail'; // Replace with the correct import path

const Projects = () => {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <p className="project-description">
        Ecoutopia<br />
        Ecoutopia is a collaborative project where my team and I developed a fully functional e-commerce website specializing in plant sales. Leveraging HTML, Flask, JavaScript, CSS, and Bootstrap, we created a seamless user experience with robust backend functionality. This project allowed me to enhance my skills in web development, teamwork, and problem-solving, contributing to a successful implementation that met both functional and aesthetic goals.
      </p>

      <p className="project-description">
        FloralHaven<br />
        FloralHaven is a website for community center residents. It offers courses that teach about sustainability and has other functionalities like rewards and a forum. It is currently a work in progress.
      </p>

      <p>
        I also have multiple smaller projects that I am currently working on. Here is one using React!:
      </p>
      
      <div style={{ marginBottom: '200px' }}></div> {/* Add a spacer for larger gap */}
      
      <AnimatedTrail /> {/* Render the animated trail component */}
    </section>
  );
};

export default Projects;
