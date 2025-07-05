import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`p-4 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Theme Toggler</h1>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-md ${
            theme === "dark"
              ? "bg-gray-600 hover:bg-gray-700"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
