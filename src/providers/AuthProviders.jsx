import { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const auth = getAuth(app);
  // create account
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // logOut account
  const logOut = () => {
    return signOut(auth);
  };
  // observe user activity

//   login user
  const signIn = () => {
    return signInWithEmailAndPassword(auth, email, password)
  } 
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        // setLoading(false);
        setUser(currentUser)
    })

    return () => {
        return unsubscribe();
    }
}, [])
  const authInfo = {
    user,
    createAccount,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
