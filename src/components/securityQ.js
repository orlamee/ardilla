import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import home from "../img/home-login.svg";

function SecurityPage() {
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
              <img src={home} alt="" className="img-fluid" />
              <h2 className="my-4">
                Security
                <br />
                Question
              </h2>
              <p className="code mb-5">Choose a security question &<br/> fill in your answer</p>
            </div>
          </div>
          <div className="col-md-5 aggregate">
            <div className="right">
              <div className="login-form">
                <form className="">
                  <select className="form-select mb-3 custom-form" aria-label="Default select example">
                    {/* <option defaultValue>Open this select menu</option> */}
                    <option value="1">What is the name of your favorite pet?</option>
                    <option value="2">What is your mother's maiden name?</option>
                    <option value="3">Where did you meet your spouse?</option>
                    <option value="4">What is your first crush name?</option>
                  </select>
                  <div className="mb-3">
                    <input type="text" className="form-control custom-form" placeholder="Your Answer" required/>
                  </div>
                  <div className="">
                    <button type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn" style={{width: "100%"}}>Continue</button>
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

export default SecurityPage;