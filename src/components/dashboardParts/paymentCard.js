import React from "react";
import { Link } from "react-router-dom";
import "../../css/profile.css"
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



function PaymentCard() {
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
        <Link to="/learn" className="">
          <div className="d-flex flex-row">
            <img src={learn} alt="" className="img-fluid me-2 icons" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link to="/payment" className="active">
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
      <div className="content py-5 px-5 profile-main">
        <div className="row">
          <div className="col-md-6">
            <div className="bg-payments d-inline-flex">
              <div className="d-flex flex-row">
                <Link to="/payment" className="me-5">SAN</Link>
                <Link to="/payment-accounts" className="me-5">Account</Link>
                <Link to="/payment-card" className="me-5 active">Card</Link>
                <Link to="/payment-transaction" className="me-5">Transactions</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row addedcards">
          <div className="col-md-3 mb-3">
            <div className="addaccount-bg text-center">
              <Link type="button" data-bs-toggle="modal" data-bs-target="#addbank"> + Add new card</Link>
            </div>
          </div>
        </div>
        {/* Card Transaction Enter Details */}
        <div
          className="modal flex-modal fade"
          id="addbank"
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
                              <a href="/payment-card-success"
                                className="btn px-5 py-3 ardilla-btn fs-6 mt-4 me-3"
                              >
                                Add Card
                              </a>
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
      </div>
    </section>
  );
}

export default PaymentCard;
