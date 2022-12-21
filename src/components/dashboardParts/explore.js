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
import tar from "../../img/dashboard/targett.svg";





function Explore() {
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
            Budgeting
          </div>
        </Link>
        <Link to="/learn" className="">
          <div className="d-flex flex-row">
            <img src={learn} alt="" className="img-fluid me-2 icons" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link>
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
      <div className="content py-5 px-5 explore-section">
        <div className="row">
          <h1><span style={{color: "#E8356D"}}>Saving</span> At Your Pace</h1>
          <h2 className="mt-3">Lorem ipsum gethem jnjfjntem mentem</h2>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <div className="bg-products p-5">
              <div className="d-flex flex-row">
                <img src={tar} alt="" className="img-fluid" />
                <div className="ms-3">
                  <h3>Target</h3>
                  <p>Fixed Savings lets you save and lock your funds until a later date. You get 10% P.A</p>
                  <span className="linker">Create Target Plan <i className="bi bi-chevron-right"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-products p-5">
              <div className="d-flex flex-row">
                <img src={tar} alt="" className="img-fluid" />
                <div className="ms-3">
                  <h3>Target</h3>
                  <p>Fixed Savings lets you save and lock your funds until a later date. You get 10% P.A</p>
                  <span className="linker">Create Target Plan <i className="bi bi-chevron-right"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-products p-5">
              <div className="d-flex flex-row">
                <img src={tar} alt="" className="img-fluid" />
                <div className="ms-3">
                  <h3>Target</h3>
                  <p>Fixed Savings lets you save and lock your funds until a later date. You get 10% P.A</p>
                  <span className="linker">Create Target Plan <i className="bi bi-chevron-right"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
