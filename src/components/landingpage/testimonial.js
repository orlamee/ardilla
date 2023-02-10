import React from "react";
import testimonies from "../../img/testimonies.svg";


function Testimonial() {
  return (
    <section className="testimonies bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3 text-end mb-3">
            <img src={testimonies} alt="" className="img-fluid" />
          </div>
          <div className="col-md-5 right-contact">
            <h3>5 Million + customers</h3>
            <p>Join millions of Ardilla users building wealth everyday</p>
            <h3 className="top-products">24/7 Customer support</h3>
            <p>Our customer support team is always available for your requests and complaints. You can contact us through the app, sliding into social media DM's, sending an email to support@ardilla.africa, or calling +0213456789.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
