import React, { useState, createContext } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  //function to sign in with Google
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //for logout function
  const signOutUser = () => {
    signOut(getAuth(app))
      .then(() => {
        setUser(null); // Clear the user state on sign out
      })
      .catch((error) => {
        notify("Error signing out: " + error.message); // Notify on sign out error
      });
  };

  const contextValue = {
    user,
    setUser,
    googleSignIn,
    signOutUser,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
