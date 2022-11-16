import React from "react";
import features from "../../img/products.svg";

function Products() {
  return(
    <section className="features-product">
      <div className="container">
        <div className="row">
          <h2>Products</h2>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 text-start">
            <img src={features} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products;