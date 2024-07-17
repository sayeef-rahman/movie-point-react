import React, { createContext, useState } from "react";
import { AuthProviderProps, CreateUserProps } from "./AuthProvider.types";
import { app } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createUser = ({ email, password }: CreateUserProps) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  return <div>A</div>;
};
