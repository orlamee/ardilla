import React from "react";
import video from "../../img/video.svg";


function Words() {
  return (
    <section className="words-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Don’t Take Our <span style={{color: "#E8356D"}}>Word</span> For It</h2>
            <h6 className="mt-3">Listen to testimonials from Ardilla users building wealth</h6>
          </div>
        </div>
      </div>
      <div className="container top-products">
        <div className="row">
          <div className="col">
            <img src={video} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )  
}

export default Words;