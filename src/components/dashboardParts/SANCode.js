/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import platform from "platform";
// import date from "date-and-time";

function SANCode() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [email, setEmail] = useState("");
  const [password] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  // const [ip, setIp] = useState("");
  // const [city, setCity] = useState("");
  // const [countryCode, setCountryCode] = useState("");

  // const now = new Date();

  // const today = date.format(now, "ddd, MMM DD YYYY");
  // const time = date.format(new Date(), "hh:mm A [GMT]Z");

  // let platName = platform.name;
  // let userOs = platform.os.family;
  // let userOsVersion = platform.os.version;

  // let currentTimestamp = new Date().getTime();

  const navigate = useNavigate();

  // let logDetails;

  // let apiKey = "e0a2d82b1adc8b0ca0969efcda0ab0e2fdbfd2338fdb1b9c5cea91fc";

  // async function getIP(url) {
  //   try {
  //     const { data } = await axios.get(url);

  //     // setIp(data.ip);
  //     // setCity(data.city);
  //     // setCountryCode(data.country_name);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getIP(`https://api.ipdata.co?api-key=${apiKey}`);
  // }, [apiKey]);

  const sendRequest = async () => {
    try {
      setLoading(true);

      // logDetails = {
      //   ip,
      //   city,
      //   countryCode,
      //   platName,
      //   userOs,
      //   userOsVersion,
      // };

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
        <div className="contents order-2 order-md-1 bg-white">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="right ms-3">
                  <div className="row logo-new desktop">
                    <div className="col-md-6 ">
                      <Link to="/">
                        <img src={logo} alt="" className="img-fluid mb-5" />
                      </Link>
                    </div>
                  </div>
                  <div className="login-form login-form-new">
                    <h3>Welcome!</h3>
                    <h6 className="mt-4">
                      Here’s how to Log in to access your account
                    </h6>
                    <p className="notices mt-3">Enter code sent to your email <span className="sender">Fullname@gmail.com</span> </p>
                    <h5 className="wrong-email">Wrong Email?</h5>
                    <form className="mt-5" onSubmit={handleSubmit}>
                      <div className="mb-5">
                        <label className="form-label">
                          <i className="bi bi-key-fill me-2"></i> 
                          Code
                        </label>
                        <input
                          type="text"
                          className="form-control custom-login"
                          required
                          value={email}
                          onChange={(e) =>
                            setEmail(e.target.value.toLowerCase())
                          }
                        />
                        
                        <span
                          toggle="#password-field"
                          className="fa fa-fw fa-eye field_icon toggle-pass"
                        ></span>
                        
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
                            Login
                          </button>
                        </div>
                      )}
                    </form>
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

export default SANCode;
