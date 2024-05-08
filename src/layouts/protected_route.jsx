import { Outlet, Navigate } from "react-router-dom";
import Auth from "./auth";

const ProtectedRoutes = () => {
  const token = Auth();
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
