import React from "react";
import excellence from "../../img/excellence.svg";
import dedication from "../../img/dedication.svg";
import teamwork from "../../img/teamwork.svg";
import positivity from "../../img/positivity.svg";


function OurValue() {
  return (
    <section className="ourvalue culture-text">
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <h2 className="mb-4">Our Values</h2>
            <h6>At Ardilla, our mission is to help people across the continent build wealth and achieve well thought<br/>out financial goals. However, we cannot do it alone.</h6>
          </div>
        </div>
        <div className="row career-top">
          <div className="col-md-3 mb-2 p-0">
            <img src={excellence} alt="excellence" className="img-fluid" />
          </div>
          <div className="col-md-3 mb-2 p-0">
            <img src={dedication} alt="dedication" className="img-fluid" />
          </div>
          <div className="col-md-3 mb-2 p-0">
            <img src={teamwork} alt="teamwork" className="img-fluid" />
          </div>
          <div className="col-md-3 mb-2 p-0">
            <img src={positivity} alt="positivity" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurValue;