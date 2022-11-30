import React from "react";
import icon from "../../img/dashboard/portfolio-icon.svg";

function PortfolioHeader() {
  return (
    <section className="dashboard-header fixed-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <img src={icon} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioHeader;