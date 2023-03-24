import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import psan from "../../img/dashboard/dibb.svg";
import withdraw from "../../img/dashboard/w-icon.svg";
import drims from "../../img/dashboard/drims.svg";
import grit from "../../img/dashboard/gritt.svg";
import clan from "../../img/dashboard/clann.svg";
import vlt from "../../img/dashboard/vlt.svg";
import axios from "axios";
import graphy from "../../img/dashboard/dibgraph.svg";

function SavingsBody() {
  const [flexAcct, setFlexAcct] = useState();
  const [tb, setTb] = useState();
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [totalBalance, setTotalBalance] = useState("");
  const [userDetails, setUserDetails] = useState();
  const [setValue] = useState("");

  useEffect(() => {
    const getFlexAccount = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/flex/get-flex-account`,
          { withCredentials: true }
        );

        setFlexAcct(data.flexPlan);
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

    const calculateTotal = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/user/total-Balance`,
          {
            withCredentials: true,
          }
        );

        setTotalBalance(data.totalBalance);
        console.log("Total Balance", data);
      } catch (error) {
        console.log(error);
      }
    };

    const getTargetBalance = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/target/get-target-plans`,
          { withCredentials: true }
        );

        setTb(data.targetPlan);
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

    const getUserById = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/user/get-user`,
          {
            withCredentials: true,
          }
        );

        setUserDetails(data.user);
        const calculateKycProgress = data.user.kycPoints / 100;
        setValue(calculateKycProgress);
        console.log("user", data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserById();

    // getUserById();
    getFlexAccount();
    calculateTotal();
    getTargetBalance();
  }, []);

  console.log(flexAcct);

  console.log(tb);

  console.log("wednesday");

  return (
    <section className="home">
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
        <div className="row">
          <div className="col cadet-name">
            <h2>
               Cadet {"<"}
              {userDetails?.kodeHex}
              {"/>"},
            </h2>
          </div>
        </div>
        <Link to="/dashboard">
          <div className="">
            <Icon icon="mingcute:home-3-line" className="me-4 fs-4" />
            <span className="mt-1">Home</span>
          </div>
        </Link>
        <Link to="/portfolio">
          <div className="">
            <Icon icon="material-symbols:work-outline" className="me-4 fs-4" />
            Portfolio
          </div>
        </Link>
        <Link to="/savings" className="active">
          <div className="">
            <Icon icon="material-symbols:energy-savings-leaf-outline-rounded" className="me-4 fs-4" />
            Savings
          </div>
        </Link>
        <Link>
          <div className="">
            <Icon icon="fluent:arrow-growth-20-filled" className="me-4 fs-4" />
            Investments <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link>
          <div className="">
            <Icon icon="ic:baseline-security" className="me-4 fs-4" />
            Insurance <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <a href="/dilla">
          <div className="">
            <Icon icon="ion:wallet-outline" className="me-4 fs-4" />
            Dilla
          </div>
        </a>
        <Link>
          <div className="">
            <Icon icon="ic:outline-explore" className="me-4 fs-4" />
            Budgeting <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link to="/learn">
          <div className="">
            <Icon icon="simple-icons:sololearn" className="me-4 fs-5" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link to="/payment">
            <div className="">
              <Icon icon="fluent:payment-32-regular" className="me-4 fs-4" />
              Payment
            </div>
          </Link>
          <Link to="/financial-coach">
            <div className="">
              <Icon icon="bx:support" className="me-4 fs-4" />
              Financial Coach
            </div>
          </Link>
          <Link>
            <div className="">
              <Icon icon="bx:log-out-circle" className="me-4 fs-4" />
              Log Out
            </div>
          </Link>
        </div>
      </div>
      <div className="content py-5 px-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card px-3 py-5 border inner-card three">
              <div className="d-flex flex-row p-2">
                <span className="me-4 san">Total Funds</span>
              </div>
              <div className="p-2 mt-3">
                <span className="amount">
                  NGN{" "}
                  {totalBalance &&
                    Intl.NumberFormat("en-US").format(totalBalance)}
                </span>
                <i className="bi bi-eye-fill float-end"></i>
              </div>
              <div className="d-flex flex-row mt-3">
                <label className="switch">
                  <input type="checkbox" placeholder="USD" />
                  <span className="slider round"></span>
                </label>
                <span
                  className="ms-2 mt-2 dollar-rate"
                  style={{ color: "#B69FC9" }}
                >
                  ₦740 /$1
                </span>
              </div>
            </div>
            <div className="mt-4 saving-learn">
              <Link>
                Learn More about savings <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <div className="save-hist savings-feed">
              <div className="">
                <h3>History</h3>
                <h4 className="float-end">See all</h4>
              </div>
              <div className="row mt-5">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-md-6" style={{ marginTop: "-7px" }}>
                  <h6>
                    <img
                      src={withdraw}
                      alt="withdraw"
                      className="img-fluid me-2"
                    />{" "}
                    Savings Withdrawal
                  </h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>1 hr ago</h6>
                </div>
                <div className="col-md-3 text-end">
                  <h6>₦4,000.00 </h6>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="row my-5 title-save">
          <div className="col">
            <h4>Create a new savings plan</h4>
          </div>
        </div>
        <div className="row">
          {flexAcct && flexAcct?.activatePlan ? (
            <div className="col-md-6 mb-3">
              <div className="new-pp">
                <div className="row">
                  <div className="col-md-2 text-end">
                    <img src={psan} alt="" className="img-fluid" />
                  </div>
                  <div className="col-md-6">
                    <div className="dibb">
                      <div className="d-flex flex-row mb-2">
                        <h3>DIB</h3>
                        <span className="dibbg">12% p.a</span>
                      </div>
                      <p>
                        <span className="text-muted">Recent Top up:</span>{" "}
                        <span>20th December, 2022</span>
                      </p>
                      <Link
                        to="/flexplan-dashboard"
                        className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                        style={{
                          background: "#FBBF24",
                          borderColor: "#FBBF24",
                        }}
                      >
                        View Dib
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <img src={graphy} alt="dib" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-md-6 mb-3">
              <div className="new-pp">
                <div className="row">
                  <div className="col-md-2 text-end">
                    <img src={psan} alt="" className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <div className="dibb">
                      <div className="d-flex flex-row mb-2">
                        <h3>DIB</h3>
                        <span className="dibbg">12% p.a</span>
                      </div>
                      <p>
                        Everyone needs an emergency fund. We make it DIBible and
                        <br />
                        automatic.
                      </p>
                      <Link
                        to="/flex-plan"
                        className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                        style={{
                          background: "#FBBF24",
                          borderColor: "#FBBF24",
                        }}
                      >
                        Create a DIB Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* land */}
          <div className="col-md-6 mb-3">
            <div className="new-pp" style={{ background: "#FDF1F5" }}>
              <div className="row">
                <div className="col-md-2 text-end">
                  <img src={drims} alt="" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="dibb">
                    <div className="d-flex flex-row mb-2">
                      <h3>DREAMS</h3>
                      <span className="dibbg" style={{ background: "#F8BFD1" }}>
                        12% p.a
                      </span>
                    </div>
                    <p>
                      Dreams do come through. Save up for that dream phone, car,
                      house, or any other goal you have.
                    </p>
                    <Link
                      to="/target-plan"
                      className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                      style={{ background: "#E8356D", borderColor: "#E8356D" }}
                    >
                      Create a Dream
                    </Link>
                    {tb?.length > 0 && (
                      <Link
                        to="/target-private"
                        className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                        style={{
                          background: "#E8356D",
                          borderColor: "#E8356D",
                        }}
                      >
                        View Dream Plans
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <div className="new-pp" style={{ background: "#F0FEFA" }}>
              <div className="row">
                <div className="col-md-2 text-end">
                  <img src={vlt} alt="" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="dibb">
                    <div className="d-flex flex-row mb-2">
                      <h3>VAULT</h3>
                      <span className="dibbg" style={{ background: "#BAFCE8" }}>
                        12% p.a
                      </span>
                    </div>
                    <p>
                      Make your money, make more money. Lock up your extra cash
                      and make a profit,
                      <br />
                      rather than spending it all and wondering what happened.
                    </p>
                    <Link
                      to="/vault"
                      className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                      style={{ background: "#069669", borderColor: "#069669" }}
                    >
                      Create a Vault
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="new-pp overlay">
              <div className="row">
                <div className="col-md-2 text-end">
                  <img src={grit} alt="" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="dibb">
                    <div className="d-flex flex-row mb-2">
                      <h3>GRIT</h3>
                      <span className="dibbg" style={{ background: "#F6EBFE" }}>
                        12% p.a
                      </span>
                    </div>
                    <p>
                      For the big-time savers. Save more and get more
                      <br />
                      interest.
                    </p>
                    <Link to="/grit"
                      className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                      style={{ background: "#8807F7", borderColor: "#8807F7" }}
                    >
                      Create a Grit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <div className="new-pp overlay">
              <div className="row">
                <div className="col-md-2 text-end">
                  <img src={clan} alt="" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="dibb">
                    <div className="d-flex flex-row mb-2">
                      <h3>CLAN</h3>
                      <span className="dibbg" style={{ background: "#F6EBFE" }}>
                        12% p.a
                      </span>
                    </div>
                    <p>
                      The family matters. Save collectively or individually for
                      your <br />
                      family members.
                    </p>
                    <button
                      className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                      style={{ background: "#8807F7", borderColor: "#8807F7" }}
                    >
                      Create a Clan
                    </button>
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

export default SavingsBody;
