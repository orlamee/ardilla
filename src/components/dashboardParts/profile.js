import React, { useEffect, useState, useRef } from "react";
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
// import avi from "../../img/dashboard/avi-profilr.svg";
import badge from "../../img/dashboard/profile-bdg.svg";
import axios from "axios";

function ProfileMain() {
  // let user = JSON.parse(sessionStorage.getItem("user"));
  let nextOfKin;

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [relationship, setRelationship] = useState("");

  const [userDetails, setUserDetails] = useState();
  // const [nok, setNok] = useState();
  const [img, setImg] = useState();

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  useEffect(() => {
    const getUserById = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/api/user/get-user`, {
          withCredentials: true,
        });

        setUserDetails(data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getUserById();
  }, [BACKEND_URL]);

  // const getUserById = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://ardilla.herokuapp.com/ardilla/api/user/find/${user._id}`
  //     );

  //     setUserDetails(data.user);
  //     // setNok(data.user.nextOfKin);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const [profileImg, setProfileImg] = useState({});
  // const [image, setImage] = useState({ preview: "", data: "" });
  const [selectedFile, setSelectedFile] = useState(null);

  const file = useRef();

  console.log(userDetails);

  // setNok(userDetails?.nextOfKin);

  // setFirstName(userDetails?.nextOfKin?.firstname);

  // console.log(nok);

  const handleFileInput = async (e) => {
    e.preventDefault();

    setImg(URL.createObjectURL(e.target.files[0]));
    file.current = e.target.files[0];

    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let formData = new FormData();
      formData.append("image", selectedFile);

      console.log(selectedFile);

      const { data } = await axios.post(
        `${BACKEND_URL}/api/user/profile-pic`,
        formData,
        { withCredentials: true }
      );

      console.log(data);
      setImg(false);
      // getUserById();
    } catch (error) {
      console.log(error);
    }
  };

  const handleNOK = async () => {
    setLoading(true);
    setErr(false);

    nextOfKin = {
      firstname,
      lastname,
      phone,
      email,
      relationship,
    };

    try {
      const { data } = await axios.put(
        `${BACKEND_URL}/api/user/next-of-kin`,
        { nextOfKin },
        { withCredentials: true }
      );

      setErr(false);
      setMsg(data.msg);
      setOnSuccess(true);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setErr(true);
      setMsg(`${error.response.data.msg || "Network error"} `);
    }
  };

  const handleClickSuccess = () => {
    setOnSuccess(false);
  };

  setTimeout(() => {
    if (onSuccess) {
      setOnSuccess(false);
    }
  }, 5000);

  setTimeout(() => {
    if (err) {
      setErr(false);
    }
  }, 5000);

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
      {onSuccess && (
        <div className="row justify-content-center mt-5  ardilla-alert">
          <div className="col-md-6">
            <div
              className="alert alert-success alert-dismissible fade show text-center text-success"
              role="alert"
            >
              <i className="bi bi-patch-check-fill me-3"></i>
              {msg}
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="alert"
                onClick={handleClickSuccess}
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
                className="btn me-3 btn-profile active"
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
                className="btn me-3 btn-profile"
              >
                {" "}
                <i className="bi bi-person-check-fill me-2"></i> KYC
              </Link>
            </div>
          </div>
          <div className="col-md-6 right-profile">
            <div className="d-flex flex-row">
              <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileInput} />

                {userDetails?.photo && (
                  <img
                    src={userDetails?.photo}
                    alt=""
                    className="img-fluid rounded-circle"
                    on
                  />
                )}

                {img && (
                  <img
                    src={userDetails?.photo}
                    alt=""
                    className="img-fluid rounded-circle"
                    on
                  />
                )}

                {/* <img
                  src={userDetails?.profilePic}
                  alt=""
                  className="img-fluid rounded-circle"
                  on
                /> */}
                {/* <img src={img ? img : avi} alt="" className="img-fluid" on /> */}

                <img src={badge} alt="" className="img-fluid" />

                <button type="submit">Submit</button>
              </form>
            </div>
            <form>
              <div className="row mt-5">
                <div className="col-md-4 mt-3">
                  <h5>Kode Hex</h5>
                </div>
                <div className="col-md-4">
                  {/* <form> */}
                  <input
                    type="text"
                    className="form-control target-form p-form"
                    defaultValue={userDetails?.kodeHex}
                    required
                  />
                  {/* </form> */}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  <h5>Name</h5>
                </div>
                <div className="col-md-4">
                  <p>
                    {userDetails?.firstname} {userDetails?.lastname}
                  </p>
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
                  <p>{userDetails?.email}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  <h5>Gender</h5>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select p-select"
                    aria-label="Default select example"
                  >
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
                <hr />
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
                    <input
                      type="text"
                      className="form-control target-form p-form"
                      placeholder="Enter first name"
                      required
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {/* </form> */}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4 mt-3">
                    <h5>Last Name</h5>
                  </div>
                  <div className="col-md-4">
                    {/* <form> */}
                    <input
                      type="text"
                      className="form-control target-form p-form"
                      placeholder="Enter last name"
                      required
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {/* </form> */}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4 mt-3">
                    <h5>Phone Number</h5>
                  </div>
                  <div className="col-md-4">
                    {/* <form> */}
                    <input
                      type="text"
                      className="form-control target-form p-form"
                      placeholder="Enter phone number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {/* </form> */}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4 mt-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-md-4">
                    {/* <form> */}
                    <input
                      type="email"
                      className="form-control target-form p-form"
                      placeholder="Enter email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* </form> */}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4 mt-3">
                    <h5>Relationship</h5>
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-select p-select"
                      aria-label="Default select example"
                      onChange={(e) => setRelationship(e.target.value)}
                    >
                      <option selected value={"cousin"}>
                        {"Cousin"}
                      </option>
                      <option value="wife">Wife</option>
                      <option value="uncle">Uncle</option>
                    </select>
                  </div>
                </div>
                {loading ? (
                  <Link
                    className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                    to=""
                  >
                    Loading
                  </Link>
                ) : (
                  <Link
                    className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                    to=""
                    onClick={handleNOK}
                  >
                    Save Changes
                  </Link>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileMain;
