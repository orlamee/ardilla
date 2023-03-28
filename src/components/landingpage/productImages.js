import React from "react";
import reels from "../../img/savedilla.svg";
import savetwo from "../../img/save2.svg";
import savethree from "../../img/save3.svg";
import dillaone from "../../img/dilla1.svg";
import dillatwo from "../../img/dilla2.svg";
import dillathree from "../../img/dilla3.svg";
import finone from "../../img/fin1.svg";
import fintwo from "../../img/fin2.svg";
import finthree from "../../img/fin3.svg";

function ProductImages() {
  return (
    <section className="newspress">
      <div className="container">
        <div className="row">
          <div className="col-md-7" >
            <h3>Savings</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <img src={reels} alt="reels" className="img-fluid w-100 reels" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={savetwo} alt="reels" className="img-fluid w-100 reels" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={savethree} alt="reels" className="img-fluid w-100 reels" />
          </div>
        </div>
        <div className="row btns-press">
          <div className="col-md-6" >
            <h3>Dilla</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <img src={dillaone} alt="reels" className="img-fluid w-100 reels" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={dillatwo} alt="reels" className="img-fluid w-100 reels" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={dillathree} alt="reels" className="img-fluid w-100 reels" />
          </div>
        </div>
        <div className="row btns-press">
          <div className="col-md-6" >
            <h3>Financial Coach</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <img src={finone} alt="reels" className="img-fluid w-100 reels" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={fintwo} alt="reels" className="img-fluid w-100 reels" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={finthree} alt="reels" className="img-fluid w-100 reels" />
          </div>
        </div>
        <div className="row mt-5 text-center">
          <hr/>
          <span className="text-center" style={{color: "#9CA3AF"}}>Last modified: March 28, 2023 at 12:00PM</span>
        </div>
      </div>
      
    </section>
  )
}

export default ProductImages; 