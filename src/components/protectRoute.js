import { Navigate } from "react-router-dom";
// import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const data = {
    user: true,
    guest: false,
  };

  if (!data.user && data.guest) {
    return <Navigate to={"/sign-up"} />;
  }

  if (data.guest) {
    return <Navigate to={"/404"} />;
  }

  return children;
};

export default ProtectedRoute;
