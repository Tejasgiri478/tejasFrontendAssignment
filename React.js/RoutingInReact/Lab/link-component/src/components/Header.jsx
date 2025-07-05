import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>TechVoyage</h1>
      </div>
      <div className="nav-container">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
