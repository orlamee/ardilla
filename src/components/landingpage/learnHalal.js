import React from "react";
// import { Link } from "react-router-dom";
import ony from "../../img/ony.svg";



function LearnHalal() {
  return (
    <section className="learnhalal">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="mb-5">Learn More about Halal</h2>
            <img src={ony} alt="learn" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearnHalal; 