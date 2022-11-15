import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) {
    return <Navigate to={"/sign-up"} />;
  }

  return children;
};

export default ProtectedRoute;
