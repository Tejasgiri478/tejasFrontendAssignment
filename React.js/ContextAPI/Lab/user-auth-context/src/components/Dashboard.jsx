import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.username}!</h2>
      <p>You are now logged in.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
