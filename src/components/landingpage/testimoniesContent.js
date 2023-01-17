import React from "react";
import one from "../../img/dashboard/testimonial.svg";
import two from "../../img/dashboard/testimonial-1.svg";
import three from "../../img/dashboard/testimonial-2.png";


function TestimoniesContent() {
  return (
    <section className="testimonial-content">
      <div className="container">
        <div className="row">
          <div className="col">
            <h6>Written Testimonials</h6>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <img src={one} alt="testimonial" className="img-fluid w-100 mb-3" />
            <span className="bg-test">Testimonials</span>
            <h2 className="my-3">Saving with Ardilla changed<br/>my financial life entirely</h2>
            <div className="">
              <p>By <span style={{color:"#3D0072"}}>Olukoju Matthew</span></p>
              <p className="float-end auth-date">August 5, 2023</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <img src={two} alt="testimonial" className="img-fluid w-100 mb-3" />
            <span className="bg-test">Testimonials</span>
            <h2 className="my-3">Saving with Ardilla changed<br/>my financial life entirely</h2>
            <div className="">
              <p>By <span style={{color:"#3D0072"}}>Olukoju Matthew</span></p>
              <p className="float-end auth-date">August 5, 2023</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <img src={three} alt="testimonial" className="img-fluid w-100 mb-3" />
            <span className="bg-test">Testimonials</span>
            <h2 className="my-3">Saving with Ardilla changed<br/>my financial life entirely</h2>
            <div className="">
              <p>By <span style={{color:"#3D0072"}}>Olukoju Matthew</span></p>
              <p className="float-end auth-date">August 5, 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h6>Video Testimonials</h6>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <img src={one} alt="testimonial" className="img-fluid w-100 mb-3" />
            <span className="bg-test">Testimonials</span>
            <h2 className="my-3">Saving with Ardilla changed<br/>my financial life entirely</h2>
            <div className="">
              <p>By <span style={{color:"#3D0072"}}>Olukoju Matthew</span></p>
              <p className="float-end auth-date">August 5, 2023</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <img src={two} alt="testimonial" className="img-fluid w-100 mb-3" />
            <span className="bg-test">Testimonials</span>
            <h2 className="my-3">Saving with Ardilla changed<br/>my financial life entirely</h2>
            <div className="">
              <p>By <span style={{color:"#3D0072"}}>Olukoju Matthew</span></p>
              <p className="float-end auth-date">August 5, 2023</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <img src={three} alt="testimonial" className="img-fluid w-100 mb-3" />
            <span className="bg-test">Testimonials</span>
            <h2 className="my-3">Saving with Ardilla changed<br/>my financial life entirely</h2>
            <div className="">
              <p>By <span style={{color:"#3D0072"}}>Olukoju Matthew</span></p>
              <p className="float-end auth-date">August 5, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimoniesContent;
