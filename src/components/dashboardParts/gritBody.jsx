import React from "react";
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
import grt from "../../img/dashboard/gritbdg.svg";
import icon from "../../img/dashboard/ICON.svg";


function GritBody() {
  return (
    <section className="main-dash">
      <div className="sidebar">
        <div className="row">
          <div className="col cadet-name">
            <h2>
              Cadet {"<"}
              Starboy
              {"/>"}
            </h2>
          </div>
        </div>
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
              Financial Coach
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
      <div className="content py-5 px-5 grit-bg">
        <div className="row justify-content-between">
          <div className="col-md-5 welcome-grit">
            <div className="top-grit">
              <img src={icon} alt="logo-grit" className="img-fluid"/>
              <h2 className="mt-4">Welcome<br/>to Grit</h2>
              <p className="my-4">Lorem ipsum dolor sit amet consectetur. Faucibus sit odio feugiat suspendisse felis morbi interdum. Eget sit ultricies facilisi elementum. </p>
              <Link className='btn btn-outline-primary px-5 py-4 new-btn fs-6 w-75' to="">Set up a Grit Plan</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-grt mb-4">
              <img src={grt} alt="badge" className="img-fluid" />
              <h5 className="mt-4">You’re into this because you are<br/> a prized member</h5>
            </div>
            <div className="bg-grt mb-4">
              <img src={grt} alt="badge" className="img-fluid" />
              <h5 className="mt-4">You’re into this because you are<br/> a prized member</h5>
            </div>
            <div className="bg-grt mb-4">
              <img src={grt} alt="badge" className="img-fluid" />
              <h5 className="mt-4">You’re into this because you are<br/> a prized member</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GritBody;
