import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = Cookies.get("token");

  return user ? children : <Navigate to={"/login"} replace={true} />;
};

export default ProtectedRoute;
