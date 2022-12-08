import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

function FlexPlanSpend() {
  const [exp, setExp] = useState();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const p = location.state.flexPlan.psr;
  const pDigit = location.state.flexPlan.cPsr;
  const ern = location.state.flexPlan.ern;

  console.log(pDigit);

  console.log(p);

  // const psr1 = p[0];
  // const psr2 = p[1].split("-")[1];
  // const psr3 = p[2].split("-")[1];

  // console.log(parseFloat(psr1));

  // const psrArray = [psr1, psr2, psr3];

  // console.log(psrArray);

  const handleSpend = (index) => {
    // let perc = [0.4, 0.6, 0.8];

    // rate

    // console.log(index);

    const diff = ern - pDigit[index];

    const rate = diff * 0.4;

    console.log("diff", diff, rate, index);

    // console.log("rate", rate, perc[index]);

    let fp = pDigit[index] * 6;

    // console.log("fp");

    // // console.log(psrArray[index]);

    // console.log(fp);

    setExp({ rate, fp });
  };

  let user = JSON.parse(sessionStorage.getItem("user"));

  const handleExp = async () => {
    setLoading(true);

    if (exp) {
      setLoading(false);

      navigate("/flex-type", { state: exp });
    } else {
      setLoading(false);
      setErr(true);
      setMsg("choose a plan first");
    }
  };

  const handleClickSuccess = () => {
    setOnSuccess(false);
  };
  return (
    <section className="main-dash">
      {err && (
        <div className="row justify-content-center">
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
        <div className="row justify-content-center mt-5">
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
      <div className="content py-5 px-5 earning-section step-two">
        <div className="row earning">
          <div className="col-md-6">
            <h2>
              Cadet {"<"}
              {user.kodeHex}
              {"/>"},
            </h2>
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
              {p.map((vl, index) => {
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
                      onClick={() => handleSpend(index)}
                    >
                      {vl}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mb-3">
              <div
                className="btn-group me-3"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-flex">
                  Enter Amount
                </button>
              </div>
            </div>
            <div>
              {loading ? (
                <button
                  className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                  style={{ width: "50%" }}
                >
                  Loading
                </button>
              ) : (
                <button
                  className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5"
                  style={{ width: "50%" }}
                  onClick={handleExp}
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

export default FlexPlanSpend;
