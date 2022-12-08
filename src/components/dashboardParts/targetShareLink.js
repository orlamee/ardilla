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
import final from "../../img/dashboard/prefer.svg";
import hex from "../../img/dashboard/kodehex.svg";


function TargetShareLink() {
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
      <div className="content py-5 px-5 earning-section">
        <div className="row backto">
          <Link to="/target-prefer"><span><i className="bi bi-chevron-left me-3"></i>Back</span></Link>
        </div>
        <div className="row earning">
          <div className="col-md-12 text-center">
            <img src={final} alt="" className="img-fluid"/>
            {/* <h2>Cadet {"<"}Starboy{"/>"},</h2> */}
          </div>
        </div>
        <div className="row justify-content-center earns">
          <div className="col-md-6 text-center target-link">
            <div className="search-box">
              <input type="text" class="search-input" placeholder="Search KodeHex"/>
              <button className="search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <img src={hex} alt="" className="img-fluid my-5"/>
            <h3><i className="bi bi-check-square me-3"></i>Send invite to dilla user</h3>
            <div><Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2" to="" style={{width: "100%"}}>Create</Link></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 text-center">
            <div className="copylink p-4">
              <span>https://ardilla.africa/invite/g3b7wq</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-md-4 text-center">
            <p>Copy Link <i className="bi bi-files me-3"></i></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TargetShareLink;