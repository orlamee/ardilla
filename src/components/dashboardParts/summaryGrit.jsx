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
import grit from "../../img/cadet-grit.svg";
import send from "../../img/gsend.svg";
import sum from "../../img/sum.svg";
import trend from "../../img/trend.svg";
import time from "../../img/time.svg";
import summary from "../../img/summary.svg";
// import icon from "../../img/dashboard/ICON.svg";


function SummaryGrit() {
  return (
    <section className="main-dash">
      <div className="sidebar">
        <div className="row">
          <div className="col cadet-name">
            <h2>
              Cadet {"<"}
              Starboy
              {"/>"}
            </h2>
          </div>
        </div>
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
          <Link>
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
      <div className="content py-5 px-5 gritsave-bg summary-grit">
        <div className="row">
          <div className="col-md-6">
            <h2>Summary</h2>
            <h6 className="mt-3">Here is your overview for Grit Plan</h6>
          </div>
        </div>
        <div className="row mt-4 justify-content-between">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="bg-sum p-4">
                  <div className="d-flex flex-row">
                    <img src={grit} alt="" className="img-fluid" />
                    <div className="mt-2 ms-3">
                      <h4>Rank</h4>
                      <h5 className="mt-1">Colonel</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-sum p-4" style={{background: "#FFFBEB"}}>
                  <div className="d-flex flex-row">
                    <img src={time} alt="" className="img-fluid" />
                    <div className="mt-2 ms-3">
                      <h4 style={{color: "#F59E0B"}}>Duration</h4>
                      <h5 style={{color: "#F59E0B"}} className="mt-1">12 Months</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6 mb-3">
                <div className="bg-sum p-4" style={{background: "#F8F0FF"}}>
                  <div className="d-flex flex-row">
                    <img src={send} alt="" className="img-fluid" />
                    <div className="mt-2 ms-3">
                      <h4 style={{color: "#8807F7"}}>Save -  30%</h4>
                      <h5 style={{color: "#8807F7"}} className="mt-1">NGN 180,000</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-sum p-4" style={{background: "#FEF2F2"}}>
                  <div className="d-flex flex-row">
                    <img src={trend} alt="" className="img-fluid" />
                    <div className="mt-2 ms-3">
                      <h4 style={{color: "#E8356D"}}>Interest -  20%</h4>
                      <h5 style={{color: "#E8356D"}} className="mt-1">NGN 2,164</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <div className="bg-sum p-4" style={{background: "#F6FEF8"}}>
                  <div className="d-flex flex-row">
                    <img src={sum} alt="" className="img-fluid" />
                    <div className="mt-2 ms-3">
                      <h4 style={{color: "#16A34A"}}>Total</h4>
                      <h5 style={{color: "#16A34A"}} className="mt-1">NGN 2,164,950,768</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={summary} alt="" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-9">
            <div className="bg-table">
              <h3>Breakdown</h3>
              <table className="mt-3" style={{width: "100%"}} id="example">
                <thead className="">
                  <tr>
                    <th>DATE</th>
                    <th>AMOUNT (₦)</th>
                    <th>INTEREST - 20%P.A (₦)</th>
                    <th>TOTAL BALANCE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>29-11-2022</td>
                    <td>180,000</td>
                    <td>180</td>
                    <td>180,000</td>
                    <td><span className="bg-quo">Not-Active</span></td>
                  </tr>
                  <tr>
                    <td>29-11-2022</td>
                    <td>180,000</td>
                    <td>180</td>
                    <td>180,000</td>
                    <td><span className="bg-quo">Not-Active</span></td>
                  </tr>
                  <tr>
                    <td>29-11-2022</td>
                    <td>180,000</td>
                    <td>180</td>
                    <td>180,000</td>
                    <td><span className="bg-quo">Not-Active</span></td>
                  </tr>
                  <tr>
                    <td>29-11-2022</td>
                    <td>180,000</td>
                    <td>180</td>
                    <td>180,000</td>
                    <td><span className="bg-quo">Not-Active</span></td>
                  </tr>
                  <tr>
                    <td>29-11-2022</td>
                    <td>180,000</td>
                    <td>180</td>
                    <td>180,000</td>
                    <td><span className="bg-quo">Not-Active</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-check mb-5">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" for="flexCheckDefault">
                lorem ipsum lorem ipsum  lorem ipsum lorem ipsum  lorem ipsum lorem ipsum  lorem ipsum lorem ipsum 
              </label>
            </div>
            <div className="form-check mb-5">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" for="flexCheckDefault">
                lorem ipsum lorem ipsum  lorem ipsum lorem ipsum  lorem ipsum lorem ipsum  lorem ipsum lorem ipsum 
              </label>
            </div>
            <Link className='btn btn-outline-primary px-5 py-3 new-btn fs-6 w-75' to="">Continue</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummaryGrit;
