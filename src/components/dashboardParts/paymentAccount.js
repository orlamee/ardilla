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



function PaymentAccount() {
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
                <Link to="/payment-accounts" className="me-5 active">Account</Link>
                <Link to="/payment-card" className="me-5">Card</Link>
                <Link to="/payment-transaction" className="me-5">Transactions</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row addedcards">
          <div className="col-md-3">
            <div className="addaccount-bg text-center">
              <Link type="button" data-bs-toggle="modal" data-bs-target="#addbank"> + Add bank Account</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Add bank */}
      <div className="modal  fade" id="addbank" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog right-dialog">
          <div className="modal-content right-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="row mx-3">
              <Link data-bs-toggle="modal" data-bs-target="#transfersan" type="button"><i className="bi bi-chevron-left"></i> Back</Link>
            </div>
            <div className="modal-body flex-modal-body">
              <div className="container initiate-modal p-5">
                <div className="mx-3 row">
                  <div className="col modal-title">
                    <h3>Add Bank Account</h3>
                  </div>
                </div>
                <form className="mt-5 row mx-4">
                  <div classname="">
                    <label className="form-label">Account Number</label>
                    <input type="text" className="form-control p-form" placeholder="Account Number"/>
                  </div>
                  <div style={{marginTop: "40px"}}>
                    <label className="form-label">Bank</label>
                    <select className="form-select p-select" aria-label="Default select example">
                      <option selected>Bank</option>
                      <option value="2">GT Bank</option>
                      <option value="3">UBA</option>
                      <option value="3">Stanbic</option>
                    </select>
                  </div>
                  <div className="row mx-3 btn-bottom">
                    <Link data-bs-toggle="modal" data-bs-target="#addbank-successful" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Add Bank</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Bank Successful */}
      <div className="modal flex-modal fade" id="addbank-successful" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog right-dialog">
          <div className="modal-content right-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="row mx-3">
              <Link data-bs-toggle="modal" data-bs-target="#transfersan" type="button"><i className="bi bi-chevron-left"></i> Back</Link>
            </div>
            <div className="modal-body flex-modal-body">
              <div className="container initiate-modal p-5">
                <div className="mx-3 row">
                  <div className="col modal-title">
                    <h3>Add Bank Account</h3>
                  </div>
                </div>
                <form className="mt-5 row mx-4">
                  <div classname="">
                    <label className="form-label">Account Number</label>
                    <input type="text" className="form-control p-form" defaultValue="8102017439"/>
                  </div>
                  <div style={{marginTop: "40px"}}>
                    <label className="form-label">Bank</label>
                    <select className="form-select p-select" aria-label="Default select example">
                      <option selected>Eyowo Bank</option>
                      <option value="2">GT Bank</option>
                      <option value="3">UBA</option>
                      <option value="3">Stanbic</option>
                    </select>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-9">
                      <span className="d-inline-flex p-2 bg-auth">Olamilekan Akindele</span>
                    </div>
                  </div>
                  <div className="row mx-3 btn-bottom">
                    <a className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" href="/payment-accounts-success" style={{width: "100%"}}>Add Bank</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentAccount;
