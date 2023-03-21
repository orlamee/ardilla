import React from "react";
import error from "../img/404.svg";
import { Link } from "react-router-dom";


function Error() {
  return (
    <div className="container error">
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3 oops">
          <h1>Oops!</h1>
          <h6 className="my-3">We can’t seem to find the page<br/>you’re looking for.</h6>
          <h6 className="mb-5">Error code:404</h6>
          <Link className='btn btn-outline-primary px-5 py-3 ardilla-btn' to="/">Return to Homepage</Link>
          <h3 className="pe-auto" style={{marginTop: "163px"}}>Visit our help center</h3>
        </div>
        <div className="col-md-8">
          <img src={error} alt="404" className="img-fluid w-100" />
        </div>
      </div>
    </div>
  )
}

export default Error;