import React from "react";
import Posts from "./components/Posts";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <h1>API Data Fetching Demo</h1>
        <Posts />
      </div>
    </>
  );
}

export default App;
