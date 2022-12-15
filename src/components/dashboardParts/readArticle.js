import React from "react";
import { Link } from "react-router-dom";
import "../../css/learn.css"
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
import savenow from "../../img/dashboard/learn-ref.svg";
import insurenow from "../../img/dashboard/insurenow.svg";
import investnow from "../../img/dashboard/investnow.svg";
import image from "../../img/dashboard/read-blog.svg";


function ReadArticle() {
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
            Explore
          </div>
        </Link>
        <Link to="/learn" className="active">
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
      <div className="content py-5 px-5 learn-main">
        <div className="row">
          <Link to="/learn/article" className="learn-back"><i className="bi bi-chevron-left me-3"></i>Back</Link>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 right-learn">
            <div className="float-end">
              <Link to="/savings" className="d-flex flex-row mb-2">
                {/* <h4 className="mt-3 me-3">Save Now</h4> */}
                <img src={savenow} alt="" className="img-fluid" />
              </Link>
              <Link to="/savings" className="d-flex flex-row mb-2">
                {/* <h4 className="mt-3 me-3">Save Now</h4> */}
                <img src={investnow} alt="" className="img-fluid" />
              </Link>
              <Link to="/savings" className="d-flex flex-row mb-2">
                {/* <h4 className="mt-3 me-3">Save Now</h4> */}
                <img src={insurenow} alt="" className="img-fluid" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center read-blog">
          <div className="col-md-5">
            <h6>Read Articles</h6>
            <h2 className="my-4">Everything You Need To Know <br/>About Web 3</h2>
            <div className="d-flex flex-row">
              <span className="me-5">By Oshodi David</span>
              <span className="me-5">April 22, 2022 . Updated 1hr Ago</span>
              <span className="me-5">1min read</span>
            </div>
            <img src={image} alt="Read Blog" className="img-fluid my-5" />
            <p className="text-muted">As risk takers, their aim is to exploit price fluctuations in the stock market by making high-risk investments in equities with uncertain outcomes.
            A traditional investor looks at financial data about companies to determine a stock’s value, while a speculator uses indicators like moving averages to predict swings in price.</p>
            <p className="text-muted my-4">As risk takers, their aim is to exploit price fluctuations in the stock market by making high-risk investments in equities with uncertain outcomes.
            A traditional investor looks at financial data about companies to determine a stock’s value, while a speculator uses indicators like moving averages to predict swings in price.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default ReadArticle;
