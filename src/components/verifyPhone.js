import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "../img/verify-icon.svg";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import Cookies from "js-cookie";
// import axios from "axios";

import { auth } from "../firbase-config";

function VerifyPhone() {
  // const token = Cookies.get("user");

  let user = JSON.parse(sessionStorage.getItem("user"));

  const navigate = useNavigate();

  // const [userDetail, setUserDetail] = useState("");
  const [phoneNumber] = useState(`+234${user.contact}`);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  useEffect(() => {
    mobileAuth();
  }, []);

  const fullOTP = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;

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

  const mobileAuth = () => {
    // setLoading(true);
    // e.preventDefault();
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
        setLoading(false);
        setMsg("SMS not send");
        setErr(true);
      });
  };

  // mobileAuth();

  const verifyMobileCode = (e) => {
    setLoading(true);
    e.preventDefault();
    if (fullOTP.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(fullOTP)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          setMsg("verifcation successful");
          setErr(false);
          setOnSuccess(true);
          setLoading(false);
          navigate("/dashboard");
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          setLoading(false);
          setMsg("Wrong code");
          setErr(true);
        });
    }
  };
  return (
    <section className="verify-section">
      {err && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="alert alert-danger alert-dismissible fade show text-center text-danger"
              role="alert"
            >
              <i className="bi bi-exclamation-circle me-3"></i>
              {msg}
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="alert"
                onClick={() => setErr(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}
      {onSuccess && (
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div
              className="alert alert-success alert-dismissible fade show text-center text-success"
              role="alert"
            >
              <i className="bi bi-patch-check-fill me-3"></i>
              {msg}
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="alert"
                // onClick={handleClickSuccess}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <img src={icon} alt="" className="img-fluid" />
            <h3 className="my-2">Verify Phone Number</h3>
            <h6>
              Enter the OTP Verification code sent to +234{user.contact} <br />
              <Link style={{ color: "#E6356D" }}>Wrong Number?</Link>
            </h6>
            <form className="my-5" onSubmit={verifyMobileCode}>
              <div className="d-flex flex-row">
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    value={otp1}
                    onChange={(e) => setOtp1(e.target.value)}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    value={otp2}
                    onChange={(e) => setOtp2(e.target.value)}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    value={otp3}
                    onChange={(e) => setOtp3(e.target.value)}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="otp"
                    value={otp4}
                    onChange={(e) => setOtp4(e.target.value)}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="otp"
                    value={otp5}
                    onChange={(e) => setOtp5(e.target.value)}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="otp"
                    value={otp6}
                    onChange={(e) => setOtp6(e.target.value)}
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  {loading ? (
                    <div className="mt-5 mb-3">
                      <button
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                        style={{ width: "100%" }}
                        type="button"
                      >
                        Loading
                      </button>
                    </div>
                  ) : (
                    <div className="mt-5 mb-3">
                      <button
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                        style={{ width: "100%" }}
                        type="submit"
                      >
                        Continue
                      </button>
                    </div>
                  )}

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
