import React from "react";
import one from "../../img/11.svg";
import two from "../../img/22.svg";
import three from "../../img/33.svg";
import red from "../../img/red.svg";
import green from "../../img/green.svg";
import blue from "../../img/blue.svg";


function HalalWorks() {
  return (
    <section className="islamicfinance bg-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>How It Works</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <div className="get-goal">
              <div className="d-flex flex-row">
                <img src={one} alt="one" className="img-fluid" />
                <h6 className="ms-3 mt-2">Download and sign up</h6>
              </div>
              <img src={red} alt="red" className="img-fluid w-100 mt-4" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="get-goal">
              <div className="d-flex flex-row">
                <img src={two} alt="one" className="img-fluid" />
                <h6 className="ms-3 mt-2">Download and sign up</h6>
              </div>
              <img src={green} alt="red" className="img-fluid w-100 mt-4" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="get-goal">
              <div className="d-flex flex-row">
                <img src={three} alt="one" className="img-fluid" />
                <h6 className="ms-3 mt-2">Download and sign up</h6>
              </div>
              <img src={blue} alt="red" className="img-fluid w-100 mt-4" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default HalalWorks; 