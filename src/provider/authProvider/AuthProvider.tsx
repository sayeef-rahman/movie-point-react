import React, { createContext, useEffect, useState } from "react";
import { AuthProviderProps, CreateUserProps } from "./AuthProvider.types";
import { app } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// import axios from "axios";

export const AuthContext = createContext<unknown | null>(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createUser = ({ email, password }: CreateUserProps) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = ({ email, password }: CreateUserProps) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const profileUpdate = (name: string) => {
    setLoading(true);
    if (auth?.currentUser) {
      return updateProfile(auth?.currentUser, {
        displayName: name,
      });
    } else return;
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   if (currentUser) {
    // setUser(currentUser);
    //     axios
    //       .post(`https://movie-app-server-eight.vercel.app/jwt`, {
    //         email: currentUser?.email,
    //       })
    //       .then((data) => {
    //         localStorage.setItem("access-token", data.data.token);
    //         setLoading(false);
    //       });
    //   } else {
    //     localStorage.removeItem("access-token");
    //   }
    // });
    // return () => {
    //   unsubscribe();
    // };
  }, []);

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    profileUpdate,
    logout,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
