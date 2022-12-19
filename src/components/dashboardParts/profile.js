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
import avi from "../../img/dashboard/avi-profilr.svg";
import badge from "../../img/dashboard/profile-bdg.svg";



function ProfileMain() {
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
          <div className="col-md-5 mt-5">
            <h2>Profile</h2>
            <h6>Customize your Profile settings </h6>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="mb-4">
              <Link to="/profile" type="button" className="btn me-3 btn-profile active"> <i className="bi bi-person-fill me-2"></i> Personal Information</Link>
            </div>
            <div className="mb-4">
              <Link to="/profile/security" type="button" className="btn me-3 btn-profile"> <i className="bi bi-shield-lock me-2"></i> Security</Link>
            </div>
            <div className="mb-4">
              <Link to="/profile/get-help" type="button" className="btn me-3 btn-profile"> <i className="bi bi-patch-question-fill me-2"></i> Get Help</Link>
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
            <div className="d-flex flex-row">
              <img src={avi} alt="" className="img-fluid" />
              <img src={badge} alt="" className="img-fluid" />
            </div>
            <form>
              <div className="row mt-5">
                <div className="col-md-4 mt-3">
                  <h5>Kode Hex</h5>
                </div>
                <div className="col-md-4">
                  {/* <form> */}
                    <input type="text" className="form-control target-form p-form" defaultValue="Starboy" required/>
                  {/* </form> */}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  <h5>Name</h5>
                </div>
                <div className="col-md-4">
                  <p>Ola Ola</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  <h5>Date</h5>
                </div>
                <div className="col-md-4">
                  <p>22-12-2022</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  <h5>Email</h5>
                </div>
                <div className="col-md-4">
                  <p>johndoe@gmail.com</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  <h5>Gender</h5>
                </div>
                <div className="col-md-4">
                  <select className="form-select p-select" aria-label="Default select example">
                    <option selected>Male</option>
                    <option value="2">Female</option>
                    <option value="3">Trans</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="row mt-5">
              <div className="col-md-8">
                <h3>Next of Kin</h3>
                <hr/>
              </div>
            </div>
            <div>
              <form>
                <div className="row mt-3">
                  <div className="col-md-4 mt-3">
                    <h5>First Name</h5>
                  </div>
                  <div className="col-md-4">
                    {/* <form> */}
                      <input type="text" className="form-control target-form p-form" placeholder="Enter first name" required/>
                    {/* </form> */}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4 mt-3">
                    <h5>Last Name</h5>
                  </div>
                  <div className="col-md-4">
                    {/* <form> */}
                      <input type="text" className="form-control target-form p-form" placeholder="Enter last name" required/>
                    {/* </form> */}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4 mt-3">
                    <h5>Phone Number</h5>
                  </div>
                  <div className="col-md-4">
                    {/* <form> */}
                      <input type="text" className="form-control target-form p-form" placeholder="Enter phone number" required/>
                    {/* </form> */}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4 mt-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-md-4">
                    {/* <form> */}
                      <input type="email" className="form-control target-form p-form" placeholder="enter email" required/>
                    {/* </form> */}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4 mt-3">
                    <h5>Relationship</h5>
                  </div>
                  <div className="col-md-4">
                    <select className="form-select p-select" aria-label="Default select example">
                      <option selected>Cousin</option>
                      <option value="2">Wife</option>
                      <option value="3">Uncle</option>
                    </select>
                  </div>
                </div>
                <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="">Save Changes</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileMain;
