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
import contact from "../../img/dashboard/contact.svg";
import chat from "../../img/dashboard/chat.svg";


function FlexPlanCreate() {
  return (
    <section className="main-dash">
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
        <Link to="/savings" className="active">
          <div className="d-flex flex-row" >
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
        <Link>
          <div className="d-flex flex-row">
            <img src={dilla} alt="" className="img-fluid me-2 icons" />
            Dilla
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={explore} alt="" className="img-fluid me-2 icons" />
            Explore
          </div>
        </Link>
        <Link>
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
      <div className="content py-5 px-5 earning-section step-one">
        <div className="row earning">
          <div className="col-md-6">
            <h2>Cadet {"<"}Starboy{"/>"},</h2>
          </div>
        </div>
        <div className="row justify-content-center earns">
          <div className="col-md-8 text-center">
            <h3>How much do you<br/><span style={{color: "#E8356D"}}>earn</span> monthly</h3>
            <p className="my-5">Enter a name you want to give your target plan</p>

            <div className="mb-3">
              <div className="btn-group me-3" role="group" aria-label="First group">
                <button type="button" className="btn btn-flex">{"<"}50k</button>
                
              </div>
              <div className="btn-group me-3" role="group" aria-label="Second group">
                <button type="button" className="btn btn-flex">50k - 250k</button>
                
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-flex">251k - 500k</button>
              </div>
            </div>
            <div className="mb-3">
              <div className="btn-group me-3" role="group" aria-label="First group">
                <button type="button" className="btn btn-flex">501k - 1M</button>
                
              </div>
              <div className="btn-group me-3" role="group" aria-label="Second group">
                <button type="button" className="btn btn-flex">1M - 5M </button>
                
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-flex">5M+ </button>
              </div>
            </div>
            <div className="mb-3">
              <div className="btn-group me-3" role="group" aria-label="First group">
                <button type="button" className="btn btn-flex">Enter Amount</button>
              </div>
            </div>
            <div><Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="/flex-spend" style={{width: "50%"}}>Continue</Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlexPlanCreate;
 