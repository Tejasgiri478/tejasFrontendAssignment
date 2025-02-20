import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-semibold">Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-4 py-2 bg-blue-500 btn-outline-sucess rounded-lg shadow-md hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
