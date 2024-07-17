import { useContext } from "react";
import { AuthContext } from "../../provider/authProvider";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
