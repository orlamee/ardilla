import React from "react";
import application from "../../img/application.svg";
import feedback from "../../img/feedback.svg";
import hiring from "../../img/hiring.svg";



function Hire() {
  return (
    <section className="ourvalue culture-text">
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <h2 className="mb-4">How We Hire</h2>
          </div>
        </div>
        <div className="career-top hire row">
          <div className="col-md-4 mb-3">
            <img src={application} alt="globe" className="img-fluid" />
            <h5 className="my-4">Application</h5>
            <h6>Send in your applications and if you are a good fit, we will schedule an interview.</h6>
          </div>
          <div className="col-md-4 mb-3">
            <img src={hiring} alt="globe" className="img-fluid" />
            <h5 className="my-4">Hiring Managers Interview</h5>
            <h6>The interview comprises a chat or two with the hiring manager and your department team lead about your suitability and skills for the role.</h6>
          </div>
          <div className="col-md-4 mb-3">
            <img src={feedback} alt="globe" className="img-fluid" />
            <h5 className="my-4">Feedback</h5>
            <h6>When the process is complete, we give you feedback on your performance and we let you know if you have been selected.</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hire;