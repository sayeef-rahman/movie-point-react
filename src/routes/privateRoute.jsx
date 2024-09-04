import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth/useAuth";
import Loader from "../modules/components/loader/loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
