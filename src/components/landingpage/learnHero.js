import React from "react";
import demo from "../../img/learnsave.svg";


function LearnHero() {
  return (
    <section className="learn-more banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mb-3 offset-md-2 learn-top" >
            <h2 className="">Learn with ardilla</h2>
            <h6 className="my-5 desktop">Financial empowerment begins with financial literacy. Join the<br/>Ardilla learning platform and learn from the best financial minds.</h6>
            <h6 className="my-5 mobile">Financial empowerment begins with financial literacy. Join the Ardilla learning platform and learn from the best financial minds.</h6>
          </div>
          <div className="col-md-5 offset-md-1 p-0">
            <img src={demo} alt="" className="img-fluid w-100" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default LearnHero; 