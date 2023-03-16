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
import bc from "../../img/bc.svg";
import house from "../../img/house.svg";
import deposit from "../../img/icon-deposit.svg";
import withdraw from "../../img/icon-withdraw.svg";



function DashboardGrit() {
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
        <div className="row justify-content-between">
          <div className="col-md-6 mb-3">
            <div className="gr-card">
              <h2>Grit Savings</h2>
              <div className="row mt-5">
                <div className="col-md-6">
                  <h4>Total Balance</h4>
                  <h6 className="mt-2">₦40,000,000.00 </h6>
                </div>
                <div className="col-md-6 text-end">
                  <button className="btn btn-outline-primary px-5 py-3 gritd-btn fs-6 me-3" to="">Top Up</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bg-activity p-4 mb-4">
              <h6>Recent Activities</h6>
              <h3 className="float-end" style={{marginTop :"-19px"}}>View all</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Grit</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src={deposit} alt="" className="img-fluid me-2" width={18} /> Transportation</td>
                    <td>30 days</td>
                    <td>₦4000.00 </td>
                  </tr>
                  <tr>
                    <td><img src={withdraw} alt="" className="img-fluid me-2" width={18}/>Travel</td>
                    <td>30 days</td>
                    <td>₦4000.00 </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-activity p-4">
              <div className="row">
                <div className="col-md-6 mt-2">
                  <div className="cfc">Contact financial coach</div>
                </div>
                <div className="col-md-6 text-end">
                  <img src={bc} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <span style={{color: "#22C55E"}}>Active</span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 mb-3">
            <div className="bg-housing">
              <Link to="/grit/housing" className="d-flex flex-row">
                <img src={house} alt="housing" className="img-fluid me-5" />
                <div className="details-grit mt-4">
                  <div className="mb-4">
                    <h4>Interest</h4>
                    <h6>20% p.a</h6>
                  </div>
                  <div className="mb-4">
                    <h4>Maturity Date</h4>
                    <h6>29-11-2023</h6>
                  </div>
                  <div className="mb-4">
                    <h4>Frequency</h4>
                    <h6>1 Year</h6>
                  </div>
                </div>
                <div className="details-grit mt-4" style={{marginLeft: "220px"}}>
                  <div className="mb-4">
                    <h4><i className="bi bi-clock-history me-2"></i>360 days left</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-housing">
              <div className="d-flex flex-row">
                <img src={house} alt="housing" className="img-fluid me-5" />
                <div className="details-grit mt-4">
                  <div className="mb-4">
                    <h4>Interest</h4>
                    <h6>20% p.a</h6>
                  </div>
                  <div className="mb-4">
                    <h4>Maturity Date</h4>
                    <h6>29-11-2023</h6>
                  </div>
                  <div className="mb-4">
                    <h4>Frequency</h4>
                    <h6>1 Year</h6>
                  </div>
                </div>
                <div className="details-grit mt-4" style={{marginLeft: "220px"}}>
                  <div className="mb-4">
                    <h4><i className="bi bi-clock-history me-2"></i>360 days left</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <span className="text-muted">Completed</span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 mb-3">
            <div className="bg-housing">
              <Link to="/grit/completed" className="d-flex flex-row">
                <img src={house} alt="housing" className="img-fluid me-5" />
                <div className="details-grit mt-4">
                  <div className="mb-4">
                    <h4>Interest</h4>
                    <h6>20% p.a</h6>
                  </div>
                  <div className="mb-4">
                    <h4>Maturity Date</h4>
                    <h6>29-11-2023</h6>
                  </div>
                  <div className="mb-4">
                    <h4>Frequency</h4>
                    <h6>1 Year</h6>
                  </div>
                </div>
                <div className="details-grit mt-4" style={{marginLeft: "220px"}}>
                  <div className="mb-4">
                    <h4><i className="bi bi-clock-history me-2"></i>360 days left</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-housing">
              <div className="d-flex flex-row">
                <img src={house} alt="housing" className="img-fluid me-5" />
                <div className="details-grit mt-4">
                  <div className="mb-4">
                    <h4>Interest</h4>
                    <h6>20% p.a</h6>
                  </div>
                  <div className="mb-4">
                    <h4>Maturity Date</h4>
                    <h6>29-11-2023</h6>
                  </div>
                  <div className="mb-4">
                    <h4>Frequency</h4>
                    <h6>1 Year</h6>
                  </div>
                </div>
                <div className="details-grit mt-4" style={{marginLeft: "220px"}}>
                  <div className="mb-4">
                    <h4><i className="bi bi-clock-history me-2"></i>360 days left</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardGrit;
