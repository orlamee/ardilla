import React from "react";
import pic from "../../img/2guys.svg";
import o from "../../img/o.svg";

function DidYouKnow () {
  return (
    <section className="answers">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h2>Did you know? Your financial coach has the answers.</h2>
            <h6 className="my-4">Your financial coach helps you answer burning questions such as:</h6>
            <div className="d-flex flex-row mt-3">
              <img src={o} alt="dot" className="img-fluid me-3" />
              <p className="mt-3">How to budget ?</p>
            </div>
            <div className="d-flex flex-row mt-3">
              <img src={o} alt="dot" className="img-fluid me-3" />
              <p className="mt-3">How much to save ?</p>
            </div>
            <div className="d-flex flex-row mt-3">
              <img src={o} alt="dot" className="img-fluid me-3" />
              <p className="mt-3">Where to invest ?</p>
            </div>
            <div className="d-flex flex-row mt-3">
              <img src={o} alt="dot" className="img-fluid me-3" />
              <p className="mt-3">Best investment strategies for your finances</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <img src={pic} alt="d" className="img-fluid" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default DidYouKnow;