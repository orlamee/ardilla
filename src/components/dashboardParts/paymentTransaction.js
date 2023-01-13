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
import withdraw from "../../img/dashboard/w-icon.svg";
import transfer from "../../img/dashboard/received-icon.svg";



function PaymentTransaction() {
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
                <Link to="/payment-card" className="me-5">Card</Link>
                <Link to="/payment-transaction" className="me-5 active">Transactions</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row addedcards">
          <div className="col-md-9 mt-5">
            <div className="san-transaction p-5">
              <div className="history-title">
                <h3>Transaction history</h3>
              </div>
              <div className="row justify-content-center mt-4 border-bottom py-3">
                <div className="col-md-2">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Transfer to SAN</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <h6>Rolat Olaide</h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-3">
                  <h6>Tue, 22nd December, 2022</h6>
                </div>
                <div className="col-md-3">
                  <button type="button" to="#" class="btn btn-primary dilla-pending btn-sm mt-2 px-3" disabled>Pending</button>
                </div>
              </div>
              <div className="row justify-content-center mt-2 border-bottom py-3">
                <div className="col-md-2">
                  <div className="d-flex flex-row">
                    <img src={transfer} alt="" className="img-fluid me-3" />
                    <h6>Transfer to SAN</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <h6>Rolat Olaide</h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-3">
                  <h6>Tue, 22nd December, 2022</h6>
                </div>
                <div className="col-md-3">
                  <button type="button" to="#" class="btn btn-primary dilla-pending btn-sm mt-2 px-3" disabled>Pending</button>
                </div>
              </div>
              <div className="row justify-content-center mt-2 border-bottom py-3">
                <div className="col-md-2">
                  <div className="d-flex flex-row">
                    <img src={transfer} alt="" className="img-fluid me-3" />
                    <h6>Transfer to SAN</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <h6>Rolat Olaide</h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-3">
                  <h6>Tue, 22nd December, 2022</h6>
                </div>
                <div className="col-md-3">
                  <button type="button" to="#" class="btn btn-primary dilla-pending btn-sm mt-2 px-3" disabled>Pending</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentTransaction;