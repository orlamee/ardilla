import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import fp from "../img/fp.svg";

function Forgot() {
  return (
    <section className="login-section">
      <div className="container">
        <div className="row logo">
          <div className="col-md-6">
            <Link to="/">
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <div className="left text-left">
              <img src={fp} alt="" className="img-fluid" />
              <h2 className="my-4">Forgot Your <br/>Password</h2>
              <p className="code mb-5 fs-6">Enter your email to reset your password</p>
            </div>
          </div>
          <div className="col-md-5 aggregate">
            <div className="right">
              <div className="login-form">
                <form className="">
                  <div className="mb-5">
                    <label className="form-label"><i className="bi bi-envelope-fill me-2"></i>  Email address</label>
                    <input type="email" className="form-control custom-login" required/>
                  </div>
                  <div className="">
                    <Link to="/set-password" className="btn btn-outline-primary px-5 py-3 ardilla-btn" style={{width: "100%"}}>Reset Password</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Forgot;