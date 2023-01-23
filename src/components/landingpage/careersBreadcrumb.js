import React from "react";
import color from "../../img/colors.svg";


function CareersBreadcrumb() {
  return (
    <section className="career-head">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <img src={color} alt="Career Title" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersBreadcrumb;
