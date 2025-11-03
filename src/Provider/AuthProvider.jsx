import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return
  }

  const authData = {
    user,
    setUser,

  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
