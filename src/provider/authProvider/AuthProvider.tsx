import React, { createContext } from "react";
import { AuthProviderProps } from "./AuthProvider.types";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <div>A</div>;
};
