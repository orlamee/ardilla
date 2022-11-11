import React from "react";
import logo from "../img/logo.svg";
import testimonial from "../img/testimonial.svg";
import dot from "../img/dot.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
<section className='login-section'>
  <div className='container'>
    <div className="row logo">
      <div className="col-md-6 ">
        <Link to="/"><img src={logo} alt="" className='img-fluid mb-5' /></Link>
      </div>
    </div>
    <div className='row justify-content-center'>
      <div className='col-md-6 mb-3'>
        <div className='left text-left'>
          <h2 className='my-4'>Its never to late to<br/>start saving</h2>
          <p className='testimonial'><span className="qoute">"</span>The whole process was seamless and<br/>very easy. Thats why i choosed ardilla<span className="qoute">"</span></p>
          <div className="d-flex flex-row mb-3 mt-3">
            <img src={testimonial} alt="" className="img-fluid" />
            <p className="author ms-3 mt-3">- Olamilekan Akindele</p>
          </div>
          <img src={dot} alt="" className="img-fluid" />
        </div>
      </div>
      <div className='col-md-5'>
        <div className='right'>
          <div className='login-form'>
            <form className=''>
              <div className="">
                <label className="form-label"><i className="bi bi-envelope-fill me-2"></i>  Email address</label>
                <input type="email" className="form-control custom-login"/>
              </div>
              <div className="my-5">
                <Link type="button" to="/otp" className="btn btn-outline-primary px-5 py-3 ardilla-btn" style={{width: "100%"}}>Continue</Link>
              </div>
              <div className="bottom">
                <p className="user">Already have an account? <Link to="/">Sign in</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Register;
