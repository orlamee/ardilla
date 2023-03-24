import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../css/profile.css"
import { Icon } from '@iconify/react';
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
    <section className="home">
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
        <Link to="/dashboard">
          <div className="">
            <Icon icon="mingcute:home-3-line" className="me-4 fs-4" />
            <span className="mt-1">Home</span>
          </div>
        </Link>
        <Link to="/portfolio">
          <div className="">
            <Icon icon="material-symbols:work-outline" className="me-4 fs-4" />
            Portfolio
          </div>
        </Link>
        <Link to="/savings">
          <div className="">
            <Icon icon="material-symbols:energy-savings-leaf-outline-rounded" className="me-4 fs-4" />
            Savings
          </div>
        </Link>
        <Link>
          <div className="">
            <Icon icon="fluent:arrow-growth-20-filled" className="me-4 fs-4" />
            Investments <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link>
          <div className="">
            <Icon icon="ic:baseline-security" className="me-4 fs-4" />
            Insurance <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <a href="/dilla" >
          <div className="">
            <Icon icon="ion:wallet-outline" className="me-4 fs-4" />
            Dilla
          </div>
        </a>
        <Link>
          <div className="">
            <Icon icon="ic:outline-explore" className="me-4 fs-4" />
            Budgeting <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link to="/learn">
          <div className="">
            <Icon icon="simple-icons:sololearn" className="me-4 fs-5" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link to="/payment" >
            <div className="">
              <Icon icon="fluent:payment-32-regular" className="me-4 fs-4" />
              Payment
            </div>
          </Link>
          <Link to="/financial-coach" className="active">
            <div className="">
              <Icon icon="bx:support" className="me-4 fs-4" />
              Financial Coach
            </div>
          </Link>
          <Link>
            <div className="">
              <Icon icon="bx:log-out-circle" className="me-4 fs-4" />
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
