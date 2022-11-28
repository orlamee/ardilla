import React, { useState, useEffect } from "react";
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
import badge from "../../img/dashboard/badge.svg";
import chat from "../../img/dashboard/chat.svg";
import pie from "../../img/pie.svg";
import Cookies from "js-cookie";
import axios from "axios";
import { useIdleTimer } from "react-idle-timer";
import chart from "../../img/dashboard/chartjs.png";
import coins from "../../img/dashboard/coinsss.svg";
import video from "../../img/dashboard/video.png";

import dayjs from "dayjs";
import greetPlugin from "dayjs-greet";
dayjs.extend(greetPlugin);

function Sidebar() {
  const [userDetail, setUserDetail] = useState("");

  const token = Cookies.get("user");

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(
        `https://ardilla-be-app.herokuapp.com/ardilla/api/user/getUser/${token}`
      );

      setUserDetail(data.user);
    };

    getUser();
  }, [token]);

  //user
  const logOut = async () => {
    const { data } = await axios.put(
      `https://ardilla-be-app.herokuapp.com/ardilla/api/auth/logout/${token}`
    );

    console.log(data);

    await window.location.reload();
  };

  const handleOnIdle = () => {
    Cookies.remove("user");
    console.log("last active", getLastActiveTime());
    logOut();
  };

  const { getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * 7,
    onIdle: handleOnIdle,
    events: [
      "mousemove",
      "keydown",
      "wheel",
      "DOMMouseScroll",
      "mousewheel",
      "mousedown",
      "touchstart",
      "touchmove",
      "MSPointerDown",
      "MSPointerMove",
      "visibilitychange",
    ],
    debounce: 500,
  });

  const today = new Date();

  const date =
    today.getMonth() + "," + today.getDate() + " " + today.getFullYear();

  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  //form log out btn
  const handleLogOut = async () => {
    Cookies.remove("user");

    logOut();

    console.log("re render");
  };

  // document.addEventListener("visibilitychange", function (event) {
  //   if (document.hidden) {
  //     console.log("not visible");
  //     Cookies.remove("user");
  //     logOut();
  //   } else {
  //     console.log("is visible");
  //   }
  // });

  return (
    <section className="main-dash">
      <div className="sidebar">
        <Link>
          <div className="d-flex flex-row">
            <img src={home} alt="" className="img-fluid me-2 icons" />
            Home
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={portfolio} alt="" className="img-fluid me-2 icons" />
            Portfolio
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={saving} alt="" className="img-fluid me-2 icons" />
            Savings
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={investment} alt="" className="img-fluid me-2 icons" />
            Investments
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={insurance} alt="" className="img-fluid me-2 icons" />
            Insurance
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
          <Link onClick={handleLogOut}>
            <div className="d-flex flex-row">
              <img src={logout} alt="" className="img-fluid me-2 icons" />
              Log Out
            </div>
          </Link>
        </div>
      </div>
      <div className="content py-5 px-5">
        {/* <div className="container-fluid"> */}
        <div className="row kodename">
          <div className="col-md-6">
            <h2>
              Welcome {"<"}
              {userDetail?.kodeHex}
              {"/>"}
            </h2>
            <h6 className="mt-4">
              {dayjs(`${date} ${time}`).greet()}.{" "}
              <i className="bi bi-sun-fill"></i>
            </h6>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card p-3 bg-white border border-0 inner-card one">
              <div className="d-flex flex-row p-2">
                <span className="me-4 san">SAN</span>
                <span className="roi">+10.00%</span>
              </div>
              <div className="p-2 mt-3">
                <span className="amount">NGN 100,000.00</span>
                <i className="bi bi-eye-fill float-end"></i>
              </div>
              <div className="mt-2 p-2">
                <div className="details">
                  <span className="hash">**********</span>
                  <br />
                  <span className="generate">
                    {/* {userDetail?.firstname} {userDetail?.lastname} */}
                    Generate Account Number{" "}
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </span>
                </div>
                <Link className="add-money float-end btn btn-outline-primary px-4 py-2 ardilla-btn fs-6 desktop" to="">
                  Add Money
                </Link>
                <Link className="btn btn-outline-primary px-4 py-2 ardilla-btn fs-6 mobile mt-2" to="">
                  Add Money
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-3 bg-white border border-0 inner-card two">
              <div className="d-flex flex-row p-2">
                <span className="me-4 san">Dilla Wallet</span>
              </div>
              <div className="p-2 mt-3">
                <span className="amount">USD 10,000.00</span>
                <i className="bi bi-eye-fill float-end"></i>
              </div>
              <div className="mt-4 p-2">
                <label className="switch">
                  <input type="checkbox" placeholder="USD" />
                  <span className="slider round"></span>
                </label>
                <Link
                  className="float-end btn btn-outline-primary px-4 py-2 ardilla-btn fs-6"
                  to=""
                >
                  Add Money
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-3 bg-white border border-0 inner-card three">
              <div className="d-flex flex-row p-2">
                <span className="me-4 san">Total Funds</span>
              </div>
              <div className="p-2 mt-3">
                <span className="amount">NGN 400,000.00</span>
                <i className="bi bi-eye-fill float-end"></i>
              </div>
              <div className="mt-4 p-2">
                <label className="switch">
                  <input type="checkbox" placeholder="USD" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row kyc">
          <div className="col-md-6">
            <h3>Complete KYC</h3>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card py-5 px-3 bg-white border border-0 inner-card">
              <div className="row">
                <div className="col-md-6 text-center">
                  <img src={pie} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 mt-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultChecked/>
                    <label className="form-check-label custom-check ">
                      Add Your BVN
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultChecked />
                    <label className="form-check-label custom-check">
                      Bank Statement
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultChecked/>
                    <label className="form-check-label custom-check">
                      Upload Your Valid ID
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label custom-check">
                      Download Ardilla App
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 px-5">
            <img src={chart} alt="" className="img-fluid chartjs" />
          </div>
        </div>
        <div className="row roi-cards">
          <div className="col-md-4 mb-3">
            <div className="cards-roi px-5">
              <span>Get access to<br/>Investment Opportunities</span>
              <h6 className="my-3">Start Investing <i className="bi bi-arrow-right"></i></h6>
              <div className="row">
                <div className="col-md-6 percentile">
                  <h5>20% Monthly ROI</h5>
                </div>
                <div className="col-md-6 text-end">
                  <img src={coins} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="cards-roi px-5">
              <span>Build your savings<br/>the right way</span>
              <h6 className="my-3">Save Now <i className="bi bi-arrow-right"></i></h6>
              <div className="row">
                <div className="col-md-6 percentile">
                  <h5>12% Annual ROI</h5>
                </div>
                <div className="col-md-6 text-end">
                  <img src={coins} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="cards-roi px-5 insured">
              <span>Get<br/>Insured</span>
              <h6 className="my-3">Make your first claim <i className="bi bi-arrow-right"></i></h6>
              <div className="row">
                <div className="col-md-6 percentile">
                  <h5>12% Annual ROI</h5>
                </div>
                <div className="col-md-6 text-end">
                  <img src={coins} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row goals">
          <div className="col-md-4 mb-3">
            <h2 className="mb-5">Badge</h2>
            <figure className="figure">
              <img src={badge} alt="" className="img-fluid" />
              <figcaption className="text-center figure-caption">Beginner</figcaption>
            </figure>
          </div>
          <div className="col-md-4 mb-3">
            <h2 className="mb-5">Goals</h2>
            <div className="goal-card px-5">
              <h1>Financial Success & You</h1>
              <small>Create a goal</small>
              <h6 className="mt-5">Start Investing <i className="bi bi-arrow-right"></i></h6>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h2 className="mb-5">Referrals</h2>
            <div className="refer-card px-5">
              <h1>Refer & Earn</h1>
              <small>Invite using your Kode Hex.</small>
              <h6 className="mt-5">Click here <i className="bi bi-arrow-right"></i></h6>
            </div>
          </div>
        </div>
        <div className="row goals">
          <div className="col-md-4 mb-3">
            <h2 className="mb-5">Money Wise</h2>
            <div className="refer-card wise px-5">
              <h1>Financial nuggets</h1>
              <small>Take a step towards financial literacy<br/>with financial advice from the best<br/>minds in the game.</small>
              <h6 className="mt-5">Click here <i className="bi bi-arrow-right"></i></h6>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src={video} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row support-card p-5">
          <div className="col-md-6">
            <h4>Get Introduced to your personal dilla coach</h4>
            <h6 className="mt-2">Start a money relationship today  <i className="bi bi-arrow-right"></i></h6>
          </div>
          <div className="col-md-6"></div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Sidebar;
