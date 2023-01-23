import React from "react";
import photos from "../../img/photos.svg";

function ArdillaCulture() {
  return (
  <section className="culture culture-text">
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <h2>The Ardilla Culture</h2>
        </div>
      </div>
    </div>
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col">
          <img src={photos} alt="group" className="img-fluid w-100" />
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-3">
          <h3 className="mb-3">Experienced professionals</h3>
          <h6>Experienced financial analysts and coaches. Who have been vetted and have a wealth of experience. They will guide you through your wealth-building journey.</h6>
          <h6>Experienced financial analysts and coaches. Who have been vetted and have a wealth of experience. They will guide you through your wealth-building journey.</h6>
        </div>
        <div className="col-md-6 mb-3">
          <h3 className="mb-3">We give the best</h3>
          <h6>We know work can be quite dreadful, so we try to make it fun, as much as we can. We also offer competitive salaries as well as great packages.</h6>
          <h6>At Ardilla, dedication and excellence are always rewarded. No politics and no funny business.</h6>
        </div>
      </div>
    </div>
  </section>
  )
}
export default ArdillaCulture;
