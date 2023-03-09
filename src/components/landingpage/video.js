import React from "react";
import fly from "../../img/fly.svg";


function Videos() {
  return(
    <section className="videos io-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="mb-5"><span style={{color: "#3D0072"}}>Unlimited</span> Investment<br/>Opportunities </h2>
            <h5 className="mb-5 w-75">Plan towards your future by investing with ardilla,  Grow your money confidently and securely with the available investment opportunities</h5>
            <button type="button" class="btn btn-outline-primary new-line">Learn more about investments <img src={fly} alt="fly" className="img-fluid ms-3" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos;