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
import axios from "axios";

function FlexPlanCreate() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ern, setErn] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/api/user/get-user`, {
          withCredentials: true,
        });

        setUser(data.user);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setErr(true);
        setOnSuccess(false);
        setMsg(message);
      }
    };

    getUserById();
  }, [BACKEND_URL]);

  const navigate = useNavigate();

  const handleClick = async () => {
    setLoading(true);
    if (ern) {
      try {
        const { data } = await axios.put(
          `${BACKEND_URL}/api/flex/set-earning`,
          { ern },
          { withCredentials: true }
        );

        console.log(data);
        setLoading(false);
        navigate("/flex-spend");
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
      setMsg("Please enter the amount you earn");
    }
  };

  const handleClickSuccess = () => {
    setOnSuccess(false);
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
      <div className="content px-5 earning-section step-one fix-bottom">
        <div className="row earning">
          <div className="col-md-6">
            <h2>
              Cadet {"<"}
              {user?.kodeHex}
              {"/>"},
            </h2>
          </div>
        </div>
        <div className="row justify-content-center earns">
          <div className="col-md-8 text-center">
            <h3>
              How much do you
              <br />
              <span style={{ color: "#E8356D" }}>earn</span> monthly
            </h3>
            <p className="my-5">
              Enter a name you want to give your target plan
            </p>

            {/* <div className="mb-3">
              <div
                className="btn-group me-3"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  className="btn btn-flex"
                  onClick={(e) => setErn(parseInt(e.target.value))}
                >
                  {"<"}50k
                </button>
              </div>
              <div
                className="btn-group me-3"
                role="group"
                aria-label="Second group"
              >
                <button
                  type="button"
                  onClick={(e) => setErn(e.target.value)}
                  className="btn btn-flex"
                >
                  50k - 250k
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button
                  type="button"
                  onClick={(e) => setErn(e.target.value)}
                  className="btn btn-flex"
                >
                  251k - 500k
                </button>
              </div>
            </div>
            <div className="mb-3">
              <div
                className="btn-group me-3"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  onClick={(e) => setErn(e.target.value)}
                  className="btn btn-flex"
                >
                  501k - 1M
                </button>
              </div>
              <div
                className="btn-group me-3"
                role="group"
                aria-label="Second group"
              >
                <button
                  type="button"
                  className="btn btn-flex"
                  onClick={(e) => setErn(e.target.value)}
                >
                  1M - 5M{" "}
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button
                  type="button"
                  className="btn btn-flex"
                  onClick={(e) => setErn(e.target.value)}
                >
                  5M+{" "}
                </button>
              </div>
            </div> */}
            <div className="mb-3">
              <div
                className="btn-group me-3"
                role="group"
                aria-label="First group"
              >
                {/* <button type="button" className="btn btn-flex">
                  Enter Amount
                </button> */}

                {/* <div className="mb-3"> */}
                <input
                  type="number"
                  className="form-control target-form"
                  placeholder="Enter amount"
                  required
                  value={ern}
                  onChange={(e) => setErn(e.target.value)}
                />
                {/* </div> */}
              </div>
            </div>
            <div>
              {loading ? (
                <button
                  className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                  // to="/flex-spend"
                  style={{ width: "50%" }}
                >
                  Loading
                </button>
              ) : (
                <button
                  className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                  // to="/flex-spend"
                  style={{ width: "50%" }}
                  onClick={handleClick}
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlexPlanCreate;
