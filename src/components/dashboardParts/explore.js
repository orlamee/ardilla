import React from "react";
import { Link } from "react-router-dom";
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
import tar from "../../img/dashboard/targett.svg";
import flex from "../../img/dashboard/f-icon.svg";
import vault from "../../img/dashboard/Vault.svg";
import dillacom from "../../img/dashboard/dilla-comp.svg";
import stash from "../../img/dashboard/stash.svg";
import shield from "../../img/dashboard/shiel.svg";
import invest from "../../img/dashboard/investment-sson.svg";
import budget from "../../img/dashboard/budget.svg";
import clan from "../../img/dashboard/clan.svg";
import ym from "../../img/dashboard/ym.svg";
import grit from "../../img/dashboard/grit.svg";





function Explore() {
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
            Budgeting <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link to="/learn" className="">
          <div className="d-flex flex-row">
            <img src={learn} alt="" className="img-fluid me-2 icons" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link>
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
      <div className="content pt-5 px-5 explore-section">
        <div className="row justify-content-center" style={{marginTop: "90px"}}>
          <div className="col-md-9">
            <h1><span style={{color: "#E8356D"}}>Saving</span> At Your Pace</h1>
            <h2 className="mt-3">Lorem ipsum gethem jnjfjntem mentem</h2>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-3 mb-3">
            <div className="bg-products p-5">
              <div className="d-flex flex-row">
                <img src={tar} alt="" className="img-fluid" />
                <div className="ms-3">
                  <h3>Target</h3>
                  <p>Fixed Savings lets you save and lock your funds until a later date. You get 10% P.A</p>
                  <span className="linker">Create Target Plan <i className="bi bi-chevron-right"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="bg-products p-5">
              <div className="d-flex flex-row">
                <img src={flex} alt="" className="img-fluid" />
                <div className="ms-3">
                  <h3>Flex</h3>
                  <p>Save, Withdraw, Transfer, Manage and organize your money for free at any time, anywhere.</p>
                  <span className="linker">Create Flex Plan <i className="bi bi-chevron-right"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="bg-products p-5">
              <div className="d-flex flex-row">
                <img src={vault} alt="" className="img-fluid" />
                <div className="ms-3">
                  <h3>Safe Lock</h3>
                  <p>Fixed Savings lets you save and lock your funds until a later date. You get 10% P.A</p>
                  <span className="linker">Create Safe Lock <i className="bi bi-chevron-right"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="second">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <h1>Get The <span style={{color: "#F59E0B"}}>Best Savings Style</span><br/>For You</h1>
                <h2 className="mt-3">Be part of ardilla’s saving circle board to improve your saving capacity<br/>you get 10.5% P.A</h2>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-md-3 mx-3">
                <div className="automated p-5">
                  <h4>Go Automated </h4>
                  <div className="text-center my-5 border-bottom">
                    <span>Recommended Amount</span>
                    <h6>NGN 0</h6>
                    <p>Every month for  months</p>
                  </div>
                  <div className="row values">
                    <div className="col-md-6">
                      <h5>Target</h5>
                      <h5>Interest Rate:</h5>
                      <h5>Badge:</h5>
                    </div>
                    <div className="col-md-6 text-end">
                      <h5>2,160,000</h5>
                      <h5>11%</h5>
                      <h5>Lieutenant</h5>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      className="btn btn-outline-primary px-5 py-3 ardilla-btn automated-btn mt-5"
                      style={{ width: "86%" }}
                    >
                      Go Automated
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mx-3">
                <div className="automated p-5 customed">
                  <h4>Go Custom </h4>
                  <div className="text-center my-5 border-bottom">
                    <span>Recommended Amount</span>
                    <h6>NGN 0</h6>
                    <p>Every month for 13months</p>
                  </div>
                  <div className="row values">
                    <div className="col-md-6">
                      <h5>Target</h5>
                      <h5>Interest Rate:</h5>
                      <h5>Badge:</h5>
                    </div>
                    <div className="col-md-6 text-end">
                      <h5>0</h5>
                      <h5>11%</h5>
                      <h5>-</h5>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      className="btn btn-outline-primary px-5 py-3 ardilla-btn custom-btn  mt-5"
                      to={"/flex-set-amount"}
                      style={{ width: "70%" }}
                    >
                      Go Custom
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="third bg-white">
            <div className="row justify-content-center ">
              <div className="col-md-5 text-center">
                <img src={dillacom} alt="" className="img-fluid" />
              </div>
              <div className="col-md-5 right-explore text-center">
                <h6>Dilla</h6>
                <h5 className="my-4">Request and send money to your friends and family </h5>
                <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn automated-btn">
                  Go to Dilla
                </Link>
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-md-5 right-explore text-center">
                <h6>A Multipurpose Stash</h6>
                <h5 className="my-4">SAN account for all transactions you need</h5>
                <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn automated-btn">
                  Go to SAN
                </Link>
              </div>
              <div className="col-md-5 text-center">
                <img src={stash} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="second no-margin">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <h1>Coming Soon</h1>
                <h2 className="mt-3">We have other features coming soon</h2>
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-md-3 mb-3">
                <div className="bg-soon p-5">
                  <img src={shield} alt="" className="img-fluid" />
                  <h5 className="mt-4">Insurance</h5>
                  <p>With dilla insurance is covered and<br/>ready at anytime </p>
                  <span className="linker">I want to be notified</span>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="bg-soon p-5">
                  <img src={invest} alt="" className="img-fluid" />
                  <h5 className="mt-4">Investment</h5>
                  <p>With dilla insurance is covered and<br/>ready at anytime </p>
                  <span className="linker">I want to be notified</span>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="bg-soon p-5">
                  <img src={budget} alt="" className="img-fluid" />
                  <h5 className="mt-4">Budgeting</h5>
                  <p>With dilla insurance is covered and<br/>ready at anytime </p>
                  <span className="linker">I want to be notified</span>
                </div>
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-md-3 mb-3">
                <div className="bg-soon p-5">
                  <img src={clan} alt="" className="img-fluid" />
                  <h5 className="mt-4">Clan</h5>
                  <p>With dilla insurance is covered and<br/>ready at anytime </p>
                  <span className="linker">I want to be notified</span>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="bg-soon p-5">
                  <img src={ym} alt="" className="img-fluid" />
                  <h5 className="mt-4">Young Money</h5>
                  <p>With dilla insurance is covered and<br/>ready at anytime </p>
                  <span className="linker">I want to be notified</span>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="bg-soon p-5">
                  <img src={grit} alt="" className="img-fluid" />
                  <h5 className="mt-4">Grit</h5>
                  <p>With dilla insurance is covered and<br/>ready at anytime </p>
                  <span className="linker">I want to be notified</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
