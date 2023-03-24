import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Icon } from '@iconify/react';

// import linear from "../../img/dashboard/linear.svg";
import stats from "../../img/dashboard/stats.svg";
import psan from "../../img/dashboard/p-san.svg";
import pinsurance from "../../img/dashboard/pinsurance.svg";
import psaving from "../../img/dashboard/p-saving.svg";
import pinvest from "../../img/dashboard/pinvest.svg";
import axios from "axios";

const data = [
  {
    name: '1M',
    // uv: 4000,
    pv: 2000,
    amt: 5000,
  },
  {
    name: '3M',
    // uv: 3000,
    pv: 7000,
    amt: 2210,
  },
  {
    name: '6M',
    // uv: 2000,
    pv: 4000,
    amt: 2290,
  },
  {
    name: '1Y',
    // uv: 2780,
    pv: 7000,
    amt: 2000,
  },
  {
    name: 'ALL',
    // uv: 1890,
    pv: 10000,
    amt: 2181,
  },
];


function PortfolioBody() {
  // const navigate = useNavigate();
  const [dillaWallet, setDillaWallet] = useState({});
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [value, setValue] = useState("");


  

  useEffect(() => {
    const getDillaWallet = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/dilla-wallet/get-dilla-wallet`,
          { withCredentials: true }
        );

        setDillaWallet(data.dillaWallet);
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
    getDillaWallet();
  }, []);

  return (
    <section className="home">
      {err && (
        <div className="row justify-content-center ardilla-alert">
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
        <Link to="/dashboard" >
          <div className="">
            <Icon icon="mingcute:home-3-line" className="me-4 fs-4" />
            <span className="mt-1">Home</span>
          </div>
        </Link>
        <Link to="/portfolio" className="active">
          <div className="">
            <Icon icon="material-symbols:work-outline" className="me-4 fs-4" />
            Portfolio
          </div>
        </Link>
        <Link to="/savings">
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
            <div className="d-flex flex-row">
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
            <div className="card px-3 py-5 bg-white border border-0 inner-card two">
              <div className="d-flex flex-row p-2">
                <span className="me-4 san">Dilla Wallet</span>
              </div>
              <div className="p-2 mt-3">
                {/* <span className="amount">USD 10,000.00</span> */}
                <span className="amount">
                  ₦{" "}
                  {Intl.NumberFormat("en-US").format(
                    dillaWallet?.accountBalance
                  )}
                </span>
                <i className="bi bi-eye-fill float-end text-white"></i>
              </div>
              <div className="mt-4 p-2">
                <div className="d-flex flex-row">
                  <label className="switch">
                    <input type="checkbox" placeholder="USD" />
                    <span className="slider round"></span>
                  </label>
                  <span className="text-white ms-2 mt-2 dollar-rate">
                    ₦740 /$1
                  </span>
                </div>

                <Link
                  className="float-end btn btn-outline-primary px-4 py-2 ardilla-btn-inverted fs-6"
                  to=""
                  style={{ marginTop: "-37px" }}
                >
                  Add Money
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
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
            <img
              src={stats}
              alt="statistic"
              className="img-fluid"
              width="100%"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="new-p text-center">
              <img src={psan} alt="san" className="img-fluid" />
              <h3 className="my-3">Savings</h3>
              <Link to="/savings-portfolio">
                View your savings portfolio{" "}
                <i className="bi bi-arrow-right-circle-fill"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="overlay">
              <div
                className="new-p text-center"
                style={{ background: "#FDF1F5" }}
              >
                <img src={psaving} alt="san" className="img-fluid" />
                <h3 className="my-3" style={{ color: "#E8356D" }}>
                  Budgeting
                </h3>
                <Link>
                  View your SAN portfolio{" "}
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 mb-3">
            <div
              className="new-p text-center overlay"
              style={{ background: "#F0FEFA" }}
            >
              <img src={pinvest} alt="san" className="img-fluid" />
              <h3 className="my-3" style={{ color: "#069669" }}>
                Investment
              </h3>
              <Link>
                View your investment portfolio{" "}
                <i className="bi bi-arrow-right-circle-fill"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div
              className="new-p text-center overlay"
              style={{ background: "#F8F0FF" }}
            >
              <img src={pinsurance} alt="san" className="img-fluid" />
              <h3 className="my-3" style={{ color: "#8807F7" }}>
                Insurance
              </h3>
              <Link>
                View your insurance portfolio{" "}
                <i className="bi bi-arrow-right-circle-fill"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioBody;
