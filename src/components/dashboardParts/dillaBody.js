/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import search from "../../img/dashboard/search.svg";
import user from "../../img/dashboard/user.svg";
import ola from "../../img/dashboard/ola.svg";
import nike from "../../img/dashboard/nike.svg";
import starboy from "../../img/dashboard/starboy.svg";
import levi from "../../img/dashboard/levi.svg";
import withdraw from "../../img/dashboard/w-icon.svg";
import rec from "../../img/dashboard/rec.svg";
import use from "../../img/dashboard/userr.svg";
import cadet from "../../img/dashboard/caddet.svg";
import successful from "../../img/dashboard/cadet-success.svg";
import dep from "../../img/dashboard/dep.svg";
import sent from "../../img/dashboard/checked.svg";
import cancel from "../../img/dashboard/cancel.svg";
import revoke from "../../img/dashboard/revoke.svg";
import dillalogo from "../../img/dashboard/dilla-new.png";
import success from "../../img/dashboard/payment-success.svg";
import addcard from "../../img/dashboard/addcard.svg";
import blur from "../../img/dashboard/blur-card.svg";
import carddetails from "../../img/dashboard/card-details.svg";
import mysan from "../../img/dashboard/mysan.svg";
import dillauser from "../../img/dashboard/dilla-user.svg";
import savingsplan from "../../img/dashboard/savingsplan.svg";
import investmentplan from "../../img/dashboard/investmentplan.svg";
import insuranceplan from "../../img/dashboard/insuranceplan.svg";
import sanlogo from "../../img/dashboard/san-new.png";
import becca from "../../img/dashboard/becca.svg";
import axios from "axios";
import Collapse from "react-bootstrap/Collapse";
// import Button from 'react-bootstrap/Button';

// import PaystackPop from "@paystack/inline-js";
import { usePaystackPayment } from "react-paystack";

