import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let user = false;
  // JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to={"/sign-up"} />;
  }

  return children;
};

export default ProtectedRoute;
