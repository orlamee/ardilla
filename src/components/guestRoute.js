import { Navigate } from "react-router-dom";
// import Cookies from "js-cookie";

const GuestRoute = ({ children }) => {
  // const activated = Cookies.get("token");
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) {
    return <Navigate to={"/sign-up"} replace={true} />;
  }

  return children;
};

export default GuestRoute;
