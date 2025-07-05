import React from 'react';
import "./Pages.css";
const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to TechVoyage</h2>
      <p>
        Your journey through the world of technology starts here. Explore our site
        to learn about the latest innovations and tech trends.
      </p>

      <div className="featured-section">
        <h3>Featured Content</h3>
        <div className="featured-items">
          <div className="featured-item">
            <h4>Latest Technologies</h4>
            <p>Discover the cutting-edge technologies shaping our future.</p>
          </div>
          <div className="featured-item">
            <h4>Tech Tutorials</h4>
            <p>Step-by-step guides to help you master new skills.</p>
          </div>
          <div className="featured-item">
            <h4>Industry Insights</h4>
            <p>Analysis and perspectives on the tech industry.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
