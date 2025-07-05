import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions/counterActions";
import "./App.css";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <h1>Redux Counter App</h1>
      <div className="counter-container">
        <h2>Count: {count}</h2>
        <div className="button-container">
          <button
            onClick={() => dispatch(increment())}
            className="increment-btn"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="decrement-btn"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
