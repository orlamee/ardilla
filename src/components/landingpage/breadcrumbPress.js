import React from "react";
import { Link } from "react-router-dom";

function BreadcrumbPress() {
  return (
    <section className="breadcrumbpress">
      <div className="container">
        <div className="row">
          <div className="col-md-6" >
            <h2 className="">Press & Media Resources</h2>
          </div>
        </div>
        <div className="d-flex flex-row btns-press desktop">
          <Link to="/press" type="button" className="btn me-3 btn-press">News</Link>
          <Link to="/press/logos" type="button" className="btn me-3 btn-press">Logos and Badges</Link>
          <Link to="/" type="button" className="btn me-3 btn-press">Product Images</Link>
          <Link to="/" type="button" className="btn me-3 btn-press">People and Offices</Link>
        </div>
      </div>
    </section>
  )
}

export default BreadcrumbPress; 