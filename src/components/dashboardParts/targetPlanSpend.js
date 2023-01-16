import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import verticalthree from "../../img/dashboard/vertical-three.svg";
import axios from "axios";

function TargetPlanSpend() {
  const [targetAcct, setTargetAcct] = useState();
  const [loading, setLoading] = useState();
  const [value, setValue] = useState();
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  // let user = JSON.parse(sessionStorage.getItem("user"));

  const navigate = useNavigate();

  useEffect(() => {
    // const getTargetAccount = async () => {
    //   try {
    //     const { data } = await axios.get(
    //       `https://ardilla.herokuapp.com/ardilla/api/target-plan/get-target-account/${user._id}`
    //     );

    //     // console.log(data);
    //     setTargetAcct(data.targetPlan);
    //   } catch (error) {
    //     // setLoading(false);
    //     console.log(error);
    //   }
    // };

    const getTargetAccount = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/target/get-target-account`,
          { withCredentials: true }
        );

        setTargetAcct(data.targetPlan);
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

    getTargetAccount();
  }, []);

  const handleClickSuccess = () => {
    setOnSuccess(false);
  };

  // const handleSpend = async () => {
  //   if (value) {
  //     console.log(value);
  //     setLoading(true);
  //     try {
  //       const { data } = await axios.put(
  //         `https://ardilla.herokuapp.com/ardilla/api/target-plan/set-expenditure/${user._id}`,
  //         { value }
  //       );

  //       console.log(data);
  //       setLoading(false);
  //       navigate("/target-type");
  //     } catch (error) {
  //       setErr(true);
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   } else {
  //     setLoading(false);
  //     setErr(true);
  //     setMsg(" Pick a range that best describe your expenditure");
  //   }
  // };

  const handleSpend = async () => {
    if (value) {
      setLoading(true);
      try {
        await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/target/set-expenditure`,
          { value },
          { withCredentials: true }
        );

        // console.log(data);
        setLoading(false);
        navigate("/target-type");
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setErr(true);
        setMsg(message);
      }
    } else {
      setLoading(false);
      setErr(true);
      setMsg(" Pick a range that best describe your expenditure");
    }
  };

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
        <Link to="/portfolio" className="">
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
        <Link to="/dilla">
          <div className="d-flex flex-row">
            <img src={dilla} alt="" className="img-fluid me-2 icons" />
            Dilla
          </div>
        </Link>
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
      <div className="content py-5 px-5 earning-section">
        <div className="row backto">
          <Link to="/target-earn">
            <span>
              <i className="bi bi-chevron-left me-3"></i>Back
            </span>
          </Link>
        </div>
        <div className="row earning">
          <div className="col-md-12 text-center">
            <img src={verticalthree} alt="" className="img-fluid" />
            {/* <h2>Cadet {"<"}Starboy{"/>"},</h2> */}
          </div>
        </div>
        <div className="row justify-content-center earns">
          <div className="col-md-8 text-center">
            <h3>
              How much do you
              <br />
              <span style={{ color: "#E8356D" }}>spend</span> monthly
            </h3>
            <p className="my-5">
              Enter a name you want to give your target plan
            </p>

            <div className="mb-3">
              {targetAcct?.psr?.map((vl, index) => {
                return (
                  <div
                    className="btn-group me-3"
                    role="group"
                    aria-label="First group"
                    key={index}
                  >
                    <button
                      type="button"
                      className="btn btn-flex"
                      onClick={() => setValue(index + 1)}
                    >
                      {vl}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* <div className="mb-3">
              <div className="btn-group me-3" role="group" aria-label="First group">
                <button type="button" className="btn btn-flex">{"<"}50k</button>
                
              </div>
              <div className="btn-group me-3" role="group" aria-label="Second group">
                <button type="button" className="btn btn-flex">50k - 250k</button>
                
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-flex">251k - 500k</button>
              </div>
            </div> */}
            {/* <div className="mb-3">
              <div className="btn-group me-3" role="group" aria-label="First group">
                <button type="button" className="btn btn-flex">501k - 1M</button>
                
              </div>
              <div className="btn-group me-3" role="group" aria-label="Second group">
                <button type="button" className="btn btn-flex">1M - 5M </button>
                
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-flex">5M+ </button>
              </div>
            </div> */}
            {/* <div className="row justify-content-center">
              <div className="col-md-3 text-center">
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control target-form enter-amount"
                    placeholder="Enter Amount"
                    required
                  />
                </div>
              </div>
            </div> */}
            <div>
              {loading ? (
                <Link
                  className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                  // to="/target-type"
                  style={{ width: "50%" }}
                >
                  Loading
                </Link>
              ) : (
                <Link
                  className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                  // to="/target-type"
                  style={{ width: "50%" }}
                  onClick={handleSpend}
                >
                  Continue
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TargetPlanSpend;