function DillaBody() {
  const [open, setOpen] = useState(false);
  const [dillaWallet, setDillaWallet] = useState({});
  const [amount, setAmount] = useState();
  const [pin, setPin] = useState("");
  const [san, setSan] = useState({});

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onTransferSuccess, setOnTransferSuccess] = useState(false);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  let user1 = JSON.parse(sessionStorage.getItem("user"));

  const email = user1.email;

  const userID = "639998243d3d6769fbe39642";

  useEffect(() => {
    const getDillaWallet = async () => {
      try {
        const { data } = await axios.get(
          `https://ardilla.herokuapp.com/ardilla/api/dilla-wallet/get-dilla-wallet/${user1._id}`
        );

        // console.log(data);
        setDillaWallet(data.dillaWallet);
      } catch (error) {
        console.log(error);
      }
    };

    const getSanAcct = async () => {
      try {
        const { data } = await axios.get(
          `https://ardilla.herokuapp.com/ardilla/api/san-account/get-san-account/${user1._id}`
        );

        setSan(data.sanAccount);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getDillaWallet();
    getSanAcct();

    getDillaWallet();
  }, [user1._id]);

  // console.log(san);

  const getDillaWallet = async () => {
    try {
      const { data } = await axios.get(
        `https://ardilla.herokuapp.com/ardilla/api/dilla-wallet/get-dilla-wallet/${user1._id}`
      );

      // console.log(data);
      setDillaWallet(data.dillaWallet);
    } catch (error) {
      console.log(error);
    }
  };

  const topUp = async () => {
    try {
      const { data } = await axios.put(
        `https://ardilla.herokuapp.com/ardilla/api/dilla-wallet/top-up-account/${user1._id}`,
        { email, amount }
      );

      console.log(data);
      getDillaWallet();
      setAmount(0);
    } catch (error) {
      console.log(error);
    }
  };

  // pk_test_bdeef845da401d49681c94007d802d6c68ac2ef8;

  // pk_live_30a03519aa70060b7fa4021fa8cf98b9c3d3619e

  const config = {
    reference: new Date().getTime().toString(),
    email: user1.email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_bdeef845da401d49681c94007d802d6c68ac2ef8",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    topUp();
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);
  const getSanAcct = async () => {
    try {
      const { data } = await axios.get(
        `https://ardilla.herokuapp.com/ardilla/api/san-account/get-san-account/${user1._id}`
      );

      setSan(data.sanAccount);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const transferToSan = async () => {
  //   try {
  //     setLoading(true);
  //     setErr(false);
  //     const { data } = await axios.put(
  //       `https://ardilla.herokuapp.com/ardilla/api/dilla-wallet/transfer-to-san/${user1._id}`,
  //       { amount, pin }
  //     );

  //     setLoading(false);
  //     getSanAcct();
  //     getDillaWallet();
  //     setOnTransferSuccess(true);
  //     // console.log(data);
  //   } catch (error) {
  //     setOnTransferSuccess(false);
  //     setMsg(`${error.response.data.msg} `);
  //     setLoading(false);
  //     setErr(true);
  //   }
  // };

  // const requestMoney = () => {};

  let ots;

  const tranfertoDilla = async () => {
    ots = {
      question,
      answer,
    };
    // e.preventDefault();
    // setLoading(true);
    // setErr(false);

    try {
      setLoading(true);
      setErr(false);
      const { data } = await axios.put(
        `https://ardilla.herokuapp.com/ardilla/api/dilla-wallet/transfer/${user1._id}`,
        { amount, pin, ots, userID }
      );

      setLoading(false);
      getSanAcct();
      getDillaWallet();
      setOnTransferSuccess(true);
      console.log(data);
    } catch (error) {
      setOnTransferSuccess(false);
      setMsg(`${error.response.data.msg} `);
      setLoading(false);
      setErr(true);
    }
  };

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
        <Link to="/portfolio" className="">
          <div className="d-flex flex-row">
            <img src={portfolio} alt="" className="img-fluid me-2 icons" />
            Portfolio
          </div>
        </Link>
        <Link to="/savings">
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
        <Link className="active" to="/dilla">
          <div className="d-flex flex-row">
            <img src={dilla} alt="" className="img-fluid me-2 icons" />
            Dilla
          </div>
        </Link>
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
      <div className="content py-5 px-5">
        <div className="row dilla-right">
          <div className="col">
            <h6>
              Cadet {"<"}
              {user.kodeHex}
              {"/>"},
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 dilla-right">
            <h5 className="mt-5">Amount Balance</h5>
            <div className="d-flex flex-row">
              <h4 className="amt-left">
                NGN
                {Intl.NumberFormat("en-US").format(dillaWallet?.accountBalance)}
              </h4>
              <label className="switch mt-2">
                <input type="checkbox" placeholder="USD" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="d-flex flex-row">
              <Link
                data-bs-toggle="modal"
                data-bs-target="#topup-dilla"
                type="button"
                className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-4 me-3"
              >
                Top Up
              </Link>
              {/* Topup Modal */}
              <div
                className="modal flex-modal fade"
                id="topup-dilla"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
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
                        <div className="row mx-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img
                                  src={dillalogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>
                                  ₦{" "}
                                  {Intl.NumberFormat("en-US").format(
                                    dillaWallet?.accountBalance
                                  )}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3 mt-4 title-card">
                          <div className="col text-center">
                            <h3>Amount</h3>
                          </div>
                        </div>
                        <div className="row mx-3">
                          <div className="col text-center">
                            <div className="input-group cart-group my-3">
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="quantity-left-minus minus-bg btn btn-number me-3"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i className="bi bi-dash"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                className="form-control input-number"
                                // defaultValue="30000"
                                required
                                min="1"
                                max="100"
                                value={amount}
                                onChange={(e) => setAmount(~~e.target.value)}
                              />
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="quantity-right-plus btn minus-bg btn-number ms-3"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i className="bi bi-plus"></i>
                                </button>
                              </span>
                            </div>
                            <span className="charges">
                              ₦250.00 (1.5% fee caped at ₦250){" "}
                            </span>
                          </div>
                        </div>
                        <div className="row mx-3  mt-5">
                          <Link
                            data-bs-toggle="modal"
                            data-bs-target="#choosepayment"
                            type="button"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                            // onClick={payment}
                            style={{ width: "100%" }}
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* choose payment */}
              <div
                className="modal flex-modal fade"
                id="choosepayment"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
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
                        <div className="row mx-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img
                                  src={dillalogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>₦{amount}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3 mt-5 title-card justify-content-center">
                          <div className="col-md-10 text-center">
                            <h3 className="fs-3">Choose a Payment Method</h3>
                            <div className="mt-5">
                              <Link
                                type="button"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#dilla-bank-transfer"
                                className="btn btn-secondary bg-ussd"
                                style={{ width: "100%" }}
                              >
                                Bank Transfer
                              </Link>
                              <Link
                                type="button"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#dilla-ussd"
                                className="btn btn-secondary mt-3 bg-ussd"
                                style={{ width: "100%" }}
                              >
                                USSD
                              </Link>
                              <Link
                                type="button"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#dilla-card-transc"
                                className="btn btn-secondary mt-3 bg-ussd"
                                style={{ width: "100%" }}
                                onClick={() =>
                                  initializePayment(onSuccess, onClose)
                                }
                              >
                                Card
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* dilla-transfer */}
              <div
                className="modal flex-modal fade"
                id="dilla-bank-transfer"
                data-backdrop="static"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img
                                  src={dillalogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>₦30,000.00</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3 mt-5 title-card">
                          <div className="col text-center">
                            <span className="transfer-amt">Pay Now</span>
                          </div>
                        </div>
                        <div className="row mx-3 detail-transfer">
                          <div className="col-md-6">
                            <p className="mt-4">Amount</p>
                            <p className="mt-4">Account Number</p>
                            <p className="mt-4">Bank</p>
                            <p className="mt-4">Name</p>
                            <p className="mt-4">Narration</p>
                          </div>
                          <div className="col-md-6 text-end">
                            <h5 className="mt-4">NGN 20,250</h5>
                            <h5 className="mt-4">
                              2004434887 <i className="ms-2 bi bi-files"></i>
                            </h5>
                            <h5 className="mt-4">Wema Bank</h5>
                            <h5 className="mt-4">Oshodi Mathew</h5>
                            <h5 className="mt-4">Falcon</h5>
                          </div>
                        </div>
                        <div className="row mx-3  mt-5">
                          <Link
                            data-bs-toggle="modal"
                            data-bs-target="#bank-tranfer-success"
                            type="button"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                            to=""
                            style={{ width: "100%" }}
                          >
                            I have Paid
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Complete-transfer */}
              <div
                className="modal flex-modal fade"
                id="bank-tranfer-success"
                data-backdrop="static"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3 justify-content-center">
                          <div className="col-md-8 text-center payment-success">
                            <img src={success} alt="" className="img-fluid" />
                            <h2 className="my-5">Payment Received</h2>
                            <p className="mb-5">
                              Lorem ipsum dolor sit amet consectetur. Sapien vel
                              netus eget orci semper parturient. Ut nec
                              pellentesque consequat vitae massa nisi.
                            </p>
                            {/* <a href="/flex/top-up" >Back to Overview</a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Transaction -step 1 */}
              <div
                className="modal flex-modal fade"
                id="dilla-card-transc"
                data-backdrop="static"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container add-card">
                        <div className="row mx-3">
                          <div className="col-md-6">
                            <h3>First time? Add a card</h3>
                            <div className="addcard-bg text-center">
                              <img src={addcard} alt="" className="img-fluid" />
                              <p>
                                <Link
                                  type="button"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#dilla-enter-card"
                                >
                                  Add a new card
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Transaction -step 2 */}
              <div
                className="modal flex-modal fade"
                id="dilla-card-transc-two"
                data-backdrop="static"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container add-card">
                        <div className="row mx-3">
                          <div className="col-md-6">
                            <h3>First time? Add a card</h3>
                          </div>
                        </div>
                        <div className="row mx-3">
                          <div className="col-md-6">
                            <div className="addcard-bg text-center">
                              <img src={addcard} alt="" className="img-fluid" />
                              <p>
                                <Link>Add a new card</Link>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="addcarddetail-bg text-center">
                              <Link
                                type="button"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#dilla-card-transc-three"
                              >
                                <img
                                  src={carddetails}
                                  alt=""
                                  className="img-fluid"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Transaction -step 3 */}
              <div
                className="modal flex-modal fade"
                id="dilla-card-transc-three"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img
                                  src={dillalogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-md-6 text-end">
                                <img src={blur} alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3 mb-4 mt-5 title-card">
                          <div className="col text-center">
                            <h3 className="transfer-amt">Pay Now</h3>
                          </div>
                        </div>
                        <div className="row mx-3">
                          <div className="col text-center">
                            <div className="input-group cart-group my-3">
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="quantity-left-minus minus-bg btn btn-number me-3"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i className="bi bi-dash"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                className="form-control input-number"
                                defaultValue="30000"
                                min="1"
                                max="100"
                              />
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="quantity-right-plus btn minus-bg btn-number ms-3"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i className="bi bi-plus"></i>
                                </button>
                              </span>
                            </div>
                            <span className="charges">
                              ₦250.00 (1.5% fee caped at ₦250){" "}
                            </span>
                          </div>
                        </div>

                        <div className="row mx-3">
                          <Link
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#dilla-card-transc-four"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                            to=""
                            style={{ width: "100%" }}
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Transaction step-4 */}
              <div
                className="modal flex-modal fade"
                id="dilla-card-transc-four"
                data-backdrop="static"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3 justify-content-center">
                          <div className="col-md-8 text-center payment-success">
                            <img src={success} alt="" className="img-fluid" />
                            <h2 className="my-5">Payment Received</h2>
                            <p className="mb-5">
                              Lorem ipsum dolor sit amet consectetur. Sapien vel
                              netus eget orci semper parturient. Ut nec
                              pellentesque consequat vitae massa nisi.
                            </p>
                            {/* <a href="/flex/top-up" >Back to Overview</a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Transaction Enter Details */}
              <div
                className="modal flex-modal fade"
                id="dilla-enter-card"
                data-backdrop="static"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container add-card">
                        <div className="row mx-3">
                          <div className="col-md-12">
                            <h3>Enter Card Details</h3>
                            <div className="row mt-3">
                              <div className="c-details">
                                <form>
                                  <label>Card Number</label>
                                  <div className="mb-3 mt-1">
                                    <input
                                      type="number"
                                      className="form-control target-form"
                                      placeholder="0000 0000 0000 0000"
                                      required
                                    />
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <label>Expiry Date</label>
                                      <div className="mb-3 mt-1">
                                        <input
                                          type="number"
                                          className="form-control target-form"
                                          placeholder="MM/YY"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label>CVV</label>
                                      <div className="mb-3 mt-1">
                                        <input
                                          type="number"
                                          className="form-control target-form"
                                          placeholder="***"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <label>Cardholder’s Name</label>
                                    <div className="mb-3 mt-1">
                                      <input
                                        type="text"
                                        className="form-control target-form"
                                        placeholder="Full Name"
                                        required
                                      />
                                    </div>
                                    <Link
                                      data-bs-toggle="modal"
                                      data-bs-target="#dilla-card-transc-two"
                                      type="button"
                                      className="btn px-5 py-3 ardilla-btn fs-6 mt-4 me-3"
                                    >
                                      Pay NGN 5,000
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
              </div>
              {/* USSD */}
              <div
                className="modal flex-modal fade"
                id="dilla-ussd"
                data-backdrop="static"
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
                        <div className="row mx-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img
                                  src={dillalogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>₦30,000.00</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3 mt-5 title-card">
                          <div className="col text-center">
                            <span className="transfer-amt">Pay Now</span>
                          </div>
                        </div>
                        <div className="row mx-3 detail-transfer">
                          <div className="col-md-6">
                            <p className="mt-4">Amount</p>
                            <p className="mt-4">Account Number</p>
                            <p className="mt-4">Bank</p>
                            <p className="mt-4">Name</p>
                            <p className="mt-4">USSD</p>
                          </div>
                          <div className="col-md-6 text-end">
                            <h5 className="mt-4">NGN 20,250</h5>
                            <h5 className="mt-4">
                              2004434887 <i className="ms-2 bi bi-files"></i>
                            </h5>
                            <h5 className="mt-4">Wema Bank</h5>
                            <h5 className="mt-4">Oshodi Mathew</h5>
                            <h5 className="mt-4">*949*2004434887*20250#</h5>
                            <span className="nb">
                              Dial this code to complete the transaction
                            </span>
                          </div>
                        </div>
                        <div className="row mx-3">
                          <Link
                            data-bs-toggle="modal"
                            data-bs-target="#dilla-ussd-pay"
                            type="button"
                            className="btn px-5 py-3 ardilla-btn fs-6 mt-4 me-3"
                            style={{ width: "100%" }}
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* USSD - 2 */}
              <div
                className="modal flex-modal fade"
                id="dilla-ussd-pay"
                data-backdrop="static"
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
                        <div className="row mx-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img
                                  src={dillalogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>₦30,000.00</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3 mt-5 title-card">
                          <div className="col text-center">
                            <span className="transfer-amt">
                              Pay Now ₦30,250.00
                            </span>
                            <h5 className="nb my-3">
                              Dial this code to complete the transaction
                            </h5>
                            <span class="transfer-amt">
                              *949*2004434887*30250#
                            </span>
                          </div>
                        </div>

                        <div className="row mx-3 mt-5">
                          <Link
                            data-bs-toggle="modal"
                            data-bs-target="#dilla-ussd-success"
                            type="button"
                            className="btn px-5 py-3 ardilla-btn fs-6 mt-4 me-3"
                            style={{ width: "100%" }}
                          >
                            I have Paid
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* USSD Success */}
              <div
                className="modal flex-modal fade"
                id="dilla-ussd-success"
                data-backdrop="static"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3 justify-content-center">
                          <div className="col-md-8 text-center payment-success">
                            <img src={success} alt="" className="img-fluid" />
                            <h2 className="my-5">Payment Received</h2>
                            <p className="mb-5">
                              Lorem ipsum dolor sit amet consectetur. Sapien vel
                              netus eget orci semper parturient. Ut nec
                              pellentesque consequat vitae massa nisi.
                            </p>
                            {/* <a href="/flex/top-up" >Back to Overview</a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                data-bs-toggle="modal"
                data-bs-target="#dilla-send-money"
                type="button"
                className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6 mt-4"
              >
                Send Money
              </Link>
              {/* Send Money Modal */}
              <div
                className="modal flex-modal fade"
                id="dilla-send-money"
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
                      <div className="container initiate-modal p-5">
                        <div className="row justify-content-center">
                          <div className="col-md-6 text-center ">
                            <img src={cadet} alt="" className="img-fluid" />
                            <h2 className="mt-3">
                              {"<"}
                              {user1?.kodeHex}
                              {"/>"}
                            </h2>
                          </div>
                        </div>
                        <div className="row mx-3 mt-5">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img
                                  src={dillalogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>
                                  ₦
                                  {Intl.NumberFormat("en-US").format(
                                    dillaWallet?.accountBalance
                                  )}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3 mt-4 title-card">
                          <div className="col text-center">
                            <h3>Amount</h3>
                          </div>
                        </div>
                        <div className="row mx-3">
                          <div className="col text-center">
                            <div className="input-group cart-group my-3">
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="quantity-left-minus minus-bg btn btn-number me-3"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i className="bi bi-dash"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                className="form-control input-number"
                                // defaultValue="30000"
                                value={amount}
                                onChange={(e) => setAmount(~~e.target.value)}
                                min="1"
                                max="100"
                              />
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="quantity-right-plus btn minus-bg btn-number ms-3"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i className="bi bi-plus"></i>
                                </button>
                              </span>
                            </div>
                            <span className="charges">
                              ₦250.00 (1.5% fee caped at ₦250){" "}
                            </span>
                          </div>
                        </div>
                        <div className="row mx-3 btn-bottom">
                          <Link
                            data-bs-toggle="modal"
                            data-bs-target="#dilla-send-choose"
                            type="button"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                            to=""
                            style={{ width: "100%" }}
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Send Money Modal - Step 2 */}
              <div
                className="modal flex-modal fade"
                id="dilla-send-choose"
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
                      <div className="container initiate-modal p-5">
                        <div className="row mx-3 mt-5">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img
                                  src={dillalogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>
                                  ₦
                                  {Intl.NumberFormat("en-US").format(
                                    dillaWallet?.accountBalance
                                  )}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3 mt-4 title-card">
                          <div className="col text-center">
                            <h3>Choose a payment destination</h3>
                          </div>
                        </div>
                        <div className="row mx-3 mysan mt-4">
                          <Link
                            className="border-bottom pb-3 mb-3"
                            data-bs-toggle="modal"
                            data-bs-target="#dilla-send-san"
                            type="button"
                          >
                            <div className="d-flex flex-row">
                              <img src={mysan} alt="" className="img-fluid" />
                              <div className="ms-2 mt-2">
                                <h2>My SAN</h2>
                                <h3>Send money to your SAN account</h3>
                              </div>
                            </div>
                            <i
                              className="bi bi-chevron-right float-end"
                              style={{ marginTop: "-29px" }}
                            ></i>
                          </Link>
                          <Link
                            className="border-bottom pb-3 mb-3"
                            data-bs-toggle="modal"
                            data-bs-target="#dilla-send-user"
                            type="button"
                          >
                            <div className="d-flex flex-row">
                              <img
                                src={dillauser}
                                alt=""
                                className="img-fluid"
                              />
                              <div className="ms-2 mt-2">
                                <h2>A Dilla user</h2>
                                <h3>Send money to your SAN account</h3>
                              </div>
                            </div>
                            <i
                              className="bi bi-chevron-right float-end"
                              style={{ marginTop: "-29px" }}
                            ></i>
                          </Link>
                          <Link
                            className="border-bottom pb-3 mb-3"
                            data-bs-toggle="modal"
                            data-bs-target="#dilla-send-saving-plan"
                            type="button"
                          >
                            <div className="d-flex flex-row">
                              <img
                                src={savingsplan}
                                alt=""
                                className="img-fluid"
                              />
                              <div className="ms-2 mt-2">
                                <h2>My Savings Plan</h2>
                                <h3>Send money to your SAN account</h3>
                              </div>
                            </div>
                            <i
                              className="bi bi-chevron-right float-end"
                              style={{ marginTop: "-29px" }}
                            ></i>
                          </Link>
                          <Link className="border-bottom pb-3 mb-3">
                            <div className="d-flex flex-row">
                              <img
                                src={investmentplan}
                                alt=""
                                className="img-fluid"
                              />
                              <div className="ms-2 mt-2">
                                <h2>My Investment Plan</h2>
                                <h3>Send money to your SAN account</h3>
                              </div>
                            </div>
                            <i
                              className="bi bi-chevron-right float-end"
                              style={{ marginTop: "-29px" }}
                            ></i>
                          </Link>
                          <Link className="border-bottom pb-3 mb-3">
                            <div className="d-flex flex-row">
                              <img
                                src={insuranceplan}
                                alt=""
                                className="img-fluid"
                              />
                              <div className="ms-2 mt-2">
                                <h2>My Insurance Plan</h2>
                                <h3>Send money to your SAN account</h3>
                              </div>
                            </div>
                            <i
                              className="bi bi-chevron-right float-end"
                              style={{ marginTop: "-29px" }}
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Send Money to SAN */}
              <div
                className="modal flex-modal fade"
                id="dilla-send-san"
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
                      <div className="container initiate-modal p-5">
                        <div className="row justify-content-center">
                          <div className="col-md-6 text-center ">
                            <img src={cadet} alt="" className="img-fluid" />
                            <h2 className="mt-3">
                              {"<"}
                              {user1?.kodeHex}
                              {"/>"}
                            </h2>
                          </div>
                        </div>
                        <div className="row mx-3 mt-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img
                                  src={dillalogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>
                                  ₦
                                  {Intl.NumberFormat("en-US").format(
                                    dillaWallet?.accountBalance
                                  )}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col text-center">
                            <i
                              className="bi bi-arrow-down fs-4"
                              style={{ color: "#3C0071" }}
                            ></i>
                          </div>
                        </div>
                        <div className="row mx-3 mt-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img
                                  src={sanlogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>₦ {san?.accountBalance}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3">
                          <div className="mt-3">
                            <h3>Pin</h3>
                            <form>
                              <div className="mb-3 mt-1">
                                <input
                                  type="number"
                                  className="form-control target-form"
                                  placeholder="Enter Pin"
                                  required
                                  value={pin}
                                  onChange={(e) => setPin(e.target.value)}
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="row mx-3 detail-transfer mt-2">
                          <div className="col-md-6">
                            <p className="mt-4">SAN Name</p>
                            <p className="mt-4">SAN Account</p>
                            <p className="mt-4">SAN Number</p>
                          </div>
                          <div className="col-md-6 text-end">
                            <h5 className="mt-4">{san?.accountName}</h5>
                            <h5 className="mt-4">Wema Bank</h5>
                            <h5 className="mt-4">{san?.accountNumber}</h5>
                          </div>
                        </div>
                        <div className="row mx-3">
                          {loading ? (
                            <Link
                              // data-bs-toggle="modal"
                              // onClick={transferToSan}
                              data-bs-target="#dillatosan"
                              type="button"
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                              to=""
                              style={{ width: "100%" }}
                            >
                              Sending
                            </Link>
                          ) : (
                            <Link
                              // data-bs-toggle="modal"
                              // onClick={transferToSan}
                              data-bs-target="#dillatosan"
                              type="button"
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                              to=""
                              style={{ width: "100%" }}
                            >
                              Continue
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Dilla To San Success */}
              {onTransferSuccess && (
                <div
                  className="modal flex-modal fade"
                  id="dillatosan"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  // aria-hidden="true"
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
                        <div className="container initiate-modal p-5">
                          <div className="row justify-content-center">
                            <div className="col-md-6 text-center ">
                              <img
                                src={successful}
                                alt=""
                                className="img-fluid"
                              />
                              <h2 className="mt-4 mb-2">
                                {"<"}
                                {user1.kodeHex}
                                {"/>"}
                              </h2>
                              <p className="mb-3">{user1.contact}</p>
                            </div>
                          </div>
                          <div className="row my-3 sent-details">
                            <div className="col text-center">
                              <img src={sent} alt="" className="img-fluid" />
                              <h3 className="my-3">Money Transfered</h3>
                              <p>
                                You have successfully sent{" "}
                                <span style={{ color: "#3D0072" }}>
                                  NGN {amount} to <br />
                                  SAN
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Send Money to User */}
              <div
                className="modal flex-modal fade"
                id="dilla-send-user"
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
                      <div className="container initiate-modal p-5">
                        <div className="">
                          <h3 className="text-dark fw-bold">Friends</h3>
                        </div>
                        <div className="row mt-5 friends">
                          <div className="col-md-2 text-center">
                            <Link
                              onClick={() => setOpen(!open)}
                              aria-controls="example-collapse-text"
                              aria-expanded={open}
                            >
                              <img
                                src={search}
                                alt=""
                                className="img-fluid"
                                width={150}
                              />
                            </Link>
                            <p className="text-center">Search</p>
                          </div>
                          <div className="col-md-10">
                            <div className="owl-carousel owl-friends owl-theme">
                              <div className="media-29101">
                                <img
                                  src={user}
                                  alt="Image"
                                  className="img-fluid"
                                />
                                <p className="text-center">
                                  {"<"}StarBoy{"/>"}
                                </p>
                              </div>
                              <div className="media-29101">
                                <img
                                  src={user}
                                  alt="Image"
                                  className="img-fluid"
                                />
                                <p className="text-center">
                                  {"<"}StarBoy{"/>"}
                                </p>
                              </div>
                              <div className="media-29101">
                                <img
                                  src={user}
                                  alt="Image"
                                  className="img-fluid"
                                />
                                <p className="text-center">
                                  {"<"}StarBoy{"/>"}
                                </p>
                              </div>
                              <div className="media-29101">
                                <img
                                  src={user}
                                  alt="Image"
                                  className="img-fluid"
                                />
                                <p className="text-center">
                                  {"<"}StarBoy{"/>"}
                                </p>
                              </div>
                              <div className="media-29101">
                                <img
                                  src={user}
                                  alt="Image"
                                  className="img-fluid"
                                />
                                <p className="text-center">
                                  {"<"}StarBoy{"/>"}
                                </p>
                              </div>
                              <div className="media-29101">
                                <img
                                  src={user}
                                  alt="Image"
                                  className="img-fluid"
                                />
                                <p className="text-center">
                                  {"<"}StarBoy{"/>"}
                                </p>
                              </div>
                              <div className="media-29101">
                                <img
                                  src={user}
                                  alt="Image"
                                  className="img-fluid"
                                />
                                <p className="text-center">
                                  {"<"}StarBoy{"/>"}
                                </p>
                              </div>
                              <div className="media-29101">
                                <img
                                  src={user}
                                  alt="Image"
                                  className="img-fluid"
                                />
                                <p className="text-center">
                                  {"<"}StarBoy{"/>"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Collapse in={open}>
                          <div className="row mt-4">
                            <div className="search-box">
                              <input
                                type="text"
                                class="search-input"
                                placeholder="Search"
                              />
                              <button className="search-button">
                                <i className="fas fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </Collapse>

                        <div className="row mt-4">
                          <div className="col friends-list">
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#user-send-money"
                              type="button"
                              className="d-flex flex-row border-bottom py-3"
                            >
                              <img src={becca} alt="" className="img-fluid" />
                              <p className="ms-2 mt-3">
                                {"<"}StarBoy{"/>"}
                              </p>
                            </Link>
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#user-send-money"
                              type="button"
                              className="d-flex flex-row border-bottom py-3"
                            >
                              <img src={becca} alt="" className="img-fluid" />
                              <p className="ms-2 mt-3">
                                {"<"}StarBoy{"/>"}
                              </p>
                            </Link>
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#user-send-money"
                              type="button"
                              className="d-flex flex-row border-bottom py-3"
                            >
                              <img src={becca} alt="" className="img-fluid" />
                              <p className="ms-2 mt-3">
                                {"<"}StarBoy{"/>"}
                              </p>
                            </Link>
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#user-send-money"
                              type="button"
                              className="d-flex flex-row border-bottom py-3"
                            >
                              <img src={becca} alt="" className="img-fluid" />
                              <p className="ms-2 mt-3">
                                {"<"}StarBoy{"/>"}
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Send Money to Saving Plan */}
              <div
                className="modal flex-modal fade"
                id="dilla-send-saving-plan"
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
                      <div className="container initiate-modal p-5">
                        <div className="row mx-3 mt-4 title-card">
                          <div className="col">
                            <h3>Savings Plan</h3>
                          </div>
                        </div>
                        <div className="row mx-3 mysan mt-4">
                          <Link
                            className="border-bottom pb-3 mb-3"
                            data-bs-toggle="modal"
                            data-bs-target="#dilla-send-target"
                            type="button"
                          >
                            <div className="d-flex flex-row">
                              <img src={mysan} alt="" className="img-fluid" />
                              <div className="ms-2 mt-2">
                                <h2>Target</h2>
                              </div>
                            </div>
                            <i
                              className="bi bi-chevron-right float-end"
                              style={{ marginTop: "-29px" }}
                            ></i>
                          </Link>
                          <Link
                            className="border-bottom pb-3 mb-3"
                            data-bs-toggle="modal"
                            data-bs-target=""
                            type="button"
                          >
                            <div className="d-flex flex-row">
                              <img
                                src={dillauser}
                                alt=""
                                className="img-fluid"
                              />
                              <div className="ms-2 mt-2">
                                <h2>Flex</h2>
                              </div>
                            </div>
                            <i
                              className="bi bi-chevron-right float-end"
                              style={{ marginTop: "-29px" }}
                            ></i>
                          </Link>
                          <Link
                            className="border-bottom pb-3 mb-3"
                            data-bs-toggle="modal"
                            data-bs-target=""
                            type="button"
                          >
                            <div className="d-flex flex-row">
                              <img
                                src={savingsplan}
                                alt=""
                                className="img-fluid"
                              />
                              <div className="ms-2 mt-2">
                                <h2>Safe Lock</h2>
                              </div>
                            </div>
                            <i
                              className="bi bi-chevron-right float-end"
                              style={{ marginTop: "-29px" }}
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Send Money to Saving Plan -Target */}
              <div
                className="modal flex-modal fade"
                id="dilla-send-target"
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
                      <div className="container initiate-modal p-5">
                        <div className="row justify-content-center">
                          <div className="col-md-6 text-center ">
                            <img src={cadet} alt="" className="img-fluid" />
                            <h2 className="mt-3">
                              {"<"}StarBoy{"/>"}
                            </h2>
                          </div>
                        </div>
                        <div className="row mx-3 mt-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img
                                  src={dillalogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>₦450,000.00</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col text-center">
                            <i
                              className="bi bi-arrow-down fs-4"
                              style={{ color: "#3C0071" }}
                            ></i>
                          </div>
                        </div>
                        <div className="row mx-3 mt-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <h2>Target</h2>
                                {/* <img src={sanlogo} alt="" className="img-fluid" /> */}
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>₦50,000.00</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3">
                          <div className="mt-3">
                            <h3>Pin</h3>
                            <form>
                              <div className="mb-3 mt-1">
                                <input
                                  type="number"
                                  className="form-control target-form"
                                  placeholder="Enter Pin"
                                  required
                                />
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="row mx-3 btn-bottom">
                          <Link
                            data-bs-toggle="modal"
                            data-bs-target="#dillatotarget"
                            type="button"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                            to=""
                            style={{ width: "100%" }}
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Send Money to Saving Plan - Target - Success */}
              <div
                className="modal flex-modal fade"
                id="dillatotarget"
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
                      <div className="container initiate-modal p-5">
                        <div className="row justify-content-center">
                          <div className="col-md-6 text-center ">
                            <img
                              src={successful}
                              alt=""
                              className="img-fluid"
                            />
                            <h2 className="mt-4 mb-2">
                              {"<"}StarBoy{"/>"}
                            </h2>
                            <p className="mb-3">0708 7788 7890</p>
                          </div>
                        </div>
                        <div className="row my-3 sent-details">
                          <div className="col text-center">
                            <img src={sent} alt="" className="img-fluid" />
                            <h3 className="my-3">Money Transfered</h3>
                            <p>
                              You have successfully sent{" "}
                              <span style={{ color: "#3D0072" }}>
                                NGN50000 to your <br />
                                Target Savings Plan
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-transaction mt-5">
              <h3>Friends boobs</h3>
            </div>
            <div className="row mt-5 friends">
              <div className="col-md-2 text-center">
                <Link
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <img src={search} alt="" className="img-fluid" width={150} />
                </Link>
                <p className="text-center">Search</p>
              </div>
              <div className="col-md-10">
                <div className="owl-carousel owl-theme">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#user-profile"
                    type="button"
                    className="media-29101"
                  >
                    <img src={user} alt="Image" className="img-fluid" />
                    <p className="text-center">
                      {"<"}StarBoy{"/>"}
                    </p>
                  </Link>
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#user-profile"
                    type="button"
                    className="media-29101"
                  >
                    <img src={ola} alt="Image" className="img-fluid" />
                    <p className="text-center">
                      {"<"}StarBoy{"/>"}
                    </p>
                  </Link>
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#user-profile"
                    type="button"
                    className="media-29101"
                  >
                    <img src={levi} alt="Image" className="img-fluid" />
                    <p className="text-center">
                      {"<"}StarBoy{"/>"}
                    </p>
                  </Link>
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#user-profile"
                    type="button"
                    className="media-29101"
                  >
                    <img src={nike} alt="Image" className="img-fluid" />
                    <p className="text-center">
                      {"<"}Ola{"/>"}
                    </p>
                  </Link>
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#user-profile"
                    type="button"
                    className="media-29101"
                  >
                    <img src={user} alt="Image" className="img-fluid" />
                    <p className="text-center">
                      {"<"}StarBoy{"/>"}
                    </p>
                  </Link>
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#user-profile"
                    type="button"
                    className="media-29101"
                  >
                    <img src={starboy} alt="Image" className="img-fluid" />
                    <p className="text-center">
                      {"<"}Ola{"/>"}
                    </p>
                  </Link>
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#user-profile"
                    type="button"
                    className="media-29101"
                  >
                    <img src={levi} alt="Image" className="img-fluid" />
                    <p className="text-center">
                      {"<"}Ola{"/>"}
                    </p>
                  </Link>
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#user-profile"
                    type="button"
                    className="media-29101"
                  >
                    <img src={user} alt="Image" className="img-fluid" />
                    <p className="text-center">
                      {"<"}Ola{"/>"}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* User Profile Modal */}
            <div
              className="modal flex-modal fade"
              id="user-profile"
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
                    <div className="container initiate-modal p-5">
                      <div className="row justify-content-center">
                        <div className="col-md-6 text-center ">
                          <img src={cadet} alt="" className="img-fluid" />
                          <h2 className="mt-4 mb-2">
                            {"<"}StarBoy{"/>"}
                          </h2>
                          <p className="mb-5">0708 7788 7890</p>
                        </div>
                        <hr />
                      </div>
                      <div className="row my-3">
                        <div className="col">
                          <h3>Request history</h3>
                        </div>
                      </div>
                      <div className="row border-bottom pb-4">
                        <div className="d-flex flex-row">
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                          <div className="hist">
                            <h2>
                              You sent{" "}
                              <span style={{ color: "#3D0072" }}>NGN 2000</span>{" "}
                              to{" "}
                              <span style={{ color: "#3D0072" }}>
                                {"<"}StarBoy{"/>"}
                              </span>{" "}
                            </h2>
                            <h5>20th of November, 2022</h5>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-5 justify-content-center">
                        <div className="col text-center">
                          <div className="d-flex flex-row">
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#user-send-money"
                              type="button"
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn btn-f6 mt-4 me-3"
                            >
                              Send Money
                            </Link>
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#request-money"
                              type="button"
                              to="#"
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn btn-f6 outline-btn fs-6 mt-4"
                            >
                              Receive Money
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Money Request */}
            <div
              className="modal flex-modal fade"
              id="request-money"
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
                    <div className="container initiate-modal p-5">
                      <div className="row justify-content-center">
                        <div className="col-md-6 text-center ">
                          <img src={cadet} alt="" className="img-fluid" />
                          <h2 className="mt-4 mb-2">
                            {"<"}StarBoy{"/>"}
                          </h2>
                          <p className="mb-5">0708 7788 7890</p>
                        </div>
                        <hr />
                      </div>
                      <div className="row my-3">
                        <div className="col">
                          <h3>Request history</h3>
                        </div>
                      </div>
                      <div className="row border-bottom pb-4">
                        <div className="d-flex flex-row">
                          <img
                            src={withdraw}
                            alt=""
                            className="img-fluid me-3"
                          />
                          <div className="hist">
                            <h2>
                              You sent{" "}
                              <span style={{ color: "#3D0072" }}>NGN 2000</span>{" "}
                              to{" "}
                              <span style={{ color: "#3D0072" }}>
                                {"<"}StarBoy{"/>"}
                              </span>{" "}
                            </h2>
                            <h5>20th of November, 2022</h5>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="mt-5">
                          <h3>Input Money</h3>
                          <form>
                            <div className="mb-3 mt-1">
                              <input
                                type="number"
                                className="form-control target-form"
                                placeholder="Enter Amount"
                                required
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="row mt-5 justify-content-center">
                        <div className="col text-center">
                          <Link
                            data-bs-toggle="modal"
                            data-bs-target="#request-success"
                            type="button"
                            to="#"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn btn-f6 mt-4 me-3"
                          >
                            Send Request
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Money Request Successful */}
            <div
              className="modal flex-modal fade"
              id="request-success"
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
                    <div className="container initiate-modal p-5">
                      <div className="row justify-content-center">
                        <div className="col-md-6 text-center ">
                          <img src={successful} alt="" className="img-fluid" />
                          <h2 className="mt-4 mb-2">
                            {"<"}StarBoy{"/>"}
                          </h2>
                          <p className="mb-3">0708 7788 7890</p>
                        </div>
                      </div>
                      <div className="row my-3 sent-details">
                        <div className="col text-center">
                          <img src={sent} alt="" className="img-fluid" />
                          <h3 className="my-3">Request Sent</h3>
                          <p>
                            You have successfully requested{" "}
                            <span style={{ color: "#3D0072" }}>
                              NGN4000 from <br />
                              {"<"}StarBoy{"/>"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Send Money */}
            <div
              className="modal flex-modal fade"
              id="user-send-money"
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
                    <div className="container initiate-modal p-5">
                      <div className="row justify-content-center">
                        <div className="col-md-6 text-center ">
                          <img src={cadet} alt="" className="img-fluid" />
                          <h2 className="mt-4 mb-2">
                            {"<"}StarBoy{"/>"}
                          </h2>
                          <p className="mb-5">0708 7788 7890</p>
                        </div>
                        <hr />
                      </div>
                      <div className="row">
                        <div className="mt-3">
                          <h3>Amount</h3>
                          <form>
                            <div className="mb-3 mt-1">
                              <input
                                type="number"
                                className="form-control target-form"
                                placeholder="amount"
                                required
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="row">
                        <div className="mt-2">
                          <h3>Set OTS Question </h3>
                          <form>
                            <div className="mb-3 mt-1">
                              <input
                                type="text"
                                className="form-control target-form"
                                placeholder="E.g What is your name"
                                required
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="row">
                        <div className="mt-2">
                          <h3>Set OTS Answer </h3>
                          <form>
                            <div className="mb-3 mt-1">
                              <input
                                type="text"
                                className="form-control target-form"
                                placeholder="Chukwukwa Adekunle"
                                required
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="row">
                        <div className="mt-2">
                          <h3>Pin</h3>
                          <form>
                            <div className="mb-3 mt-1">
                              <input
                                type="number"
                                className="form-control target-form"
                                placeholder="Enter Pin"
                                required
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="row mt-3 justify-content-center">
                        <div className="col text-center">
                          {loading ? (
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#sent-success"
                              type="button"
                              to="#"
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn btn-f6 mt-4 me-3"
                            >
                              Sending
                            </Link>
                          ) : (
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#sent-success"
                              type="button"
                              to="#"
                              className="btn btn-outline-primary px-5 py-3 ardilla-btn btn-f6 mt-4 me-3"
                              onClick={tranfertoDilla}
                            >
                              Send Money
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Money Sent Successful */}
            <div
              className="modal flex-modal fade"
              id="sent-success"
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
                    <div className="container initiate-modal p-5">
                      <div className="row justify-content-center">
                        <div className="col-md-6 text-center ">
                          <img src={successful} alt="" className="img-fluid" />
                          <h2 className="mt-4 mb-2">
                            {"<"}StarBoy{"/>"}
                          </h2>
                          <p className="mb-3">0708 7788 7890</p>
                        </div>
                      </div>
                      <div className="row my-3 sent-details">
                        <div className="col text-center">
                          <img src={sent} alt="" className="img-fluid" />
                          <h3 className="my-3">Request Sent</h3>
                          <p>
                            You have successfully sent{" "}
                            <span style={{ color: "#3D0072" }}>
                              NGN4000 to <br />
                              {"<"}StarBoy{"/>"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Collapse in={open}>
              <div className="row mt-4">
                <div className="search-box">
                  <input
                    type="text"
                    class="search-input"
                    placeholder="Search"
                  />
                  <button className="search-button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="col-md-6 px-5">
            <div className="dilla-transaction p-5">
              <div className="history-title">
                <h3>Transaction history</h3>
                <h4 className="float-end">view all</h4>
              </div>
              <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                  <h5>Date </h5>
                </div>
                <div className="col-md-3">
                  <h5>Description</h5>
                </div>
                <div className="col-md-3">
                  <h5>Amount</h5>
                </div>
              </div>
              <div className="row justify-content-center mt-2 border-bottom py-3">
                <div className="col-md-5">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Transfer to SAN</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <div className="row justify-content-center mt-2 border-bottom py-3">
                <div className="col-md-5">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Transfer to Savings account</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col p-5">
                <div className="requests">
                  <h3>All Requests</h3>
                  <div className="row mt-4">
                    <div className="col">
                      <div id="exTab1" className="row">
                        <ul className="nav nav-pills dilla-link">
                          <li className="active ms-3 me-5">
                            <a href="#2" data-toggle="tab">
                              Pending
                            </a>
                          </li>
                          <li className="me-5">
                            <a href="#2a" data-toggle="tab">
                              Received
                            </a>
                          </li>
                          <li className="me-5">
                            <a href="#3a" data-toggle="tab">
                              Complete
                            </a>
                          </li>
                          <li className="me-5">
                            <a href="#4a" data-toggle="tab">
                              Rejected
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content clearfix">
                          <div className="tab-pane active" id="1a">
                            <div className="row mt-3 pending">
                              <div className="col-md-3">
                                <div className="d-flex flex-row">
                                  <img src={rec} alt="" className="img-fluid" />
                                  <div className="ms-2 pending mt-2">
                                    <p>Money Request </p>
                                    <h5>
                                      {"<"}Ola{"/>"}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">4 hrs ago</h5>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">₦4,000.00 </h5>
                              </div>
                              <div className="col-md-2">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#intiate"
                                  type="button"
                                  class="btn btn-primary dilla-btn btn-sm mt-2 px-3"
                                >
                                  Initiate
                                </button>
                              </div>
                              {/* intiate Modal */}
                              <div
                                className="modal flex-modal fade"
                                id="intiate"
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
                                      <div className="container initiate-modal p-5">
                                        <div className="row justify-content-center">
                                          <div className="col-md-6 text-center ">
                                            <img
                                              src={cadet}
                                              alt=""
                                              className="img-fluid"
                                            />
                                            <h2 className="mt-4 mb-2">
                                              {"<"}StarBoy{"/>"}
                                            </h2>
                                            <p className="mb-5">
                                              0708 7788 7890
                                            </p>
                                          </div>
                                          <hr />
                                        </div>
                                        <div className="row my-3">
                                          <div className="col">
                                            <h3>Request history</h3>
                                          </div>
                                        </div>
                                        <div className="row border-bottom pb-4">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={withdraw}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You sent{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                to{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row border-bottom py-4">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={dep}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You received{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                from{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-5">
                                            <Link
                                              className="btn btn-outline-primary px-5 py-3 d-btn fs-6"
                                              to=""
                                              style={{ width: "100%" }}
                                            >
                                              {"<"}StarBoy{"/>"} sent you a
                                              request{" "}
                                            </Link>
                                          </div>
                                        </div>
                                        <div className="row text-center">
                                          <div className="btn-down">
                                            <Link
                                              type="button"
                                              to="#"
                                              data-bs-toggle="modal"
                                              data-bs-target="#initiate-continue"
                                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                                              style={{ width: "60%" }}
                                            >
                                              Initiate
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* intiate 2 */}
                              <div
                                className="modal flex-modal fade"
                                id="initiate-continue"
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
                                      <div className="container initiate-modal p-5">
                                        <div className="row justify-content-center">
                                          <div className="col-md-6 text-center ">
                                            <img
                                              src={cadet}
                                              alt=""
                                              className="img-fluid"
                                            />
                                            <h2 className="mt-4 mb-2">
                                              {"<"}StarBoy{"/>"}
                                            </h2>
                                            <p className="mb-5">
                                              0708 7788 7890
                                            </p>
                                          </div>
                                          <hr />
                                        </div>
                                        <div className="row my-3">
                                          <div className="col">
                                            <h3>Request history</h3>
                                          </div>
                                        </div>
                                        <div className="row border-bottom pb-4">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={withdraw}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You sent{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                to{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row border-bottom py-4">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={dep}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You received{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                from{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-5">
                                            <h3>Request Amount</h3>
                                            <form>
                                              <div className="mb-3 mt-1">
                                                <input
                                                  type="number"
                                                  className="form-control target-form"
                                                  defaultValue={4000}
                                                  required
                                                />
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        <div className="row text-center">
                                          <div className="btn-down">
                                            <Link
                                              type="button"
                                              to="#"
                                              data-bs-toggle="modal"
                                              data-bs-target="#send-money"
                                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                                              style={{ width: "60%" }}
                                            >
                                              Continue
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* initiate 3 */}
                              <div
                                className="modal flex-modal fade"
                                id="send-money"
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
                                      <div className="container initiate-modal p-5">
                                        <div className="row justify-content-center">
                                          <div className="col-md-6 text-center ">
                                            <img
                                              src={cadet}
                                              alt=""
                                              className="img-fluid"
                                            />
                                            <h2 className="mt-4 mb-2">
                                              {"<"}StarBoy{"/>"}
                                            </h2>
                                            <p className="mb-3">
                                              0708 7788 7890
                                            </p>
                                          </div>
                                          <hr />
                                        </div>
                                        <div className="row my-3">
                                          <div className="col">
                                            <h3>Request history</h3>
                                          </div>
                                        </div>
                                        <div className="row border-bottom pb-2">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={withdraw}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You sent{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                to{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row border-bottom py-4">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={dep}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You received{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                from{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-2">
                                            <h3>Set OTS Question</h3>
                                            <form>
                                              <div className="mb-3 mt-1">
                                                <input
                                                  type="text"
                                                  className="form-control target-form"
                                                  placeholder="E.g What is your name "
                                                  required
                                                />
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-2">
                                            <h3>Set OTS Answer</h3>
                                            <form>
                                              <div className="mb-3 mt-1">
                                                <input
                                                  type="text"
                                                  className="form-control target-form"
                                                  placeholder="Chukwukwa Adekunle"
                                                  required
                                                />
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-2">
                                            <h3>Pin</h3>
                                            <form>
                                              <div className="mb-3 mt-1">
                                                <input
                                                  type="number"
                                                  className="form-control target-form"
                                                  placeholder="Enter Pin"
                                                  required
                                                />
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        <div className="row text-center">
                                          <div className="">
                                            <Link
                                              type="button"
                                              to="#"
                                              data-bs-toggle="modal"
                                              data-bs-target="#sendmoney-success"
                                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                                              style={{ width: "60%" }}
                                            >
                                              Continue
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* initiate 4 */}
                              <div
                                className="modal flex-modal fade"
                                id="sendmoney-success"
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
                                      <div className="container initiate-modal p-5">
                                        <div className="row justify-content-center">
                                          <div className="col-md-6 text-center ">
                                            <img
                                              src={successful}
                                              alt=""
                                              className="img-fluid"
                                            />
                                            <h2 className="mt-4 mb-2">
                                              {"<"}StarBoy{"/>"}
                                            </h2>
                                            <p className="mb-3">
                                              0708 7788 7890
                                            </p>
                                          </div>
                                        </div>
                                        <div className="row my-3 sent-details">
                                          <div className="col text-center">
                                            <img
                                              src={sent}
                                              alt=""
                                              className="img-fluid"
                                            />
                                            <h3 className="my-3">Money Sent</h3>
                                            <p>
                                              You have successfully sent{" "}
                                              <span
                                                style={{ color: "#3D0072" }}
                                              >
                                                NGN4000 to <br />
                                                {"<"}StarBoy{"/>"}
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#decline"
                                  type="button"
                                  to="#"
                                  class="btn btn-primary dilla-btn-outline btn-sm mt-2 px-3"
                                >
                                  Decline
                                </button>
                              </div>
                              {/* Decline */}
                              <div
                                className="modal flex-modal fade"
                                id="decline"
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
                                      <div className="container initiate-modal p-5">
                                        <div className="row justify-content-center">
                                          <div className="col-md-6 text-center ">
                                            <img
                                              src={cadet}
                                              alt=""
                                              className="img-fluid"
                                            />
                                            <h2 className="mt-4 mb-2">
                                              {"<"}StarBoy{"/>"}
                                            </h2>
                                            <p className="mb-3">
                                              0708 7788 7890
                                            </p>
                                          </div>
                                          <hr />
                                        </div>
                                        <div className="row my-3">
                                          <div className="col">
                                            <h3>Request history</h3>
                                          </div>
                                        </div>
                                        <div className="row border-bottom pb-2">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={withdraw}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You sent{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                to{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row border-bottom py-4">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={dep}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You received{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                from{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="row mt-5">
                                          <div className="col text-center">
                                            <div className="decline-card p-3">
                                              <h2>
                                                Are you sure you want to
                                                decline?
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mt-5 justify-content-center">
                                          <div className="col text-center">
                                            <div className="d-flex flex-row">
                                              <Link
                                                data-bs-toggle="modal"
                                                data-bs-target="#decline-success"
                                                type="button"
                                                to="#"
                                                className="btn btn-outline-primary px-5 py-3 ardilla-btn btn-f6 mt-4 me-3"
                                              >
                                                Yes
                                              </Link>
                                              <Link
                                                type="button"
                                                className="btn btn-outline-primary px-5 py-3 ardilla-btn btn-f6 outline-btn fs-6 mt-4"
                                              >
                                                No, Cancel
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Decline-Successful */}
                              <div
                                className="modal flex-modal fade"
                                id="decline-success"
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
                                      <div className="container initiate-modal p-5">
                                        <div className="row justify-content-center">
                                          <div className="col-md-6 text-center ">
                                            <img
                                              src={revoke}
                                              alt=""
                                              className="img-fluid"
                                            />
                                            <h2 className="mt-4 mb-2">
                                              {"<"}StarBoy{"/>"}
                                            </h2>
                                            <p className="mb-3">
                                              0708 7788 7890
                                            </p>
                                          </div>
                                        </div>
                                        <div className="row my-3 sent-details">
                                          <div className="col text-center">
                                            <img
                                              src={cancel}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-5 ots-success text-center">
                                            <h4 style={{ color: "#E8356D" }}>
                                              Payment Declined
                                            </h4>
                                          </div>
                                        </div>
                                        <div className="row text-center">
                                          <div className="mt-5">
                                            <a
                                              type="button"
                                              href="/dilla"
                                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                                              style={{ width: "60%" }}
                                            >
                                              Back to Dilla
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3 pending">
                              <div className="col-md-3">
                                <div className="d-flex flex-row">
                                  <img src={rec} alt="" className="img-fluid" />
                                  <div className="ms-2 pending mt-2">
                                    <p>Request sent </p>
                                    <h5>
                                      {"<"}Ola{"/>"}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">4 hrs ago</h5>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">₦4,000.00 </h5>
                              </div>
                              <div className="col-md-2">
                                <button
                                  type="button"
                                  class="btn btn-primary sent-btn btn-sm mt-2 px-4"
                                  disabled
                                >
                                  Sent
                                </button>
                              </div>

                              <div className="col-md-2">
                                <button
                                  type="button"
                                  class="btn btn-primary dilla-btn-outline btn-sm mt-2 px-3"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="2a">
                            <div className="row mt-3 pending">
                              <div className="col-md-3">
                                <div className="d-flex flex-row">
                                  <img src={use} alt="" className="img-fluid" />
                                  <div className="ms-2 pending mt-2">
                                    <p>Money Request </p>
                                    <h5>
                                      {"<"}Nike{"/>"}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">4 hrs ago</h5>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">₦4,000.00 </h5>
                              </div>
                              <div className="col-md-2">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#ots-code"
                                  type="button"
                                  class="btn btn-primary dilla-btn btn-sm px-4 mt-2"
                                >
                                  OTS Code
                                </button>
                              </div>
                              {/* OTS CODE */}
                              <div
                                className="modal flex-modal fade"
                                id="ots-code"
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
                                      <div className="container initiate-modal p-5">
                                        <div className="row justify-content-center">
                                          <div className="col-md-6 text-center ">
                                            <img
                                              src={cadet}
                                              alt=""
                                              className="img-fluid"
                                            />
                                            <h2 className="mt-4 mb-2">
                                              {"<"}StarBoy{"/>"}
                                            </h2>
                                            <p className="mb-3">
                                              0708 7788 7890
                                            </p>
                                          </div>
                                          <hr />
                                        </div>
                                        <div className="row my-3">
                                          <div className="col">
                                            <h3>Request history</h3>
                                          </div>
                                        </div>
                                        <div className="row border-bottom pb-2">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={withdraw}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You sent{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                to{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row border-bottom py-4">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={dep}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You received{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                from{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-5">
                                            <h3>OTS Code</h3>
                                            <form>
                                              <div className="mb-3 mt-1">
                                                <input
                                                  type="text"
                                                  className="form-control target-form"
                                                  placeholder="Enter OTS code "
                                                  required
                                                />
                                              </div>
                                            </form>
                                          </div>
                                        </div>

                                        <div className="row text-center">
                                          <div className="mt-5">
                                            <Link
                                              type="button"
                                              to="#"
                                              data-bs-toggle="modal"
                                              data-bs-target="#ots-sent"
                                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                                              style={{ width: "60%" }}
                                            >
                                              Verify
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Otp Success */}
                              <div
                                className="modal flex-modal fade"
                                id="ots-sent"
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
                                      <div className="container initiate-modal p-5">
                                        <div className="row justify-content-center">
                                          <div className="col-md-6 text-center ">
                                            <img
                                              src={cadet}
                                              alt=""
                                              className="img-fluid"
                                            />
                                            <h2 className="mt-4 mb-2">
                                              {"<"}StarBoy{"/>"}
                                            </h2>
                                            <p className="mb-3">
                                              0708 7788 7890
                                            </p>
                                          </div>
                                          <hr />
                                        </div>
                                        <div className="row my-3">
                                          <div className="col">
                                            <h3>Request history</h3>
                                          </div>
                                        </div>
                                        <div className="row border-bottom pb-2">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={withdraw}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You sent{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                to{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row border-bottom py-4">
                                          <div className="d-flex flex-row">
                                            <img
                                              src={dep}
                                              alt=""
                                              className="img-fluid me-3"
                                            />
                                            <div className="hist">
                                              <h2>
                                                You received{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  NGN 2000
                                                </span>{" "}
                                                from{" "}
                                                <span
                                                  style={{ color: "#3D0072" }}
                                                >
                                                  {"<"}StarBoy{"/>"}
                                                </span>{" "}
                                              </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-5 ots-success text-center">
                                            <h4>
                                              OTS code accepted successfully
                                            </h4>
                                          </div>
                                        </div>
                                        <div className="row text-center">
                                          <div className="mt-5">
                                            <Link
                                              type="button"
                                              to="#"
                                              data-bs-toggle="modal"
                                              data-bs-target="#ots-pay"
                                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                                              style={{ width: "60%" }}
                                            >
                                              Continue
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Otp-payment */}
                              <div
                                className="modal flex-modal fade"
                                id="ots-pay"
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
                                      <div className="container initiate-modal p-5">
                                        <div className="row justify-content-center">
                                          <div className="col-md-6 text-center ">
                                            <img
                                              src={successful}
                                              alt=""
                                              className="img-fluid"
                                            />
                                            <h2 className="mt-4 mb-2">
                                              {"<"}StarBoy{"/>"}
                                            </h2>
                                            <p className="mb-3">
                                              0708 7788 7890
                                            </p>
                                          </div>
                                        </div>
                                        <div className="row my-3 sent-details">
                                          <div className="col text-center">
                                            <img
                                              src={sent}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-5 ots-success text-center">
                                            <h4>
                                              OTS code accepted successfully
                                            </h4>
                                          </div>
                                        </div>
                                        <div className="row text-center">
                                          <div className="mt-5">
                                            <a
                                              type="button"
                                              href="/dilla"
                                              className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                                              style={{ width: "60%" }}
                                            >
                                              Back to Dilla
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <button
                                  type="button"
                                  class="btn btn-primary dilla-btn-outline btn-sm px-3 mt-2"
                                >
                                  Decline
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="3a">
                            <div className="row mt-3 pending">
                              <div className="col-md-3">
                                <div className="d-flex flex-row">
                                  <img src={use} alt="" className="img-fluid" />
                                  <div className="ms-2 pending mt-2">
                                    <p>Money Request </p>
                                    <h5>
                                      {"<"}Nike{"/>"}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">4 hrs ago</h5>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">₦4,000.00 </h5>
                              </div>
                              <div className="col-md-4">
                                <button
                                  type="button"
                                  class="btn btn-primary success-btn btn-sm px-3 mt-2"
                                >
                                  Successful
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="4a">
                            <div className="row mt-3 pending">
                              <div className="col-md-3">
                                <div className="d-flex flex-row">
                                  <img src={use} alt="" className="img-fluid" />
                                  <div className="ms-2 pending mt-2">
                                    <p>Money Request </p>
                                    <h5>
                                      {"<"}Nike{"/>"}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">4 hrs ago</h5>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">₦4,000.00 </h5>
                              </div>
                              <div className="col-md-4">
                                <button
                                  type="button"
                                  class="btn btn-primary danger-btn btn-sm px-3 mt-2"
                                  disabled
                                >
                                  Declined
                                </button>
                              </div>
                            </div>
                            <div className="row mt-3 pending">
                              <div className="col-md-3">
                                <div className="d-flex flex-row">
                                  <img src={use} alt="" className="img-fluid" />
                                  <div className="ms-2 pending mt-2">
                                    <p>Money Request </p>
                                    <h5>
                                      {"<"}Nike{"/>"}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">4 hrs ago</h5>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">₦4,000.00 </h5>
                              </div>
                              <div className="col-md-4">
                                <button
                                  type="button"
                                  class="btn btn-primary danger-btn btn-sm px-3 mt-2"
                                  disabled
                                >
                                  Declined
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DillaBody;
