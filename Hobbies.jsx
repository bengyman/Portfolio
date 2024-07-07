import React from 'react';
import './components.css';
import hobbyImage from '../images/WhatsApp Image 2024-07-07 at 21.31.50_cc8e3ee8.jpg'; // Adjust the import path as per your actual folder structure

const Hobbies = () => {
  return (
    <section id="hobbies">
      <h1>My Hobbies</h1>
      <p>Although I enjoy coding, I also have other hobbies as well. One of my main hobbies is collecting trading and collectible cards. I enjoy Pokemon cards and football cards. I have several high-value Pokemon and Football cards that are worth in the hundreds.</p>
      
      <p>Other than collecting cards, I also love playing football and supporting football. I love supporting the Premier League club Chelsea and follow them heavily. I enjoy playing football with my friends once in a while to release some stress.</p>
      
      {/* Image rendered below paragraphs */}
      <img src={hobbyImage} alt="My Hobby Image" className="hobby-image" />
    </section>
  );
};

export default Hobbies;
