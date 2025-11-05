import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user, loading);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const sendPassResetEmailFunc = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL })
      .then(() => {
        setUser((prevUser) => ({
          ...prevUser,
          displayName,
          photoURL,
        }));
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    login,
    loading,
    setLoading,
    signInWithEmailFunc,
    sendPassResetEmailFunc,
    updateProfileFunc,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
