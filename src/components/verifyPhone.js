import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../img/verify-icon.svg";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { auth } from "../firbase-config";

function VerifyPhone() {
  const [phoneNumber, setPhoneNumber] = useState("+2348154963477");
  const [otp, setOtp] = useState({});

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      auth
    );
  };

  const handleOTP = (e) => {
    setOtp(e.target.value);
  };

  console.log(otp);

  const mobileAuth = (e) => {
    e.preventDefault();
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  };
  return (
    <section className="verify-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <img src={icon} alt="" className="img-fluid" />
            <h3 className="my-2">Verify Phone Number</h3>
            <h6>
              Enter the OTP Verification code sent to +234 807 828 6530 <br />
              <Link style={{ color: "#E6356D" }}>Wrong Number?</Link>
            </h6>
            <form className="my-5" onSubmit={mobileAuth}>
              <div className="d-flex flex-row">
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="otp"
                    value={otp}
                    onChange={handleOTP}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="otp"
                    value={otp}
                    onChange={handleOTP}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="otp"
                    value={otp}
                    onChange={handleOTP}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="otp"
                    value={otp}
                    onChange={handleOTP}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="otp"
                    value={otp}
                    onChange={handleOTP}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="otp"
                    value={otp}
                    onChange={handleOTP}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="otp"
                    value={otp}
                    onChange={handleOTP}
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
