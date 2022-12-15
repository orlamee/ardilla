import React from "react";
import { Link } from "react-router-dom";
import "../../css/target.css"
import home from "../../img/dashboard/home.svg";
import portfolio from "../../img/dashboard/portfolio.svg";
import investment from "../../img/dashboard/growth.svg";
import saving from "../../img/dashboard/investment.svg";
import dilla from "../../img/dashboard/dilla.svg";
import explore from "../../img/dashboard/explore.svg";
import learn from "../../img/dashboard/learn.svg";
import insurance from "../../img/dashboard/insurance.svg";
import logout from "../../img/dashboard/logout.svg";
import contact from "../../img/dashboard/contact.svg";
import chat from "../../img/dashboard/chat.svg";
import withdraw from "../../img/dashboard/w-icon.svg";




function TargetPrivate() {
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
            Explore
          </div>
        </Link>
        <Link to="/learn">
          <div className="d-flex flex-row">
            <img src={learn} alt="" className="img-fluid me-2 icons" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link>
            <div className="d-flex flex-row">
              <img src={contact} alt="" className="img-fluid me-2 icons" />
              Contact Dilla Coach
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
            <Link className="me-5">Flex</Link>
            <Link className="me-5 target-active">Target</Link>
            <Link className="me-5">Family and I</Link>
            <Link className="me-5">Safe lock</Link>
            <Link className="me-5">VIP</Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 t-savings">
            <div className="d-flex flex-row">
              <h2 className="me-4">Target Savings</h2>
              <Link className="mt-3">Learn More</Link>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <span>Total Balance</span>
                <h5>₦40,000.00 </h5>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3">Create new target</button>
              </div>
            </div>
            <input type="checkbox" class="pill-button-input" checked="checked"/>
            <span class="pill-button">
              <span class="pill-button-selection pill-button-selection_on pill-button-selection_active">Live Stream</span>
              <span class="pill-button-selection pill-button-selection_off">Captured</span>
              <span class="pill-button-highlight"></span>
            </span>
          </div>
          <div className="col-md-6 private-right">
            <div className="private-card p-4">
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
              <div className="row justify-content-center mt-2 border-bottom py-3">
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
              </div>
              <div className="row justify-content-center mt-2 py-3">
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
              </div>
            </div>
            <div className="private-card p-4 mt-3">
              <div className="history-title">
                <h3>Target Behaviour</h3>
              </div>
            </div>
            <div className="private-card p-4 mt-3">
              <div className="history-title">
                <h3>Badge progress</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default TargetPrivate;
