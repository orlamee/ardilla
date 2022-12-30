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
import verticalone from "../../img/dashboard/vertical-one.svg";


function VaultCreate() {
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
        <Link to="/dilla">
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
      <div className="content py-5 px-5 earning-section">
        <div className="row backto">
          <Link to="/vault">
            <span>
              <i className="bi bi-chevron-left me-3"></i>Back
            </span>
          </Link>
        </div>
        <div className="row earning">
          <div className="col-md-12 text-center">
            <img src={verticalone} alt="" className="img-fluid" />
            {/* <h2>Cadet {"<"}Starboy{"/>"},</h2> */}
          </div>
        </div>
        <div className="row justify-content-center earns target-m">
          <div className="col-md-8 text-center">
            <h3>
              Give your <br />
              <span style={{ color: "#E8356D" }}>vault</span> a name
            </h3>
            <p className="my-5">
              Enter a name you want to give your target plan
            </p>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control target-form"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <Link
                      type="submit"
                      className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                      to="/vault-earn"
                      style={{ width: "100%" }}
                    >
                      Next
                    </Link>
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

export default VaultCreate;
