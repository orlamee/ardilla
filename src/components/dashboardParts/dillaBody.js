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
import rec from "../../img/dashboard/rec.svg";
import use from "../../img/dashboard/userr.svg";
import cadet from "../../img/dashboard/caddet.svg";
import dep from "../../img/dashboard/dep.svg";



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
                <Link className="searchit" to="#"><img src={search} alt="" className="img-fluid" width={150} /></Link>
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
            <div className="row mt-4 db">
              <div className="search-box">
                <input type="text" class="search-input" placeholder="Search"/>
                <button className="search-button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 px-5">
            <div className="dilla-transaction p-5">
              <div className="history-title">
                <h3>Transaction history</h3>
                <h4 className="float-end">view all</h4>
              </div>
              <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                  <h5>Date </h5>
                </div>
                <div className="col-md-3">
                  <h5>Description</h5>
                </div>
                <div className="col-md-3">
                  <h5>Amount</h5>
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
            <div className="row">
              <div className="col p-5">
                <div className="requests">
                  <h3>All Requests</h3>
                  <div className="row mt-4">
                    <div className="col">
                      <div id="exTab1" className="row">	
                        <ul  className="nav nav-pills dilla-link">
                          <li className="active ms-3 me-5">
                            <a  href="#1a" data-toggle="tab">Pending</a>
                          </li>
                          <li className="me-5">
                            <a href="#2a" data-toggle="tab">Received</a>
                          </li>
                          <li className="me-5">
                            <a href="#3a" data-toggle="tab">Complete</a>
                          </li>
                          <li className="me-5">
                            <a href="#4a" data-toggle="tab">Rejected</a>
                          </li>
                        </ul>
                        <div className="tab-content clearfix">
                          <div className="tab-pane active" id="1a">
                            <div className="row mt-3 pending">
                              <div className="col-md-3">
                                <div className="d-flex flex-row">
                                  <img src={rec} alt="" className="img-fluid" />
                                  <div className="ms-2 pending mt-2">
                                    <p>Money Request </p>
                                    <h5>{"<"}Ola{"/>"}</h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">4 hrs ago</h5>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">₦4,000.00 </h5>
                              </div>
                              <div className="col-md-2">
                                <button data-bs-toggle="modal" data-bs-target="#intiate" type="button" class="btn btn-primary dilla-btn btn-sm mt-2 px-3">Initiate</button>
                              </div>
                              {/* intiate Modal */}
                              <div className="modal flex-modal fade" id="intiate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            <h2 className="mt-4 mb-2">{"<"}StarBoy{"/>"}</h2>
                                            <p className="mb-5">0708 7788 7890</p>
                                          </div>
                                          <hr/>
                                        </div>
                                        <div className="row my-3">
                                          <div className="col">
                                            <h3>Request history</h3>
                                          </div>
                                        </div>
                                        <div className="row border-bottom pb-4">
                                          <div className="d-flex flex-row">
                                            <img src={withdraw} alt="" className="img-fluid me-3" />
                                            <div className="hist">
                                              <h2>You sent NGN 2000 to  {"<"}StarBoy{"/>"} </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row border-bottom py-4">
                                          <div className="d-flex flex-row">
                                            <img src={dep} alt="" className="img-fluid me-3" />
                                            <div className="hist">
                                              <h2>You sent NGN 2000 to  {"<"}StarBoy{"/>"} </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-5">
                                            <Link className="btn btn-outline-primary px-5 py-3 d-btn fs-6" to="" style={{width: "100%"}}>{"<"}StarBoy{"/>"} sent you a request </Link>
                                          </div>
                                        </div>
                                        <div className="row text-center">
                                          <div className="btn-down">
                                            <Link type="button" to="#" data-bs-toggle="modal" data-bs-target="#initiate-continue" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6" style={{width: "60%"}}>Initiate</Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* intiate 2 */}
                              <div className="modal flex-modal fade" id="initiate-continue" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            <h2 className="mt-4 mb-2">{"<"}StarBoy{"/>"}</h2>
                                            <p className="mb-5">0708 7788 7890</p>
                                          </div>
                                          <hr/>
                                        </div>
                                        <div className="row my-3">
                                          <div className="col">
                                            <h3>Request history</h3>
                                          </div>
                                        </div>
                                        <div className="row border-bottom pb-4">
                                          <div className="d-flex flex-row">
                                            <img src={withdraw} alt="" className="img-fluid me-3" />
                                            <div className="hist">
                                              <h2>You sent NGN 2000 to  {"<"}StarBoy{"/>"} </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row border-bottom py-4">
                                          <div className="d-flex flex-row">
                                            <img src={dep} alt="" className="img-fluid me-3" />
                                            <div className="hist">
                                              <h2>You sent NGN 2000 to  {"<"}StarBoy{"/>"} </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-5">
                                            <h3>Request Amount</h3>
                                            <form>
                                              <div className="mb-3 mt-1">
                                                <input type="number" className="form-control target-form" defaultValue={4000} required/>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        <div className="row text-center">
                                          <div className="btn-down">
                                            <Link type="button" to="#" data-bs-toggle="modal" data-bs-target="#send-money" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6" style={{width: "60%"}}>Continue</Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* initiate 3 */}
                              <div className="modal flex-modal fade" id="send-money" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            <h2 className="mt-4 mb-2">{"<"}StarBoy{"/>"}</h2>
                                            <p className="mb-5">0708 7788 7890</p>
                                          </div>
                                          <hr/>
                                        </div>
                                        <div className="row my-3">
                                          <div className="col">
                                            <h3>Request history</h3>
                                          </div>
                                        </div>
                                        <div className="row border-bottom pb-4">
                                          <div className="d-flex flex-row">
                                            <img src={withdraw} alt="" className="img-fluid me-3" />
                                            <div className="hist">
                                              <h2>You sent NGN 2000 to  {"<"}StarBoy{"/>"} </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row border-bottom py-4">
                                          <div className="d-flex flex-row">
                                            <img src={dep} alt="" className="img-fluid me-3" />
                                            <div className="hist">
                                              <h2>You sent NGN 2000 to  {"<"}StarBoy{"/>"} </h2>
                                              <h5>20th of November, 2022</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-3">
                                            <h3>Set OTS Question</h3>
                                            <form>
                                              <div className="mb-3 mt-1">
                                                <input type="text" className="form-control target-form" placeholder="E.g What is your name " required/>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-2">
                                            <h3>Set OTS Answer</h3>
                                            <form>
                                              <div className="mb-3 mt-1">
                                                <input type="text" className="form-control target-form" placeholder="Chukwukwa Adekunle" required/>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="mt-2">
                                            <h3>Pin</h3>
                                            <form>
                                              <div className="mb-3 mt-1">
                                                <input type="number" className="form-control target-form" placeholder="Enter Pin" required/>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        <div className="row text-center">
                                          <div className="">
                                            <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6" to="" style={{width: "60%"}}>Continue</Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <button type="button" class="btn btn-primary dilla-btn-outline btn-sm mt-2 px-3">Decline</button>
                              </div>
                            </div>
                            <div className="row mt-3 pending">
                              <div className="col-md-3">
                                <div className="d-flex flex-row">
                                  <img src={rec} alt="" className="img-fluid" />
                                  <div className="ms-2 pending mt-2">
                                    <p>Money Request </p>
                                    <h5>{"<"}Ola{"/>"}</h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">4 hrs ago</h5>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">₦4,000.00 </h5>
                              </div>
                              <div className="col-md-2">
                                <button type="button" class="btn btn-primary dilla-btn btn-sm mt-2 px-3">Initiate</button>
                              </div>
                              
                              <div className="col-md-2">
                                <button type="button" class="btn btn-primary dilla-btn-outline btn-sm mt-2 px-3">Decline</button>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="2a">
                            <div className="row mt-3 pending">
                              <div className="col-md-3">
                                <div className="d-flex flex-row">
                                  <img src={use} alt="" className="img-fluid" />
                                  <div className="ms-2 pending mt-2">
                                    <p>Money Request </p>
                                    <h5>{"<"}Nike{"/>"}</h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">4 hrs ago</h5>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">₦4,000.00 </h5>
                              </div>
                              <div className="col-md-2">
                                <button type="button" class="btn btn-primary dilla-btn btn-sm px-3 mt-2">Initiate</button>
                              </div>
                              <div className="col-md-2">
                                <button type="button" class="btn btn-primary dilla-btn-outline btn-sm px-3 mt-2">Decline</button>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="3a">
                            <div className="row mt-3 pending">
                              <div className="col-md-3">
                                <div className="d-flex flex-row">
                                  <img src={use} alt="" className="img-fluid" />
                                  <div className="ms-2 pending mt-2">
                                    <p>Money Request </p>
                                    <h5>{"<"}Nike{"/>"}</h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">4 hrs ago</h5>
                              </div>
                              <div className="col-md-2">
                                <h5 className="mt-3">₦4,000.00 </h5>
                              </div>
                              <div className="col-md-2">
                                <button type="button" class="btn btn-primary dilla-btn btn-sm px-3 mt-2">Initiate</button>
                              </div>
                              <div className="col-md-2">
                                <button type="button" class="btn btn-primary dilla-btn-outline btn-sm px-3 mt-2">Decline</button>
                              </div>
                            </div>
                          </div>
                            <div className="tab-pane" id="4a">
                              <div className="row mt-3 pending">
                                <div className="col-md-3">
                                  <div className="d-flex flex-row">
                                    <img src={use} alt="" className="img-fluid" />
                                    <div className="ms-2 pending mt-2">
                                      <p>Money Request </p>
                                      <h5>{"<"}Nike{"/>"}</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <h5 className="mt-3">4 hrs ago</h5>
                                </div>
                                <div className="col-md-2">
                                  <h5 className="mt-3">₦4,000.00 </h5>
                                </div>
                                <div className="col-md-2">
                                  <button type="button" class="btn btn-primary dilla-btn btn-sm px-3 mt-2">Initiate</button>
                                </div>
                                <div className="col-md-2">
                                  <button type="button" class="btn btn-primary dilla-btn-outline btn-sm px-3 mt-2">Decline</button>
                                </div>
                              </div>
                              <div className="row mt-3 pending">
                                <div className="col-md-3">
                                  <div className="d-flex flex-row">
                                    <img src={use} alt="" className="img-fluid" />
                                    <div className="ms-2 pending mt-2">
                                      <p>Money Request </p>
                                      <h5>{"<"}Nike{"/>"}</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <h5 className="mt-3">4 hrs ago</h5>
                                </div>
                                <div className="col-md-2">
                                  <h5 className="mt-3">₦4,000.00 </h5>
                                </div>
                                <div className="col-md-2">
                                  <button type="button" class="btn btn-primary dilla-btn btn-sm px-3 mt-2">Initiate</button>
                                </div>
                                <div className="col-md-2">
                                  <button type="button" class="btn btn-primary dilla-btn-outline btn-sm px-3 mt-2">Decline</button>
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
        </div>
      </div>

    </section>
  );
}

export default DillaBody;
