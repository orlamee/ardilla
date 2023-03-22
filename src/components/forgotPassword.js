import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import fgp from "../img/fgp.svg";


function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr(false);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/forgot-password`,
        { email }
      );

      setMsg(data.msg);
      setOnSuccess(true);
      setLoading(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setMsg(message);
      setErr(true);
      setOnSuccess(false);
      setLoading(false);
    }
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
                onClick={() => setOnSuccess(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}
      {/* <div className="container">
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
              <h2 className="my-4">
                Forgot Your <br />
                Password
              </h2>
              <p className="code mb-5 fs-6">
                Enter your email to reset your password
              </p>
            </div>
          </div>
          <div className="col-md-5 aggregate">
            <div className="right">
              <div className="login-form">
                <form className="" onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label className="form-label">
                      <i className="bi bi-envelope-fill me-2"></i> Email address
                    </label>
                    <input
                      type="email"
                      className="form-control custom-login"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {loading ? (
                    <div className="">
                      <button
                        type="button"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Loading
                      </button>
                    </div>
                  ) : (
                    <div className="">
                      <button
                        type="submit"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Reset Password
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="d-lg-flex half">
        <Link to="/login" className="bg order-2 order-md-1 left-forgot">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 mb-3">
                <div className="left text-center entry">
                  <img src={fgp} alt="" className="img-fluid w-100" />
                  <h2 className="my-5 text-white">
                    Forgot Your Password?
                  </h2>
                  <p>Enter your email to reset your password</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="contents order-1 order-md-2">
          <div className="container">
            <div className="row align-items-center justify-content-center bg-white">
              <div className="col-md-6">
                <div className="right">
                  <div className="">
                    <form className="" onSubmit={handleSubmit}>
                      <div className="mb-5 form-floating">
                        <input
                          type="email"
                          className="form-control custom-login" id="floatingInput" placeholder="name@example.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="floatingInput">
                          <i className="bi bi-envelope-fill me-2"></i> Enter email address or kode hex
                        </label>
                      </div>
                      {loading ? (
                        <div className="">
                          <button
                            type="button"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                            style={{ width: "100%" }}
                          >
                            Loading
                          </button>
                        </div>
                      ) : (
                        <div className="">
                          <button
                            type="submit"
                            className="btn btn-outline-primary px-5 py-4 fw-bold ardilla-btn"
                            style={{ width: "100%" }}
                          >
                            Reset Password
                          </button>
                        </div>
                      )}
                    </form>
                    <div className="text-center mt-3">
                      <Link to="/login" className="text-center text-grey">Back to login</Link>
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

export default Forgot;
