import React, { useState } from "react";
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
import verticalone from "../../img/dashboard/setduration.svg";
import axios from "axios";

function TargetPlanSetDuration() {
  const [loading, setLoading] = useState();
  const [duration, setDuration] = useState();

  let user = JSON.parse(sessionStorage.getItem("user"));

  const navigate = useNavigate();

  const calculateIntrest = async () => {
    try {
      const { data } = await axios.get(
        `https://ardilla.herokuapp.com/ardilla/api/target-plan/calculate-intrest/${user._id}`
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `https://ardilla.herokuapp.com/ardilla/api/target-plan/custom-duration/${user._id}`,
        { duration }
      );

      calculateIntrest();
      console.log(data);
      setLoading(false);
      navigate("/target-dashboard");
    } catch (error) {
      setLoading(false);
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
      <div className="content py-5 px-5 earning-section">
        <div className="row backto">
          <Link to="/target-set-save">
            <span>
              <i className="bi bi-chevron-left me-3"></i>Back
            </span>
          </Link>
        </div>
        <div className="row earning">
          <div className="col-md-12 text-center">
            <img src={verticalone} alt="" className="img-fluid" />
            {/* <h2>Cadet {"<"}Starboy{"/>"},</h2> */}
          </div>
        </div>
        <div className="row justify-content-center earns">
          <div className="col-md-8 text-center">
            <h3>
              Set <span style={{ color: "#E8356D" }}>Target</span>
              <br />
              duration
            </h3>
            <p className="my-5">Choose how much you will like to save</p>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <select
                      className="form-select target-form"
                      required
                      onChange={(e) => setDuration(e.target.value)}
                    >
                      <option selected>Select Duration</option>
                      <option value="3">3 Months</option>
                      <option value="6">6 Months</option>
                      <option value="9">9 Months</option>
                      <option value="12">12 Months</option>
                    </select>
                    {/* <input type="number" className="form-control target-form" placeholder="Enter Amount" required/> */}
                  </div>
                  <div className="mb-3">
                    {loading ? (
                      <Link
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                        style={{ width: "100%" }}
                      >
                        Loading
                      </Link>
                    ) : (
                      <button
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                        type="submit"
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

export default TargetPlanSetDuration;
