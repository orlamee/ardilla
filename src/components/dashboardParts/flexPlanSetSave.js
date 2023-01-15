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
import contact from "../../img/dashboard/contact.svg";
import chat from "../../img/dashboard/chat.svg";
import axios from "axios";

function FlexPlanSetSave() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [savingRate, setSavingRate] = useState();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  // let user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    const getUserById = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.BACKEND_URL}/api/user/get-user`,
          {
            withCredentials: true,
          }
        );

        setUser(data.user);
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

  const handleClickSuccess = () => {
    setOnSuccess(false);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      await axios.put(
        `${process.env.BACKEND_URL}/api/flex/custom-saving-rate`,
        { savingRate },
        { withCredentials: true }
      );

      setLoading(false);
      navigate("/flex-set-duration");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);
      setLoading(false);
      setErr(true);
      setMsg(message);
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
        <Link>
          <div className="d-flex flex-row">
            <img src={dilla} alt="" className="img-fluid me-2 icons" />
            Dilla
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={explore} alt="" className="img-fluid me-2 icons" />
            Explore
          </div>
        </Link>
        <Link>
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
      <div className="content py-5 px-5 earning-section step-five">
        <div className="row earning">
          <div className="col-md-6">
            <h2>
              Cadet {"<"}
              {user?.kodeHex}
              {"/>"},
            </h2>
          </div>
        </div>
        <div className="row justify-content-center earns saving-top">
          <div className="col-md-8 text-center">
            <h3>
              How much will you
              <br />
              <span style={{ color: "#E8356D" }}>like to save </span>monthly
            </h3>
            <p className="my-5">Choose how often you want to save</p>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control target-form"
                      placeholder="Enter Amount"
                      required
                      value={savingRate}
                      onChange={(e) => setSavingRate(e.target.value)}
                    />
                  </div>
                  <div className="mb-5">
                    {loading ? (
                      <button
                        type="button"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                        style={{ width: "100%" }}
                      >
                        Loading
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                        style={{ width: "100%" }}
                      >
                        Next
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlexPlanSetSave;
