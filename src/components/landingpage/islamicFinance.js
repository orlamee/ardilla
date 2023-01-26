import React from "react";
import halal from "../../img/arab.svg";
import { Link } from "react-router-dom";


function IslamFinance() {
  return (
    <section className="islamicfinance">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h3>Demystifying Islamic Finance</h3>
            <h6 className="mt-3 mb-4">The Goal Of Islamic Finance Is To Make Life Easier And We Believe Everyone Should Have Access To Money At The Time They Need It Without Exorbitant Interest Rates That<br/>Makes It Hard To Return,</h6>
            <Link className='btn btn-outline-primary px-5 py-3 ardilla-btn fs-6' to="/login">Get Started</Link>
          </div>
          <div className="col-md-6 text-center">
            <img src={halal} alt="halal" className="img-fluid" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default IslamFinance; 