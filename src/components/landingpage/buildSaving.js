import React from "react";
import { Link } from "react-router-dom";
import calculate from "../../img/calculator.svg"


function Build() {
  return(
    <section className="build-saving">
      <div className="container">
        <div className="row" data-aos="slide-right" data-aos-duration="1000">
          <div className="col">
            <h2 className="mb-3">We’re keen on<br/><span style={{color: "#E8356D"}}>transparency.</span></h2>
          </div>
        </div>
        <div className="row top-products">
          <div className="col-md-6 top-products mb-3">
            <h6>Calculate your interests everytime you<br/>save on our platform</h6>
            <div className="mt-5">
              <Link className='btn btn-outline-primary px-5 py-4 ardilla-btn fs-6' to="/">Calculate now</Link>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <img src={calculate} alt="calculator" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Build;