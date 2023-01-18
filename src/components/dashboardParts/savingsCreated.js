import React from "react";
import { Link } from "react-router-dom";
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
import psan from "../../img/dashboard/dibb.svg";
import withdraw from "../../img/dashboard/w-icon.svg";
import drims from "../../img/dashboard/drims.svg";
import grit from "../../img/dashboard/gritt.svg";
import clan from "../../img/dashboard/clann.svg";
import vlt from "../../img/dashboard/vlt.svg";
import graphy from "../../img/dashboard/dibgraph.svg";
import sta from "../../img/dashboard/statis.svg";
// import { useIdleTimer } from "react-idle-timer";
// import axios from "axios";
// import Cookies from "js-cookie";

function SavingsCreated() {
  // const navigate = useNavigate();

  // useNavigate

  // useNavigate

  // onClick={handleLogOut}

  // let user = JSON.parse(sessionStorage.getItem("user"));

  // const refreshToken = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://ardilla.herokuapp.com/ardilla/api/auth/refresh-token/${Cookies.get(
  //         "user"
  //       )}`
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     refreshToken();
  //   }, 6000);

  //   return () => clearInterval(interval);
  // }, []);

  // const handleOnIdle = () => {
  //   sessionStorage.clear();
  //   Cookies.remove("user");
  //   navigate("/login");
  //   console.log("last active", getLastActiveTime());
  // };

  // const { getLastActiveTime } = useIdleTimer({
  //   timeout: 1000 * 60 * 2,
  //   onIdle: handleOnIdle,
  //   events: [
  //     "mousemove",
  //     "keydown",
  //     "wheel",
  //     "DOMMouseScroll",
  //     "mousewheel",
  //     "mousedown",
  //     "touchstart",
  //     "touchmove",
  //     "MSPointerDown",
  //     "MSPointerMove",
  //     "visibilitychange",
  //   ],
  //   debounce: 500,
  // });

  // const handleLogOut = () => {
  //   Cookies.remove("user");
  //   sessionStorage.clear();
  //   navigate("/login");
  //   window.location.reload();
  // };
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
      <div className="content py-5 px-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card px-3 py-5 border inner-card three">
              <div className="d-flex flex-row p-2">
                <span className="me-4 san">Total Funds</span>
              </div>
              <div className="p-2 mt-3">
                <span className="amount">NGN 400,000.00</span>
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
            <div className="save-hist">
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
                    Savings Withdrawal rex
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
                    Savings Withdrawal rex
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
            <h4>My Savings Plan rex</h4>
          </div>
        </div>
        <div className="row">
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
                      style={{ background: "#FBBF24", borderColor: "#FBBF24" }}
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
          <div className="col-md-6 mb-3">
            <img src={sta} alt="" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <div className="new-pp" style={{ background: "#FDF1F5" }}>
              <div className="row">
                <div className="col-md-2 text-end">
                  <img src={drims} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <div className="dibb">
                    <div className="d-flex flex-row mb-2">
                      <h3>DREAMS</h3>
                      <span className="dibbg" style={{ background: "#F8BFD1" }}>
                        12% p.a
                      </span>
                    </div>
                    <p>
                      <span className="text-muted">Recent Top up:</span>{" "}
                      <span>20th December, 2022</span>
                    </p>
                    <div className="d-flex flex-row">
                      <Link
                        to="/target-plan"
                        className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                        style={{ background: "#E8356D", borderColor: "#E8356D" }}
                      >
                        Create Dreams
                      </Link>
                      <Link
                        to="/target-private"
                        className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                        style={{ background: "#E8356D", borderColor: "#E8356D" }}
                      >
                        View Dreams
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <img src={graphy} alt="dib" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="new-pp" style={{ background: "#F0FEFA" }}>
              <div className="row">
                <div className="col-md-2 text-end">
                  <img src={vlt} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <div className="dibb">
                    <div className="d-flex flex-row mb-2">
                      <h3>VAULT</h3>
                      <span className="dibbg" style={{ background: "#BAFCE8" }}>
                        12% p.a
                      </span>
                    </div>
                    <p>
                      <span className="text-muted">Recent Top up:</span>{" "}
                      <span>20th December, 2022</span>
                    </p>
                    <div className="d-flex flex-row">
                      <Link
                        to="/vault"
                        className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                        style={{ background: "#069669", borderColor: "#069669" }}
                      >
                        Create Vault
                      </Link>
                      <Link
                        to="/vaultplan-dashboard"
                        className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                        style={{ background: "#069669", borderColor: "#069669" }}
                      >
                        View Vault
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <img src={graphy} alt="dib" className="img-fluid w-100" />
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
          <div className="col-md-6">
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
                    <button
                      className="btn btn-outline-primary px-3 py-2 ardilla-btn-dib fs-6 mt-2 me-3"
                      style={{ background: "#8807F7", borderColor: "#8807F7" }}
                    >
                      Create a Grit
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

export default SavingsCreated;
