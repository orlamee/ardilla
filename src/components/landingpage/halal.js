import React from "react";



function Halal() {
  return (
    <section className="halal">
      <div className="container">
        <div className="row">
          <div className="col-md-9" >
            <h2>We also consider your <span style={{color: "#8807F7"}}>Values</span></h2>
          </div>
        </div>
      </div>
      <div className="container-fluid top-product">
        <div className="row">
        <div className="col-md-6 bg-halal"></div>
          <div className="col-md-6 bg-halal-right">
            <h6>Our Halal savings plan is created based on your<br/>values. We do not leave anybody behind and<br/>we understand these values</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Halal; 