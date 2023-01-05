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
import linear from "../../img/dashboard/linear.svg";
import stats from "../../img/dashboard/stats.svg";
import psan from "../../img/dashboard/p-san.svg";
import pinsurance from "../../img/dashboard/pinsurance.svg";
import psaving from "../../img/dashboard/p-saving.svg";
import pinvest from "../../img/dashboard/pinvest.svg";
// import { useIdleTimer } from "react-idle-timer";
// import Cookies from "js-cookie";
// import axios from "axios";

function PortfolioBody() {
  // const navigate = useNavigate();
  // const [dillaWallet, setDillaWallet] = useState({});

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
  //   const getDillaWallet = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `https://ardilla.herokuapp.com/ardilla/api/dilla-wallet/get-dilla-wallet/${user._id}`
  //       );

  //       setDillaWallet(data.dillaWallet.accountBalance);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getDillaWallet();
  // }, [user]);

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
        <Link to="/portfolio" className="active">
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
            <div className="card px-3 py-5 bg-white border border-0 inner-card two">
              <div className="d-flex flex-row p-2">
                <span className="me-4 san">Dilla Wallet</span>
              </div>
              <div className="p-2 mt-3">
                <span className="amount">
                  USD 10,000.00
                </span>
                <i className="bi bi-eye-fill float-end text-white"></i>
              </div>
              <div className="mt-4 p-2">
                <div className="d-flex flex-row">
                  <label className="switch">
                    <input type="checkbox" placeholder="USD" />
                    <span className="slider round"></span>
                  </label>
                  <span className="text-white ms-2 mt-2 dollar-rate">₦740 /$1</span>
                </div>
              
                <Link
                  className="float-end btn btn-outline-primary px-4 py-2 ardilla-btn-inverted fs-6"
                  to="" style={{marginTop: "-37px"}}
                >
                  Add Money
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7 text-end">
            <img src={linear} alt="chart" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6 value">
                <h6 className="mb-2">Market value</h6>
                <div className="d-flex flex-row">
                  <h2 className="mb-2 me-3">-NGN 2000 (5%)</h2>
                  <h3 className="mt-2">+4.oo% (₦5,000.00)</h3>
                </div>
                <p>
                  Updated September 16, 2022{" "}
                  <i className="bi bi-clock-history"></i>
                </p>
              </div>
              <div className="col-md-6 value">
                <h6 className="mb-2">Today’s change</h6>
                <div className="d-flex flex-row">
                  <h2 className="mb-2 me-3">NGN 2000 (5%)</h2>
                  <h3 className="mt-2">+4.oo% (₦5,000.00)</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <img src={stats} alt="statistic" className="img-fluid" width="100%" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="new-p text-center">
              <img src={psan} alt="san" className="img-fluid" />
              <h3 className="my-3">Savings</h3>
              <Link to="/">View your savings portfolio <i className="bi bi-arrow-right-circle-fill"></i></Link>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="new-p text-center" style={{background:"#FDF1F5"}}>
              <img src={psaving} alt="san" className="img-fluid" />
              <h3 className="my-3" style={{color: "#E8356D"}}>SAN</h3>
              <Link>View your SAN portfolio <i className="bi bi-arrow-right-circle-fill"></i></Link>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 mb-3">
            <div className="new-p text-center" style={{background: "#F0FEFA"}}>
              <img src={pinvest} alt="san" className="img-fluid" />
              <h3 className="my-3" style={{color: "#069669"}}>Investment</h3>
              <Link>View your investment portfolio <i className="bi bi-arrow-right-circle-fill"></i></Link>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="new-p text-center" style={{background: "#F8F0FF"}}>
              <img src={pinsurance} alt="san" className="img-fluid" />
              <h3 className="my-3" style={{color: "#8807F7"}}>Insurance</h3>
              <Link>View your insurance portfolio <i className="bi bi-arrow-right-circle-fill"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioBody;
