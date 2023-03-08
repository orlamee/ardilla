import React from "react";
import checklist from "../../img/checklist.svg";
import save from "../../img/dilla-proo.svg";

function Products() {
  return(
    <section className="features-product">
      <div className="container">
        <div className="row">
          <h2>Products</h2>
        </div>
        <div className="row justify-content-around" style={{marginTop: "40px"}}>
          <div className="col-md-5" id="style-8">
            <div className="">
              <h3>Save</h3>
              <h6>Save at your own pace!</h6>
              <p>Save your money daily, weekly, or monthly. No pressure. We work at your pace</p>
              <div className="" style={{marginTop: "60px"}}>
                <div className="d-flex flex-row mb-4">
                  <img src={checklist} alt="check" className="img-fluid"/>
                  <h5 className="ms-4 mt-1">Create Unlimted savings plans</h5>
                </div>
                <div className="d-flex flex-row mb-4">
                  <img src={checklist} alt="check" className="img-fluid"/>
                  <h5 className="ms-4 mt-1">Withdraw anytime</h5>
                </div>
                <div className="d-flex flex-row mb-4">
                  <img src={checklist} alt="check" className="img-fluid"/>
                  <h5 className="ms-4 mt-1">Save with Friends with SAN ID</h5>
                </div>
                <div className="d-flex flex-row mb-4">
                  <img src={checklist} alt="check" className="img-fluid"/>
                  <h5 className="ms-4 mt-1">Be better at saving</h5>
                </div>
                <div className="d-flex flex-row mb-4">
                  <img src={checklist} alt="check" className="img-fluid"/>
                  <h5 className="ms-4 mt-1">Accountability profile</h5>
                </div>
                <div className="d-flex flex-row mb-4">
                  <img src={checklist} alt="check" className="img-fluid"/>
                  <h5 className="ms-4 mt-1">Activity and report</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img src={save} alt="savings" className="img-fluid w-100" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Products;