import React from 'react';
import './components.css';
import benjaminImage from '../images/WhatsApp Image 2024-07-07 at 11.30.25_a673eaa4.jpg'; // Adjust the path as necessary

const AboutMe = () => {
  return (
    <section id="aboutme">
      <h1>About Me</h1>
      <div className="aboutme-content">
        <div className="aboutme-image">
          <img src={benjaminImage} alt="Benjamin Yew" />
        </div>
        <div className="aboutme-text">
          <p>
            Hello! I'm Benjamin Yew and this is my portfolio. I'm a passionate software developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in technologies like React, Node.js, and Sequelize, I thrive on solving complex problems and building innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
