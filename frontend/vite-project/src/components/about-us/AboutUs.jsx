import React from 'react';
import './AboutUs.css';


function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Learn more about our mission, team, and values.</p>
      </header>

      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>
          At Student Hub, we are dedicated to providing students with a comprehensive platform that supports their academic journey.
          Our mission is to streamline student management with tools for tracking attendance, progress, and staying organized.
        </p>
      </section>

      <section className="about-us-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/me.jpg" alt="Team Member 1" className="team-photo" />
            <h3>Ramya</h3>
           
          </div>
          <div className="team-member">
            <img src="/gayatri.jpg" alt="Team Member 2" className="team-photo" />
            <h3>Gayathri</h3>
            
          </div>
          <div className="team-member">
            <img src="/thanuja.png" alt="Team Member 3" className="team-photo" />
            <h3>Tanuja</h3>
            
          </div>
        </div>
      </section>

      <section className="about-us-contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need further information, feel free to reach out to us at <a href="mailto:contact@studenthub.com">contact@studenthub.com</a>.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;