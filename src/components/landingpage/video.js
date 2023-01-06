import React from "react";
import { Link } from "react-router-dom";
import opp from "../../img/opp.svg";
function Videos() {
  return(
    <section className="videos">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="d-inline-flex badge">Up to 30% returns</div>
            <h2 className="mt-5"><span style={{color: "#3D0072"}}>Unlimited</span> Investment Opportunities </h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 top-products mb-3">
            <h5 className="mb-5">Plan towards your future by investing with ardilla,  Grow your money<br/>confidently and securely with the available investment oppurtuinities  </h5>
            <Link>Learn more about investments <i className="bi bi-chevron-right"></i></Link>
          </div>
          <div className="col-md-6">
            <img src={opp} alt="opportunities" className="img-fluid" />
          </div>
        </div>
        <div className="row top-access">
          <div className="col-md-9">
            <h2><span style={{color: "#E8356D"}}>Access More</span><span style={{color: "#3D0072"}}> With Your Money</span></h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos;