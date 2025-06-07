import { useState } from "react";
import { Component } from "react";
import "./App.css";

class Logger extends Component {
  componentDidUpdate(prevProps) {
    console.log("Component updated!", {
      previousCount: prevProps.count,
      currentCount: this.props.count,
    });
  }

  componentWillUnmount() {
    console.log("Component is unmounting!");
  }

  render() {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <p className="text-lg font-medium text-gray-700">
          Current count: {this.props.count}
        </p>
      </div>
    );
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [showLogger, setShowLogger] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Component Lifecycle Demo
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-x-4 mb-6 flex justify-center">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Increment count ({count})
            </button>
            <button
              onClick={() => setShowLogger(!showLogger)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              {showLogger ? "Hide" : "Show"} Logger
            </button>
          </div>

          {showLogger && <Logger count={count} />}
        </div>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Open the browser console (F12) to see the lifecycle messages
        </p>
      </div>
    </div>
  );
}

export default App;
