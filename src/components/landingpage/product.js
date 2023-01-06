import React from "react";
import checklist from "../../img/checklist.svg";

function Products() {
  return(
    <section className="features-product">
      <div className="container">
        <div className="row">
          <h2>Products</h2>
        </div>
        <div className="row top-products">
          <div className="col-md-6">
            <h3>Save</h3>
            <h6>Save at your own pace!</h6>
            <p>Save your money daily, weekly, or monthly. No pressure. We work at<br/>your pace</p>
            <div className="top-products">
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
        
      </div>
    </section>
  )
}

export default Products;