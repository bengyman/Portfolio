import React from 'react';
import './components.css';
import qualificationsImage from '../images/WhatsApp Image 2024-07-07 at 12.33.51_8a817c1d.jpg'; // Adjust the path as necessary

const Qualifications = () => {
  return (
    <section id="qualifications">
      <div className="qualifications-content">
        <h1>My Qualifications</h1>
        <p>
          Certifications: Certified in Python and HTML through MIMO, demonstrating proficiency in web development fundamentals.
          <br /><br />
          Achievements: Winner of multiple robotics competitions during my time in the robotics club, showcasing problem-solving abilities and teamwork skills from a young age.
          <br /><br />
          Skills: Proficient in SQL, React, JavaScript, HTML, Python, and C#, with hands-on experience in developing robust web applications and solving complex technical challenges.
          <br /><br />
          Education: Currently pursuing a diploma in Information Technology at Nanyang Polytechnic, further enhancing my expertise and knowledge in the field.
        </p>
        <div className="qualifications-image">
          <img src={qualificationsImage} alt="Qualifications" />
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
