import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

function CreatePassword() {
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
          <div className="col-md-5">
            <div className="right">
              <div className="login-form">
                <div className="text-center mb-5"><h2 className="fs-1">Create New Password</h2></div>
                <form className="">
                  <div className="mb-3">
                    <label className="form-label"><i className="bi bi-shield-lock-fill me-2"></i>  New Password</label>
                    <input type="password" name="pass" className="form-control custom-login" id="pass_log_id" required/>
                    <span toggle="#password-field" className="fa fa-fw fa-eye field_icon toggle-password"></span>
                  </div>
                  <div className="">
                    <label className="form-label"><i className="bi bi-shield-lock-fill me-2"></i>  Confirm New Password</label>
                    <input type="password" name="pass" className="form-control custom-login" id="pass" required/>
                    <span toggle="#password-field" className="fa fa-fw fa-eye field_icon toggle-pass"></span>
                  </div>
                  <div className="mt-5">
                    <button type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn" style={{width: "100%"}}>Done</button>
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

export default CreatePassword;