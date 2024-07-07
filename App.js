import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './styles.css';
import AboutMe from './components/AboutMe';
import Qualifications from './components/Qualifications';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import LandingPage from './components/LandingPage';
import CustomScrollBar from './components/CustomScrollBar';

function App() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const handleMouseMove = (e) => {
    if (e.clientY < 60) {
      setNavbarVisible(true);
    } else {
      setNavbarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <Navbar visible={navbarVisible} />
      <CustomScrollBar>
        <div id="landing">
          <LandingPage />
        </div>
        <div id="aboutme">
          <AboutMe />
        </div>
        <div id="qualifications">
          <Qualifications />
        </div>
        <div id="journey">
          <Journey />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="hobbies">
          <Hobbies />
        </div>
      </CustomScrollBar>
    </div>
  );
}

export default App;
