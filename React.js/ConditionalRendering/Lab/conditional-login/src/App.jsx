import React, { useState } from "react";

 export const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome back!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please log in.</h1>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}


