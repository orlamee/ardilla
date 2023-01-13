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
import cadet from "../../img/dashboard/Cadet.svg";
import cadett from "../../img/dashboard/cadet-1.svg";
import list from "../../img/dashboard/circlelist.svg";






function Rank() {
  return (
    <section className="main-dash">
      <div className="sidebar">
        <Link to="/dashboard" className="active">
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
      <div className="content pt-0">
        <div className="row ranks-bg justify-content-center">
          <div className="col-md-3 text-end p-0">
            <img src={cadet} alt="cadet" className="img-fluid" />
          </div>
          <div className="col-md-6 top-product bg-cadeet">
            <div className="bg-white p-4">
              <h2>Hi Annie,</h2>
              <p>Welcome to Ardilla, where you can have more...
              If you are reading this, you have begun your journey toward becoming a top-ranked saver on Ardilla. Exciting times ahead, Annie!!<br/>
              </p>
              <p className="mt-1">Ardilla has a seven-tier ranking system, and just like the military, you have to work to grow in rank.
              So what are the ranks?</p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src={cadett} alt="" className="img-fluid rankimg"/>
              <div className="rankone">
                <h1 className="text-end mb-5">Cadet</h1>
                <h6><img src={list} alt=""className="img-fluid me-3" />The first level as a new user or account holder</h6>
                <h6><img src={list} alt=""className="img-fluid me-3" />Completed KYC</h6>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <img src={cadett} alt="" className="img-fluid rankimg"/>
              <div className="rankone">
                <h1 className="text-end mb-5">Cadet</h1>
                <h6><img src={list} alt=""className="img-fluid me-3" />The first level as a new user or account holder</h6>
                <h6><img src={list} alt=""className="img-fluid me-3" />Completed KYC</h6>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <img src={cadett} alt="" className="img-fluid rankimg"/>
              <div className="rankone">
                <h1 className="text-end mb-5">Cadet</h1>
                <h6><img src={list} alt=""className="img-fluid me-3" />The first level as a new user or account holder</h6>
                <h6><img src={list} alt=""className="img-fluid me-3" />Completed KYC</h6>
              </div>
            </div>
          </div>
          <div className="row ranktops">
            <div className="col-md-4 mb-3">
              <img src={cadett} alt="" className="img-fluid rankimg"/>
              <div className="rankone">
                <h1 className="text-end mb-5">Cadet</h1>
                <h6><img src={list} alt=""className="img-fluid me-3" />The first level as a new user or account holder</h6>
                <h6><img src={list} alt=""className="img-fluid me-3" />Completed KYC</h6>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <img src={cadett} alt="" className="img-fluid rankimg"/>
              <div className="rankone">
                <h1 className="text-end mb-5">Cadet</h1>
                <h6><img src={list} alt=""className="img-fluid me-3" />The first level as a new user or account holder</h6>
                <h6><img src={list} alt=""className="img-fluid me-3" />Completed KYC</h6>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <img src={cadett} alt="" className="img-fluid rankimg"/>
              <div className="rankone">
                <h1 className="text-end mb-5">Cadet</h1>
                <h6><img src={list} alt=""className="img-fluid me-3" />The first level as a new user or account holder</h6>
                <h6><img src={list} alt=""className="img-fluid me-3" />Completed KYC</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rank;
