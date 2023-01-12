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
import visacard from "../../img/dashboard/visa-card.svg";
import dib from "../../img/dashboard/dib.png";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";

function DashboardFlex() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [flexAcct, setFlexAcct] = useState();
  const [amount, setAmount] = useState(100);
  const [flexHistory, setFlexHistory] = useState();

  useEffect(() => {
    const getFlexPlan = async () => {
      try {
        const { data } = await axios.get(
          `https://ardilla.herokuapp.com/ardilla/api/flex-plan/get-flex-account/${user._id}`
        );
        console.log(data);
        setFlexAcct(data.flexPlan);
      } catch (error) {
        console.log(error);
      }
    };

    const getFlexPlan2 = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/flex/get-flex-account`,
          { withCredentials: true }
        );
        console.log("2", data);
      } catch (error) {
        console.log(error);
      }
    };

    const getFlexHistory = async () => {
      try {
        const { data } = await axios.get(
          `https://ardilla.herokuapp.com/ardilla/api/flex-plan/flex-history/${user._id}`
        );

        console.log(data);

        setFlexHistory(data.th);
      } catch (error) {
        console.log(error);
      }
    };

    getFlexPlan();
    getFlexPlan2();
    getFlexHistory();
  }, [user._id, BACKEND_URL]);

  const getFlexPlan = async () => {
    try {
      const { data } = await axios.get(
        `https://ardilla.herokuapp.com/ardilla/api/flex-plan/get-flex-account/${user._id}`
      );
      console.log(data);
      setFlexAcct(data.flexPlan);
    } catch (error) {
      console.log(error);
    }
  };

  const topUp = async () => {
    try {
      const { data } = await axios.put(
        `https://ardilla.herokuapp.com/ardilla/api/flex-plan/top-up-flex/${user._id}`,
        { amount }
      );

      console.log(data);
      getFlexPlan();
      setAmount(0);
    } catch (error) {
      console.log(error);
    }
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: user.email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_bdeef845da401d49681c94007d802d6c68ac2ef8",
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    topUp();
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <section className="main-dash">
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
            <Link className="me-5 target-active">DIB</Link>
            <Link className="me-5" to="/target-private">
              Dreams
            </Link>
            <Link className="me-5" to="/vaultplan-dashboard">
              Vault
            </Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 t-savings">
            <div className="d-flex flex-row">
              <h2 className="me-4">DIB Savings</h2>
              <Link to="/learn" className="mt-3">
                Learn More
              </Link>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <span>Total Balance</span>
                <h5>
                  ₦{" "}
                  {Intl.NumberFormat("en-US").format(flexAcct?.accountBalance)}
                </h5>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3"
                  onClick={() => initializePayment(onSuccess, onClose)}
                >
                  Top up
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                {/* <button className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3">Top Up</button> */}
                {/* <div className="switches-container">
                  <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked" />
                  <input type="radio" id="switchYearly" name="switchPlan" value="Yearly" />
                  <label htmlFor="switchMonthly">My Targets</label>
                  <label htmlFor="switchYearly">Explore Targets</label>
                  <div className="switch-wrapper">
                    <div className="switchies">
                      <div>My Targets</div>
                      <div>Explore Targets</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="row mt-5">
              <Link
                data-bs-toggle="modal"
                data-bs-target="#review-dib"
                type="button"
                to="#"
                className="current-flex px-5 py-5"
              >
                <div>
                  <h2>
                    Your Current <span style={{ color: "#E8356D" }}>DIB</span>{" "}
                    Plan
                  </h2>
                  <p
                    className="float-end review-dib"
                    style={{ marginTop: "-30px" }}
                  >
                    Review DIB <i className="bi bi-chevron-right"></i>
                  </p>
                </div>
                <div className="row inner-current mt-5">
                  <div className="col-md-6">
                    <h6>How much you save</h6>
                  </div>
                  <div className="col-md-6 text-end">
                    {/* <h5>₦60,000 (Monthly)</h5> */}
                    {flexAcct && flexAcct?.type === "custom" ? (
                      <h5>
                        ₦{" "}
                        {Intl.NumberFormat("en-US").format(
                          flexAcct?.customSavingRate
                        )}
                        {flexAcct?.savingPeriod}
                      </h5>
                    ) : (
                      <h5>
                        ₦{" "}
                        {Intl.NumberFormat("en-US").format(
                          flexAcct?.autoSavingRate
                        )}
                        {flexAcct?.savingPeriod}
                      </h5>
                    )}
                  </div>
                </div>
                <div className="row inner-current mt-3">
                  <div className="col-md-6">
                    <h6>Total DIB Savings</h6>
                  </div>
                  <div className="col-md-6 text-end">
                    {flexAcct && flexAcct?.type === "custom" ? (
                      <h5>
                        ₦{" "}
                        {Intl.NumberFormat("en-US").format(
                          flexAcct?.customSavingTarget
                        )}
                        {flexAcct?.savingPeriod}
                      </h5>
                    ) : (
                      <h5>
                        ₦{" "}
                        {Intl.NumberFormat("en-US").format(
                          flexAcct?.autoSavingTarget
                        )}
                        {flexAcct?.savingPeriod}
                      </h5>
                    )}
                    {/* <h5>₦60,000 (Monthly)</h5> */}
                  </div>
                </div>
                <div className="row inner-current mt-3 mb-4">
                  <div className="col-md-6">
                    <h6>Interest</h6>
                  </div>
                  <div className="col-md-6 text-end">
                    {flexAcct && (
                      <h5>
                        ₦{" "}
                        {Intl.NumberFormat("en-US").format(
                          flexAcct?.intrestPerMonth[0]
                        )}
                        {flexAcct?.savingPeriod}
                      </h5>
                    )}
                    {/* <h5>₦60,000 (Monthly)</h5> */}
                  </div>
                </div>
                <img src={dib} alt="range" className="img-fluid" />
              </Link>
            </div>
          </div>
          <div className="col-md-6 private-right">
            <div className="private-card px-5 py-4">
              <div className="history-title">
                <h3>History</h3>
                <Link
                  data-bs-toggle="modal"
                  data-bs-target="#recentactivities"
                  type="button"
                  to="#"
                  className="float-end"
                  style={{ marginTop: "-19px" }}
                >
                  view all
                </Link>
              </div>
              <div className="switches-container deposit-container mt-3">
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
                <label htmlFor="switchMonthly">Transactions</label>
                <label htmlFor="switchYearly">Missed deposits</label>
                <div className="switch-wrapper">
                  <div className="switchies">
                    <div>Transactions</div>
                    <div>Missed deposits</div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  <h5>Description </h5>
                </div>
                <div className="col-md-3">
                  <h5>Date</h5>
                </div>
                <div className="col-md-3">
                  <h5>Amount</h5>
                </div>
                <div className="col-md-2">
                  <h5>Reason</h5>
                </div>
              </div>
              <div className="row mt-2 border-bottom py-3">
                <div className="col-md-4">
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
                <div className="col-md-2">
                  <h6> </h6>
                </div>
              </div>
              <div className="row justify-content-center mt-2 py-3">
                <div className="col-md-4">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Travel</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6>4hrs</h6>
                </div>
                <div className="col-md-3">
                  <h6>400.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>Emergency</h6>
                </div>
              </div>
            </div>
            <div className="private-card px-5 py-4 mt-3">
              <div className="history-title">
                <h3>DIB Behaviour</h3>
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
        {/* Modal for Review DIB */}
        <div
          className="modal flex-modal fade"
          id="review-dib"
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
                      <h3 className="topuptarget">Review DIB plan</h3>
                      {/* <button className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2" style={{width:"100%"}}>Top Up</button> */}
                    </div>
                  </div>
                  <div className="row target-details px-5 mt-5">
                    <div className="col-md-6">
                      <h6>Amount</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦200,000.00</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Dreams</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦500,000.00</p>
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
                      <h6>How much you save</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦40,000(Monthly)</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>How you earn</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦250k - ₦500k</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>How much you spend</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦250k - ₦500k</p>
                    </div>
                    <hr />
                  </div>
                  <div className="row my-5 justify-content-center px-5">
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
                        data-bs-target="#withdrawal"
                        type="button"
                        to="#"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6"
                        style={{ width: "100%" }}
                      >
                        Withdraw
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
                    {/* <div className="switches-container deposit-container mt-3">
                      <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked" />
                      <input type="radio" id="switchYearly" name="switchPlan" value="Yearly" />
                      <label htmlFor="switchMonthly">Transactions</label>
                      <label htmlFor="switchYearly">Missed deposits</label>
                      <div className="switch-wrapper">
                        <div className="switchies">
                          <div>Transactions</div>
                          <div>Missed deposits</div>
                        </div>
                      </div>
                    </div> */}
                    <div className="row mt-5">
                      <div className="col-md-4">
                        <h5>Description </h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Date</h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Amount</h5>
                      </div>
                      <div className="col-md-2">
                        <h5>Reason</h5>
                      </div>
                    </div>
                    <div className="row mt-2 border-bottom py-3">
                      <div className="col-md-4">
                        <div className="d-flex flex-row">
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                          <h6>Top Up</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>30 Days</h6>
                      </div>
                      <div className="col-md-3">
                        <h6>₦4,000.00 </h6>
                      </div>
                      <div className="col-md-2">
                        <h6> </h6>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 py-3">
                      <div className="col-md-4">
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
                        <h6>4hrs</h6>
                      </div>
                      <div className="col-md-3">
                        <h6>400.00 </h6>
                      </div>
                      <div className="col-md-2">
                        <h6>Emergency</h6>
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
                    data-bs-target="#review-dib"
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
                        Make preferred changes to your Dreams
                      </span>
                    </div>
                    <div className="row">
                      <div className="col">
                        <form className="mt-4">
                          <div className="mb-3">
                            <label className="form-label label-target">
                              Edit primary source
                            </label>
                            <select className="form-select p-select tar-select">
                              <option selected>Edit primary source</option>
                              <option value="2">Dilla</option>
                              <option value="3">SAN</option>
                            </select>
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

        {/* Modal for Withdrawal */}
        <div
          className="modal flex-modal fade"
          id="withdrawal"
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
                    data-bs-target="#review-dib"
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
                              <option value="2">Dilla</option>
                              <option value="3">SAN</option>
                            </select>
                          </div>
                          <div>
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#withdrawal-2"
                              type="button"
                              to="#"
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3"
                              style={{ width: "100%" }}
                            >
                              Continue
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

        {/* Modal for Withdrawal - 2 */}
        <div
          className="modal flex-modal fade"
          id="withdrawal-2"
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
                    data-bs-target="#review-dib"
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
                              <option value="2">Dilla</option>
                              <option value="3">SAN</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">
                              What is your mother’s maiden name?
                            </label>
                            <input
                              type="text"
                              className="form-control target-form tar-form"
                              id=""
                              placeholder="Enter Answer"
                            />
                          </div>
                          <div className="mb-3">
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
                          <div>
                            <button
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3"
                              style={{ width: "100%" }}
                            >
                              Withdraw
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
      </div>
    </section>
  );
}

export default DashboardFlex;
