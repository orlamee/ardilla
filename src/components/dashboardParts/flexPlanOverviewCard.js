/* eslint-disable jsx-a11y/anchor-is-valid */
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
import dillalogo from "../../img/dashboard/card-flex.svg";
import success from "../../img/dashboard/payment-success.svg";
import d from "../../img/dashboard/d.svg";
import c from "../../img/dashboard/c.svg";
import s from "../../img/dashboard/s.svg";
import blur from "../../img/dashboard/exterek.svg";


function FlexPlanOverviewCard() {
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
          <div className="d-flex flex-row" >
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
          <Link>
            <div className="d-flex flex-row">
              <img src={logout} alt="" className="img-fluid me-2 icons" />
              Log Out
            </div>
          </Link>
        </div>
      </div>
      <div className="content py-5 px-5 earning-section">
        <div className="row earning justify-content-center">
          <div className="col-md-5 overview">
            <h2>Overview</h2>
            <h4>Lorem ipsum dolor sit amet consectetur. Ipsum<br/>dolor consequat nulla proin sapien proin. </h4>
          </div>
          <div className="col-md-5 overview-left">
            <div className="row ">
              <div className="col-md-6 ">
                <h3 className="mt-5">Name</h3>
                <h3 className="mt-5">Amount</h3>
                <h3 className="mt-5">Start Date</h3>
                <h3 className="mt-5">Maturity Date</h3>
                <h3 className="mt-5">Interest Rate</h3>
                <h3 className="mt-5">Choose Payment Method</h3>
                
              </div>
              <div className="col-md-6 text-end">
                <p className="mt-5">Emergency</p>
                <p className="mt-5">₦50,000.00</p>
                <p className="mt-5">29-11-2022</p>
                <p className="mt-5">29-11-2022</p>
                <p className="mt-5 overview-perc">11%</p>
                <p className="mt-5">Card - <span style={{color: "#E8356D"}}>₦30,000.00</span><span className="dropdown"><Link className="ms-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#8807F7"}}>Switch <i className="bi bi-chevron-right"></i></Link>
                  <ul className="dropdown-menu">
                    <div className="row m-3">
                      <div className="col">
                        <Link to="/flex-overview" className="d-flex flex-row">
                          <img src={d} alt="" className="img-fluid me-2"/>
                          <p className="mt-3">Dilla</p>
                        </Link>
                        <Link to="/flex-overview/san" className="d-flex flex-row my-3">
                          <img src={s} alt="" className="img-fluid me-2"/>
                          <p className="mt-3">SAN</p>
                        </Link>
                        <Link to="/flex-overview/card" className="d-flex flex-row">
                          <img src={c} alt="" className="img-fluid me-2"/>
                          <p className="mt-3">Card</p>
                        </Link>
                      </div>
                    </div>
                  </ul></span>
                </p>
                <p className="mt-5"><Link data-bs-toggle="modal" data-bs-target="#topup" type="button" style={{color: "#8807F7"}}>Pay with Card</Link></p>
              </div>
            </div>
            <div className="modal flex-modal fade" id="topup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body flex-modal-body">
                    <div className="container">
                      <div className="row mx-3">
                        <div className="col">
                          <div className="row t-card p-4 bg-white">
                            <div className="col-md-6">
                              <img src={dillalogo} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-6 text-end">
                              <img src={blur} alt="" className="img-fluid" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-3 mt-4 title-card">
                        <div className="col">
                          <h3>Amount</h3>
                        </div>
                      </div>
                      <div className="row mx-3">
                        <div className="col text-center">
                          <div className="input-group cart-group my-3">
                            <span className="input-group-btn">
                              <button type="button" className="quantity-left-minus minus-bg btn btn-number me-3"  data-type="minus" data-field="">
                                <i className="bi bi-dash"></i>
                              </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue="30000" min="1" max="100"/>
                            <span className="input-group-btn">
                              <button type="button" className="quantity-right-plus btn minus-bg btn-number ms-3" data-type="plus" data-field="">
                                <i className="bi bi-plus"></i>
                              </button>
                            </span>
                          </div>
                          <span className="charges">₦250.00 (1.5% fee caped at ₦250) </span>
                        </div>
                      </div>
                      
                      <div className="row mx-3">
                        <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="modal flex-modal fade" id="banktransfer" data-backdrop="static">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body flex-modal-body">
                    <div className="container">
                      <div className="row mx-3">
                        <div className="col">
                          <div className="row t-card p-4 bg-white">
                            <div className="col-md-6">
                              <img src={dillalogo} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-6 text-end">
                              <h4>₦30,000.00</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-3 mt-5 title-card">
                        <div className="col text-center">
                          <span className="transfer-amt">Pay Now</span>
                        </div>
                      </div>
                      <div className="row mx-3 detail-transfer">
                        <div className="col-md-6">
                          <p className="mt-4">Amount</p>
                          <p className="mt-4">Account Number</p>
                          <p className="mt-4">Bank</p>
                          <p className="mt-4">Name</p>
                          <p className="mt-4">Narration</p>
                        </div>
                        <div className="col-md-6 text-end">
                          <h5 className="mt-4">NGN 20,250</h5>
                          <h5 className="mt-4">2004434887 <i className="ms-2 bi bi-files"></i></h5>
                          <h5 className="mt-4">Wema Bank</h5>
                          <h5 className="mt-4">Oshodi Mathew</h5>
                          <h5 className="mt-4">Falcon</h5>
                        </div>
                      </div>
                      <div className="row mx-3">
                        <div className="d-flex flex-row">
                          <Link type="button" to="#" data-bs-toggle="modal" data-bs-target="#success" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5 me-3" style={{width: "100%"}}>I’ve Paid</Link>
                          <Link type="button" to="#" data-bs-toggle="modal" data-bs-target="#ussd" className="btn btn-outline-primary px-5 py-3 ardilla-btn-outline fs-6 mt-5" style={{width: "100%"}}>USSD</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal flex-modal fade" id="success" data-backdrop="static">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body flex-modal-body">
                    <div className="container">
                      <div className="row mx-3 justify-content-center">
                        <div className="col-md-8 text-center payment-success">
                          <img src={success} alt="" className="img-fluid" />
                          <h2 className="my-5">Payment Received</h2>
                          <p className="mb-5">Lorem ipsum dolor sit amet consectetur. Sapien vel netus eget orci semper parturient. Ut nec pellentesque consequat vitae massa nisi.</p>
                          <a href="" >Back to Overview</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal flex-modal fade" id="ussd" data-backdrop="static">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body flex-modal-body">
                    <div className="container">
                      <div className="row mx-3">
                        <div className="col">
                          <div className="row t-card p-4 bg-white">
                            <div className="col-md-6">
                              <img src={dillalogo} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-6 text-end">
                              <h4>₦30,000.00</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-3 mt-5 title-card">
                        <div className="col text-center">
                          <span className="transfer-amt">Pay Now</span>
                        </div>
                      </div>
                      <div className="row mx-3 detail-transfer">
                        <div className="col-md-6">
                          <p className="mt-4">Amount</p>
                          <p className="mt-4">Account Number</p>
                          <p className="mt-4">Bank</p>
                          <p className="mt-4">Name</p>
                          <p className="mt-4">USSD</p>
                        </div>
                        <div className="col-md-6 text-end">
                          <h5 className="mt-4">NGN 20,250</h5>
                          <h5 className="mt-4">2004434887 <i className="ms-2 bi bi-files"></i></h5>
                          <h5 className="mt-4">Wema Bank</h5>
                          <h5 className="mt-4">Oshodi Mathew</h5>
                          <h5 className="mt-4">*949*2004434887*20250#</h5>
                        </div>
                      </div>
                      <div className="row mx-3">
                        <div className="d-flex flex-row">
                          <Link type="button" to="#" data-bs-toggle="modal" data-bs-target="#success" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5 me-3" style={{width: "100%"}}>I’ve Paid</Link>
                          <Link type="button" to="#" data-bs-toggle="modal" data-bs-target="#banktransfer" className="btn btn-outline-primary px-5 py-3 ardilla-btn-outline fs-6 mt-5" style={{width: "100%"}}>Bank Transfer</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-check mt-5 ">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Four withdrawal limit only lorem ipsum monteren renemdem
              </label>
            </div>
            <div><Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-4" to="" style={{width: "100%"}}>Create Plan</Link></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default FlexPlanOverviewCard;
 