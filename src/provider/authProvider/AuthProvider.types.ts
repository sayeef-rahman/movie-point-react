import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}
export interface CreateUserProps {
  email: string;
  password: string;
}
