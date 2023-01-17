import React from "react";
// import groupie from "../../img/dashboard/groupie.svg";

function Wonder () {
  return (
    <section className="acoach">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>Wondering  Why You Need A Financial Coach ?</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <div className="text-center p-5 coachboxes">
              <h4>Buying a home</h4>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="text-center p-5 coachboxes bus">
              <h4 style={{color: "#E8356D"}}>Business and personal loans</h4>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="text-center p-5 coachboxes cc">
              <h4 style={{color: "#2563EB"}}>Understanding your finances</h4>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="text-center p-5 coachboxes arr">
              <h4 style={{color: "#EAB308"}}>Retirement</h4>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="text-center p-5 coachboxes bar">
              <h4 style={{color: "#8807F7"}}>Investment strategies</h4>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="text-center p-5 coachboxes set">
              <h4 style={{color: "#005951"}}>Better money mindset</h4>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Wonder;