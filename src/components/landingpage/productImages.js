import React from "react";
import reels from "../../img/savedilla.svg";

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
            <img src={reels} alt="reels" className="img-fluid w-100 reels" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={reels} alt="reels" className="img-fluid w-100 reels" />
          </div>
        </div>
        <div className="row btns-press">
          <div className="col-md-6" >
            <h3>Dilla</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <img src={reels} alt="reels" className="img-fluid w-100 reels" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={reels} alt="reels" className="img-fluid w-100 reels" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={reels} alt="reels" className="img-fluid w-100 reels" />
          </div>
        </div>
        <div className="row btns-press">
          <div className="col-md-6" >
            <h3>Financial Coach</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <img src={reels} alt="reels" className="img-fluid w-100 reels" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={reels} alt="reels" className="img-fluid w-100 reels" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={reels} alt="reels" className="img-fluid w-100 reels" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductImages; 