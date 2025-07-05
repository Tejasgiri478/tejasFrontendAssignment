import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Content = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`p-6 min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Content Section</h2>
        <p className="mb-4">
          This is a simple demonstration of using React Context API to implement
          a theme toggle feature. The theme state is shared across multiple
          components without prop drilling.
        </p>
        <div
          className={`p-4 rounded-lg ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } shadow`}
        >
          <h3 className="text-xl font-semibold mb-2">
            Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </h3>
          <p>
            The theme context is being consumed by both the Header and Content
            components. Try clicking the toggle button in the header to switch
            between light and dark modes.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Content;
