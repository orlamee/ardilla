/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import logo from "../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from '@iconify/react';

// import platform from "platform";
// import date from "date-and-time";

function Login() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const navigate = useNavigate();

  const sendRequest = async () => {
    try {
      setLoading(true);

    
      const { data } = await axios.post(
        `${BACKEND_URL}/api/auth/login`,
        {
          email,
          password,
          // ip,
          // platName,
          // userOs,
          // logDetails,
          // currentTimestamp,
          // time,
          // today,
        },
        { withCredentials: true }
      );

      setMsg(data.msg);
      setErr(false);
      setOnSuccess(true);
      setLoading(false);

      navigate("/security");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setOnSuccess(false);
      setMsg(message);
      setLoading(false);
      setErr(true);
    }
  };

  const handleClickSuccess = () => {
    setOnSuccess(false);
  };

  setTimeout(() => {
    if (err) {
      setErr(false);
    }
  }, 2000);

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest();
  };

  return (
    <section className="">
      {err && (
        <div className="row justify-content-center  ardilla-alert">
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
        <div className="row justify-content-center mt-5  ardilla-alert">
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
                onClick={handleClickSuccess}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}
      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2 new-aside"></div>
        <div className="contents order-2 order-md-1">
          
          <div className="container">
            <div className="row align-items-center justify-content-center bg-white">
              <div className="col-md-7">
                <div className="right ms-3">
                  <div className="login-form login-form-new">
                    <h3>Welcome!</h3>
                    <h6 className="mt-4">
                      Here’s how to login to access your account
                    </h6>
                    <form className="mt-5" onSubmit={handleSubmit}>
                      <div className="mb-3 form-floating">
                        <input
                          type="email"
                          className="form-control custom-login" id="floatingInput" placeholder="name@example.com"
                          required
                          value={email}
                          onChange={(e) =>
                            setEmail(e.target.value.toLowerCase())
                          }
                        />
                        <label for="floatingInput">
                          <Icon icon="mdi:email" className="me-2 fs-6"/>  Email address or Kode Hex
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="password"
                          name="pass"
                          className="form-control custom-login" id="pass" placeholder="name@example.com"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                          toggle="#password-field"
                          className="fa fa-fw fa-eye field_icon toggle-pass"
                        ></span>
                        <label for="floatingInput">
                          <Icon icon="teenyicons:password-solid" className="me-2 fs-6"/> {" "}
                          Password
                        </label>
                      </div>
                      <div className="mobile">
                        <div className="mb-2">
                          <label className="form-check-label remember">
                            <input
                              type="checkbox"
                              className="form-check-input me-2"
                            />{" "}
                            Remember me
                          </label>
                        </div>
                        <div>
                          <Link className="fg" to="/recover-password">
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                      <div className="form-group desktop mt-2">
                        <label className="form-check-label remember">
                          <input type="checkbox" className="form-check-input me-2" />{" "}
                          Remember me
                        </label>
                        <Link className="float-end fg" to="/recover-password">
                          Forgot Password?
                        </Link>
                      </div>
                      {loading ? (
                        <div className="mt-4 mb-5">
                          <button
                            type="button"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                            style={{ width: "100%" }}
                          >
                            Loading
                          </button>
                        </div>
                      ) : (
                        <div className="mt-4 mb-5">
                          <button
                            type="submit"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                            style={{ width: "100%" }}
                          >
                            Log In
                          </button>
                        </div>
                      )}
                    </form>
                    <div className="separator">
                      <div className="lines"></div>
                      <h6>or</h6>
                      <div className="lines"></div>
                    </div>
                    <Link to="/login-san"
                      type="button"
                      className="mt-5 btn btn-outline-primary py-3 ardilla-btn-outline"
                    >
                      <i className="bi bi-box-arrow-in-right me-3"></i> Sign in
                      with SAN ID
                    </Link>
                    <div className="mt-3 new-sign text-center">
                      <h5>
                        New user?{" "}
                        <Link to="/sign-up" style={{ color: "#8807F7" }}>
                          Create account
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
