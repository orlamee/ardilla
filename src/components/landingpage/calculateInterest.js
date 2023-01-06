import React from "react";
import int from "../../img/int.svg";



function CalculateInterest() {
  return (
    <section className="calc">
      <div className="container">
        <div className="row">
          <div className="col" >
            <h2>Calculate Your Interests</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <img src={int} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CalculateInterest; 