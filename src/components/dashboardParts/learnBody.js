import React from "react";
import { Link } from "react-router-dom";
import { Player, BigPlayButton  } from 'video-react';

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
import contact from "../../img/dashboard/pay.svg";
import chat from "../../img/dashboard/chat.svg";
import savenow from "../../img/dashboard/learn-ref.svg";
import insurenow from "../../img/dashboard/insurenow.svg";
import investnow from "../../img/dashboard/investnow.svg";
import ardilla from "../../img/dashboard/ardilla.mp4";


function LearnBody() {
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
        <Link to="/learn" className="active">
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
      <div className="content py-5 px-5 learn-main">
        <div className="row">
          <span className="learn-back"><i className="bi bi-chevron-left me-3"></i>Back</span>
        </div>
        <div className="row mt-5">
          <h2>Educate yourself</h2>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="d-flex flex-row">
              <Link to="/learn" type="button" className="btn me-3 btn-learn">Videos</Link>
              <Link to="/learn/article" type="button" className="btn me-3 btn-learn">Articles</Link>
              <Link to="/learn/quiz" type="button" className="btn me-3 btn-learn">Quiz</Link>
              <Link to="/learn/profile" type="button" className="btn me-3 btn-learn">Profile</Link>
              {/* <button type="button" className="btn me-3 btn-learn">Profile</button> */}
            </div>
            <div className="row mt-5">
              <div className="search-box">
                <input type="text" class="search-learn" placeholder="Search"/>
                <button className="search-button-learn">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8 right-learn">
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
        <div className="row mt-5">
          <div className="col">
            <span className="learn-title">Recent Videos</span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <Player src={ardilla}>
              <BigPlayButton position="center" />
            </Player>
          </div>
          <div className="col-md-4">
            <Player src={ardilla}>
              <BigPlayButton position="center" />
            </Player>
          </div>
          <div className="col-md-4">
            <Player src={ardilla}>
              <BigPlayButton position="center" />
            </Player>
          </div>
          
          
        </div>
        <div className="row mt-5">
          <div className="col">
            <span className="learn-title">About Ardilla</span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <Player src={ardilla}>
              <BigPlayButton position="center" />
            </Player>
          </div>
          <div className="col-md-4">
            <Player src={ardilla}>
              <BigPlayButton position="center" />
            </Player>
          </div>
          <div className="col-md-4">
            <Player src={ardilla}>
              <BigPlayButton position="center" />
            </Player>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default LearnBody;
