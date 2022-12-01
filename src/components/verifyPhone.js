import React from "react";
import { Link } from "react-router-dom";
import icon from "../img/verify-icon.svg";
// import Cookies from "js-cookie";
// import axios from "axios";

function VerifyPhone() {
  
  return (
    <section className="verify-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <img src={icon} alt="" className="img-fluid" />
            <h3 className="my-2">Verify Phone Number</h3>
            <h6>
              Enter the OTP Verification code sent to +234 <br />
              <Link style={{ color: "#E6356D" }}>Wrong Number?</Link>
            </h6>
            <form className="my-5" id="otp">
              <div className="d-flex flex-row">
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-1"
                    id="digit-1"
                    
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-2"
                    id="digit-2"
                    
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-3"
                    id="digit-3"
                    
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-4"
                    id="digit-4"
                    
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-5"
                    id="digit-5"
                  
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-6"
                    id="digit-6"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  
                  <div className="mt-5 mb-3">
                    <button
                      className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                      style={{ width: "100%" }}
                      type="submit"
                    >
                      Continue
                    </button>
                  </div>
                  

                  <p>
                    Didn’t get code?{" "}
                    <span style={{ color: "#E6356D" }}>Resend</span>
                  </p>
                  <div className="logout">
                    <Link className="log-out"><i className="bi bi-power me-2"></i> Log Out</Link>
                  </div>
                </div>
              </div>
            </form>
            <div id="recaptcha-container"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerifyPhone;
