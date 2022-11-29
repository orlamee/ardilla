import React from "react";
import { Link } from "react-router-dom";
import icon from "../img/verify-icon.svg";

function VerifyPhone() {
  return (
    <section className="verify-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <img src={icon} alt="" />
            <h3 className="my-2">Verify Phone Number</h3>
            <h6>Enter the OTP Verification code sent to +234 807 828 6530 <br/><Link style={{color: "#E6356D"}}>Wrong Number?</Link></h6>
            <form className="my-5">
              <div className="d-flex flex-row">
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="mt-5 mb-3">
                    <button className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6" style={{width: "100%"}}>Continue</button>
                  </div>
                  <p>Didn’t get code? <span style={{color: "#E6356D"}}>Resend</span></p>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerifyPhone;