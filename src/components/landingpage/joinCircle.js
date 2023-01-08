import React from "react";
import circle from "../../img/circle.svg";



function JoinCircle() {
  return (
    <section className="circle">
      <div className="container">
        <div className="row">
          <div className="col-md-6 top-product" >
            <h2>Join a circle<br/>of <span style={{color: "#8807F7"}}>passionate <br/>savers </span>like<br/>you</h2>
          </div>
          <div className="col-md-6" >
            <img src={circle} alt="circle" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinCircle; 