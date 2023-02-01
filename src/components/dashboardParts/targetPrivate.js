import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/target.css";
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
import withdraw from "../../img/dashboard/w-icon.svg";
import lieu from "../../img/dashboard/lieu.svg";
import colo from "../../img/dashboard/col.svg";
import top from "../../img/dashboard/top.png";
import visacard from "../../img/dashboard/visa-card.svg";
import done from "../../img/dashboard/done.svg";
import completed from "../../img/dashboard/top-completed.png";
import publictarget from "../../img/dashboard/public.png";
import members from "../../img/dashboard/members.svg";
import global from "../../img/dashboard/globe.png";
import transfer from "../../img/dashboard/received-icon.svg";
import axios from "axios";

function TargetPrivate() {
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [targetHistory, setTargetHistory] = useState();
  const [targetPlans, setTargetPlans] = useState();

  useEffect(() => {
    const getTargetHistory = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/target/target-history`,
          { withCredentials: true }
        );

        setTargetHistory(data.transactionHistory);
        console.log("target history", data);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setErr(true);
        setMsg(message);
      }
    };

    const getTargetAccount = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/target/get-target-plans`,
          { withCredentials: true }
        );

        setTargetPlans(data.targetPlan);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setErr(true);
        setMsg(message);
      }
    };

    getTargetHistory();
    getTargetAccount();
  }, []);

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
      <div className="sidebar">
        <Link to="/dashboard" className="">
          <div className="d-flex flex-row">
            <img src={home} alt="" className="img-fluid me-2 icons" />
            Home
          </div>
        </Link>
        <Link to="/portfolio">
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
        <a href="/dilla">
          <div className="d-flex flex-row">
            <img src={dilla} alt="" className="img-fluid me-2 icons" />
            Dilla
          </div>
        </a>
        <Link>
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
      <div className="content py-5 px-5 t-private">
        <div className="row">
          <div className="d-flex flex-row privatelinks">
            <Link className="me-5" to="/flexplan-dashboard">
              DIB
            </Link>
            <Link className="me-5 target-active">Dreams</Link>
            <Link className="me-5" to="/vaultplan-dashboard">
              Vault
            </Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 t-savings">
            <div className="d-flex flex-row">
              <h2 className="me-4">Dreams Savings</h2>
              <Link to="/learn" className="mt-3">
                Learn More
              </Link>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <span>Total Balance</span>
                <h5>₦40,000.00 </h5>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3">
                  Create new target
                </button>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="switches-container">
                  <input
                    type="radio"
                    id="switchMonthly"
                    name="switchPlan"
                    value="Monthly"
                    checked="checked"
                  />
                  <input
                    type="radio"
                    id="switchYearly"
                    name="switchPlan"
                    value="Yearly"
                  />
                  <label htmlFor="switchMonthly">My Targets</label>
                  <label htmlFor="switchYearly">Explore Targets</label>
                  <div className="switch-wrapper">
                    <div className="switchies">
                      <div>My Targets</div>
                      <div>Explore Targets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <div id="" className="row">
                  <ul className="nav nav-pills dilla-link">
                    <li className="ms-3 me-5 profile-pills active">
                      <a href="#1a" data-toggle="tab">
                        Private
                      </a>
                    </li>
                    <li className="me-5 profile-pills">
                      <a href="#2a" data-toggle="tab">
                        Public
                      </a>
                    </li>
                    <li className="me-5 profile-pills">
                      <a href="#3a" data-toggle="tab">
                        Completed
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content clearfix">
                    <div className="tab-pane active" id="1a">
                      <div className="row mt-5">
                        {/* <Link
                          data-bs-toggle="modal"
                          data-bs-target="#targetplan"
                          type="button"
                          to="#"
                          className="col-md-6 mb-3"
                        >
                          <img src={top} alt="" className="img-fluid" />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                Travel{" "}
                                <span className="badge-private">ongoing</span>
                              </h4>
                              <p style={{ marginLeft: "90px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                          </div>
                        </Link> */}
                        {targetPlans?.map((data) => {
                          return (
                            <div className="col-md-6 mb-3">
                              <img src={top} alt="" className="img-fluid" />
                              <div className="bg-white bg-private p-4">
                                <div className="d-flex flex-row">
                                  <h4>
                                    Travel{" "}
                                    <span className="badge-private">
                                      ongoing
                                    </span>
                                  </h4>
                                  <p style={{ marginLeft: "90px" }}>
                                    200 days left
                                  </p>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-md-6">
                                    <p>Target</p>
                                    {data.type === "custom" ? (
                                      <h3>
                                        {Intl.NumberFormat("en-US").format(
                                          data?.customSavingRate
                                        )}
                                      </h3>
                                    ) : (
                                      <h3>
                                        {Intl.NumberFormat("en-US").format(
                                          data?.customSavingRate
                                        )}
                                      </h3>
                                    )}
                                  </div>
                                  <div className="col-md-6 text-end">
                                    <p>Interest</p>
                                    <h3>
                                      {" "}
                                      {Intl.NumberFormat("en-US").format(
                                        data.totalIntrest
                                      )}{" "}
                                      (11%/p.a)
                                    </h3>
                                  </div>
                                </div>
                                <div className="row mt-3 mb-4">
                                  <div className="col-md-6">
                                    <p>Maturity date</p>
                                    <h3>
                                      {
                                        data.breakdown[data.breakdown - 1].date
                                          .month
                                      }
                                      -
                                      {
                                        data.breakdown[data.breakdown - 1].date
                                          .year
                                      }
                                    </h3>
                                  </div>
                                  <div className="col-md-6 text-end">
                                    <p>Frequency</p>
                                    <h3>15000 (11%/p.a)</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        {/* <div className="col-md-6 mb-3">
                          <img src={top} alt="" className="img-fluid" />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                Travel{" "}
                                <span className="badge-private">ongoing</span>
                              </h4>
                              <p style={{ marginLeft: "90px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      {/* <div className="row mt-5">
                        <div className="col-md-6 mb-3">
                          <img src={top} alt="" className="img-fluid" />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                Travel{" "}
                                <span className="badge-private">ongoing</span>
                              </h4>
                              <p style={{ marginLeft: "90px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <img src={top} alt="" className="img-fluid" />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                Travel{" "}
                                <span className="badge-private">ongoing</span>
                              </h4>
                              <p style={{ marginLeft: "90px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    <div className="tab-pane quiz-pane" id="2a">
                      <div className="row mt-5">
                        <Link
                          data-bs-toggle="modal"
                          data-bs-target="#"
                          type="button"
                          to="#"
                          className="col-md-6 mb-3"
                        >
                          <img
                            src={publictarget}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                FIFA{" "}
                                <span className="badge-private">ongoing</span>
                              </h4>
                              <p style={{ marginLeft: "80px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Members</p>
                                <h3>
                                  10+{" "}
                                  <img
                                    src={members}
                                    alt="members"
                                    className="img-fluid"
                                  />
                                </h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Per Member</p>
                                <h3>₦100,000.00</h3>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link
                          data-bs-toggle="modal"
                          data-bs-target="#global-create"
                          type="button"
                          to="#"
                          className="col-md-6 mb-3"
                        >
                          <img src={global} alt="" className="img-fluid" />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                Travel{" "}
                                <span className="badge-private">ongoing</span>
                              </h4>
                              <p style={{ marginLeft: "80px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Members</p>
                                <h3>
                                  10+{" "}
                                  <img
                                    src={members}
                                    alt="members"
                                    className="img-fluid"
                                  />
                                </h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Per Member</p>
                                <h3>₦100,000.00</h3>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="row mt-5">
                        <Link
                          data-bs-toggle="modal"
                          data-bs-target="#"
                          type="button"
                          to="#"
                          className="col-md-6 mb-3"
                        >
                          <img
                            src={publictarget}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                FIFA{" "}
                                <span className="badge-private">ongoing</span>
                              </h4>
                              <p style={{ marginLeft: "80px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Members</p>
                                <h3>
                                  10+{" "}
                                  <img
                                    src={members}
                                    alt="members"
                                    className="img-fluid"
                                  />
                                </h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Per Member</p>
                                <h3>₦100,000.00</h3>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="col-md-6 mb-3">
                          <img src={global} alt="" className="img-fluid" />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                Travel{" "}
                                <span className="badge-private">ongoing</span>
                              </h4>
                              <p style={{ marginLeft: "80px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Members</p>
                                <h3>
                                  10+{" "}
                                  <img
                                    src={members}
                                    alt="members"
                                    className="img-fluid"
                                  />
                                </h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Per Member</p>
                                <h3>₦100,000.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane quiz-pane" id="3a">
                      <div className="row mt-5">
                        <Link
                          data-bs-toggle="modal"
                          data-bs-target="#withdraw"
                          type="button"
                          to="#"
                          className="col-md-6 mb-3"
                        >
                          <img src={completed} alt="" className="img-fluid" />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                Travel{" "}
                                <span className="badge-completed">
                                  completed
                                </span>
                              </h4>
                              <p style={{ marginLeft: "80px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="col-md-6 mb-3">
                          <img src={completed} alt="" className="img-fluid" />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                Travel{" "}
                                <span className="badge-completed">
                                  completed
                                </span>
                              </h4>
                              <p style={{ marginLeft: "80px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <Link
                          data-bs-toggle="modal"
                          data-bs-target="#withdrawal"
                          type="button"
                          to="#"
                          className="col-md-6 mb-3"
                        >
                          <img src={completed} alt="" className="img-fluid" />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                Travel{" "}
                                <span className="badge-completed">
                                  completed
                                </span>
                              </h4>
                              <p style={{ marginLeft: "80px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="col-md-6 mb-3">
                          <img src={completed} alt="" className="img-fluid" />
                          <div className="bg-white bg-private p-4">
                            <div className="d-flex flex-row">
                              <h4>
                                Travel{" "}
                                <span className="badge-completed">
                                  completed
                                </span>
                              </h4>
                              <p style={{ marginLeft: "80px" }}>
                                200 days left
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <p>Target</p>
                                <h3>₦100,000.00</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Interest</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                            <div className="row mt-3 mb-4">
                              <div className="col-md-6">
                                <p>Maturity date</p>
                                <h3>29-11-2023</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <p>Frequency</p>
                                <h3>15000 (11%/p.a)</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 private-right">
            <div className="private-card px-5 py-4">
              <div className="history-title">
                <h3>Recent Activities</h3>
                <Link
                  data-bs-toggle="modal"
                  data-bs-target="#recentactivities"
                  type="button"
                  to="#"
                  className="float-end"
                >
                  view all
                </Link>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-md-5">
                  <h5>Target </h5>
                </div>
                <div className="col-md-3">
                  <h5>Date</h5>
                </div>
                <div className="col-md-3">
                  <h5>Amount</h5>
                </div>
              </div>
              {targetHistory?.map((data) => {
                return (
                  <div className="row justify-content-center mt-2 border-bottom py-3">
                    <div className="col-md-5">
                      <div className="d-flex flex-row">
                        {data.transactionType === "Top Up" ? (
                          <img
                            src={transfer}
                            alt=""
                            className="img-fluid me-3"
                          />
                        ) : (
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                        )}
                        <h6>{data.transactionType}</h6>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <h6>{data.transactionDate}</h6>
                    </div>
                    <div className="col-md-3">
                      <h6>
                        ₦{" "}
                        {Intl.NumberFormat("en-US").format(
                          data.transactionAmount
                        )}{" "}
                      </h6>
                    </div>
                  </div>
                );
              })}
              {/* <div className="row justify-content-center mt-2 border-bottom py-3">
                <div className="col-md-5">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Transportation</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6>30 Days</h6>
                </div>
                <div className="col-md-3">
                  <h6>₦4,000.00 </h6>
                </div>
              </div> */}
              {/* <div className="row justify-content-center mt-2 py-3">
                <div className="col-md-5">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Travel</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6>30 Days</h6>
                </div>
                <div className="col-md-3">
                  <h6>₦4,000.00 </h6>
                </div>
              </div> */}
            </div>
            <div className="private-card px-5 py-4 mt-3">
              <div className="history-title">
                <h3>Target Behaviour</h3>
                <div className="row justify-content-center mt-2 border-bottom py-2">
                  <div className="col-md-6">
                    <h6>Streak</h6>
                  </div>
                  <div className="col-md-6 text-end">
                    <h6 style={{ color: "#EAB308" }}>
                      <i className="bi bi-shield-fill-x me-2"></i> ₦10,000.00
                      saved in 2months
                    </h6>
                  </div>
                </div>
                <div className="row justify-content-center mt-2 border-bottom py-2">
                  <div className="col-md-6">
                    <h6>Missed deposit</h6>
                  </div>
                  <div className="col-md-6 text-end">
                    <h6 style={{ color: "#E8356D" }}>
                      <i className="bi bi-shield-fill-x me-2"></i> ₦10,000.00 |
                      20 days
                    </h6>
                  </div>
                </div>
                <div className="row mt-2 py-2">
                  <div className="col-md-6">
                    <h6 style={{ color: "#8807F7" }}>
                      Contact financial coach
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="private-card px-5 py-4 mt-3">
              <div className="history-title">
                <h3>Badge progress</h3>
                <div className="row mt-4">
                  <div className="col-md-6 mb-3">
                    <div className="card-progress p-4">
                      <div className="d-flex flex-row">
                        <img src={lieu} alt="" className="img-fluid me-3" />
                        <div className="lieu mb-2">
                          <span>Badge</span>
                          <h5>Lieutenant</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card-progress p-4">
                      <div className="d-flex flex-row">
                        <img src={colo} alt="" className="img-fluid me-3" />
                        <div className="lieu">
                          <span className="text-muted">Badge</span>
                          <h5 className="text-muted">Colonel</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal for Target Private */}
        <div
          className="modal flex-modal fade"
          id="targetplan"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="mx-3 row">
                    <div className="col text-center">
                      <h3 className="topuptarget">NGN 10,000</h3>
                      <button
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2"
                        style={{ width: "100%" }}
                      >
                        Top Up
                      </button>
                    </div>
                  </div>
                  <div className="row target-details px-5 mt-3">
                    <div className="col-md-6">
                      <h6>Name</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>Transportation</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Target</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦100,000.00</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Interest</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦15000 (11%/p.a)</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Maturity</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>200 days left</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Frequency</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>10,000 (Monthly)</p>
                    </div>
                    <hr />
                  </div>
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3>Recent Activities</h3>
                      <h4 className="float-end">view all</h4>
                    </div>
                    <div className="row justify-content-center mt-3">
                      <div className="col-md-5">
                        <h5>Target </h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Date</h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Amount</h5>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 border-bottom py-2">
                      <div className="col-md-5">
                        <div className="d-flex flex-row">
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                          <h6>Transportation</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>30 Days</h6>
                      </div>
                      <div className="col-md-3">
                        <h6>₦4,000.00 </h6>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 py-2">
                      <div className="col-md-5">
                        <div className="d-flex flex-row">
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                          <h6>Travel</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>30 Days</h6>
                      </div>
                      <div className="col-md-3">
                        <h6>₦4,000.00 </h6>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center px-5">
                    <div className="col-md-5 text-center">
                      <h5>Automation</h5>
                      <label className="switch mt-2">
                        <input type="checkbox" placeholder="USD" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div className="row next-saving my-3 px-5">
                    <div className="col-md-6">
                      <h5>Next Saving Date</h5>
                      <h6>24-01-2022</h6>
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className="d-flex flex-row">
                        <h6>₦50,000.00</h6>
                        <img
                          src={visacard}
                          alt="Visa Card"
                          className="img-fluid ms-3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row px-5 btn-private">
                    <div className="col-md-6">
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#extension"
                        type="button"
                        to="#"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6"
                        style={{ width: "100%" }}
                      >
                        Extend
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#settings"
                        type="button"
                        to="#"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6"
                        style={{ width: "100%" }}
                      >
                        Settings
                      </Link>
                    </div>
                  </div>
                  <div className="row px-5 mt-3">
                    <div className="col-md-6">
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#break"
                        type="button"
                        to="#"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6"
                        style={{ width: "100%" }}
                      >
                        Break
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Recent Activities */}
        <div
          className="modal flex-modal fade"
          id="recentactivities"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#targetplan"
                    type="button"
                  >
                    <i className="bi bi-chevron-left"></i> Back
                  </Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Recent Activities</h3>
                      <span className="sub-head">
                        Most recent activities for this savings
                      </span>
                    </div>
                    <div className="row justify-content-center mt-5">
                      <div className="col-md-5">
                        <h5>Target </h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Date</h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Amount</h5>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 border-bottom py-3">
                      <div className="col-md-5">
                        <div className="d-flex flex-row">
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                          <h6>Transportation</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>30 Days</h6>
                      </div>
                      <div className="col-md-3">
                        <h6>₦4,000.00 </h6>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 py-3">
                      <div className="col-md-5">
                        <div className="d-flex flex-row">
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                          <h6>Travel</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>30 Days</h6>
                      </div>
                      <div className="col-md-3">
                        <h6>₦4,000.00 </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Extension */}
        <div
          className="modal flex-modal fade"
          id="extension"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#targetplan"
                    type="button"
                  >
                    <i className="bi bi-chevron-left"></i> Back
                  </Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Extend</h3>
                      <span className="sub-head">
                        Make preferred changes to your Target
                      </span>
                    </div>
                    <div className="row">
                      <div className="col">
                        <form className="mt-4">
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Increase Target amount
                            </label>
                            <input
                              type="number"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="₦100,000.00"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              How often do you want to save
                            </label>
                            <select className="form-select p-select tar-select">
                              <option selected>Monthly</option>
                              <option value="2">Quarterly</option>
                              <option value="3">Yearly</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              How much would you like to save monthly
                            </label>
                            <input
                              type="number"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="₦100,000.00"
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="password"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="Enter Password"
                            />
                          </div>
                          <div>
                            <button
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3"
                              style={{ width: "100%" }}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Settings */}
        <div
          className="modal flex-modal fade"
          id="settings"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#targetplan"
                    type="button"
                  >
                    <i className="bi bi-chevron-left"></i> Back
                  </Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Settings</h3>
                      <span className="sub-head">
                        Make preferred changes to your Target
                      </span>
                    </div>
                    <div className="row">
                      <div className="col">
                        <form className="mt-4">
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Edit Target name
                            </label>
                            <input
                              type="number"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="Transportation"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Edit Target description
                            </label>
                            <input
                              type="text"
                              className="form-control target-form tar-form"
                              placeholder="Save for rainy days"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Edit primary source
                            </label>
                            <input
                              type="number"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="Dilla"
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="password"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="Enter Password"
                            />
                          </div>
                          <div>
                            <button
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3"
                              style={{ width: "100%" }}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Break */}
        <div
          className="modal flex-modal fade"
          id="break"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#targetplan"
                    type="button"
                  >
                    <i className="bi bi-chevron-left"></i> Back
                  </Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Break</h3>
                      <span className="sub-head">
                        Make preferred changes to your Target
                      </span>
                    </div>
                    <div className="row">
                      <div className="col">
                        <form className="mt-4">
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Target name
                            </label>
                            <input
                              type="number"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="Transportation"
                            />
                          </div>
                          <div className="row my-3">
                            <div className="col">
                              <p>Target amount</p>
                              <span className="big-amt">₦99,000.00</span>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Enter reasons
                            </label>
                            <select className="form-select p-select tar-select">
                              <option selected>Enter reasons</option>
                              <option value="2">Rents</option>
                              <option value="3">Education</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Security questions
                            </label>
                            <select className="form-select p-select tar-select">
                              <option selected>Enter reasons</option>
                              <option value="2">Rents</option>
                              <option value="3">Education</option>
                            </select>
                          </div>
                          <div className="">
                            <input
                              type="password"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="Enter Password"
                            />
                          </div>
                          <div className="form-check my-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              lorem ipsum in adrem eff antares encrypt infer
                              inde
                            </label>
                          </div>
                          <div>
                            <button
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3"
                              style={{ width: "100%" }}
                            >
                              Break
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for withdraw -completed */}
        <div
          className="modal flex-modal fade"
          id="withdraw"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#withdraw"
                    type="button"
                  >
                    <i className="bi bi-chevron-left"></i> Back
                  </Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="mx-3 row">
                    <div className="col text-center">
                      <h3 className="topuptarget">NGN 10,000</h3>
                    </div>
                  </div>
                  <div className="row target-details px-5 mt-5">
                    <div className="col-md-6">
                      <h6>Name</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>Transportation</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Target</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦100,000.00</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Interest</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦15000 (11%/p.a)</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Maturity</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>200 days left</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Frequency</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>10,000 (Monthly)</p>
                    </div>
                    <hr />
                  </div>
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3>Recent Activities</h3>
                      <h4 className="float-end">view all</h4>
                    </div>
                    <div className="row justify-content-center mt-3">
                      <div className="col-md-5">
                        <h5>Target </h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Date</h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Amount</h5>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 border-bottom py-2">
                      <div className="col-md-5">
                        <div className="d-flex flex-row">
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                          <h6>Transportation</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>30 Days</h6>
                      </div>
                      <div className="col-md-3">
                        <h6>₦4,000.00 </h6>
                      </div>
                    </div>
                    <div className="row justify-content-center border-bottom mt-2 py-2">
                      <div className="col-md-5">
                        <div className="d-flex flex-row">
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                          <h6>Travel</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>30 Days</h6>
                      </div>
                      <div className="col-md-3">
                        <h6>₦4,000.00 </h6>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col text-center">
                        <Link
                          data-bs-toggle="modal"
                          data-bs-target="#"
                          type="button"
                          to="#destination"
                          className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6"
                        >
                          Withdraw
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for withdrawal destination */}
        <div
          className="modal flex-modal fade"
          id="destination"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#withdraw"
                    type="button"
                  >
                    <i className="bi bi-chevron-left"></i> Back
                  </Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Withdraw</h3>
                      <span className="sub-head">
                        Withdraw to your plans or source
                      </span>
                    </div>
                    <div className="row">
                      <div className="col">
                        <form className="mt-4">
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Choose withdrawal
                            </label>
                            <select className="form-select p-select tar-select">
                              <option selected>
                                Select withdrawal destination
                              </option>
                              <option value="2">Savings Plan</option>
                              <option value="3">Dilla</option>
                              <option value="4">SAN</option>
                            </select>
                          </div>
                          <div>
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#savings-plan"
                              type="button"
                              to="#"
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3 mb-3"
                              style={{ width: "100%" }}
                            >
                              Continue
                            </button>
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#rollover"
                              type="button"
                              to="#"
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6"
                              style={{ width: "100%" }}
                            >
                              Roll over
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Savings Plan */}
        <div
          className="modal flex-modal fade"
          id="savings-plan"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#withdraw"
                    type="button"
                  >
                    <i className="bi bi-chevron-left"></i> Back
                  </Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Withdraw</h3>
                      <span className="sub-head">
                        Withdraw to your plans or source
                      </span>
                    </div>
                    <div className="row">
                      <div className="col">
                        <form className="mt-4">
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Select a Plan
                            </label>
                            <select className="form-select p-select tar-select">
                              <option selected>Choose Plan</option>
                              <option value="2">Transportation - ₦15000</option>
                              <option value="3">Housing - ₦15000</option>
                              <option value="4">Travel - ₦15000</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Enter Pin
                            </label>
                            <input
                              type="password"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="Enter Pin"
                            />
                          </div>
                          <div>
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#"
                              type="button"
                              to="#"
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3 mb-3"
                              style={{ width: "100%" }}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Rollover */}
        <div
          className="modal flex-modal fade"
          id="rollover"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#withdraw"
                    type="button"
                  >
                    <i className="bi bi-chevron-left"></i> Back
                  </Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Roll over</h3>
                      <span className="sub-head">
                        Make preferred changes to your Target
                      </span>
                    </div>
                    <div className="row">
                      <div className="col">
                        <form className="mt-4">
                          <div className="row my-3">
                            <div className="col">
                              <p>Target amount</p>
                              <span className="big-amt">₦99,000.00</span>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              How much do you want to roll over
                            </label>
                            <input
                              type="number"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="Minimum of ₦80,000.00"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Set Target amount
                            </label>
                            <input
                              type="number"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="Minimum of ₦280,000.00"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              How often do you want to save
                            </label>
                            <select className="form-select p-select tar-select">
                              <option selected>Monthly</option>
                              <option value="2">Yearly</option>
                              <option value="3">Quarterly</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              How much would you like to save monthly
                            </label>
                            <input
                              type="number"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="₦100,000.00"
                            />
                          </div>
                          <div className="">
                            <label className="form-label label-target">
                              Pin
                            </label>
                            <input
                              type="password"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="Enter Pin"
                            />
                          </div>
                          <div className="mt-3">
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#overview"
                              type="button"
                              to="#"
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3"
                              style={{ width: "100%" }}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for overview rollback */}
        <div
          className="modal flex-modal fade"
          id="overview"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#withdraw"
                    type="button"
                  >
                    <i className="bi bi-chevron-left"></i> Back
                  </Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="mx-3 row">
                    <div className="history-title">
                      <h3 className="rec-act">Overview</h3>
                      <span className="sub-head">
                        Here is an overview of your roll over plan
                      </span>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col text-center">
                      <span>
                        Roll over amount <span>₦100,000.00</span>
                      </span>
                    </div>
                  </div>
                  <div className="row target-details px-5 mt-5">
                    <div className="col-md-6">
                      <h6>Name</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>Transportation</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Target</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦100,000.00</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Interest</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦15000 (11%/p.a)</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Maturity</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>200 days left</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Frequency</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>10,000 (Monthly)</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row px-5">
                    <div className="form-check my-4">
                      <input className="form-check-input" type="checkbox" />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        lorem ipsum in adrem eff antares encrypt infer inde
                      </label>
                    </div>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#rolloverdone"
                      type="button"
                      to="#"
                      className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-3"
                      style={{ width: "100%" }}
                    >
                      Roll Over
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for rollback - Completed */}
        <div
          className="modal flex-modal fade"
          id="rolloverdone"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#withdraw"
                    type="button"
                  >
                    <i className="bi bi-chevron-left"></i> Back
                  </Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="row">
                    <div className="col text-center done-roll">
                      <img src={done} alt="completed" className="img-fluid" />
                      <h6 className="mt-3">Your roll over is successful</h6>
                    </div>
                  </div>
                  <div className="row px-5 mt-5">
                    <div className="col">
                      <form>
                        <div className="mb-3">
                          <label className="form-label label-target">
                            Choose withdrawal
                          </label>
                          <select className="form-select p-select tar-select">
                            <option selected>
                              Select withdrawal destination
                            </option>
                            <option value="2">SAN</option>
                            <option value="3">Dilla</option>
                          </select>
                        </div>
                        <div className="mt-3">
                          <button
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3"
                            style={{ width: "100%" }}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Global -Public Target */}
        <div
          className="modal flex-modal fade"
          id="global-create"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="mx-3 row">
                    <div className="col text-center">
                      <h3 className="topuptarget">NGN 10,000</h3>
                      <button
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2"
                        style={{ width: "100%" }}
                      >
                        Top Up
                      </button>
                    </div>
                  </div>
                  <div className="row target-details px-5 mt-3">
                    <div className="col-md-6">
                      <h6>Name</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>Transportation</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Target</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦100,000.00</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Interest</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦15000 (11%/p.a)</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Maturity</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>200 days left</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Frequency</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>10,000 (Monthly)</p>
                    </div>
                    <hr />
                  </div>
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3>Recent Activities</h3>
                      <h4 className="float-end">view all</h4>
                    </div>
                    <div className="row justify-content-center mt-3">
                      <div className="col-md-5">
                        <h5>Target </h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Date</h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Amount</h5>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 border-bottom py-2">
                      <div className="col-md-5">
                        <div className="d-flex flex-row">
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                          <h6>Transportation</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>30 Days</h6>
                      </div>
                      <div className="col-md-3">
                        <h6>₦4,000.00 </h6>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 py-2">
                      <div className="col-md-5">
                        <div className="d-flex flex-row">
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                          <h6>Travel</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>30 Days</h6>
                      </div>
                      <div className="col-md-3">
                        <h6>₦4,000.00 </h6>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center px-5">
                    <div className="col-md-5 text-center">
                      <h5>Automation</h5>
                      <label className="switch mt-2">
                        <input type="checkbox" placeholder="USD" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div className="row next-saving my-3 px-5">
                    <div className="col-md-6">
                      <h5>Next Saving Date</h5>
                      <h6>24-01-2022</h6>
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className="d-flex flex-row">
                        <h6>₦50,000.00</h6>
                        <img
                          src={visacard}
                          alt="Visa Card"
                          className="img-fluid ms-3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row px-5 btn-private">
                    <div className="col-md-6">
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#settings"
                        type="button"
                        to="#"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6"
                        style={{ width: "100%" }}
                      >
                        Settings
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#break"
                        type="button"
                        to="#"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6"
                        style={{ width: "100%" }}
                      >
                        Break
                      </Link>
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

export default TargetPrivate;
