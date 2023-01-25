import React from "react";
import e from "../../img/e.png";



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
            <img src={e} alt="globe" className="img-fluid" />
            <h5 className="my-4">Application</h5>
            <h6>If you are a suitable match for the position, a member of our Talent team will be in touch to schedule an exploratory call to find out more about your experience. They will be your first point of contact throughout the process.</h6>
          </div>
          <div className="col-md-4 mb-3">
            <img src={e} alt="globe" className="img-fluid" />
            <h5 className="my-4">Hiring Managers Interview</h5>
            <h6>If you are a suitable match for the position, a member of our Talent team will be in touch to schedule an exploratory call to find out more about your experience. They will be your first point of contact throughout the process.</h6>
          </div>
          <div className="col-md-4 mb-3">
            <img src={e} alt="globe" className="img-fluid" />
            <h5 className="my-4">Feedback</h5>
            <h6>If you are a suitable match for the position, a member of our Talent team will be in touch to schedule an exploratory call to find out more about your experience. They will be your first point of contact throughout the process.</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hire;