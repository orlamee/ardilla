import React from "react";
import Error from "../components/error404";
// import Header from "../components/navBar";


function ErrorPage() {
  return (
    <div className="bg-white vh-100">
      {/* <Header/> */}
      <Error/>
    </div>
  )
}

export default ErrorPage;