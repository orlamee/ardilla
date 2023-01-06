import React from "react";
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
import linechart from "../../img/dashboard/linechart.svg";

import Cookies from "js-cookie";


function SavingPortfolio() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    Cookies.remove("user");
    sessionStorage.clear();
    navigate("/login");
    window.location.reload();
  };
  return (
    <section className="main-dash">
      <div className="sidebar">
        <Link to="/dashboard" className="">
          <div className="d-flex flex-row">
            <img src={home} alt="" className="img-fluid me-2 icons" />
            Home
          </div>
        </Link>
        <Link to="/portfolio" className="active">
          <div className="d-flex flex-row">
            <img src={portfolio} alt="" className="img-fluid me-2 icons" />
            Portfolio
          </div>
        </Link>
        <Link to="/savings" className="">
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
          <Link onClick={handleLogOut}>
            <div className="d-flex flex-row">
              <img src={logout} alt="" className="img-fluid me-2 icons" />
              Log Out
            </div>
          </Link>
        </div>
      </div>
      <div className="content py-5 px-5">
        <div className="row">
          <div className="col-md-8 mb-3 saveportfolio">
            <Link to="/portfolio" className="saveport"><i className="bi bi-chevron-left"></i> Back</Link>
            <h2>Saving Portfolio</h2>
            <img src={linechart} alt="chart" className="img-fluid my-5"/>
            <div className="save-hist">
              <div className="">
                <h3>Total Savings</h3>
              </div>
              <div className="row mt-5 title-p">
                <div className="col-md-4">
                  <p>Savings Plan</p>
                </div>
                <div className="col-md-2">
                  <p>Amount</p>
                </div>
                <div className="col-md-2">
                  <p>Current Returns</p>
                </div>
                <div className="col-md-2">
                  <p>Life time Returns</p>
                </div>
                <div className="col-md-2">
                  <p>Progress</p>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <h6>Transport </h6>
                </div>
                <div className="col-md-2">
                  <h6>₦5,000.00</h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>5% saved</h6>
                </div>
              </div>
              <hr/>
              <div className="row mt-2">
                <div className="col-md-4">
                  <h6>Transport </h6>
                </div>
                <div className="col-md-2">
                  <h6>₦5,000.00</h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>5% saved</h6>
                </div>
              </div>
              <hr/>
              <div className="row mt-2">
                <div className="col-md-4">
                  <h6>Transport </h6>
                </div>
                <div className="col-md-2">
                  <h6>₦5,000.00</h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>5% saved</h6>
                </div>
              </div>
              <hr/>
              <div className="row mt-2">
                <div className="col-md-4">
                  <h6>Transport </h6>
                </div>
                <div className="col-md-2">
                  <h6>₦5,000.00</h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>5% saved</h6>
                </div>
              </div>
              <hr/>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default SavingPortfolio;

