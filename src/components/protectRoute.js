import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const user = Cookies.get("token");

  if (!user) {
    return <Navigate to={"/sign-up"} />;
  }

  return children;
};

export default ProtectedRoute;
