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
import sec from "../../img/dashboard/sec.svg";
import password from "../../img/dashboard/c-pass.svg";
import pin from "../../img/dashboard/c-pin.svg";
import question from "../../img/dashboard/c-question.svg";
import number from "../../img/dashboard/c-number.svg";




function ProfileSecurity() {
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
              <Link to="/profile/security" type="button" className="btn me-3 btn-profile active"> <i className="bi bi-shield-lock me-2"></i> Security</Link>
            </div>
            <div className="mb-4">
              <Link to="/profile/get-help" type="button" className="btn me-3 btn-profile"> <i className="bi bi-patch-question-fill me-2"></i> Get Help</Link>
            </div>
            <div className="mb-4">
              <Link to="" type="button" className="btn me-3 btn-profile"> <i className="bi bi-person-square me-2"></i> Account</Link>
            </div>
            <div className="mb-4">
              <Link to="" type="button" className="btn me-3 btn-profile"> <i className="bi bi-share-fill me-2"></i> Referral</Link>
            </div>
            <div className="mb-4">
              <Link to="" type="button" className="btn me-3 btn-profile"> <i className="bi bi-person-check-fill me-2"></i> KYC</Link>
            </div>
            
          </div>
          <div className="col-md-6 right-profile">
            <div>
              <img src={sec} alt="" className="img-fluid" />
              <h3 className="my-5">Password & PIN</h3>
            </div>
            <div>
              <Link data-bs-toggle="modal" data-bs-target="#changepassword" type="button"><img src={password} alt="" className="img-fluid mb-4" /></Link>
              <div className="modal flex-modal fade" id="changepassword" data-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3 justify-content-center">
                          <div className="col-md-11">
                            <h3>Change Password</h3>
                            <span>Change your old Ardilla password to a new password</span>
                            <form className="mt-4">
                              <div className="mb-3">
                                <input type="number" className="form-control p-form" placeholder="Enter Old Password"/>
                              </div>
                              <div className="mb-3">
                                <input type="number" className="form-control p-form" placeholder="Enter New Password"/>
                              </div>
                              <div className="mb-5">
                                <input type="number" className="form-control p-form" placeholder="Confirm New Password"/>
                              </div>
                              <div>
                                <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6" to="" style={{width: "100%"}}>Change Password</Link>
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
            <div>
              <Link data-bs-toggle="modal" data-bs-target="#changepin" type="button"><img src={pin} alt="" className="img-fluid mb-4" /></Link>
              <div className="modal flex-modal fade" id="changepin" data-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3 justify-content-center">
                          <div className="col-md-11">
                            <h3>Change PIN</h3>
                            <span>Change or reset your Ardilla PIN</span>
                            <form className="mt-4">
                              <label className="form-label mb-2">Enter Old PIN</label>
                              <div className="d-flex flex-row mb-3">
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                              </div>
                              <Link data-bs-toggle="modal" data-bs-target="#changepin-step" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                              <div className="text-center mt-3">
                                <p className="reset-p">Forgot your old PIN? <Link data-bs-toggle="modal" data-bs-target="#changepin-reset" type="button" style={{color: "#E8356D"}}>Reset Here</Link></p>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal flex-modal fade" id="changepin-reset" data-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3 justify-content-center">
                          <div className="col-md-11">
                            <h3>Reset PIN</h3>
                            <span>Enter code sent to your registered email address </span>
                            <form className="mt-5">
                              <div className="mb-3">
                                <input type="email" className="form-control p-form" placeholder="*** ****"/>
                              </div>
                              <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Done</Link>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal flex-modal fade" id="changepin-step" data-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3 justify-content-center">
                          <div className="col-md-11">
                            <h3>Change PIN</h3>
                            <span>Change or reset your Ardilla PIN</span>
                            <form className="mt-4">
                              <label className="form-label mb-2">Create New Pin</label>
                              <div className="d-flex flex-row mb-3">
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                              </div>
                              <label className="form-label mb-2">Confirm New Pin</label>
                              <div className="d-flex flex-row mb-3">
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                              </div>
                              <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Change PIN</Link>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link data-bs-toggle="modal" data-bs-target="#changequestion" type="button"><img src={question} alt="" className="img-fluid mb-4" /></Link>
              <div className="modal flex-modal fade" id="changequestion" data-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3 justify-content-center">
                          <div className="col-md-11">
                            <h3>Update Security Questions</h3>
                            <span>Set a new security question to protect your Ardilla Funds</span>
                            <form className="mt-4">
                              <div classname="">
                                <label className="form-label">What is Your Mother’s maiden name</label>
                                <input type="text" className="form-control p-form" placeholder="Annie"/>
                              </div>
                              <div>
                                <Link data-bs-toggle="modal" data-bs-target="#change-security" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
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
            <div>
              <div className="modal flex-modal fade" id="change-security" data-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3 justify-content-center">
                          <div className="col-md-11">
                            <h3>Update Security Questions</h3>
                            <span>Set a new security question to protect your Ardilla Funds</span>
                            <form className="mt-4">
                              <div>
                                <label className="form-label">Set a New Security Question</label>
                                <select className="form-select p-select" aria-label="Default select example">
                                  <option selected>Choose a security question</option>
                                  <option value="2">Favorite Pet</option>
                                  <option value="3">Where were you born</option>
                                </select>
                              </div>
                              <div className="mb-5">
                                <label className="form-label">Input a Security Answer</label>
                                <input type="text" className="form-control p-form" placeholder="Input answer"/>
                              </div>
                              <div>
                                <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6" to="" style={{width: "100%"}}>Continue</Link>
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
            <div>
              <Link data-bs-toggle="modal" data-bs-target="#change-number" type="button"><img src={number} alt="" className="img-fluid mb-4" /></Link>
              <div className="modal flex-modal fade" id="change-number" data-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3 justify-content-center">
                          <div className="col-md-11">
                            <h3>Change Phone Number</h3>
                            <span>Change or Update  your Phone Number on Ardilla </span>
                            <form className="mt-5">
                              <div className="mb-3">
                                <input type="tel" className="form-control p-form" placeholder="0802 123 4567"/>
                              </div>
                              <Link data-bs-toggle="modal" data-bs-target="#change-number-pin" type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal flex-modal fade" id="change-number-pin" data-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body flex-modal-body">
                      <div className="container">
                        <div className="row mx-3 justify-content-center">
                          <div className="col-md-11">
                            <h3>Confirm PIN</h3>
                            <span>Enter 4- digit PIN to change your Phone Number</span>
                            <form className="mt-4">
                              <label className="form-label mb-2">Enter Old PIN</label>
                              <div className="d-flex flex-row mb-3">
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                                <div className="me-2">
                                  <input
                                    type="text"
                                    className="form-control rounded verify-otp"
                                    maxLength="1"
                                    required
                                  />
                                </div>
                              </div>
                              <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="" style={{width: "100%"}}>Continue</Link>
                              <div className="text-center mt-3">
                                <p className="reset-p">Forgot your old PIN? <Link data-bs-toggle="modal" data-bs-target="#changepin-reset" type="button" style={{color: "#E8356D"}}>Reset Here</Link></p>
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
        </div>
      </div>
    </section>
  );
}

export default ProfileSecurity;
