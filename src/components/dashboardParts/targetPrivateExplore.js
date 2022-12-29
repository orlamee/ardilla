import React from "react";
import { Link } from "react-router-dom";
import "../../css/target.css"
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
import withdraw from "../../img/dashboard/w-icon.svg";
import lieu from "../../img/dashboard/lieu.svg";
import colo from "../../img/dashboard/col.svg";
import top from "../../img/dashboard/top.png";
import visacard from "../../img/dashboard/visa-card.svg";
import done from "../../img/dashboard/done.svg";
import completed from "../../img/dashboard/top-completed.png";
import publictarget from "../../img/dashboard/public.png";
import members from "../../img/dashboard/members.svg";
import global from "../../img/dashboard/globe.png";
import join from "../../img/dashboard/join.svg";




function TargetPrivateExplore() {
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
      <div className="content py-5 px-5 t-private">
        <div className="row">
          <div className="d-flex flex-row privatelinks">
            <Link className="me-5">Flex</Link>
            <Link className="me-5 target-active">Target</Link>
            <Link className="me-5">Family and I</Link>
            <Link className="me-5">Safe lock</Link>
            <Link className="me-5">VIP</Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 t-savings">
            <div className="d-flex flex-row">
              <h2 className="me-4">Target Savings</h2>
              <Link className="mt-3">Learn More</Link>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <span>Total Balance</span>
                <h5>₦400,000.00 </h5>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3">Create new target</button>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="switches-container">
                  <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" />
                  <input type="radio" id="switchYearly" name="switchPlan" value="Yearly" checked="checked" />
                  <label htmlFor="switchMonthly">My Targets</label>
                  <label htmlFor="switchYearly">Explore Targets</label>
                  <div className="switch-wrapper">
                    <div className="switchies">
                      <div>My Targets</div>
                      <div>Explore Targets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <Link data-bs-toggle="modal" data-bs-target="#explore" type="button" to="#" className="col-md-6 mb-3">
                <img src={top} alt="" className="img-fluid" />
                <div className="bg-white bg-private p-4">
                  <div className="d-flex flex-row">
                    <h4>Dec Rave <span className="badge-private">ongoing</span></h4>
                    <p style={{marginLeft: "70px"}}>200 days left</p>
                  </div>
                  <div className="row mt-3 mb-4">
                    <div className="col-md-6">
                      <p>Members</p>
                      <h3>10+ <img src={members} alt="members" className="img-fluid" /></h3>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>Per Member</p>
                      <h3>₦100,000.00</h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link data-bs-toggle="modal" data-bs-target="#explore" type="button" to="#" className="col-md-6 mb-3">
                <img src={top} alt="" className="img-fluid" />
                <div className="bg-white bg-private p-4">
                  <div className="d-flex flex-row">
                    <h4>Island.. <span className="badge-private">ongoing</span></h4>
                    <p style={{marginLeft: "86px"}}>200 days left</p>
                  </div>
                  <div className="row mt-3 mb-4">
                    <div className="col-md-6">
                      <p>Members</p>
                      <h3>10+ <img src={members} alt="members" className="img-fluid" /></h3>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>Per Member</p>
                      <h3>₦100,000.00</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="row mt-5">
              <Link data-bs-toggle="modal" data-bs-target="#explore" type="button" to="#" className="col-md-6 mb-3">
                <img src={top} alt="" className="img-fluid" />
                <div className="bg-white bg-private p-4">
                  <div className="d-flex flex-row">
                    <h4>Dec Rave <span className="badge-private">ongoing</span></h4>
                    <p style={{marginLeft: "70px"}}>200 days left</p>
                  </div>
                  <div className="row mt-3 mb-4">
                    <div className="col-md-6">
                      <p>Members</p>
                      <h3>10+ <img src={members} alt="members" className="img-fluid" /></h3>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>Per Member</p>
                      <h3>₦100,000.00</h3>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="col-md-6 mb-3">
                <img src={top} alt="" className="img-fluid" />
                <div className="bg-white bg-private p-4">
                  <div className="d-flex flex-row">
                    <h4>Island.. <span className="badge-private">ongoing</span></h4>
                    <p style={{marginLeft: "86px"}}>200 days left</p>
                  </div>
                  <div className="row mt-3 mb-4">
                    <div className="col-md-6">
                      <p>Members</p>
                      <h3>10+ <img src={members} alt="members" className="img-fluid" /></h3>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>Per Member</p>
                      <h3>₦100,000.00</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 private-right">
            <div className="private-card p-4">
              <div className="history-title">
                <h3>Recent Activities</h3>
                <Link data-bs-toggle="modal" data-bs-target="#recentactivities" type="button" to="#" className="float-end">view all</Link>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-md-5">
                  <h5>Target </h5>
                </div>
                <div className="col-md-3">
                  <h5>Date</h5>
                </div>
                <div className="col-md-3">
                  <h5>Amount</h5>
                </div>
              </div>
              <div className="row justify-content-center mt-2 border-bottom py-3">
                <div className="col-md-5">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Transportation</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6>30 Days</h6>
                </div>
                <div className="col-md-3">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <div className="row justify-content-center mt-2 py-3">
                <div className="col-md-5">
                  <div className="d-flex flex-row">
                    <img src={withdraw} alt="" className="img-fluid me-3" />
                    <h6>Travel</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6>30 Days</h6>
                </div>
                <div className="col-md-3">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
            </div>
            <div className="private-card p-4 mt-3">
              <div className="history-title">
                <h3>Target Behaviour</h3>
                <div className="row justify-content-center mt-2 border-bottom py-2">
                  <div className="col-md-6">
                    <h6>Streak</h6>
                  </div>
                  <div className="col-md-6 text-end">
                    <h6 style={{color: "#EAB308"}}><i className="bi bi-shield-fill-x me-2"></i> ₦10,000.00 saved in 2months</h6>
                  </div>
                </div>
                <div className="row justify-content-center mt-2 border-bottom py-2">
                  <div className="col-md-6">
                    <h6>Missed deposit</h6>
                  </div>
                  <div className="col-md-6 text-end">
                    <h6 style={{color: "#E8356D"}}><i className="bi bi-shield-fill-x me-2"></i> ₦10,000.00 | 20 days</h6>
                  </div>
                </div>
                <div className="row mt-2 py-2">
                  <div className="col-md-6">
                    <h6 style={{color: "#8807F7"}}>Contact financial coach</h6>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="private-card p-4 mt-3">
              <div className="history-title">
                <h3>Badge progress</h3>
                <div className="row mt-4">
                  <div className="col-md-6 mb-3">
                    <div className="card-progress p-4">
                      <div className="d-flex flex-row">
                        <img src={lieu} alt="" className="img-fluid me-3" />
                        <div className="lieu mb-2">
                          <span>Badge</span>
                          <h5>Lieutenant</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card-progress p-4">
                      <div className="d-flex flex-row">
                        <img src={colo} alt="" className="img-fluid me-3" />
                        <div className="lieu">
                          <span className="text-muted">Badge</span>
                          <h5 className="text-muted">Colonel</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal for Explore */}
        <div className="modal flex-modal fade" id="explore" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="mx-3 row">
                    <div className="col text-center">
                      <h3 className="topuptarget">NGN 10,000</h3>
                    </div>
                  </div>
                  <div className="row target-details px-5 mt-3">
                    <div className="col-md-6">
                      <h6>Name</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>Island House Saving</p>
                    </div>
                    <hr/>
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Frequency</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦15000(Monthly)</p>
                    </div>
                    <hr/>
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Interest</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦15000 (11%/p.a)</p>
                    </div>
                    <hr/>
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Members</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>10+ <img src={members} alt="members" className="img-fluid" /></p>
                    </div>
                    <hr/>
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Per Member</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>₦100,000</p>
                    </div>
                    <hr/>
                  </div>
                  <div className="row target-details px-5">
                    <div className="col-md-6">
                      <h6>Days Left</h6>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>240 days</p>
                    </div>
                    <hr/>
                  </div>
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3>Recent Activities</h3>
                      <h4 className="float-end"><Link data-bs-toggle="modal" data-bs-target="#recentactivities" type="button" to="#">view all</Link></h4>
                    </div>
                    <div className="row justify-content-center mt-3">
                      <div className="col-md-7">
                        <h5>Target </h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Date</h5>
                      </div>
                      <div className="col-md-2">
                        <h5>Amount</h5>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 border-bottom py-2">
                      <div className="col-md-7">
                        <div className="d-flex flex-row">
                          <img src={join} alt="" className="img-fluid me-3" />
                          <h6>Joined Challenge</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>3 hrs ago</h6>
                      </div>
                      <div className="col-md-2">
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 py-2">
                      <div className="col-md-7">
                        <div className="d-flex flex-row">
                          <img src={join} alt="" className="img-fluid me-3" />
                          <h6>Travel</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>1 hr ago</h6>
                      </div>
                      <div className="col-md-2">
                      </div>
                    </div>
                  </div>
                  <div className="row px-5">
                    <div className="col">
                      <div className="form-check my-2">
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label" for="flexCheckDefault">
                          lorem ipsum in adrem eff antares encrypt infer inde 
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label" for="flexCheckDefault">
                          lorem ipsum in adrem eff antares encrypt infer inde 
                        </label>
                      </div>

                    </div>
                  </div>
                  <div className="px-5 mt-3">
                    <button data-bs-toggle="modal" data-bs-target="#joinchallenge" type="button" to="#" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3" style={{width: "100%"}}>Join Challenge</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Recent Activities */}
        <div className="modal flex-modal fade" id="recentactivities" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link data-bs-toggle="modal" data-bs-target="#explore" type="button" ><i className="bi bi-chevron-left"></i> Back</Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Recent Activities</h3>
                      <span className="sub-head">Most recent activities for this savings</span>
                    </div>
                    <div className="row justify-content-center mt-3">
                      <div className="col-md-7">
                        <h5>Target </h5>
                      </div>
                      <div className="col-md-3">
                        <h5>Date</h5>
                      </div>
                      <div className="col-md-2">
                        <h5>Amount</h5>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 border-bottom py-2">
                      <div className="col-md-7">
                        <div className="d-flex flex-row">
                          <img src={join} alt="" className="img-fluid me-3" />
                          <h6>Joined Challenge</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>3 hrs ago</h6>
                      </div>
                      <div className="col-md-2">
                        <h6>₦250.00 </h6>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 py-2">
                      <div className="col-md-7">
                        <div className="d-flex flex-row">
                          <img src={join} alt="" className="img-fluid me-3" />
                          <h6>Travel</h6>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h6>1 hr ago</h6>
                      </div>
                      <div className="col-md-2">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* Modal for Join Challenge */}
        <div className="modal flex-modal fade" id="joinchallenge" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link data-bs-toggle="modal" data-bs-target="#explore" type="button" ><i className="bi bi-chevron-left"></i> Back</Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Join Target</h3>
                      <span className="sub-head">This is a savings challenge to save ₦73,000 each by “31st of December 2023 (in 393 days)”. You earn 9% interest per annum, paid daily. If you break this target before the 31st of December 2023 (withdrawal date), you will lose all the interest accrued and bear the 1% payment gateway charge for processing your deposits into this target. </span>
                      <p className="sub-head mt-2">YOU COLLECT YOUR MONEY. No one has access to your deposits, but you alone.</p>
                    </div>
                    <div className="row">
                      <div className="col">
                        <form className="mt-4">
                          <div className="mb-3">
                            <input type="number" className="form-control target-form tar-form" id="" placeholder="Enter Referral code"/>
                          </div>
                          <div className="mb-3">
                            <input type="password" className="form-control target-form tar-form" id="" placeholder="Enter Password"/>
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">Edit Target description</label>
                            <input type="text" className="form-control target-form tar-form" placeholder="Save for rainy days" />
                          </div>
                          <div className="mb-3">
                            <select className="form-select p-select tar-select">
                              <option selected>Enter Source</option>
                              <option value="2">Dilla</option>
                              <option value="3">Savings Plan</option>
                              <option value="4">SAN</option>
                            </select>
                          </div>
                          <div>
                            <button className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3" style={{width: "100%"}}>Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Break */}
        <div className="modal flex-modal fade" id="break" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog right-dialog">
            <div className="modal-content right-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="row px-5">
                <div className="col">
                  <Link data-bs-toggle="modal" data-bs-target="#targetplan" type="button" ><i className="bi bi-chevron-left"></i> Back</Link>
                </div>
              </div>
              <div className="modal-body flex-modal-body">
                <div className="container initiate-modal px-4 py-2">
                  <div className="c-tar px-5 py-4">
                    <div className="history-title">
                      <h3 className="rec-act">Break</h3>
                      <span className="sub-head">Make preferred changes to your Target</span>
                    </div>
                    <div className="row">
                      <div className="col">
                        <form className="mt-4">
                          <div className="mb-3">
                            <label className="form-label label-target">Target name</label>
                            <input type="number" className="form-control target-form tar-form" id="" placeholder="Transportation"/>
                          </div>
                          <div className="row my-3">
                            <div className="col">
                              <p>Target amount</p>
                              <span className="big-amt">₦99,000.00</span>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">Enter reasons</label>
                            <select className="form-select p-select tar-select">
                              <option selected>Enter reasons</option>
                              <option value="2">Rents</option>
                              <option value="3">Education</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label label-target">Security questions</label>
                            <select className="form-select p-select tar-select">
                              <option selected>Enter reasons</option>
                              <option value="2">Rents</option>
                              <option value="3">Education</option>
                            </select>
                          </div>
                          <div className="">
                            <input type="password" className="form-control target-form tar-form" id="" placeholder="Enter Password"/>
                          </div>
                          <div className="form-check my-4">
                            <input className="form-check-input" type="checkbox"/>
                            <label className="form-check-label" for="flexCheckDefault">
                              lorem ipsum in adrem eff antares encrypt infer inde 
                            </label>
                          </div>
                          <div>
                            <button className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2 me-3" style={{width: "100%"}}>Break</button>
                          </div>
                        </form>
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

export default TargetPrivateExplore;
