import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Our Website</h1>
      <p className="text-lg mb-2 text-center">This is the home page of our React Router application.</p>
      <p className="text-md text-gray-600 text-center">Feel free to explore our website using the navigation.</p>
      <div className="text-center mt-6">
        <Link to="/about" className="text-blue-500 hover:underline">
          Go to About Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
