import React from "react";
import demo from "../../img/hal.svg";
import { Link } from "react-router-dom";


function HalalHero() {
  return (
    <section className="halal-sec">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mb-3 offset-md-2 learn-top" >
            <h2 className="">Financial freedom shouldn't come at the cost of your belief, but why can't you have both?</h2>
            <h6 className="my-5 desktop">Our beliefs and values are designed to help you live your best life. What it wasn't designed to do was, cost us our financial freedom. You can have both. And at Ardilla, we are committed to ensuring you do.</h6>
            {/* <h6 className="my-5 mobile">Join 33,000+ Muslims who trust us to identify, manage and grow their wealth in halal-compliant investments.</h6> */}
            <Link className='btn btn-outline-primary px-5 py-3 ardilla-btn fs-6' to="/login">Get Started</Link>
          </div>
          <div className="col-md-5 offset-md-1 p-0 text-end">
            <img src={demo} alt="" className="img-fluid" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default HalalHero; 