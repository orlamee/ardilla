import React from "react";
import stepper from "../../img/stepper.svg";
import one from "../../img/11.svg";
import two from "../../img/22.svg";
import three from "../../img/33.svg";
import red from "../../img/red.svg";
import green from "../../img/green.svg";
import blue from "../../img/blue.svg";
import Accordion from 'react-bootstrap/Accordion';




function InterestRates() {
  return (
    <section className="instant">
      <div className="container">
        <div className="row">
          <div className="col-md-6" >
            <h2>Instant Interests when you start saving</h2>
          </div>
        </div>
        <div className="row">
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
                <h6 className="ms-3 mt-2">Get a goal</h6>
              </div>
              <img src={red} alt="red" className="img-fluid w-100 mt-4" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="get-goal">
              <div className="d-flex flex-row">
                <img src={two} alt="one" className="img-fluid" />
                <h6 className="ms-3 mt-2">Set a target amount</h6>
              </div>
              <img src={green} alt="red" className="img-fluid w-100 mt-4" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="get-goal">
              <div className="d-flex flex-row">
                <img src={three} alt="one" className="img-fluid" />
                <h6 className="ms-3 mt-2">Start saving</h6>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                  <Accordion.Header className="name-acc">What is Ardilla</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="">
                  <Accordion.Header className="name-acc">What is Ardilla</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
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