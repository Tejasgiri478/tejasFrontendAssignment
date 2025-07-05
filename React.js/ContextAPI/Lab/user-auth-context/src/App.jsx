import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useAuth } from "./contexts/AuthContext";
import "./App.css";

// Main content component that uses the auth context
const MainContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container">
      {isAuthenticated ? <Dashboard /> : <Login />}
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <header>
          <h1>User Authentication Demo</h1>
        </header>
        <main>
          <MainContent />
        </main>
      </div>
    </AuthProvider>
  );
};

export default App;
