import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Auth from "./Auth";
import ItemCrud from "./ItemCrud";

function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="home-container">
      <h1>Firebase Authentication and CRUD App</h1>

      <Auth />

      {user ? (
        <div className="authenticated-content">
          <ItemCrud />
        </div>
      ) : (
        <div className="unauthenticated-message">
          <p>Please sign in to manage your items.</p>
        </div>
      )}
    </div>
  );
}

export default Home;
