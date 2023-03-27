import React from "react";
import stepper from "../../img/stepper.svg";





function Steppers() {
  return (
    <section className="instant bg-steppers">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center" >
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
                  <h5>Transparency</h5>
                  <p className="lead pb-5">With our Halal saver, you have complete transparency. You can enjoy saving and investing without impinging on your values and beliefs. You really can enjoy the best of both.</p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column align-items-center">
                  <img src={stepper} alt="dot" className="img-fluid" width="100px" />
                </div>
                <div style={{marginLeft: "40px"}}>
                  <h5>Switchable</h5>
                  <p className="lead pb-5">Use Halal at your discretion. You get it turn it on and off as you wish. You can also use the Halal saver as well as the Ardilla saving platform. <span  style={{color: "#F9FAFB"}}>Enjoy the same hhhhhhhhhhhhhh</span></p>
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
                  <h5>Community</h5>
                  <p className="lead pb-5">Save together and achieve together. Enjoy the perks of saving with other people. With Halal saver, you have your circle of savers who share common goals.</p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column align-items-center">
                  <img src={stepper} alt="dot" className="img-fluid" width="100px" />
                </div>
                <div style={{marginLeft: "40px"}}>
                  <h5>Perks</h5>
                  <p className="lead pb-5">Enjoy the same features with the main app. Same app, just different rules that sit well with your values. <span  style={{color: "#F9FAFB"}}>Enjoy the same features with the main app. Same app</span></p>
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