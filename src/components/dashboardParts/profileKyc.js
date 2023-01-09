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
import contact from "../../img/dashboard/pay.svg";
import chat from "../../img/dashboard/chat.svg";
import pie from "../../img/dashboard/50.svg";
import cloud from "../../img/dashboard/cloud.svg";
import up from "../../img/dashboard/up.svg";
import pass from "../../img/dashboard/pass.svg";
import axios from "axios";
import check from "../../img/dashboard/Check.svg";
// import pass from "../../img/dashboard/pass.svg";

function ProfileKYC() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);
  const [utility, setUtility] = useState(null);

  const [loading1, setLoading1] = useState(null);
  const [loading2, setLoading2] = useState(null);
  const [loading3, setLoading3] = useState(null);
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const { data } = await axios.get(
          `https://ardilla.herokuapp.com/ardilla/api/user/find/${user._id}`
        );

        setUserDetails(data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getUserById();
  }, [user._id]);

  const getUserById = async () => {
    try {
      const { data } = await axios.get(
        `https://ardilla.herokuapp.com/ardilla/api/user/find/${user._id}`
      );

      setUserDetails(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIdFront = (e) => {
    e.preventDefault();
    // setSelectedFile(e.target.files[0]);
    setIdFront(e.target.files[0]);
  };

  const handleIdBack = (e) => {
    e.preventDefault();
    // setSelectedFile(e.target.files[0]);
    setIdBack(e.target.files[0]);
  };

  const handleUtility = (e) => {
    e.preventDefault();
    // setSelectedFile(e.target.files[0]);
    setUtility(e.target.files[0]);
  };

  const handleUploadFront = async (e) => {
    try {
      e.preventDefault();
      setLoading1(true);

      let formData = new FormData();
      formData.append("image", idFront);

      const { data } = await axios.post(
        `https://ardilla.herokuapp.com/ardilla/api/user/id-front/${user._id}`,
        formData
      );

      setLoading1(false);
      getUserById();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadBack = async (e) => {
    try {
      e.preventDefault();
      setLoading2(true);

      let formData = new FormData();
      formData.append("image", idBack);

      const { data } = await axios.post(
        `https://ardilla.herokuapp.com/ardilla/api/user/id-back/${user._id}`,
        formData
      );

      setLoading2(false);
      getUserById();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadUtility = async (e) => {
    try {
      e.preventDefault();
      setLoading3(true);

      let formData = new FormData();
      formData.append("image", utility);

      const { data } = await axios.post(
        `https://ardilla.herokuapp.com/ardilla/api/user/utility-bill/${user._id}`,
        formData
      );

      setLoading3(false);
      getUserById();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
            Budgeting <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link to="/learn" className="">
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
                className="btn me-3 btn-profile"
              >
                {" "}
                <i className="bi bi-share-fill me-2"></i> Referral
              </Link>
            </div>
            <div className="mb-4">
              <Link
                to="/profile/kyc"
                type="button"
                className="btn me-3 btn-profile active"
              >
                {" "}
                <i className="bi bi-person-check-fill me-2"></i> KYC
              </Link>
            </div>
          </div>
          <div className="col-md-6 right-profile">
            <div className="d-flex flex-row kyc-profile">
              <img src={pie} alt="" className="img-fluid" />
              <h5 className="mt-5 ms-4">2 of 4 Completed</h5>
            </div>
            {/* <form onSubmit={handleSubmit}> */}
            <div className="row mt-3">
              <div className="col-md-4 mt-3">
                <h5>BVN Verification</h5>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-row">
                  <input
                    type="number"
                    className="form-control target-form p-form"
                    placeholder="234*********12"
                    required
                  />
                  <img src={pass} alt="success" className="img-fluid ms-2" />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-3">
                <h5>Phone Number</h5>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-row">
                  <input
                    type="tel"
                    className="form-control target-form p-form"
                    placeholder="+234 902 123 4567"
                    required
                  />
                  <img src={pass} alt="success" className="img-fluid ms-2" />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <h5>
                Upload Your valid ID{" "}
                <small>
                  Please make sure your document is clear and genuine
                </small>
              </h5>
            </div>

            <div className="row mt-5">
              {/* upload the front of the id */}
              {userDetails?.idFrontStatus === "" && (
                <div className="col-md-4">
                  <form onSubmit={handleUploadFront}>
                    <div className="card-upload text-center p-4">
                      <input type="file" required onChange={handleIdFront} />
                      <img src={up} alt="" className="img-fluid" />
                      <h6>Upload the Front View</h6>
                      <h5>
                        Drag and drop image, or{" "}
                        <span className="fw-bold" style={{ color: "#E8356D" }}>
                          Browse
                        </span>
                      </h5>
                      {loading1 ? (
                        <button>Loading</button>
                      ) : (
                        <button type="submit">Submit</button>
                      )}
                    </div>
                  </form>
                </div>
              )}

              {/* upload the back of the id */}
              {userDetails?.idBackStatus === "" && (
                <div className="col-md-4">
                  <form onSubmit={handleUploadBack}>
                    <div className="card-upload text-center p-4">
                      <input type="file" required onChange={handleIdBack} />
                      <img src={up} alt="" className="img-fluid" />
                      <h6>Upload the Back View</h6>
                      <h5>
                        Drag and drop image, or{" "}
                        <span className="fw-bold" style={{ color: "#E8356D" }}>
                          Browse
                        </span>
                      </h5>
                      {loading2 ? (
                        <button>Loading</button>
                      ) : (
                        <button type="submit">Submit</button>
                      )}
                    </div>
                  </form>
                </div>
              )}

              {userDetails?.idFrontStatus === "pending" && (
                <div className="col-md-4">
                  <div className="card-upload text-center p-4 review-bg">
                    <img src={check} alt="" className="img-fluid" />
                    <h6 className="mt-2">
                      Front View Upload Succesful Awaiting confirmation...
                    </h6>
                  </div>
                </div>
              )}

              {userDetails?.idBackStatus === "pending" && (
                <div className="col-md-4">
                  <div className="card-upload text-center p-4 review-bg">
                    <img src={check} alt="" className="img-fluid" />
                    <h6 className="mt-2">
                      Back View Upload Succesful Awaiting confirmation...
                    </h6>
                  </div>
                </div>
              )}

              {userDetails?.idFrontStatus === "approve" && (
                // <div className="row mt-5">
                <h5>
                  Upload Your valid ID{" "}
                  <img src={pass} alt="success" className="img-fluid ms-2" />
                </h5>
                // </div>
              )}

              {userDetails?.idBackStatus === "approve" && (
                // <div className="row mt-5">
                <h5>
                  Upload Your valid ID{" "}
                  <img src={pass} alt="success" className="img-fluid ms-2" />
                </h5>
                // </div>
              )}

              {userDetails?.idFrontStatus === "decline" && (
                <div>
                  {/* <div className="row mt-5"> */}
                  <h5>
                    Upload Your valid ID{" "}
                    <small style={{ color: "#E8356D" }}>
                      Document not auntheticated, please reupload
                    </small>
                  </h5>
                  {/* </div> */}
                  <div className="col-md-4">
                    <div className="card-upload text-center p-4">
                      <img src={up} alt="" className="img-fluid" />
                      <h6>Upload the Front View</h6>
                      {/* <h5>Drag and drop image, or <span className="fw-bold" style={{color: "#E8356D"}}>Browse</span></h5> */}
                    </div>
                  </div>
                </div>
              )}

              {userDetails?.idBackStatus === "decline" && (
                <div>
                  {/* <div className="row mt-5"> */}
                  <h5>
                    Upload Your valid ID{" "}
                    <small style={{ color: "#E8356D" }}>
                      Document not auntheticated, please reupload
                    </small>
                  </h5>
                  {/* </div> */}
                  <div className="col-md-4">
                    <div className="card-upload text-center p-4">
                      <img src={up} alt="" className="img-fluid" />
                      <h6>Upload the Back View</h6>
                      {/* <h5>Drag and drop image, or <span className="fw-bold" style={{color: "#E8356D"}}>Browse</span></h5> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="row mt-5">
            {userDetails?.utilityBillStatus === "" && (
              <div className="col-md-4">
                <form onSubmit={handleUploadUtility}>
                  <div className="card-upload text-center p-4">
                    <input type="file" required onChange={handleUtility} />
                    <img src={cloud} alt="" className="img-fluid" />
                    <h6>Upload Utility Bill</h6>
                    <h5>
                      Drag and drop image, or{" "}
                      <span className="fw-bold" style={{ color: "#E8356D" }}>
                        Browse
                      </span>
                    </h5>
                    {loading3 ? (
                      <button>Loading</button>
                    ) : (
                      <button type="submit">Submit</button>
                    )}
                  </div>
                </form>
              </div>
            )}

            {userDetails?.utilityBillStatus === "pending" && (
              <div className="col-md-4">
                <div className="card-upload text-center p-4 review-bg">
                  <img src={check} alt="" className="img-fluid" />
                  <h6 className="mt-2">
                    Upload Succesful Awaiting confirmation...
                  </h6>
                </div>
              </div>
            )}

            {userDetails?.utilityBillStatus === "approve" && (
              <h5>
                Upload Your valid ID{" "}
                <img src={pass} alt="success" className="img-fluid ms-2" />
              </h5>
            )}

            {userDetails?.utilityBillStatus === "decline" && (
              <div>
                {/* <div className="row mt-5"> */}
                <h5>
                  Upload Your valid ID{" "}
                  <small style={{ color: "#E8356D" }}>
                    Document not auntheticated, please reupload
                  </small>
                </h5>
                {/* </div> */}
                {/* <div className="row mt-5"> */}
                <div className="col-md-4">
                  <div className="card-upload text-center p-4">
                    <img src={cloud} alt="" className="img-fluid" />
                    <h6>Upload Utility Bill</h6>
                    {/* <h5>Drag and drop image, or <span className="fw-bold" style={{color: "#E8356D"}}>Browse</span></h5> */}
                  </div>
                </div>
              </div>
              // </div>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default ProfileKYC;
