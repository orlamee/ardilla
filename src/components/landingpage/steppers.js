import React from "react";
import stepper from "../../img/stepper.svg";





function Steppers() {
  return (
    <section className="instant bg-steppers">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center" >
            <h2>You'll still get to enjoy all the amazing benefits we offer</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 steppings">
            <div className="stepper d-flex flex-column mt-5 ml-2">
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center">
                  <img src={stepper} alt="dot" className="img-fluid" width="100px" />
                  <div className="line h-100"></div>
                </div>
                <div style={{marginLeft: "40px"}}>
                  <h5>Start saving with interest</h5>
                  <p className="lead pb-5">The Goal Of Islamic Finance Is To Make Life Easier And We Believe Everyone Should Have Access To Money At The Time They Need It Without Exorbitant Interest Rates That Makes It Hard To Return,</p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column align-items-center">
                  <img src={stepper} alt="dot" className="img-fluid" width="100px" />
                </div>
                <div style={{marginLeft: "40px"}}>
                  <h5>Automated savings and investments</h5>
                  <p className="lead pb-5">The Goal Of Islamic Finance Is To Make Life Easier And We Believe Everyone Should Have Access To Money At The Time They Need It Without Exorbitant Interest Rates That Makes It Hard To Return,</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3 steppings">
            <div className="stepper d-flex flex-column mt-5 ml-2">
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center">
                  <img src={stepper} alt="dot" className="img-fluid" width="100px" />
                  <div className="line h-100"></div>
                </div>
                <div style={{marginLeft: "40px"}}>
                  <h5>Start saving with interest</h5>
                  <p className="lead pb-5">The Goal Of Islamic Finance Is To Make Life Easier And We Believe Everyone Should Have Access To Money At The Time They Need It Without Exorbitant Interest Rates That Makes It Hard To Return,</p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column align-items-center">
                  <img src={stepper} alt="dot" className="img-fluid" width="100px" />
                </div>
                <div style={{marginLeft: "40px"}}>
                  <h5>Automated savings and investments</h5>
                  <p className="lead pb-5">The Goal Of Islamic Finance Is To Make Life Easier And We Believe Everyone Should Have Access To Money At The Time They Need It Without Exorbitant Interest Rates That Makes It Hard To Return,</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steppers; 