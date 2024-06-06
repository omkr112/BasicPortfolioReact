import React from 'react';
import Profile from './Profile.jpg';
const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <img src={Profile} alt="Prof" className="profile-image" />
        <p>
          Welcome to my portfolio! I am passionate about creating innovative solutions using web technologies. 
          With experience in frontend development and a keen eye for design, I strive to deliver high-quality 
          products that delight users. I am proficient in HTML, CSS, JavaScript, and various frontend 
          frameworks such as React. Feel free to explore my projects.
        </p>
      </div>
    </section>
  );
};

export default About;
