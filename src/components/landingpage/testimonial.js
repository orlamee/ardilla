import React from "react";
import CountUp from 'react-countup';

function Testimonial() {
  return (
    <section className="traction">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2>Traction</h2>
            <h6>Our products and investments grossed 1.1 billion in 2022</h6>
          </div>
        </div>
        <div className="row top-products">
          <div className="col-md-4 mb-3">
            <div className="traction-cards">
              <p>Investment in <span className="hgl">2022</span></p>
              <h3>₦ 1.1 B</h3>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="traction-cards risky">
              <p>Risk <span className="hgl" style={{background: "#35298A"}}>Management</span></p>
              <h3>0% Risk</h3>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="traction-cards paidback">
              <p>Investment <span className="hgl" style={{background: "#9F9704"}}>paid back</span></p>
              <h3>₦ <CountUp end={250} delay={3} duration={20}  /> M</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
