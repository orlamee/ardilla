import React from "react";
import halal from "../../img/arab.svg";
import { Link } from "react-router-dom";


function IslamFinance() {
  return (
    <section className="islamicfinance">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h3>Islamic Finance</h3>
            <h6 className="mt-3 mb-4">Islamic finance was established to ensure followers of Islam built wealth without<br/>compromising their values. It wasn't designed to keep them from financial freedom.</h6>
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