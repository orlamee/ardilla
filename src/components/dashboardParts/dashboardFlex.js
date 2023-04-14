import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/target.css";
import withdraw from "../../img/dashboard/w-icon.svg";
import lieu from "../../img/dashboard/lieu.svg";
import colo from "../../img/dashboard/col.svg";
import visacard from "../../img/dashboard/visacard.svg";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import transfer from "../../img/dashboard/received-icon.svg";
import missed from "../../img/declined.svg";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import { calender } from "../../utils/data";
import { Icon } from '@iconify/react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CurrencyInput from 'react-currency-input-field';



function DashboardFlex() {
  const [flexAcct, setFlexAcct] = useState();
  const [amount, setAmount] = useState(100);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [flexHistory, setFlexHistory] = useState();
  const [user, setUser] = useState();
  const [source, setSource] = useState("");
  const [pin, setPin] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [password, setPassword] = useState("");

  const month = new Date().getMonth();

  useEffect(() => {
    const getFlexAccount = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/flex/get-flex-account`,
          { withCredentials: true }
        );

        setFlexAcct(data.flexPlan);
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

    const getFlexHistory = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/flex/flex-history`,
          { withCredentials: true }
        );

        setFlexHistory(data.transactionHistory);
        console.log(data);
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

    const getUserById = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/user/get-user`,
          {
            withCredentials: true,
          }
        );

        setUser(data.user);
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

    getFlexAccount();
    getFlexHistory();
    getUserById();
  }, []);

  const getFlexAccount = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/flex/get-flex-account`,
        { withCredentials: true }
      );

      setFlexAcct(data.flexPlan);
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

  const getFlexHistory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/flex/flex-history`,
        { withCredentials: true }
      );

      setFlexHistory(data.transactionHistory);
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

  const topUp = async (reference) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/flex/flex-top-up`,
        { amount, reference },
        { withCredentials: true }
      );

      setMsg(data.msg);
      setModal(true);

      // setOnSuccessModal(true);

      getFlexAccount();
      getFlexHistory();
      setAmount(300);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setErr(true);
      setMsg(message);
      // setOnSuccessModal(false);
      setModal(false);
    }
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: user?.email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_bdeef845da401d49681c94007d802d6c68ac2ef8",
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    topUp(reference);
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  const handleClickSuccess = () => {
    // setOnSuccessModal(false);
    setModal(false);
  };

  setTimeout(() => {
    if (modal) {
      // setOnSuccessModal(false);
      setModal(false);
    }
  }, 6000);

  const handleTransfer = async (e) => {
    e.preventDefault();

    if (source === "dilla") {
      try {
        setLoading(true);
        const { data } = await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/flex/flex-to-dilla`,
          { answer, pin, amount },
          { withCredentials: true }
        );

        setModal(true);
        setMsg(data.msg);
        setLoading(false);
        getFlexAccount();
        getFlexHistory();
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setErr(true);
        setMsg(message);
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        const { data } = await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/flex/flex-to-san`,
          { answer, pin, amount },
          { withCredentials: true }
        );

        setModal(true);
        setMsg(data.msg);
        setLoading(false);
        getFlexAccount();
        getFlexHistory();
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setErr(true);
        setMsg(message);
        setLoading(false);
      }
    }
  };

  const handleSetting = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/flex/setting`,
        { source, password },
        { withCredentials: true }
      );

      setModal(true);
      setMsg(data.msg);
      setLoading(false);
      getFlexAccount();
      getFlexHistory();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setErr(true);
      setMsg(message);
      setLoading(false);
    }
  };

  const calculator = (cb) => {
    return cb * 0.11 * calender[month].day;
  };

  return (
    <section className="home">
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
      {modal && (
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
        <div className="row">
          <div className="col cadet-name">
            <h2>
               Cadet {"<"}
              {/* {userDetails?.kodeHex} */}
              {"/>"},
            </h2>
          </div>
        </div>
        <Link to="/dashboard">
          <div className="">
            <Icon icon="mingcute:home-3-line" className="me-4 fs-4" />
            <span className="mt-1">Home</span>
          </div>
        </Link>
        <Link to="/portfolio">
          <div className="">
            <Icon icon="material-symbols:work-outline" className="me-4 fs-4" />
            Portfolio
          </div>
        </Link>
        <Link to="/savings" className="active">
          <div className="">
            <Icon icon="material-symbols:energy-savings-leaf-outline-rounded" className="me-4 fs-4" />
            Savings
          </div>
        </Link>
        <Link>
          <div className="">
            <Icon icon="fluent:arrow-growth-20-filled" className="me-4 fs-4" />
            Investments <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link>
          <div className="">
            <Icon icon="ic:baseline-security" className="me-4 fs-4" />
            Insurance <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <a href="/dilla">
          <div className="">
            <Icon icon="ion:wallet-outline" className="me-4 fs-4" />
            Dilla
          </div>
        </a>
        <Link>
          <div className="">
            <Icon icon="ic:outline-explore" className="me-4 fs-4" />
            Budgeting <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link to="/learn">
          <div className="">
            <Icon icon="simple-icons:sololearn" className="me-4 fs-5" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link to="/payment">
            <div className="">
              <Icon icon="fluent:payment-32-regular" className="me-4 fs-4" />
              Payment
            </div>
          </Link>
          <Link to="/financial-coach">
            <div className="">
              <Icon icon="bx:support" className="me-4 fs-4" />
              Financial Coach
            </div>
          </Link>
          <Link>
            <div className="">
              <Icon icon="bx:log-out-circle" className="me-4 fs-4" />
              Log Out
            </div>
          </Link>
        </div>
      </div>
      <div className="content py-5 px-5 t-private">
        {/* <div className="row">
          <div className="d-flex flex-row privatelinks">
            <Link className="me-5 target-active">DIB</Link>
            <Link className="me-5" to="/target-private">
              Dreams
            </Link>
            <Link className="me-5" to="/vaultplan-dashboard">
              Vault
            </Link>
          </div>
        </div> */}
        <div className="row mt-5 justify-content-between">
          <div className="col-md-6 t-savings">
            <div className="d-flex flex-row">
              <h2 className="me-4">DIB</h2>
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
              <div className="col-md-6 text-end">
                <div className="d-flex flex-row">
                  <button
                    className="btn btn-outline-primary px-5 py-3 interest-btn fs-6 mt-2 me-3 w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#interest"
                    type="button"
                    to="#"
                  >
                    Interest
                  </button>
                  <button
                    className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 w-100"
                    onClick={() => initializePayment(onSuccess, onClose)}
                  >
                    Top up
                  </button>
                </div>
                
              </div>
            </div>
            <div className="row mt-5">
              <div
                className="current-flex px-5 py-5"
              >
                <div>
                  <h2 className="">Your Current DIB Plan</h2>
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#review-dib"
                    type="button"
                    className="float-end review-dib"
                    style={{ marginTop: "-30px" }}
                  >
                    Review DIB <i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
                <div className="row inner-current mt-5">
                  <div className="col-md-6">
                    <h6 className="">Monthly</h6>
                  </div>
                  <div className="col-md-6 text-end">
                    <h5><span className="amt-card">₦60,000</span> (Monthly)</h5>
                  </div>
                </div>
                <div className="row inner-current mt-3">
                  <div className="col-md-6">
                    <h6 className="">Target</h6>
                  </div>
                  <div className="col-md-6 text-end">
                    <h5>₦750k</h5>
                  </div>
                </div>

                <div className="row inner-current mt-3 mb-4">
                  <div className="col-md-6">
                    <h6 className="">Interest</h6>
                  </div>
                  <div className="col-md-6 text-end">
                    <h5>₦15000 <span className="int-card">(11%/p.a)</span></h5>
                  </div>
                </div>
                <div className="row inner-current mt-3 mb-4">
                  <div className="col-md-6">
                    <h6 className="">Last Top Up </h6>
                  </div>
                  <div className="col-md-6 text-end">
                    <h5 className="">
                      15th Of Nov
                    </h5>
                  </div>
                </div>
                <div className="row inner-current mt-3 mb-4">
                  <div className="col-md-6">
                    <h6 className="">Next Top Up </h6>
                  </div>
                  <div className="col-md-6 text-end">
                    <h5 className="">
                      15th Of Dec
                    </h5>
                  </div>
                </div>
                <div className="row inner-current mt-3 mb-4">
                  <div className="col-md-6">
                    <h6 className="">Automation</h6>
                  </div>
                  <div className="col-md-6 text-end">
                    <h5 className="">
                      ON
                    </h5>
                  </div>
                </div>
                <ProgressBar now={60} label="60%" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-5 p-0">
                <div className="bg-white withdrawal-score p-4">
                  <p>Withdrawal Score</p>
                  <div className="d-flex flex-row">
                    <div className="me-2 scoremark">
                      <i
                        className="bi bi-check-lg fs-5"
                        style={{ color: "#8807F7" }}
                      ></i>
                    </div>
                    <div className="me-2 scoremark">
                      <i
                        className="bi bi-check-lg fs-5"
                        style={{ color: "#8807F7" }}
                      ></i>
                    </div>
                    <div className="me-2 scoremark">
                      <i
                        className="bi bi-check-lg fs-5"
                        style={{ color: "#8807F7" }}
                      ></i>
                    </div>
                    <div className="me-2 scoremark">
                      <i
                        className="bi bi-check-lg fs-5"
                        style={{ color: "#8807F7" }}
                      ></i>
                    </div>
                  </div>
                  <span>Your withdraw score would be reduced</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 private-right">
            <div className="private-card px-5 py-4 savings-feed">
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
                <div className="col-md-4 text-center">
                  <h5>Date</h5>
                </div>
                <div className="col-md-4 text-end">
                  <h5>Amount</h5>
                </div>
              </div>
              {flexHistory?.map((data) => {
                return (
                  // <div>
                  <div className="row mt-2 border-bottom py-3">
                    <div className="col-md-4">
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

                        {/* <h6>Transportation</h6> */}
                        <h6>{data.transactionType}</h6>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <h6>{data.transactionDate}</h6>
                    </div>
                    <div className="col-md-4 text-end">
                      <h6>
                        ₦
                        {Intl.NumberFormat("en-US").format(
                          data.transactionAmount
                        )}
                      </h6>
                    </div>
                    
                  </div>
                );
              })}
              {/* <div className="row mt-2 border-bottom py-3">
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
              </div> */}
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
                <div className="container initiate-modal px-5">
                  <div className="row">
                    <div className="col text-center review-dib-plan">
                      <h3 className="text-white mb-2">Review DIB plan</h3>
                      <Link
                        className="btn btn-outline-primary px-3 py-1 edit-btn me-3"
                      >
                        <i className="bi bi-pencil me-2"></i>Edit Plan
                      </Link>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col">
                      <div className="table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td className="left-t">Amount</td>
                              <td className="right-t">₦200,000.00</td>
                            </tr>
                            <tr>
                              <td className="left-t">Target</td>
                              <td className="right-t">₦200,000.00</td>
                            </tr>
                            <tr>
                              <td className="left-t">Interest</td>
                              <td className="right-t">₦15,000 (11%/p.a)</td>
                            </tr>
                            <tr>
                              <td className="left-t">How you earn</td>
                              <td className="right-t">₦500k</td>
                            </tr>
                            <tr>
                              <td className="left-t">How much you spend</td>
                              <td className="right-t">₦101k - ₦250k</td>
                            </tr>
                            <tr>
                              <td className="left-t">How much you save</td>
                              <td className="right-t">₦40,000 (Monthly)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row my-5 justify-content-center automatic">
                    <div className="col-md-4 text-center">
                      <h5 className="text-white">Automation</h5>
                      <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="my-3 togss"
                        justify
                        
                      >
                        <Tab eventKey="home" title="ON" >
                          
                        </Tab>
                        <Tab eventKey="profile" title="OFF">
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  <div className="row next-saving my-3">
                    <div className="col-md-6">
                      <h5 className="text-white">Next Saving Date</h5>
                      <h6 className="text-white">
                        24-01-2022
                      </h6>
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className="d-flex flex-row justify-content-end">
                        <h6 className="text-white mt-1">₦50,000.00</h6>
                        <img
                          src={visacard}
                          alt="Visa Card"
                          className="img-fluid ms-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer px-5">
                <div className="d-flex flex-row">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#withdrawal"
                    type="button"
                    to="#"
                    className="btn btn-outline-primary px-5 py-3 me-3 ardilla-btn outline-btn fs-6 w-100"
                  >
                    Withdraw
                  </Link>
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#settings"
                    type="button"
                    to="#"
                    className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6 w-100"
                  >
                    Settings
                  </Link>
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
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Recent Activities</h3>
                      <span className="sub-head">
                        Most recent activities for this savings
                      </span>
                    </div>
                    <div className="row automatic">
                      <div className="col">
                        <Tabs
                          defaultActiveKey="transactions"
                          className="my-3 togss"
                          justify
                          style={{width: "230px"}}
                        >
                          <Tab eventKey="transactions" title="Transactions" >
                            <div className="row mt-5">
                              <div className="col">
                                <div className="table-responsive">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" className="right-t">Amount</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className=""><img src={transfer} alt="" className="img-fluid" width="19px" /></td>
                                        <td className="left-t">Top Up</td>
                                        <td className="">1 hr ago</td>
                                        <td className="right-t">₦250.00 </td>
                                      </tr>
                                      <tr>
                                        <td className=""><img src={transfer} alt="" className="img-fluid" width="19px" /></td>
                                        <td className="left-t">Top Up</td>
                                        <td className="">1 hr ago</td>
                                        <td className="right-t">₦250.00 </td>
                                      </tr>
                                      <tr>
                                        <td className=""><img src={transfer} alt="" className="img-fluid" width="19px" /></td>
                                        <td className="left-t">Top Up</td>
                                        <td className="">1 hr ago</td>
                                        <td className="right-t">₦250.00 </td>
                                      </tr>
                                      <tr>
                                        <td className=""><img src={transfer} alt="" className="img-fluid" width="19px" /></td>
                                        <td className="left-t">Top Up</td>
                                        <td className="">1 hr ago</td>
                                        <td className="right-t">₦250.00 </td>
                                      </tr>
                                      
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </Tab>
                          <Tab eventKey="missed-depo" title="Missed deposits">
                            <div className="row mt-5">
                              <div className="col">
                                <div className="table-responsive">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" className="right-t">Amount</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className=""><img src={missed} alt="" className="img-fluid" width="19px" /></td>
                                        <td className="left-t">Top Up</td>
                                        <td className="">1 hr ago</td>
                                        <td className="right-t">₦250.00 </td>
                                      </tr>
                                      <tr>
                                        <td className=""><img src={missed} alt="" className="img-fluid" width="19px" /></td>
                                        <td className="left-t">Top Up</td>
                                        <td className="">1 hr ago</td>
                                        <td className="right-t">₦250.00 </td>
                                      </tr>
                                      <tr>
                                        <td className=""><img src={missed} alt="" className="img-fluid" width="19px" /></td>
                                        <td className="left-t">Top Up</td>
                                        <td className="">1 hr ago</td>
                                        <td className="right-t">₦250.00 </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </Tab>
                        </Tabs>
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
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Settings</h3>
                      <span className="sub-head">
                        Make preferred changes to your Dreams
                      </span>
                    </div>
                    <div className="row">
                      <div className="col">
                        <form className="mt-4" onSubmit={handleSetting}>
                          <div className="mb-3">
                            <label className="form-label">
                              Edit primary source
                            </label>
                            <select
                              className="form-select"
                            >
                              <option value="dilla">Dilla</option>
                              <option value="SAN">SAN</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <input
                              type="password"
                              className="form-control"
                              id=""
                              placeholder="Enter Password"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer px-5">
                <Link
                  to="#"
                  className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6 w-100"
                >
                  Submit
                </Link>
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
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal">
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
                            <label className="form-label">
                              Choose withdrawal
                            </label>
                            <select
                              className="form-select"
                            >
                              <option value="dilla">Dilla</option>
                              <option value="SAN">SAN</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer px-5">
                <Link
                  data-bs-toggle="modal"
                  data-bs-target="#withdrawal-amount"
                  type="button"
                  to="#"
                  className="btn btn-outline-primary px-5 py-3 w-100 ardilla-btn fs-6 mt-2 me-3"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Withdrawal Amount  */}
        <div
          className="modal flex-modal fade"
          id="withdrawal-amount"
          tabIndex="-1"
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
                <div className="container initiate-modal">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Set Withdrawal Amount</h3>
                      <span className="sub-head">
                        How Much Would you like to Withdraw?
                      </span>
                    </div>
                    <div className="row mt-5 justify-content-center add-amount">
                      <div className="col text-center">
                        <form>
                          <div class="mb-3 no-b">
                            <label for="exampleInputEmail1" class="form-label">Input Amount</label>
                            <CurrencyInput
                              prefix="₦"
                              id="input-example"
                              name="input-name"
                              defaultValue={1000}
                              className="form-control"
                              decimalsLimit={2}
                              onValueChange={(value, name) => console.log(value, name)}
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer px-5">
                <Link
                  data-bs-toggle="modal"
                  data-bs-target="#withdrawal-2"
                  type="button"
                  to="#"
                  className="btn btn-outline-primary px-5 py-3 w-100 ardilla-btn fs-6 mt-2 me-3"
                >
                  Continue
                </Link>
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
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Withdraw</h3>
                      <span className="sub-head">
                        Withdraw to your plans or source
                      </span>
                    </div>
                    <div className="row mt-3">
                      <div className="col">
                        <div className="with-amount text-center">
                          You are about to withdraw <span className="fw-bold">₦20,000.00</span>
                        </div>
                        <form className="mt-4" onSubmit={handleTransfer}>
                          <div className="mb-3">
                            <label className="form-label">
                              Choose withdrawal
                            </label>
                            <select className="form-select p-select tar-select">
                              <option value={source} selected>
                                {source}
                              </option>
                              
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Pin
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id=""
                              placeholder="Enter Pin"
                              required
                              onChange={(e) => setPin(e.target.value)}
                            />
                          </div>
                          
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer px-5">
                {loading ? (
                  <div>
                    <button
                      className="btn btn-outline-primary px-5 py-3 w-100 ardilla-btn fs-6 mt-2 me-3"
                      type="button"
                    >
                      Sending
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      className="btn btn-outline-primary px-5 py-3 w-100 ardilla-btn fs-6 mt-2 me-3"
                      type="submit"
                    >
                      Withdraw
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Modal for interest */}
       <div
        className="modal flex-modal fade"
        id="interest"
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
              <div className="container initiate-modal">
                <div className="c-tar px-5 py-4">
                  <div className="history-title">
                    <h3 className="rec-act">Interest Breakdown</h3>
                    <span className="sub-head">
                      You have recived NGN 2,000 interest on your DIB savings for march 2023. Interest is given at %5 per annum. And interest are calculated daily as shown below
                    </span>
                  </div>
                  <div className="with-amount mt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Total Interest</p>
                        <h6>₦2,000.00 </h6>
                      </div>
                      <div className="col-md-6 text-center mt-2">
                        <button type="button" class="btn btn-light">Claim reward</button>
                        <h1 className="mt-1">Claim after 30 days <span style={{color: "#34D399"}}>(5days left)</span></h1>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col">
                      <div className="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">DATE</th>
                              <th scope="col" className="text-center">SAVINGS</th>
                              <th scope="col" className="right-t">EARNING</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="left-t">01-02-2023</td>
                              <td className="text-center">₦60,000.00 </td>
                              <td className="right-t">₦0.04 </td>
                            </tr>
                           
                          </tbody>
                        </table>
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
