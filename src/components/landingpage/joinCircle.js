import React from "react";
import circle from "../../img/circle.svg";
import { Link } from "react-router-dom";


function JoinCircle() {
  return (
    <section className="circle">
      <div className="container">
        <div className="row">
          <div className="col-md-6 top-product mb-3" >
            <h2>Join a circle<br/>of <span style={{color: "#8807F7"}}>passionate <br/>savers </span>like<br/>you</h2>
            <Link
              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-4"
              to="/sign-up"
            >
              Join A Circle Now
            </Link>
            
          </div>
          <div className="col-md-6" >
            <img src={circle} alt="circle" className="img-fluid w-100"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinCircle; 