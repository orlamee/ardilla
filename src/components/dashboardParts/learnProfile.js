import React from "react";
import { Link } from "react-router-dom";
import "../../css/learn.css"
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
import profile from "../../img/dashboard/profile.svg";
import badgeone from "../../img/dashboard/badg-1.svg";
import badgetwo from "../../img/dashboard/orange.svg";
import badgethree from "../../img/dashboard/bdg3.svg";
import blue from "../../img/dashboard/bluerec.svg";
import streak from "../../img/dashboard/Streak.svg";
import becca from "../../img/dashboard/leader.svg";
import rank from "../../img/dashboard/Rank.png";



function LearnProfile() {
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
            Explore
          </div>
        </Link>
        <Link to="/learn" className="active">
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
      <div className="content py-5 px-5 learn-main">
        <div className="row">
          <span className="learn-back"><i className="bi bi-chevron-left me-3"></i>Back</span>
        </div>
        <div className="row mt-5">
          <h2>Educate yourself</h2>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="d-flex flex-row">
              <Link to="/learn" type="button" className="btn me-3 btn-learn">Videos</Link>
              <Link to="/learn/article" type="button" className="btn me-3 btn-learn">Articles</Link>
              <Link to="/learn/quiz" type="button" className="btn me-3 btn-learn">Quiz</Link>
              <Link to="/learn/profile" type="button" className="btn me-3 btn-learn">Profile</Link>
            </div>
          </div>
          <div className="col-md-8">
            <div className="float-end">
              <div className="d-flex flex-row">
                <Link to="/learn" type="button" className="btn me-3 btn-right">Share progress link</Link>
                <Link to="/learn/article" type="button" className="btn me-3 btn-right">Learn</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="mt-5 row">
              <div className="col-md-6">
                <div className="d-flex flex-row profile-avi">
                  <img src={profile} alt="" className="img-fluid" />
                  <h3 className="mt-4 ms-4">Annabel Omah</h3>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <div id="" className="row">
                  <ul className="nav nav-pills dilla-link">
                    <li className="ms-3 me-5 profile-pills active">
                      <a  href="#1a" data-toggle="tab">Achievement</a>
                    </li>
                    <li className="me-5 profile-pills">
                      <a href="#2a" data-toggle="tab">Statistics</a>
                    </li>
                  </ul>
                  <div className="tab-content clearfix">
                    <div className="tab-pane active" id="1a">
                      <div className="row mt-5">
                        <div className="col">
                          <h5 className="text-muted">Badges</h5>
                          <div className="d-flex flex-row mt-2">
                            <img src={badgeone} alt="" className="img-fluid me-4" />
                            <img src={badgetwo} alt="" className="img-fluid me-4" />
                            <img src={badgethree} alt="" className="img-fluid me-4" />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5 rewards">
                        <div className="col-md-6">
                          <h5 className="text-muted">Rewards</h5>
                          <div className="p-4 reward-bg">
                            <div className="d-flex flex-row">
                              <img src={blue} alt="" className="img-fluid" />
                              <div className="ms-4 mt-3">
                                <h3>Diligent Saver</h3>
                                <p>You are such a deligent saver</p>
                                <Link className="btn btn-outline-primary px-3 py-1 ardilla-btn outline-btn read-btn">Claim Reward</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3 rewards">
                        <div className="col-md-6">
                          <div className="p-4 reward-bg">
                            <div className="d-flex flex-row">
                              <img src={blue} alt="" className="img-fluid" />
                              <div className="ms-4 mt-3">
                                <h3>Diligent Saver</h3>
                                <p>You are such a deligent saver</p>
                                <Link className="btn btn-outline-primary px-3 py-1 ardilla-btn outline-btn read-btn">Claim Reward</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane quiz-pane" id="2a">
                      <div className="row mt-5">
                        <div className="col-md-4">
                          <div className="p-4 border rounded">
                            <h4>Quiz completed</h4>
                            <span>10</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-4 border rounded">
                            <div className="d-flex flex-row">
                              <img src={streak} alt="" className="img-fluid" />
                              <div className="ms-3">
                                <h4>Streaks</h4>
                                <span>10</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-4">
                          <div className="p-4 border rounded">
                            <h4>Quiz completed</h4>
                            <span>10</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-4 border rounded">
                            <h4>Quiz completed</h4>
                            <span>10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-5">
            <div className="cheerleader p-4">
              <h2>Leadership Board</h2>
              <img src={rank} alt="" className="mt-4 img-fluid" />
              <div className="mt-5">
                <div className="row">
                  <div className="col-md-1 text-center sn">
                    <span>1.</span>
                  </div>
                  <div className="col-md-11">
                    <div className="border-bottom py-4">
                      <div className="d-flex flex-row">
                        <img src={becca} alt="" className="img-fluid" />
                        <div className="ms-2 leader-name">
                          <h6>Roalat Abiola</h6>
                          <p className="mt-1">{"<"}StarBoy{"/>"}</p>
                        </div>
                      </div>
                      <h5 className="float-end pt">5000 pts</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center sn">
                    <span>2.</span>
                  </div>
                  <div className="col-md-11">
                    <div className="border-bottom py-4">
                      <div className="d-flex flex-row">
                        <img src={becca} alt="" className="img-fluid" />
                        <div className="ms-2 leader-name">
                          <h6>Roalat Abiola</h6>
                          <p className="mt-1">{"<"}StarBoy{"/>"}</p>
                        </div>
                      </div>
                      <h5 className="float-end pt">4000 pts</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center sn">
                    <span>3.</span>
                  </div>
                  <div className="col-md-11">
                    <div className="border-bottom py-4">
                      <div className="d-flex flex-row">
                        <img src={becca} alt="" className="img-fluid" />
                        <div className="ms-2 leader-name">
                          <h6>Roalat Abiola</h6>
                          <p className="mt-1">{"<"}StarBoy{"/>"}</p>
                        </div>
                      </div>
                      <h5 className="float-end pt">3000 pts</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center sn">
                    <span>4.</span>
                  </div>
                  <div className="col-md-11">
                    <div className="border-bottom py-4">
                      <div className="d-flex flex-row">
                        <img src={becca} alt="" className="img-fluid" />
                        <div className="ms-2 leader-name">
                          <h6>Roalat Abiola</h6>
                          <p className="mt-1">{"<"}StarBoy{"/>"}</p>
                        </div>
                      </div>
                      <h5 className="float-end pt">3000 pts</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center sn">
                    <span>5.</span>
                  </div>
                  <div className="col-md-11">
                    <div className="py-4">
                      <div className="d-flex flex-row">
                        <img src={becca} alt="" className="img-fluid" />
                        <div className="ms-2 leader-name">
                          <h6>Roalat Abiola</h6>
                          <p className="mt-1">{"<"}StarBoy{"/>"}</p>
                        </div>
                      </div>
                      <h5 className="float-end pt">3000 pts</h5>
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

export default LearnProfile;
