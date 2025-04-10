import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-semibold">Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-4 py-2 btn btn-success"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="mt-2 px-4 py-2 ms-2 btn btn-danger"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
