import React from "react";
import stepper from "../../img/stepper.svg";
import one from "../../img/11.svg";
import two from "../../img/ii.svg";
import three from "../../img/iii.svg";
import red from "../../img/int-save.svg";
import green from "../../img/int-dib.svg";
import blue from "../../img/int-breakdown.svg";
import Accordion from 'react-bootstrap/Accordion';




function InterestRates() {
  return (
    <section className="instant">
      <div className="container">
        <div className="row">
          <div className="col-md-6" >
            <h2>Interest you can count on</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 steppings">
            <div className="stepper d-flex flex-column mt-5 ml-2">
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center">
                  <img src={stepper} alt="dot" className="img-fluid" width="50px" />
                  <div className="line h-100"></div>
                </div>
                <div style={{marginLeft: "40px"}}>
                  <h5>More Interest</h5>
                  <p className="lead pb-5">Enjoy better interest rates than the average bank account when you save with any of the Ardilla savings plan.<span className="text-white">0000000000</span></p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column align-items-center">
                  <img src={stepper} alt="dot" className="img-fluid" width="50px" />
                </div>
                <div style={{marginLeft: "40px"}}>
                  <h5>Transparency</h5>
                  <p className="lead pb-5">Your values matter to us and we are 100% committed to upholding those. Whether it is with Halal or the Ardilla saving plans.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3 steppings">
            <div className="stepper d-flex flex-column mt-5 ml-2">
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center">
                  <img src={stepper} alt="dot" className="img-fluid" width="50px" />
                  <div className="line h-100"></div>
                </div>
                <div style={{marginLeft: "40px"}}>
                  <h5>Values</h5>
                  <p className="lead pb-5">No hidden charges and no vague deductions. Save with Ardilla and get your full interests. <span className="text-white">0000000000000000000000</span></p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column align-items-center">
                  <img src={stepper} alt="dot" className="img-fluid" width="50px" />
                </div>
                <div style={{marginLeft: "40px"}}>
                  <h5>Complete Withdraws</h5>
                  <p className="lead pb-5">Withdraw your entire savings+ interest upon maturity. No minimum balance. <span className="text-white">0000000000000000000000000000000</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row interest-top">
          <div className="col">
            <h2>How It Works</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <div className="get-goal">
              <div className="d-flex flex-row">
                <img src={one} alt="one" className="img-fluid" />
                <h6 className="ms-3 mt-2">Create a plan</h6>
              </div>
              <img src={red} alt="red" className="img-fluid w-100 mt-4" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="get-goal" style={{background :"#FAF5FF"}}>
              <div className="d-flex flex-row">
                <img src={two} alt="one" className="img-fluid" />
                <h6 className="ms-3 mt-2">Set a target amount</h6>
              </div>
              <img src={green} alt="red" className="img-fluid w-100 mt-4" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="get-goal" style={{background :"#F1F5FE"}}>
              <div className="d-flex flex-row">
                <img src={three} alt="one" className="img-fluid" />
                <h6 className="ms-3 mt-2">Get your interest</h6>
              </div>
              <img src={blue} alt="red" className="img-fluid w-100 mt-4" />
            </div>
          </div>
        </div>
        <div className="row interest-top">
          <div className="col">
            <h2>Questions We Have been Asked</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div className="mb-5">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What are your interest rates?</Accordion.Header>
                  <Accordion.Body>
                    The interest rate varies depending on the savings plan you activate. For instance, the Grit saving plan has one of the highest interest rates among our saving plans.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                  <Accordion.Header className="name-acc">What happens to my interest when i switch to Halal?</Accordion.Header>
                  <Accordion.Body>
                    You can withdraw your interest before maturity but there will be some penalties which will be deducted from your interest.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="">
                  <Accordion.Header className="name-acc">What is the minimum interest rate I am entitled to?</Accordion.Header>
                  <Accordion.Body>
                    The minimum interest rate you are entitled to, depends on the savings plan you choose.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InterestRates; 