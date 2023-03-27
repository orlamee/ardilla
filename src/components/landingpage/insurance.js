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
            <p className="text-white mt-5">Every journey has a beginning and every wealth building story<br/>starts with a saving philosophy. We have designed several<br/>saving plans to help you get started.</p>
          </div>
          <div className="col-md-6 mb-3">
            <img src={invest} alt="saving" className="img-fluid" />
            <p className="text-white mt-5">While saving is great, investment is how you build real wealth. <br/>We have curated carefully vetted investment tips and opportunities for<br/>you to build wealth.</p>
          </div>
        </div>
        <div className="row top-product">
          <div className="col-md-6 mb-3">
            <img src={insurance} alt="saving" className="img-fluid" />
            <p className="text-white mt-5">We think everyone should live life on their terms. With our insurance<br/>packages, you can live without risk or fear. Live your best life now.</p>
          </div>
          <div className="col-md-6 mb-3">
            <img src={finance} alt="saving" className="img-fluid" />
            <p className="text-white mt-5">We know wealth building, and financial freedom starts with an educated mind.<br/>We have provided insights from top financial minds with years of experience to make your wealth-building journey successful.</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Insurance; 