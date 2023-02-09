import React from "react";
import { Link } from "react-router-dom";


function Videos() {
  return(
    <section className="videos">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h2 className="mb-5"><span style={{color: "#3D0072"}}>Unlimited</span> Investment Opportunities </h2>
            <h5 className="mb-5">Plan towards your future by investing with ardilla,  Grow your money confidently and securely with the available investment opportunities</h5>
            <Link>Learn more about investments <i className="bi bi-chevron-right"></i></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos;