import React from "react";
import features from "../../img/products.svg";
import blank from "../../img/blank.svg";

function Products() {
  return(
    <section className="features-product">
      <div className="container">
        <div className="row">
          <h2>Products</h2>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 text-start">
            <img src={features} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={blank} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 text-start">
            <h3>Save at your own<br/>pace!</h3>
            <h6 className="my-4">Save your money daily, weekly, or monthly. No pressure. We work at your pace.</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products;