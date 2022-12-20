import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import flex from "../../img/dashboard/flex.svg";
import percent from "../../img/dashboard/per.svg";
import hone from "../../img/dashboard/deposit-icon.svg";
import withdrawal from "../../img/dashboard/withdraw.svg";
import chart from "../../img/dashboard/stats-chart.svg";
import red from "../../img/dashboard/red.svg";
import yellow from "../../img/dashboard/yellow.svg";
import purple from "../../img/dashboard/purple.svg";
import blue from "../../img/dashboard/blue.svg";
import get from "../../img/dashboard/target-icon.svg";
import lock from "../../img/dashboard/lock.svg";
import family from "../../img/dashboard/family.svg";
import vip from "../../img/dashboard/vip.svg";
import { useIdleTimer } from "react-idle-timer";
import axios from "axios";
import Cookies from "js-cookie";

function SavingsBody() {
  const navigate = useNavigate();

  // let user = JSON.parse(sessionStorage.getItem("user"));

  const refreshToken = async () => {
    try {
      const { data } = await axios.get(
        `https://ardilla.herokuapp.com/ardilla/api/auth/refresh-token/${Cookies.get(
          "user"
        )}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      refreshToken();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleOnIdle = () => {
    sessionStorage.clear();
    Cookies.remove("user");
    navigate("/login");
    console.log("last active", getLastActiveTime());
  };

  const { getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * 2,
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

  const handleLogOut = () => {
    Cookies.remove("user");
    sessionStorage.clear();
    navigate("/login");
    window.location.reload();
  };
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
        <div className="row">
          <div className="col-md-7">
            <div className="total-savings">
              <h3>Total Savings</h3>
              <div className="d-flex flex-row my-3">
                <p>NGN 0.00</p>
                <i className="bi bi-eye-fill ms-5 save-eyes"></i>
              </div>
              <div className="d-flex flex-row">
                <label className="switch">
                  <input type="checkbox" placeholder="USD" />
                  <span className="slider round"></span>
                </label>
                <span className="dollar mt-2 ms-2">₦740 /$1</span>
              </div>
            </div>
          </div>
          <div className="col-md-5 dilla-section text-end mt-5">
            <span className="learn">
              Learn More <i className="bi bi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div className="row create-plan">
          <div className="col">
            <h4>Create a new savings plan</h4>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-7">
            <div className="flex-section">
              <img src={percent} alt="" className="img-fluid float-end pc" />
              <div className="card-s px-4">
                <div className="row">
                  <div className="col-md-8">
                    <div className="d-flex flex-row">
                      <img src={flex} alt="" className="img-fluid" />
                      <div className="mt-2 ms-3">
                        <h5>Flex</h5>
                        <h6>
                          Get closer to your goal with autosave. Set
                          <br /> daily, weekly, or monthly automatic
                          <br />
                          deposits. You don’t have to lift a finger.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <Link
                      className="btn btn-outline-primary px-5 py-3 savings-btn fs-6"
                      to="/flex-plan"
                    >
                      Create a Flex Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-section">
              <img src={percent} alt="" className="img-fluid float-end pc" />
              <div className="card-s px-4 bg-target">
                <div className="row">
                  <div className="col-md-8">
                    <div className="d-flex flex-row">
                      <img src={get} alt="" className="img-fluid" />
                      <div className="mt-2 ms-3">
                        <h5>Target</h5>
                        <h6>
                          Get closer to your goal with autosave. Set
                          <br /> daily, weekly, or monthly automatic
                          <br />
                          deposits. You don’t have to lift a finger.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <Link
                      className="btn btn-outline-primary px-5 py-3 savings-btn fs-6"
                      to="/target-plan"
                    >
                      Create a Fixed Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-section">
              <img src={percent} alt="" className="img-fluid float-end pc" />
              <div className="card-s px-4 family-bg">
                <div className="row">
                  <div className="col-md-8">
                    <div className="d-flex flex-row">
                      <img src={family} alt="" className="img-fluid" />
                      <div className="mt-2 ms-3">
                        <h5>Family & I</h5>
                        <h6>
                          Get closer to your goal with autosave. Set
                          <br /> daily, weekly, or monthly automatic
                          <br />
                          deposits. You don’t have to lift a finger.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <Link
                      className="btn btn-outline-primary px-5 py-3 savings-btn fs-6"
                      to=""
                      disabled
                    >
                      Coming Soon
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-section">
              <img src={percent} alt="" className="img-fluid float-end pc" />
              <div className="card-s px-4 lock-bg">
                <div className="row">
                  <div className="col-md-8">
                    <div className="d-flex flex-row">
                      <img src={lock} alt="" className="img-fluid" />
                      <div className="mt-2 ms-3">
                        <h5>Safe Lock</h5>
                        <h6>
                          Get closer to your goal with autosave. Set
                          <br /> daily, weekly, or monthly automatic
                          <br />
                          deposits. You don’t have to lift a finger.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <Link
                      className="btn btn-outline-primary px-5 py-3 savings-btn fs-6"
                      to=""
                    >
                      Create a Locked Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-section">
              <img src={percent} alt="" className="img-fluid float-end pc" />
              <div className="card-s px-4 vip-bg">
                <div className="row">
                  <div className="col-md-8">
                    <div className="d-flex flex-row">
                      <img src={vip} alt="" className="img-fluid" />
                      <div className="mt-2 ms-3">
                        <h5>VIP</h5>
                        <h6>
                          Get closer to your goal with autosave. Set
                          <br /> daily, weekly, or monthly automatic
                          <br />
                          deposits. You don’t have to lift a finger.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <Link
                      className="btn btn-outline-primary px-5 py-3 savings-btn fs-6"
                      to="/"
                    >
                      Create a VIP Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 dilla-section">
            <div className="history-card">
              <div>
                <h3>History</h3>
                <p className="float-end view">View all</p>
              </div>
              <div className="mt-4">
                <div className="d-flex flex-row">
                  <img src={hone} alt="" className="img-fluid me-3" />
                  <div className="mt-2">
                    <h6>Savings deposit</h6>
                    <p>18th Dec 2022</p>
                  </div>
                </div>
                <span className="float-end left-number">+20,000</span>
              </div>
              <hr />
              <div className="mt-4">
                <div className="d-flex flex-row">
                  <img src={withdrawal} alt="" className="img-fluid me-3" />
                  <div className="mt-2">
                    <h6>Savings withdrawal</h6>
                    <p>12th Dec 2022</p>
                  </div>
                </div>
                <span className="float-end left-number debit">-20,000</span>
              </div>
            </div>
            <div className="history-card nth-history">
              <h3>
                Get access to
                <br />
                Investment Opportunites
              </h3>
              <p className="mt-3">
                Start Investing <i className="bi bi-arrow-right"></i>
              </p>
              <span className="mt-5">20% Monthly ROI</span>
            </div>
            <div className="history-card bg-stat">
              <div className="text-center">
                <h4>Saving Statistics</h4>
                <img src={chart} alt="" className="img-fluid mt-4" />
                <div className="text-center mapping mapping-save">
                  <div className="d-flex flex-row">
                    <img src={red} alt="" className="img-fluid me-3" />
                    <p className="mt-3">Savings</p>
                  </div>
                  <h3 className="float-end">0.00</h3>
                </div>
                <div className="text-center mapping mapping-save">
                  <div className="d-flex flex-row">
                    <img src={yellow} alt="" className="img-fluid me-3" />
                    <p className="mt-3">Investment</p>
                  </div>
                  <h3 className="float-end">0.00</h3>
                </div>
                <div className="text-center mapping mapping-save">
                  <div className="d-flex flex-row">
                    <img src={purple} alt="" className="img-fluid me-3" />
                    <p className="mt-3">Insurance</p>
                  </div>
                  <h3 className="float-end">0.00</h3>
                </div>
                <div className="text-center mapping mapping-save">
                  <div className="d-flex flex-row">
                    <img src={blue} alt="" className="img-fluid me-3" />
                    <p className="mt-3">SAN</p>
                  </div>
                  <h3 className="float-end">0.00</h3>
                </div>
                <div className="mt-5 mapping-save text-start footer-card">
                  5% Money flow increase
                  <br />
                  Well done Boss
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavingsBody;
