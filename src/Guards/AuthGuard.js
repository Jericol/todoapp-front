import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { PublicRoutes } from "../routes/routes";
const AuthGuard = () => {
  // const auth = useAuth();
  const auth = JSON.parse(localStorage.getItem("userData"));
  return auth?.username ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;
