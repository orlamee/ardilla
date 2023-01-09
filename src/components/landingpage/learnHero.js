import React from "react";
import demo from "../../img/learnsave.svg";


function LearnHero() {
  return (
    <section className="banner learn-more">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mt-5" >
            <h2 className="">Learn</h2>
            <h6 className="my-5 desktop">Financial empowerment begins with financial literacy. Join the<br/>Ardilla learning platform and learn from the best financial minds.</h6>
            <h6 className="my-5 mobile">Financial empowerment begins with financial literacy. Join the Ardilla learning platform and learn from the best financial minds.</h6>
          </div>
          <div className="col-md-6 demo-img">
            <img src={demo} alt="" className="img-fluid" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default LearnHero; 