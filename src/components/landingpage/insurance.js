import React from "react";
import save from "../../img/save-l.svg";
import invest from "../../img/invest-l.svg";
import insurance from "../../img/insurance-l.svg";
import finance from "../../img/finance-l.svg";


function Insurance() {
  return (
    <section className="insurance">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <img src={save} alt="saving" className="img-fluid" />
            <p className="text-white mt-5">We have designed several saving plans to enable you live<br/>life on your terms.</p>
          </div>
          <div className="col-md-6 mb-3">
            <img src={invest} alt="saving" className="img-fluid" />
            <p className="text-white mt-5">We have designed several saving plans to enable you live life on your terms.<br/>We have curated carefully vetted investment tips and opportunities for you to build wealth.</p>
          </div>
        </div>
        <div className="row top-product">
          <div className="col-md-6 mb-3">
            <img src={insurance} alt="saving" className="img-fluid" />
            <p className="text-white mt-5">We want you to live life with no risk or fear, so we <br/>Provided several insurance packages for you to choose from.</p>
          </div>
          <div className="col-md-6 mb-3">
            <img src={finance} alt="saving" className="img-fluid" />
            <p className="text-white mt-5">We want you to live life with no risk or fear, so we<br/>Provided several insurance packages for you to choose from.</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Insurance; 