import React from "react";
import "./Pages.css";
const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to TechVoyage! We are a technology company dedicated to
        exploring the latest innovations and sharing our knowledge with the
        world.
      </p>
      <p>
        Our team of experts is passionate about technology and committed to
        providing high-quality content and services to our users.
      </p>
      <div className="team-section">
        <h3>Our Team</h3>
        <div className="team-members">
          <div className="team-member">
            <h4>John Doe</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <h4>Jane Smith</h4>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <h4>Mike Johnson</h4>
            <p>Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
