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
import sanlogo from "../../img/dashboard/san-logo.svg";
import dillalogo from "../../img/dashboard/dilla-new.png";
import successful from "../../img/dashboard/cadet-success.svg";
import sent from "../../img/dashboard/checked.svg";
import mysan from "../../img/dashboard/mysan.svg";
import dillauser from "../../img/dashboard/dilla-user.svg";
import savingsplan from "../../img/dashboard/savingsplan.svg";
import cadet from "../../img/dashboard/caddet.svg";







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
              {/* Transfer Payment to Dilla */}
              <div className="modal flex-modal fade" id="transfersan" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog right-dialog">
                  <div className="modal-content right-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container initiate-modal p-4">
                        <div className="mx-3 row">
                          <div className="col modal-title">
                            <h3>Transfer</h3>
                          </div>
                        </div>
                        <div className="mx-3 row">
                          <div className="col">
                            <div id="" className="row">
                              <ul className="nav nav-pills dilla-link">
                                <li className="ms-3 me-4 transf-pills active">
                                  <a  href="#1a" data-toggle="tab">Dilla</a>
                                </li>
                                <li className="me-4 transf-pills">
                                  <a href="#2a" data-toggle="tab">Savings</a>
                                </li>
                                <li className="me-4 transf-pills">
                                  <a href="#3a" data-toggle="tab">Investment</a>
                                </li>
                                <li className="me-4 transf-pills">
                                  <a href="#4a" data-toggle="tab">Insurance</a>
                                </li>
                                <li className="me-4 transf-pills">
                                  <a href="#5a" data-toggle="tab">SAN</a>
                                </li>
                                <li className="me-4 transf-pills">
                                  <a href="#6a" data-toggle="tab">Banks</a>
                                </li>
                              </ul>
                              <div className="tab-content clearfix">
                                <div className="tab-pane active" id="1a">
                                  <div className="row mx-3 mt-5">
                                    <div className="col">
                                      <div className="row t-card p-4 bg-white">
                                        <div className="col-md-6">
                                          <img src={sanlogo} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6 text-end mt-2">
                                          <h4>₦500,000.00</h4>
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
                                  <div className="row mx-3 btn-bottom">
                                    <Link data-bs-toggle="modal" data-bs-target="#transf-dilla" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                                  </div>
                                </div>
                                <div className="tab-pane quiz-pane" id="2a">
                                  <div className="row mx-3 mt-5">
                                    <div className="col">
                                      <div className="row t-card p-4 bg-white">
                                        <div className="col-md-6">
                                          <img src={sanlogo} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6 text-end mt-2">
                                          <h4>₦500,000.00</h4>
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
                                  <div className="row mx-3 btn-bottom">
                                    <Link data-bs-toggle="modal" data-bs-target="#savings-plan" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                                  </div>
                                </div>
                                <div className="tab-pane quiz-pane" id="6a">
                                  <div className="row mx-3 mt-5">
                                    <div className="col">
                                      <div className="row t-card p-4 bg-white">
                                        <div className="col-md-6">
                                          <img src={sanlogo} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6 text-end mt-2">
                                          <h4>₦50,000.00</h4>
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
                                  <div className="row mx-3 btn-bottom">
                                    <Link data-bs-toggle="modal" data-bs-target="#bank" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Dilla -Step 2 */}
              <div className="modal flex-modal fade" id="transf-dilla" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog right-dialog">
                  <div className="modal-content right-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="row mx-3">
                      <Link data-bs-toggle="modal" data-bs-target="#transfersan" type="button"><i className="bi bi-chevron-left"></i> Back</Link>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container initiate-modal p-5">
                        <div className="mx-3 row">
                          <div className="col modal-title">
                            <h3>Transfer</h3>
                          </div>
                        </div>
                        <div className="row mx-3 mt-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img src={sanlogo} alt="" className="img-fluid" />
                              </div>
                              <div className="col-md-6 text-end mt-2">
                                <h4>₦450,000.00</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col text-center">
                            <i className="bi bi-arrow-down fs-4" style={{color: "#3C0071"}}></i>
                          </div>
                        </div>
                        <div className="row mx-3 mt-3">
                          <div className="col">
                            <div className="row t-card p-4 bg-white">
                              <div className="col-md-6">
                                <img src={dillalogo} alt="" className="img-fluid" />
                              </div>
                              <div className="col-md-6 text-end mt-2">
                                <h4>₦50,000.00</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-3">
                          <div className="mt-3">
                            <h3>Pin</h3>
                            <form>
                              <div className="mb-3 mt-1">
                                <input type="number" className="form-control target-form" placeholder="Enter Pin" required/>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="row mx-3 detail-transfer mt-2">
                          <div className="col-md-6">
                            <p className="mt-4">SAN Name</p>
                            <p className="mt-4">SAN Account</p>
                            <p className="mt-4">SAN Number</p>
                          </div>
                          <div className="col-md-6 text-end">
                            <h5 className="mt-4">Aiyeola Mathew</h5>
                            <h5 className="mt-4">Wema Bank</h5>
                            <h5 className="mt-4">2003849232</h5>
                          </div>
                        </div>
                        <div className="row mx-3">
                          <Link data-bs-toggle="modal" data-bs-target="#successdilla" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Success Modal -Dilla */}
              <div className="modal flex-modal fade" id="successdilla" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog right-dialog">
                  <div className="modal-content right-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container initiate-modal p-5">
                        <div className="row justify-content-center">
                          <div className="col-md-6 text-center ">
                            <img src={successful} alt="" className="img-fluid" />
                            <h2 className="mt-4 mb-2">{"<"}StarBoy{"/>"}</h2>
                            <p className="mb-3">0708 7788 7890</p>
                          </div>
                        </div>
                        <div className="row my-3 sent-details">
                          <div className="col text-center">
                            <img src={sent} alt="" className="img-fluid" />
                            <h3 className="my-3">Money Transfered</h3>
                            {/* <p>You have successfully sent <span style={{color: "#3D0072"}}>NGN50000 to <br/>your Dilla</span></p> */}
                          </div>
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
        {/* Savings Plans */}
        <div className="modal flex-modal fade" id="savings-plan" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="row mx-3">
                <Link data-bs-toggle="modal" data-bs-target="#transfersan" type="button"><i className="bi bi-chevron-left"></i> Back</Link>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal p-5">
                  <div className="mx-3 row">
                    <div className="col modal-title">
                      <h3>Transfer</h3>
                    </div>
                  </div>
                  <div className="row mx-3 mt-3">
                    <div className="col">
                      <div className="row t-card p-4 bg-white">
                        <div className="col-md-6">
                          <img src={sanlogo} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6 text-end mt-2">
                          <h4>₦450,000.00</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mx-3 mt-4 title-card">
                    <div className="col">
                      <h3>Choose a payment destination</h3>
                    </div>
                  </div>
                  <div className="row mx-3 mysan mt-4">
                    <div className="dropdown border-bottom pb-3 mb-3">
                      <Link className="dropdown-toggle header-toggle" role="button" data-bs-toggle="dropdown">
                        <div className="d-flex flex-row">
                          <img src={mysan} alt="" className="img-fluid" />
                          <div className="ms-2 mt-2">
                            <h2>Target</h2>
                          </div>
                        </div>
                        <i className="bi bi-chevron-right float-end" style={{marginTop: "-29px"}}></i>
                      </Link>
                      <ul className="dropdown-menu">
                        <div className="row m-3">
                          <div className="col">
                            <Link to="/" className="settings" data-bs-toggle="modal" data-bs-target="#transportation" type="button">
                              <p className="">Transportation</p>
                            </Link>                      
                            <Link to="/" className="settings">
                              <p className="">Housing</p>
                            </Link>
                            <Link to="/" className="settings">
                              <p className="">Marriage</p>
                            </Link>
                            
                          </div>
                        </div>
                      </ul>
                    </div>
                    
                    <Link className="border-bottom pb-3 mb-3" data-bs-toggle="modal" data-bs-target="#dilla-send-user" type="button">
                      <div className="d-flex flex-row">
                        <img src={dillauser} alt="" className="img-fluid" />
                        <div className="ms-2 mt-2">
                          <h2>Flex</h2>
                        </div>
                      </div>
                      <i className="bi bi-chevron-right float-end" style={{marginTop: "-29px"}}></i>
                    </Link>
                    <Link className="border-bottom pb-3 mb-3" data-bs-toggle="modal" data-bs-target="#dilla-send-saving-plan" type="button">
                      <div className="d-flex flex-row">
                        <img src={savingsplan} alt="" className="img-fluid" />
                        <div className="ms-2 mt-2">
                          <h2>Safe Lock</h2>
                        </div>
                      </div>
                      <i className="bi bi-chevron-right float-end" style={{marginTop: "-29px"}}></i>
                    </Link>
                  </div>
                  <div className="row mx-3 btn-bottom">
                    <Link data-bs-toggle="modal" data-bs-target="#" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Transportation */}
        <div className="modal flex-modal fade" id="transportation" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal p-5">
                  <div className="row justify-content-center">
                    <div className="col-md-6 text-center ">
                      <img src={cadet} alt="" className="img-fluid" />
                      <h2 className="mt-3">{"<"}StarBoy{"/>"}</h2>
                    </div>
                  </div>
                  <div className="row mx-3 mt-3">
                    <div className="col">
                      <div className="row t-card p-4 bg-white">
                        <div className="col-md-6">
                          <img src={sanlogo} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6 text-end mt-2">
                          <h4>₦450,000.00</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-center">
                      <i className="bi bi-arrow-down fs-4" style={{color: "#3C0071"}}></i>
                    </div>
                  </div>
                  <div className="row mx-3 mt-3">
                    <div className="col">
                      <div className="row t-card p-4 bg-white">
                        <div className="col-md-6">
                          <p>Transportation</p>
                          {/* <img src={sanlogo} alt="" className="img-fluid" /> */}
                        </div>
                        <div className="col-md-6 text-end">
                          <h4>₦50,000.00</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mx-3">
                    <div className="mt-3">
                      <h3>Pin</h3>
                      <form>
                        <div className="mb-3 mt-1">
                          <input type="number" className="form-control target-form" placeholder="Enter Pin" required/>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row mx-3">
                    <Link data-bs-toggle="modal" data-bs-target="#successdilla" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Transaction */}
        <div className="modal flex-modal fade" id="bank" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="row mx-3">
                <Link data-bs-toggle="modal" data-bs-target="#transfersan" type="button"><i className="bi bi-chevron-left"></i> Back</Link>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal p-5">
                  <div className="mx-3 row">
                    <div className="col modal-title">
                      <h3>Transfer</h3>
                    </div>
                  </div>
                  <div className="row mx-3 mt-3">
                    <div className="col">
                      <div className="row t-card p-4 bg-white">
                        <div className="col-md-6">
                          <img src={sanlogo} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6 text-end mt-2">
                          <h4>₦450,000.00</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row my-bank mt-5 p-3">
                    <div className="col">
                      <span>My Bank</span>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col text-center">
                      <Link className="addbank" data-bs-toggle="modal" data-bs-target="#addbank" type="button"><i className="bi bi-plus ms-2"></i> Add Bank</Link>
                    </div>
                  </div>
                  <div className="row my-bank mt-5 p-3">
                    <div className="col">
                      <span>Other Banks</span>
                    </div>
                  </div>
                  <form className="mt-4 row mx-4">
                    <div classname="">
                      <label className="form-label">Account Number</label>
                      <input type="text" className="form-control p-form" placeholder="Account Number"/>
                    </div>
                    <div style={{marginTop: "30px"}}>
                      <label className="form-label">Bank</label>
                      <select className="form-select p-select" aria-label="Default select example">
                        <option selected>Bank</option>
                        <option value="2">GT Bank</option>
                        <option value="3">UBA</option>
                        <option value="3">Stanbic</option>
                      </select>
                    </div>
                    <div className="row mx-3">
                      <Link data-bs-toggle="modal" data-bs-target="#proceed-payment" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add bank */}
        <div className="modal flex-modal fade" id="addbank" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="row mx-3">
                <Link data-bs-toggle="modal" data-bs-target="#transfersan" type="button"><i className="bi bi-chevron-left"></i> Back</Link>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal p-5">
                  <div className="mx-3 row">
                    <div className="col modal-title">
                      <h3>Add Bank</h3>
                    </div>
                  </div>
                  <form className="mt-5 row mx-4">
                    <div classname="">
                      <label className="form-label">Account Number</label>
                      <input type="text" className="form-control p-form" placeholder="Account Number"/>
                    </div>
                    <div style={{marginTop: "40px"}}>
                      <label className="form-label">Bank</label>
                      <select className="form-select p-select" aria-label="Default select example">
                        <option selected>Bank</option>
                        <option value="2">GT Bank</option>
                        <option value="3">UBA</option>
                        <option value="3">Stanbic</option>
                      </select>
                    </div>
                    <div className="row mx-3 btn-bottom">
                      <Link data-bs-toggle="modal" data-bs-target="#addbank-successful" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Add Bank</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add Bank Successful */}
        <div className="modal flex-modal fade" id="addbank-successful" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="row mx-3">
                <Link data-bs-toggle="modal" data-bs-target="#transfersan" type="button"><i className="bi bi-chevron-left"></i> Back</Link>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal p-5">
                  <div className="mx-3 row">
                    <div className="col modal-title">
                      <h3>Transfer</h3>
                    </div>
                  </div>
                  <div className="row mx-3 mt-3">
                    <div className="col">
                      <div className="row t-card p-4 bg-white">
                        <div className="col-md-6">
                          <img src={sanlogo} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6 text-end mt-2">
                          <h4>₦450,000.00</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row my-bank mt-5 p-3">
                    <div className="col">
                      <span>My Bank</span>
                    </div>
                  </div>
                  <div className="row mt-4 acc">
                    <div className="col-md-4">
                      <h5>2435678643</h5>
                      <span>Rolat - Olaide</span>
                    </div>
                    <div className="col-md-4 text-center">
                      <h5>GT Bank</h5>
                    </div>
                    <div className="col-md-4 text-end">
                      <h6>Send Money</h6>
                    </div>
                  </div>
                  <div className="row my-bank mt-5 p-3">
                    <div className="col">
                      <span>Other Banks</span>
                    </div>
                  </div>
                  <form className="mt-4 row mx-4">
                    <div classname="">
                      <label className="form-label">Account Number</label>
                      <input type="text" className="form-control p-form" placeholder="Account Number"/>
                    </div>
                    <div style={{marginTop: "30px"}}>
                      <label className="form-label">Bank</label>
                      <select className="form-select p-select" aria-label="Default select example">
                        <option selected>Bank</option>
                        <option value="2">GT Bank</option>
                        <option value="3">UBA</option>
                        <option value="3">Stanbic</option>
                      </select>
                    </div>
                    <div className="row mx-3">
                      <Link data-bs-toggle="modal" data-bs-target="#proceed-payment" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Send Money</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add Bank Process Payment */}
        <div className="modal flex-modal fade" id="proceed-payment" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal p-5">
                  <div className="row justify-content-center">
                    <div className="col-md-6 text-center ">
                      <img src={cadet} alt="" className="img-fluid" />
                      <h2 className="mt-3">{"<"}StarBoy{"/>"}</h2>
                    </div>
                  </div>
                  <div className="row mx-3 mt-3">
                    <div className="col">
                      <div className="row t-card p-4 bg-white">
                        <div className="col-md-6">
                          <img src={sanlogo} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6 text-end mt-2">
                          <h4>₦450,000.00</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-center">
                      <i className="bi bi-arrow-down fs-4" style={{color: "#3C0071"}}></i>
                    </div>
                  </div>
                  <div className="row mx-3 mt-3">
                    <div className="col">
                      <div className="row t-card p-4 bg-white">
                        <div className="col-md-6">
                          <span className="fone-number">2435678643</span>
                          <p>Rolat - Olaide</p>
                          {/* <img src={sanlogo} alt="" className="img-fluid" /> */}
                        </div>
                        <div className="col-md-6 text-end">
                          <h4>₦50,000.00</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mx-3">
                    <div className="mt-3">
                      <h3>Pin</h3>
                      <form>
                        <div className="mb-3 mt-1">
                          <input type="number" className="form-control target-form" placeholder="Enter Pin" required/>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row mx-3">
                    <Link data-bs-toggle="modal" data-bs-target="#successdilla" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
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

export default PaymentSAN;
