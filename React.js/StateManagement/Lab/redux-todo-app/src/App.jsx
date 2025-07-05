import React from "react";
import { RecoilRoot } from "recoil";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import ErrorBoundary from "./components/ErrorBoundary";
import { useRecoilDevTools } from "./hooks/useRecoilDevTools";
import "./App.css";

// Component to integrate with Redux DevTools
const RecoilDevToolsIntegration = () => {
  useRecoilDevTools();
  return null;
};

const App = () => {
  return (
    <RecoilRoot>
      {/* Add Redux DevTools integration with error boundary */}
      <ErrorBoundary
        fallback={
          <div>DevTools integration failed, but app continues to work.</div>
        }
      >
        <RecoilDevToolsIntegration />
      </ErrorBoundary>

      <div className="todo-app">
        <h1 className="app-title">Recoil Todo App</h1>
        <TodoForm />
        <TodoList />
        <TodoStats />
      </div>
    </RecoilRoot>
  );
};

export default App;
