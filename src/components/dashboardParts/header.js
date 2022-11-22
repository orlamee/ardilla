import React from "react";
import icon from "../../img/dashboard/logo.svg";

function Header() {
  return (
    <section className="dashboard-header">
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

export default Header;