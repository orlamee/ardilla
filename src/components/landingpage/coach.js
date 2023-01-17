import React from "react";
import groupie from "../../img/dashboard/groupie.svg";

function Coach () {
  return (
    <section className="coach-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h2>Level Up With <span style={{color: "#F59E0B"}}>Free Financial Coaching</span></h2>
            <h6 className="mt-3">We know financial inclusion and wealth building can be tricky. But our financial coaches make it so much better.</h6>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <img src={groupie} alt="group" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coach;