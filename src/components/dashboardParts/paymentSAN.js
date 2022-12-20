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
import big from "../../img/dashboard/big-graph.png";
import withdraw from "../../img/dashboard/w-icon.svg";
import transfer from "../../img/dashboard/received-icon.svg";
import dillatop from "../../img/dashboard/dil.svg";






function PaymentSAN() {
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
            Budgeting
          </div>
        </Link>
        <Link to="/learn" className="">
          <div className="d-flex flex-row">
            <img src={learn} alt="" className="img-fluid me-2 icons" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link to="/payment" className="active">
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
      <div className="content py-5 px-5 profile-main">
        <div className="row">
          <div className="col-md-5 dilla-right">
            <h5 className="mt-5">Amount Balance</h5>
            <h4 className="amt-left">NGN 500,000</h4>
            <div className="d-flex flex-row">
              <Link data-bs-toggle="modal" data-bs-target="#transfersan" type="button" to="#" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-4 me-3">Transfer</Link>
              <div className="modal flex-modal fade" id="transfersan" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog right-dialog">
                  <div className="modal-content right-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container initiate-modal p-5">
                        
                        <div className="row mx-3 mt-5">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                {/* <img src={dillalogo} alt="" className="img-fluid" /> */}
                              </div>
                              <div className="col-md-6 text-end">
                                <h4>₦500,000.00</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3 mt-4 title-card">
                          <div className="col text-center">
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
                        <div className="row mx-3 btn-bottom">
                          <Link data-bs-toggle="modal" data-bs-target="#dilla-send-choose" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6 mt-4">Top Up</Link>
            </div>
          </div>
          <div className="col-md-7">
            <img src={big} alt="" className="img-fluid mt-5" />
          </div>
        </div>
        <div className="row">
          <div className="col mt-5">
            <div className="san-transaction p-5">
              <div className="history-title">
                <h3>Transaction history</h3>
              </div>
              <div className="row justify-content-center mt-4 border-bottom py-3">
                <div className="col-md-2">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Transfer to SAN</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <h6>2347896413</h6>
                </div>
                <div className="col-md-2">
                  <h6>Rolat Olaide</h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>Tue, 22nd December, 2022</h6>
                </div>
                <div className="col-md-2">
                  <button type="button" to="#" class="btn btn-primary dilla-pending btn-sm mt-2 px-3" disabled>Pending</button>
                </div>
              </div>
              <div className="row justify-content-center mt-2 border-bottom py-3">
                <div className="col-md-2">
                  <div className="d-flex flex-row">
                    <img src={transfer} alt="" className="img-fluid me-3" />
                    <h6>Money Received</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <h6>2347896413</h6>
                </div>
                <div className="col-md-2">
                  <h6>Rolat Olaide</h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>Tue, 22nd December, 2022</h6>
                </div>
                <div className="col-md-2">
                  <button type="button" to="#" class="btn btn-primary dilla-success btn-sm mt-2 px-3" disabled>Successful</button>
                </div>
              </div>
              <div className="row justify-content-center mt-2 border-bottom py-3">
                <div className="col-md-2">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Transfer to SAN</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <h6>2347896413</h6>
                </div>
                <div className="col-md-2">
                  <h6>Rolat Olaide</h6>
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>Tue, 22nd December, 2022</h6>
                </div>
                <div className="col-md-2">
                  <button type="button" to="#" class="btn btn-primary dilla-failed btn-sm mt-2 px-3" disabled>Failed</button>
                </div>
              </div>
              <div className="row justify-content-center mt-2 border-bottom py-3">
                <div className="col-md-2">
                  <div className="d-flex flex-row">
                    <img src={dillatop} alt="" className="img-fluid me-3" />
                    <h6>Dilla Top up</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  {/* <h6>2347896413</h6> */}
                </div>
                <div className="col-md-2">
                  {/* <h6>Rolat Olaide</h6> */}
                </div>
                <div className="col-md-2">
                  <h6>₦4,000.00 </h6>
                </div>
                <div className="col-md-2">
                  <h6>Tue, 22nd December, 2022</h6>
                </div>
                <div className="col-md-2">
                  <button type="button" to="#" class="btn btn-primary dilla-success btn-sm mt-2 px-3" disabled>Successful</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentSAN;
