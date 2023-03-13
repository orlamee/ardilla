import React from "react";
import textimage from "../../img/textimage.svg"


function Halal() {
  return (
    <section className="halal">
      <div className="container">
        <div className="row">
          <div className="col" >
            <h2>We also consider your <span style={{color: "#8807F7"}}>Values</span></h2>
          </div>
        </div>
      </div>
      <div className="container top-product">
        <div className="row">
          <div className="col-md-6 bg-halal"></div>
          <div className="col-md-6 text-center">
            <img src={textimage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Halal; 