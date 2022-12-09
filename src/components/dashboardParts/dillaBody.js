/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
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
import contact from "../../img/dashboard/contact.svg";
import chat from "../../img/dashboard/chat.svg";
import search from "../../img/dashboard/search.svg";
import user from "../../img/dashboard/user.svg";
import ola from "../../img/dashboard/ola.svg";
import nike from "../../img/dashboard/nike.svg";
import starboy from "../../img/dashboard/starboy.svg";
import levi from "../../img/dashboard/levi.svg";
import withdraw from "../../img/dashboard/w-icon.svg";



function DillaBody() {
  
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
        <Link className="active" to="/dilla">
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
          <Link>
            <div className="d-flex flex-row">
              <img src={logout} alt="" className="img-fluid me-2 icons" />
              Log Out
            </div>
          </Link>
        </div>
      </div>
      <div className="content py-5 px-5">
        <div className="row dilla-right">
          <div className="col">
            <h6>Cadet {"<"}StarBoy{"/>"},</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 dilla-right">
            <h5 className="mt-5">Amount Balance</h5>
            <div className="d-flex flex-row">
              <h4 className="amt-left">NGN 500,000</h4>
              <label className="switch mt-2">
                <input type="checkbox" placeholder="USD" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="d-flex flex-row">
              <Link type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-4 me-3">Top Up</Link>
              <Link type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6 mt-4">Send Money</Link>
            </div>
            <div className="recent-transaction mt-5">
              <h3>Friends</h3>
            </div>
            <div className="row mt-5 friends">
              <div className="col-md-2 text-center">
                <img src={search} alt="" className="img-fluid" width={150} />
                <p className="text-center">Search</p>
              </div>
              <div className="col-md-10">
                <div className="owl-carousel owl-theme">
                  <div className="media-29101">
                    <a href="#"><img src={user} alt="Image" className="img-fluid"/></a>
                    <p className="text-center">{"<"}StarBoy{"/>"}</p>
                  </div>
                  <div className="media-29101">
                    <a href="#"><img src={ola} alt="Image" className="img-fluid"/></a>
                    <p className="text-center">{"<"}Ola{"/>"}</p>
                  </div>
                  <div className="media-29101">
                    <a href="#"><img src={levi} alt="Image" className="img-fluid"/></a>
                    <p className="text-center">{"<"}Ola{"/>"}</p>
                  </div>
                  <div className="media-29101">
                    <a href="#"><img src={nike} alt="Image" className="img-fluid"/></a>
                    <p className="text-center">{"<"}Ola{"/>"}</p>
                  </div>
                  <div className="media-29101">
                    <a href="#"><img src={starboy} alt="Image" className="img-fluid"/></a>
                    <p className="text-center">{"<"}Ola{"/>"}</p>
                  </div>
                  <div className="media-29101">
                    <a href="#"><img src={user} alt="Image" className="img-fluid"/></a>
                    <p className="text-center">{"<"}Ola{"/>"}</p>
                  </div>
                  <div className="media-29101">
                    <a href="#"><img src={user} alt="Image" className="img-fluid"/></a>
                    <p className="text-center">{"<"}Ola{"/>"}</p>
                  </div>
                  <div className="media-29101">
                    <a href="#"><img src={user} alt="Image" className="img-fluid"/></a>
                    <p className="text-center">{"<"}Ola{"/>"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dilla-transaction p-5">
              <div className="history-title">
                <h3>Transaction history</h3>
                <h4 className="float-end">view all</h4>
              </div>
              <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                  <h5>Description</h5>
                </div>
                <div className="col-md-3">
                  <h5>Description</h5>
                </div>
                <div className="col-md-3">
                  <h5>Description</h5>
                </div>
              </div>
              <div className="row justify-content-center mt-2 border-bottom py-3">
                <div className="col-md-5">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Transfer to SAN</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <div className="row justify-content-center mt-2 border-bottom py-3">
                <div className="col-md-5">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Transfer to Savings account</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DillaBody;
