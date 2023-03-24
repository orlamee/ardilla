import { Link } from "react-router-dom";
import { Player, BigPlayButton  } from 'video-react';
import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';

import "../../css/learn.css"
import savenow from "../../img/dashboard/learn-ref.svg";
import insurenow from "../../img/dashboard/insurenow.svg";
import investnow from "../../img/dashboard/investnow.svg";
import ardilla from "../../img/dashboard/ardilla.mp4";
import axios from "axios";



function LearnBody() {
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
        <a href="/dilla">
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
        <Link to="/learn" className="active">
          <div className="">
            <Icon icon="simple-icons:sololearn" className="me-4 fs-5" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link to="/payment">
            <div className="">
              <Icon icon="fluent:payment-32-regular" className="me-4 fs-4" />
              Payment
            </div>
          </Link>
          <Link to="/financial-coach">
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
