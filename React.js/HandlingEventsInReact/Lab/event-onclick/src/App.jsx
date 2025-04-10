import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("text-green-500"); // Step 1: Add state for color

  function handleClick() {
    setColor("text-red-500"); // Step 2: Update state to change color
    document.getElementById("myDiv").innerText = "Button Clicked!"; // Step 3: Change text
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p id="myDiv" className={`text-4xl font-extrabold ${color}`}>
          Button Not Clicked!
        </p>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        >
          Click Me
        </button>
      </div>
    </>
  );
}
