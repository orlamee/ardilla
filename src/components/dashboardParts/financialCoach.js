import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
import axios from "axios";




function FinancialCoach() {
  const [userDetails, setUserDetails] = useState();
  const [setValue] = useState("");
  

  useEffect(() => {

    const getUserById = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/user/get-user`,
          {
            withCredentials: true,
          }
        );

        setUserDetails(data.user);
        const calculateKycProgress = data.user.kycPoints / 100;
        setValue(calculateKycProgress);
        console.log("user", data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserById();
  },);
  return (
    <section className="main-dash">
      <div className="sidebar">
        <div className="row">
          <div className="col cadet-name">
            <h2>
               Cadet {"<"}
              {userDetails?.kodeHex}
              {"/>"},
            </h2>
          </div>
        </div>
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
          <Link to="/financial-coach" className="active">
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
      <div className="content py-5 px-5">
        <div className="row bg-finc justify-content-center">
          <div className="col-md-5">
            <h2 className="text-white">Olamilekan Akindele</h2>
            <p className="text-white">Savings | Investments | Loans</p>
            <div className="d-flex flex-row">
              <Link to="#" className="btn btn-outline-primary px-5 py-3 ardilla-btn support-btn- fs-6 mt-4 me-3">Fix a meeting</Link>
              <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn support-btn fs-6 mt-4">Chat now</Link>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col sess">
            <h4>Your sessions</h4>
          </div>
        </div>
        <div className="bg-session mt-5 p-4">
          <div className="row">
            <div className="col-md-3">
              <h4>Date</h4>
            </div>
            <div className="col-md-2">
              <h4>Coach</h4>
            </div>
            <div className="col-md-3">
              <h4>Duration</h4>
            </div>
            <div className="col-md-2">
              <h4>Recordings</h4>
            </div>
            <div className="col-md-2">
              <h4>Status</h4>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">
              <h6>November 15, 20222</h6>
            </div>
            <div className="col-md-2">
              <h6>Opara Michael</h6>
            </div>
            <div className="col-md-3">
              <h6>1hr : 20mins</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{color: "#8807F7"}}>Download</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{color: "#EAB308"}}>Pending</h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">
              <h6>November 15, 20222</h6>
            </div>
            <div className="col-md-2">
              <h6>Opara Michael</h6>
            </div>
            <div className="col-md-3">
              <h6>1hr : 20mins</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{color: "#8807F7"}}>Download</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{color: "#EAB308"}}>Pending</h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">
              <h6>November 15, 20222</h6>
            </div>
            <div className="col-md-2">
              <h6>Opara Michael</h6>
            </div>
            <div className="col-md-3">
              <h6>1hr : 20mins</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{color: "#8807F7"}}>Download</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{color: "#EAB308"}}>Pending</h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">
              <h6>November 15, 20222</h6>
            </div>
            <div className="col-md-2">
              <h6>Opara Michael</h6>
            </div>
            <div className="col-md-3">
              <h6>1hr : 20mins</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{color: "#8807F7"}}>Download</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{color: "#E8356D"}}>Postponed</h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">
              <h6>November 15, 20222</h6>
            </div>
            <div className="col-md-2">
              <h6>Opara Michael</h6>
            </div>
            <div className="col-md-3">
              <h6>1hr : 20mins</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{color: "#8807F7"}}>Download</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{color: "#0D9488"}}>Done</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialCoach;
