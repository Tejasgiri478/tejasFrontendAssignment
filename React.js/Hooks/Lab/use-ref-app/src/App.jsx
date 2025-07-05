import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  // State that will cause re-renders when updated
  const [count, setCount] = useState(0);

  // Regular variable - will be reset on each render
  let regularVariable = 0;
  // useRef - persists between renders without causing re-renders
  const refVariable = useRef(0);

  // This will run on every render
  console.log("Component rendered!");

  // Function to update state (causes re-render)
  const incrementState = () => {
    setCount(count + 1);
  };

  // Function to update regular variable (doesn't persist between renders)
  const incrementRegularVariable = () => {
    regularVariable += 1;
    console.log("Regular variable:", regularVariable);
  };

  // Function to update ref variable (persists but doesn't cause re-render)
  const incrementRefVariable = () => {
    refVariable.current += 1;
    console.log("Ref variable:", refVariable.current);
  };

  // Demo of useRef for DOM element reference
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  // useEffect to demonstrate when the component renders
  useEffect(() => {
    console.log("Component mounted or updated");

    return () => {
      console.log("Component will unmount or update");
    };
  }, [count]); // Only re-run when count changes

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <h1 className="text-2xl font-bold mb-4">
        useRef Demo: Avoiding Re-renders
      </h1>

      <div className="mb-6 p-4 border border-gray-200 rounded">
        <h2 className="text-xl font-semibold mb-2">Current Values:</h2>
        <p className="mb-1">
          <strong>State (causes re-render):</strong> {count}
        </p>
        <p className="mb-1">
          <strong>Regular Variable (resets on render):</strong>{" "}
          {regularVariable}
        </p>
        <p className="mb-1">
          <strong>Ref Variable (persists without re-render):</strong>{" "}
          {refVariable.current}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          onClick={incrementState}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update State
        </button>

        <button
          onClick={incrementRegularVariable}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Regular Var
        </button>

        <button
          onClick={incrementRefVariable}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Ref Var
        </button>
      </div>

      <div className="mb-6 p-4 border border-gray-200 rounded">
        <h2 className="text-xl font-semibold mb-2">DOM Reference Example:</h2>
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow"
            placeholder="This input can be focused with useRef"
          />
          <button
            onClick={focusInput}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Focus Input
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">
          How useRef Prevents Re-renders:
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Open the console to see render logs</li>
          <li>Click "Update State" - notice the component re-renders</li>
          <li>
            Click "Update Regular Var" - the value increases in console but
            resets on screen because regular variables reset on render
          </li>
          <li>
            Click "Update Ref Var" - the value persists between renders but
            doesn't cause re-renders
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
