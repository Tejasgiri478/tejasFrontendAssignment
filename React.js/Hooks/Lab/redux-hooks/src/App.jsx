import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/actions";
import "./App.css";

function App() {
  // Using useSelector to access state from Redux store
  const counter = useSelector((state) => state.counter);

  // Using useDispatch to dispatch actions to Redux store
  const dispatch = useDispatch();

  // Handlers for dispatching actions
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="app-container">
      <h1>Redux Counter with Hooks</h1>

      <div className="counter-display">
        <h2>{counter}</h2>
      </div>

      <div className="counter-controls">
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      <div className="explanation">
        <h3>Redux Hooks Used:</h3>
        <ul>
          <li>
            <strong>useSelector</strong> - Used to access the counter value from
            Redux store
          </li>
          <li>
            <strong>useDispatch</strong> - Used to dispatch actions using action
            creators
          </li>
        </ul>
      </div>

      <div className="dev-tools-info">
        <h3>Redux DevTools:</h3>
        <p>
          This app is configured with Redux DevTools. Open your browser's
          developer tools and navigate to the Redux tab to see the state changes
          in real-time.
        </p>
        <div className="state-preview">
          <h4>Current Redux State:</h4>
          <pre>{JSON.stringify({ counter }, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
