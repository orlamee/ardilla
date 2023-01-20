import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/profile.css";
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
import refer from "../../img/dashboard/refer.svg";
import pb from "../../img/dashboard/pb.svg";
import axios from "axios";

function ProfileReferral() {
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/user/get-user`,
          {
            withCredentials: true,
          }
        );

        setUserDetails(data.user);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setErr(true);

        setMsg(message);
      }
    };

    getUserById();
  }, []);
  return (
    <section className="main-dash">
      {err && (
        <div className="row justify-content-center  ardilla-alert">
          <div className="col-md-6">
            <div
              className="alert alert-danger alert-dismissible fade show text-center text-danger"
              role="alert"
            >
              <i className="bi bi-exclamation-circle me-3"></i>
              {msg}
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="alert"
                onClick={() => setErr(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}
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
              <Link
                to="/profile"
                type="button"
                className="btn me-3 btn-profile"
              >
                {" "}
                <i className="bi bi-person-fill me-2"></i> Personal Information
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/profile/security"
                type="button"
                className="btn me-3 btn-profile"
              >
                {" "}
                <i className="bi bi-shield-lock me-2"></i> Security
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/profile/get-help"
                type="button"
                className="btn me-3 btn-profile"
              >
                {" "}
                <i className="bi bi-patch-question-fill me-2"></i> Get Help
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/profile/account"
                type="button"
                className="btn me-3 btn-profile"
              >
                {" "}
                <i className="bi bi-person-square me-2"></i> Account
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/profile/referral"
                type="button"
                className="btn me-3 btn-profile active"
              >
                {" "}
                <i className="bi bi-share-fill me-2"></i> Referral
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/profile/kyc"
                type="button"
                className="btn me-3 btn-profile"
              >
                {" "}
                <i className="bi bi-person-check-fill me-2"></i> KYC
              </Link>
            </div>
          </div>
          <div className="col-md-6 right-profile">
            <img src={refer} alt="" className="img-fluid" />
            <div className="refer mt-4">
              <h6>
                Become an Affiliate and earn up to 4% commission
                <br />
                when you tell someone about Ardilla and they save
                <br />& invest with us.
              </h6>
              <h3 className="mt-5">
                Hi {userDetails?.firstname}, this is your referral code:
              </h3>
              <span>{userDetails?.referral}</span>
              <div className="d-flex flex-row my-5">
                <div className="card-refer p-3">
                  <p>
                    <i className="bi bi-link-45deg"></i> Copy Referral Link
                  </p>
                </div>
                <p className="mt-3">
                  <i className="bi bi-share-fill ms-3"></i>
                </p>
              </div>
              <img src={pb} alt="" className="img-fluid" />
              <div className="cardy p-4 mt-5">
                <h3>Referral Activities</h3>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <p>Shared referral link</p>
                  </div>
                  <div className="col-md-6 text-end">
                    <span>8 Users</span>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <p>Shared referral link</p>
                  </div>
                  <div className="col-md-6 text-end">
                    <span>8 Users</span>
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

export default ProfileReferral;
