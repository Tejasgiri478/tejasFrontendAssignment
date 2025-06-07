import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Counter App with useState Hook
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center mb-6">
            <p className="text-lg font-medium text-gray-700">
              Current count: <span className="text-blue-600">{count}</span>
            </p>
          </div>
          <div className="space-x-4 mb-6 flex justify-center">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Increment count
            </button>
            <button
              onClick={() => setCount((c) => c - 1)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Decrement count
            </button>
          </div>
          <div className="space-x-4 mb-6 flex justify-center">
            <button
              onClick={() => setCount(0)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg w-75   transition duration-200"
            >
              Reset count
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
