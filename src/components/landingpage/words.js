import React from "react";
import video from "../../img/video.svg";
import press from "../../img/press.svg";


function Words() {
  return (
    <section className="words-section">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h2>Don’t Take Our<br/><span style={{color: "#E8356D"}}>Word</span> For It</h2>
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
        <div className="row top-product">
          <div className="col text-center">
            <img src={press} alt="press" className="img-fluid"/>
          </div>
        </div>
        <div className="row top-product justify-content-center text-center">
          <div className="col-md-10">
            <div className="webapp">
              <h4>Also Available on Web</h4>
              <p className="my-3">Increase your bread & butter on the app or on the web. The Ardilla app services are <br/>also available on the web.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )  
}

export default Words;