import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`p-4 ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Theme Toggle Demo</p>
        <p className="text-sm mt-1">Built with React Context API</p>
      </div>
    </footer>
  );
};

export default Footer;
