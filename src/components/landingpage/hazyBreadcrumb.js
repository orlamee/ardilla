import React from "react";
import { Link } from "react-router-dom";

function HazyBreadcrumb() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-white">Hazy</h2>
          </div>
        </div>
        <div className="d-flex flex-row mt-5 desktop">
          <Link to="/hazy" type="button" className="btn me-3 btn-hazy">Hazy</Link>
          <Link to="/general" type="button" className="btn me-3 btn-hazy">General</Link>
        </div>
      </div>
    </section>
  );
}

export default HazyBreadcrumb;
