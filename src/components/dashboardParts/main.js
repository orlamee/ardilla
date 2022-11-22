import React from "react";
import { Link } from "react-router-dom";
import home from "../../img/dashboard/home.svg";
import portfolio from "../../img/dashboard/portfolio.svg";
import investment from "../../img/dashboard/growth.svg";
import saving from "../../img/dashboard/investment.svg";

function Sidebar() {
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
      </div>
      <div className="content py-5 px-5">
        {/* <div className="container-fluid"> */}
          <div className="row kodename">
            <div className="col-md-6">
              <h2>Welcome {"<"}Big Mo'{"/>"}</h2>
              <h6 className="mt-4">Good Morning.  <i className="bi bi-sun-fill"></i></h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="card p-3 bg-white border border-0 inner-card">
                <div className="d-flex flex-row p-2">
                  <span className="me-4 san">SAN</span>
                  <span className="roi">+10%</span>
                </div>
                <div className="p-2 mt-3">
                  <span className="amount">NGN 100,000.00</span>
                  <i className="bi bi-eye-fill float-end"></i>
                </div>
                <div className="mt-2 p-2">
                  <div className="details">
                    <span>2003827822</span><br/>
                    <span>John Doe</span>
                  </div>
                  <Link className='add-money float-end btn btn-outline-primary px-4 py-2 ardilla-btn fs-6' to="">Add Money</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3 bg-white border border-0 inner-card">
                <div className="d-flex flex-row p-2">
                  <span className="me-4 san">Dilla Wallet</span>
                </div>
                <div className="p-2 mt-3">
                  <span className="amount">USD 10,000.00</span>
                  <i className="bi bi-eye-fill float-end"></i>
                </div>
                <div className="mt-4 p-2">
                  <label className="switch">
                    <input type="checkbox" placeholder="USD"/>
                    <span className="slider round"></span>
                  </label>
                  <Link className='float-end btn btn-outline-primary px-4 py-2 ardilla-btn fs-6' to="">Add Money</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3 bg-white border border-0 inner-card">
                <div className="d-flex flex-row p-2">
                  <span className="me-4 san">Total Funds</span>
                </div>
                <div className="p-2 mt-3">
                  <span className="amount">NGN 400,000.00</span>
                  <i className="bi bi-eye-fill float-end"></i>
                </div>
                <div className="mt-4 p-2">
                  <label className="switch">
                    <input type="checkbox" placeholder="USD"/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}

      </div>
    </section>
  )
}

export default Sidebar;