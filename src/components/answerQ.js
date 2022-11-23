import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import home from "../img/home-login.svg";


function AQ() {
  return (
    <section className="login-section">
      <div className="container">
        <div className="row logo">
          <div className="col-md-6">
            <Link to="/complete-profile">
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
              <p className="code mb-5">
                Answer your security question<br/>by filling in your answer
              </p>
            </div>
          </div>
          <div className="col-md-5 aggregate">
            <div className="right">
              <div className="login-form">
                <form>
                  <span className="q">What is your mother's maiden name?</span>
                  <div class="my-4">
                    <input type="text" class="form-control custom-form" />
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                      style={{ width: "100%" }}
                    >
                      Continue
                    </button>
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

export default AQ;