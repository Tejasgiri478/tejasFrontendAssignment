import { useState, useEffect } from "react";
import { auth, signInWithGoogle, logOut } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Auth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="auth-container">
      {user ? (
        <div className="user-info">
          <img src={user.photoURL} alt="Profile" className="profile-image" />
          <div className="user-details">
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
          </div>
          <button onClick={handleSignOut} className="sign-out-btn">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="sign-in-container">
          <h2>Please sign in to continue</h2>
          <button onClick={handleSignIn} className="sign-in-btn">
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default Auth;
