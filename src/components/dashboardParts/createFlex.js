import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import home from "../../img/dashboard/home.svg";
import portfolio from "../../img/dashboard/portfolio.svg";
import investment from "../../img/dashboard/growth.svg";
import saving from "../../img/dashboard/investment.svg";
import dilla from "../../img/dashboard/dilla.svg";
import explore from "../../img/dashboard/explore.svg";
import learn from "../../img/dashboard/learn.svg";
import insurance from "../../img/dashboard/insurance.svg";
import logout from "../../img/dashboard/logout.svg";
import contact from "../../img/dashboard/pay.svg";
import chat from "../../img/dashboard/chat.svg";
import flex from "../../img/dashboard/flex-icon.svg";
import play from "../../img/dashboard/play.svg";
import question from "../../img/dashboard/question.svg";
import artisan from "../../img/dashboard/artisan.svg";
import axios from "axios";

function CreateFlex() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  // let user = JSON.parse(sessionStorage.getItem("user"));
  // const userID = user._id;

  //init useNav
  const navigate = useNavigate();
  const handleClickSuccess = () => {
    setOnSuccess(false);
  };

  const handleClick = async () => {
    setLoading(true);
    setErr(false);
    try {
      await axios.get(`${BACKEND_URL}/api/flex/create-account`, {
        withCredentials: true,
      });

      setLoading(false);
      navigate("/create-flex");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);
      setOnSuccess(false);
      setErr(true);
      setMsg(message);
    }
  };

  setTimeout(() => {
    if (setErr) {
      setErr(false);
    }
  }, 5000);
  return (
    <section className="main-dash">
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
      <div className="sidebar">
        <Link to="/dashboard" className="">
          <div className="d-flex flex-row">
            <img src={home} alt="" className="img-fluid me-2 icons" />
            Home
          </div>
        </Link>
        <Link to="/portfolio" className="">
          <div className="d-flex flex-row">
            <img src={portfolio} alt="" className="img-fluid me-2 icons" />
            Portfolio
          </div>
        </Link>
        <Link to="/savings" className="active">
          <div className="d-flex flex-row">
            <img src={saving} alt="" className="img-fluid me-2 icons" />
            Savings
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={investment} alt="" className="img-fluid me-2 icons" />
            Investments <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={insurance} alt="" className="img-fluid me-2 icons" />
            Insurance <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link to="/dilla">
          <div className="d-flex flex-row">
            <img src={dilla} alt="" className="img-fluid me-2 icons" />
            Dilla
          </div>
        </Link>
        <Link to="/">
          <div className="d-flex flex-row">
            <img src={explore} alt="" className="img-fluid me-2 icons" />
            Budgeting <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link to="/learn">
          <div className="d-flex flex-row">
            <img src={learn} alt="" className="img-fluid me-2 icons" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link to="/payment">
            <div className="d-flex flex-row">
              <img src={contact} alt="" className="img-fluid me-2 icons" />
              Payment
            </div>
          </Link>
          <Link>
            <div className="d-flex flex-row">
              <img src={chat} alt="" className="img-fluid me-2 icons" />
              Chat Support
            </div>
          </Link>
          <Link>
            <div className="d-flex flex-row">
              <img src={logout} alt="" className="img-fluid me-2 icons" />
              Log Out
            </div>
          </Link>
        </div>
      </div>
      <div className="content py-5 px-5">
        <div className="row justify-content-center flex-plan">
          <div className="col-md-9 text-center">
            <img src={flex} alt="" className="img-fluid" />
            <h2 className="my-5">
              Create your{" "}
              <span style={{ color: "#E8356D" }}>
                flex{" "}
                <Link
                  data-bs-toggle="modal"
                  data-bs-target="#flex"
                  type="button"
                >
                  <img src={question} alt="" className="img-fluid ques" />
                </Link>
              </span>
              that
              <br /> fits your lifestyle.
            </h2>
            <h6>
              Lorem ipsum dolor sit amet consectetur. Faucibus sit odio feugiat
              suspendisse felis
              <br /> morbi interdum. Eget sit ultricies facilisi elementum.{" "}
            </h6>
            {loading ? (
              <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5">
                loading
              </Link>
            ) : (
              <Link
                className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                onClick={handleClick}
              >
                Create a Target
              </Link>
            )}
            <div
              className="modal flex-modal fade"
              id="flex"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body flex-modal-body">
                    <div className="container">
                      <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="row justify-content-center">
                              <div className="col-md-7 text-center">
                                <img src={flex} alt="" className="img-fluid" />
                                <h6 className="my-3">
                                  What is a{" "}
                                  <span style={{ color: "#E8356D" }}>Flex</span>
                                  <br />
                                  plan?
                                </h6>
                                <p>
                                  An emergency stash for rainy days; Only for
                                  rainy days
                                </p>
                                <a
                                  className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2"
                                  href="/create-flex"
                                >
                                  Create a Flex Plan
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="row justify-content-center">
                              <div className="col-md-7 text-center">
                                <img
                                  src={artisan}
                                  alt=""
                                  className="img-fluid"
                                />
                                <h6 className="my-3">
                                  Why do you need a{" "}
                                  <span style={{ color: "#E8356D" }}>Flex</span>{" "}
                                  plan?
                                </h6>
                                <p>
                                  Auto Repair, Medical Emergency, Layoff, Home
                                  Repair
                                </p>
                                <a
                                  className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2"
                                  href="/create-flex"
                                >
                                  Create a Flex Plan
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="row justify-content-center">
                              <div className="col-md-7 text-center">
                                <img src={play} alt="" className="img-fluid" />
                                <h6 className="my-3">
                                  Learn more about{" "}
                                  <span style={{ color: "#E8356D" }}>Flex</span>{" "}
                                  plan?
                                </h6>
                                <p>
                                  Auto Repair, Medical Emergency, Layoff, Home
                                  Repair
                                </p>
                                <a
                                  className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2"
                                  href="/create-flex"
                                >
                                  Create a Flex Plan
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev"
                        >
                          <span
                            className="bi bi-chevron-left fs-5 text-dark"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                        >
                          <span
                            className="bi bi-chevron-right fs-5 text-dark"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
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

export default CreateFlex;
