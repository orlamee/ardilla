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
import contact from "../../img/dashboard/contact.svg";
import chat from "../../img/dashboard/chat.svg";
import headset from "../../img/dashboard/headset.svg";
import call from "../../img/dashboard/call.svg";
import mp from "../../img/dashboard/mp4.svg";
import chats from "../../img/dashboard/chat-support.svg";
import cogs from "../../img/dashboard/cogs.svg";
import key from "../../img/dashboard/key.svg";
import lock from "../../img/dashboard/Padlock.svg";
import dillasan from "../../img/dashboard/d-icon.svg";
import transaction from "../../img/dashboard/transaction.svg";
import dillauser from "../../img/dashboard/dilla-user.svg";




function ProfileHelp() {
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
      <div className="content py-5 px-5 profile-main">
        <div className="row">
          <div className="col-md-5 mt-5">
            <h2>Profile</h2>
            <h6>Customize your Profile settings </h6>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="mb-4">
              <Link to="/profile" type="button" className="btn me-3 btn-profile"> <i className="bi bi-person-fill me-2"></i> Personal Information</Link>
            </div>
            <div className="mb-4">
              <Link to="/profile/security" type="button" className="btn me-3 btn-profile"> <i className="bi bi-shield-lock me-2"></i> Security</Link>
            </div>
            <div className="mb-4">
              <Link to="/profile/get-help" type="button" className="btn me-3 btn-profile active"> <i className="bi bi-patch-question-fill me-2"></i> Get Help</Link>
            </div>
            <div className="mb-4">
              <Link to="/profile/account" type="button" className="btn me-3 btn-profile"> <i className="bi bi-person-square me-2"></i> Account</Link>
            </div>
            <div className="mb-4">
              <Link to="/profile/referral" type="button" className="btn me-3 btn-profile"> <i className="bi bi-share-fill me-2"></i> Referral</Link>
            </div>
            <div className="mb-4">
              <Link to="/profile/kyc" type="button" className="btn me-3 btn-profile"> <i className="bi bi-person-check-fill me-2"></i> KYC</Link>
            </div>
            
          </div>
          <div className="col-md-6 right-profile">
            <img src={headset} alt="" className="img-fluid" />
            <div className="row my-5">
              <div className="col-md-9">
                <div className="care-card p-4">
                  <h6><i className="bi bi-people-fill me-3"></i> Contact Support Team <i className="bi bi-chevron-right ms-3"></i></h6>
                </div>
              </div>
            </div>
            <h3>Contact Dilla Coach</h3>
            <div className="d-flex flex-row my-5">
              <div className="support-img me-5">
                <img src={call} alt="" className="img-fluid mb-3" />
                <p>Call</p>
              </div>
              <div className="support-img me-5">
                <img src={chats} alt="" className="img-fluid mb-3" />
                <p>Chat</p>
              </div>
              <div className="support-img me-5">
                <img src={mp} alt="" className="img-fluid mb-3" />
                <p>Video</p>
              </div>
            </div>
            <h3>Report an Activity</h3>
            <form className="my-4">
              <div className="row">
                <div className="col-md-9">
                  <div class="mb-3">
                    <textarea class="form-control p-form" id="exampleFormControlTextarea1" rows="9"></textarea>
                  </div>
                  <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 float-end" to="">Submit Report</Link>
                </div>
              </div>
            </form>
            <h3>FAQ</h3>
            <div className="row mt-4">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6">
                    <div className="care-card p-4">
                      <img src={cogs} alt="" className="img-fluid" />
                      <h3 className="my-3">Account Settings</h3>
                      <p>Know more about adjusting setting, managing notifcations and name change and more</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="care-card p-4">
                      <img src={key} alt="" className="img-fluid" />
                      <h3 className="my-3">Login and Password</h3>
                      <p>Know more about adjusting setting, managing notifcations and name change and more</p>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-md-6">
                    <div className="care-card p-4">
                      <img src={lock} alt="" className="img-fluid" />
                      <h3 className="my-3">Privacy and Security</h3>
                      <p>Know more about adjusting setting, managing notifcations and name change and more</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="care-card p-4">
                      <img src={dillasan} alt="" className="img-fluid" />
                      <h3 className="my-3">SAN & Dilla</h3>
                      <p>Know more about adjusting setting, managing notifcations and name change and more</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="care-card p-4">
                      <img src={transaction} alt="" className="img-fluid" />
                      <h3 className="my-3">Transaction</h3>
                      <p>Know more about adjusting setting, managing notifcations and name change and more</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="care-card p-4">
                      <img src={dillauser} alt="" className="img-fluid" />
                      <h3 className="my-3">Dilla Users</h3>
                      <p>Know more about adjusting setting, managing notifcations and name change and more</p>
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

export default ProfileHelp;
