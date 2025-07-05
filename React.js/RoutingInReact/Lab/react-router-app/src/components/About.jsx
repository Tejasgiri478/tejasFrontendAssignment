import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-lg mb-2 text-center">
        Welcome to our About page.
        <br />
        We are a company dedicated to creating amazing web experiences.
      </p>
      <p className="text-gray-600 text-center">
        Learn more about our mission and values here.
      </p>
      <div className="text-start-0 mt-6 text-center">
        <Link to="/home" className="text-blue-500 hover:underline">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default About;
