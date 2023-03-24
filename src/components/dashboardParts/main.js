import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/react-circular-progressbar/dist/styles.css";
import badge from "../../img/dashboard/b-cadet.svg";
import medal from "../../img/dashboard/medal.svg";
// import Cookies from "js-cookie";
import axios from "axios";
// import { useIdleTimer } from "react-idle-timer";
import chart from "../../img/dashboard/new-graph.png";
import ceo from "../../img/dashboard/ceo.svg";
import jar from "../../img/dashboard/new-jar.svg";
import shield from "../../img/dashboard/new-shield.svg";
import daylight from "../../img/dashboard/daylight.svg";
import op from "../../img/dashboard/op.svg";
import dwdapp from "../../img/dwd-app.svg";
import wii from "../../img/wii.svg";
import ir from "../../img/ir.svg";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Icon } from '@iconify/react';
function Sidebar() {
  const [dillaWallet, setDillaWallet] = useState();
  const [sanBalance, setSanBalance] = useState();
  const [userDetails, setUserDetails] = useState();
  const [totalBalance, setTotalBalance] = useState("");
  const [value, setValue] = useState("");


  useEffect(() => {
    const getDillaWallet = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/dilla-wallet/get-dilla-wallet`,
          { withCredentials: true }
        );

        setDillaWallet(data.dillaWallet);

        console.log("dillaWallet", data);
      } catch (error) {
        console.log(error);
      }
    };

    const getSanAcct = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/san/get-san-account`,
          { withCredentials: true }
        );

        setSanBalance(data.sanAccount);
        console.log("san", data);
      } catch (error) {
        console.log(error);
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

    getUserById();
    getDillaWallet();
    getSanAcct();
    calculateTotal();
    // generateAccount();
  }, []);

  const time = new Date().getHours();

  let greeting;

  if (time < 12) {
    greeting = "Good morning, ";
  } else if (time <= 18) {
    greeting = "Good Afternoon, ";
  } else {
    greeting = "Good evening, ";
  }

  console.log(greeting);
  return (
    <section className="home">
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
        <Link to="/dashboard" className="active">
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
        {/* <div className="container-fluid"> */}
        <div className="row kodename">
          <div className="col-md-6">
            {/* <h2>
              Welcome {"<"}
              {user?.kodeHex}
              {"/>"}
            </h2> */}
            <h6 className="mt-4">
              {/* Good Morning. */}
              {greeting}
              {/* {dayjs(`${date} ${time}`).greet()}.{" "} */}
              <img src={daylight} alt="day" className="img-fluid ms-3" />
            </h6>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card px-3 py-5 border border-0 inner-card one">
              <div className="d-flex flex-row p-2">
                <span className="me-4 san">SAN</span>
                <span className="roi">+10.00%</span>
              </div>
              <div className="p-2 mt-3">
                {sanBalance ? (
                  <span className="amount">
                    NGN{" "}
                    {Intl.NumberFormat("en-US").format(
                      sanBalance?.accountBalance
                    )}
                  </span>
                ) : (
                  <span className="amount">0</span>
                )}
                {/* <span className="amount">
                  NGN {Intl.NumberFormat("en-US").format(sanBalance)}
                </span> */}
                <i className="bi bi-eye-fill float-end text-white"></i>
              </div>
              <div className="mt-2 p-2">
                {userDetails?.uid ? (
                  <div className="details">
                    <span className="hash">{userDetails?.uid}</span>
                    <br />
                    <Link className="generate">
                      {userDetails?.firstname} {userDetails?.lastname}
                      {/* Generate Account Number{" "}
                      <i className="bi bi-arrow-right-circle-fill"></i> */}
                    </Link>
                  </div>
                ) : (
                  <div className="details">
                    <span className="hash">**********</span>
                    <br />
                    <Link className="generate" to="/profile/kyc">
                      {/* {userDetail?.firstname} {userDetail?.lastname} */}
                      Generate Account Number{" "}
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </Link>
                  </div>
                )}

                <Link
                  className="add-money float-end btn btn-outline-primary px-4 py-2 ardilla-btn-inverted fs-6 desktop"
                  to=""
                >
                  Add Money
                </Link>
                <Link
                  className="btn btn-outline-primary px-4 py-2 ardilla-btn fs-6 mobile mt-2"
                  to=""
                >
                  Add Money
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card px-3 py-5 bg-white border border-0 inner-card two">
              <div className="d-flex flex-row p-2">
                <span className="me-4 san">Dilla Wallet</span>
              </div>
              <div className="p-2 mt-3">
                {/* <span className="amount">
                  USD {Intl.NumberFormat("en-US").format(dillaWallet)}
                </span> */}
                {dillaWallet ? (
                  <span className="amount">
                    USD{" "}
                    {Intl.NumberFormat("en-US").format(
                      dillaWallet?.accountBalance
                    )}
                  </span>
                ) : (
                  <span className="amount">0</span>
                )}
                <i className="bi bi-eye-fill float-end text-white"></i>
              </div>
              <div className="mt-4 p-2">
                {/* <div className="d-flex flex-row">
                  <label className="switch">
                    <input type="checkbox" placeholder="USD" />
                    <span className="slider round"></span>
                  </label>
                  <span className="text-white ms-2 mt-2 dollar-rate">
                    ₦740 /$1
                  </span>
                </div> */}
                <Link
                  style={{ marginTop: "-7px" }}
                  className=" btn btn-outline-primary px-4 py-2 dilla-wallet-btn fs-6"
                  to=""
                >
                  Add Money
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card px-3 py-5 border inner-card three">
              <div className="d-flex flex-row p-2">
                <span className="me-4 san">Total Funds</span>
              </div>
              <div className="p-2 mt-3">
                {totalBalance ? (
                  <span className="amount">
                    NGN {Intl.NumberFormat("en-US").format(totalBalance)}{" "}
                  </span>
                ) : (
                  <span className="amount">0</span>
                )}
                {/* <span className="amount">
                  NGN{" "}
                  {Intl.NumberFormat("en-US").format(dillaWallet + sanBalance)}{" "}
                </span> */}
                <i className="bi bi-eye-fill float-end"></i>
              </div>
              {/* <div className="mt-4 p-2">
                <div className="d-flex flex-row">
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
              </div> */}
            </div>
          </div>
        </div>

        {userDetails?.kycPoints < 100 && (
          <div className="row kyc new-kyc">
            <div className="col">
              <div className="complete-your-kyc">
                <div className="row">
                  <div className="col-md-3 text-center mt-1">
                    <Link
                      className="btn btn-outline-primary px-4 py-2 ardilla-btn fs-6"
                      to="/profile/kyc"
                    >
                      Complete Your KYC <i className="bi bi-chevron-right ms-2"></i>
                    </Link>
                  </div>
                  <div className="col-md-8" style={{marginTop: "12px"}}>
                    <ProgressBar className="pro-kyc" now={70} />
                  </div>
                  <div className="col-md-1 mt-2">
                    <h5>75<span style={{fontSize: "12px"}}>%</span></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <div className="row kyc new-kyc">
          <div className="col-md-6">
            <h3>Complete KYC</h3>
          </div>
        </div> */}

        <div className="row roi-cards">
          {/* {userDetails?.kycPoints < 100 && (
            <div className="col-md-4 mb-3">
              <div className="card py-5 px-3 kyc-card border border-0 inner-card">
                <div className="row">
                  <div className="col-md-6 text-center color-link">
                    <CircularProgressbar
                      value={value}
                      maxValue={1}
                      text={`${value * 100}%`}
                    />
                    <Link to="/profile/kyc">
                      Complete your KYC <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="form-check mb-2">
                      {userDetails?.contact ? (
                        <input
                          className="form-check-input red"
                          type="checkbox"
                          defaultChecked
                          disabled
                        />
                      ) : (
                        <input
                          className="form-check-input red"
                          type="checkbox"
                          disabled
                        />
                      )}

                      <label className="form-check-label custom-check ">
                        Add Phone Number
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      {userDetails?.bvn ? (
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                          disabled
                        />
                      ) : (
                        <input
                          className="form-check-input"
                          type="checkbox"
                          disabled
                        />
                      )}

                      <label className="form-check-label custom-check">
                        Add Your BVN
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      {userDetails?.utilityBillStatus === "approved" ? (
                        <input
                          className="form-check-input red"
                          type="checkbox"
                          defaultChecked
                          disabled
                        />
                      ) : (
                        <input
                          className="form-check-input red"
                          type="checkbox"
                          disabled
                        />
                      )}

                      <label className="form-check-label custom-check">
                        Upload your Utility bill
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      {userDetails?.idFrontStatus === "approved" &&
                      userDetails?.idFrontStatus === "approved" ? (
                        <input
                          className="form-check-input"
                          type="checkbox"
                          disabled
                          defaultChecked
                        />
                      ) : (
                        <input
                          className="form-check-input"
                          type="checkbox"
                          disabled
                        />
                      )}

                      <label className="form-check-label custom-check">
                        Upload Your Valid ID
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}
          <div className="col-md-4">
            <Link to="/downloadardilla" className="dwd-app">
              <img src={dwdapp} alt="download" className="img-fluid w-100" />
            </Link>
          </div>
          {/* old code goes here incase */}
          <div className="col-md-8 px-5">
            <img src={chart} alt="" className="img-fluid chartjs" />
          </div>
        </div>
        <div className="row roi-cards">
          <div className="col-md-4 mb-3 text-center">
            <div className="card-new-one carder-bottom">
              <img src={op} alt="charts" className="img-fluid" />
              <h6 className="my-3">
                Unprecedented access to
                <br />
                investment opportunities
              </h6>
              <p>20% Monthly ROI</p>
              <Link>
                Start Investing <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-3 text-center">
            <div className="card-new-one jar-bg">
              <img src={jar} alt="charts" className="img-fluid" />
              <h6 className="my-3">
                Build your savings the
                <br />
                right way
              </h6>
              <p>20% Monthly ROI</p>
              <Link to="/savings">
                Start Saving <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-3 text-center">
            <div className="card-new-one shield-bg">
              <img src={shield} alt="charts" className="img-fluid" />
              <h6 className="my-3">
                Insurance policies you
                <br />
                can trust
              </h6>
              <p>20% Monthly ROI</p>
              <Link>
                Make your first claim <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row goals">
          <Link to="/ranks" className="col-md-4 mb-3">
            <h2 className="mb-4">Rank</h2>
            <div className="goal-card px-4">
              <div className="row">
                <div className="col-md-5">
                  <h1>Cadet</h1>
                  <p>Move up your Rank by completing transactions</p>
                </div>
                <div className="col-md-7 text-end">
                  <img
                    src={badge}
                    alt="cadet"
                    className="img-fluid"
                    width="200px"
                  />
                </div>
              </div>
            </div>
          </Link>
          <div className="col-md-4 mb-3">
            <h2 className="mb-4">Badges</h2>
            <div className="goal-card beginner-card px-4">
              <div className="row">
                <div className="col-md-5">
                  <h1 style={{ color: "#3C0071" }}>Beginner</h1>
                  <p>Move up your Rank by completing transactions</p>
                </div>
                <div className="col-md-7 text-end">
                  <img
                    src={medal}
                    alt="cadet"
                    className="img-fluid medal-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <Link to="/profile/referral" className="col-md-4 mb-3">
            <h2 className="mb-4">Referrals</h2>
            <div className="goal-card refer-bg px-4">
              <h1 style={{ color: "#3C0071" }}>Earn</h1>
              <small>Invite using your Kode Hex.</small>
              <h6 className="mt-5">
                Click here <i className="bi bi-arrow-right"></i>
              </h6>
            </div>
          </Link>
        </div>
        <div className="home-grit">
          <div className="row">
            <div className="col-md-7">
              <h3>Grit</h3>
              <h6 className="mt-4">Our coaches are available all day for your questions or consultations. Schedule a meeting or start a chat anytime. Get unfettered access to<br/>financial advice you can trust.</h6>
            </div>
            <div className="col-md-5 text-end" style={{marginTop: "70px"}}>
              <Link to="/grit"><i className="bi bi-arrow-right fs-4"></i></Link>
            </div>
          </div>
          <Swiper 
            navigation={false}  
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }} 
            modules={[Autoplay, Navigation]} 
            className="mySwiper"
            >
            <SwiperSlide>
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="bg-wii">
                    <img src={wii} alt="" className="img-fluid"/>
                    <h2 className="my-4">Withdraw Interest Immediately</h2>
                    <p>Our coaches are available all day for your questions or consultations. Schedule<br/>a meeting or start a chat anytime. Get </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-wii">
                    <img src={ir} alt="" className="img-fluid"/>
                    <h2 className="my-4" style={{color: "#E8356D"}}>20% Interest Rate</h2>
                    <p>Our coaches are available all day for your questions or consultations. Schedule<br/> a meeting or start a chat anytime. Get </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="bg-wii">
                    <img src={wii} alt="" className="img-fluid"/>
                    <h2 className="my-4">Withdraw Interest Immediately</h2>
                    <p>Our coaches are available all day for your questions or consultations. Schedule<br/>a meeting or start a chat anytime. Get </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-wii">
                    <img src={ir} alt="" className="img-fluid"/>
                    <h2 className="my-4" style={{color: "#E8356D"}}>20% Interest Rate</h2>
                    <p>Our coaches are available all day for your questions or consultations. Schedule<br/> a meeting or start a chat anytime. Get </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="row goals">
          <h2 className="mb-4">Money Wise</h2>
          <div className="m-wise">
            <div className="row">
              <div className="col-md-7">
                <h1>Financial Boot Camp</h1>
                <p className="mt-4">
                  Don’t just save & invest, become a financial guru while at it.
                </p>
                <Link to="/learn" className="mt-5">
                  Click here <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
              <div className="col-md-5">
                <img src={ceo} alt="ceo" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row support-card p-5">
          <div className="col-md-6 mt-3">
            <h4>Get Introduced to your personal dilla coach</h4>
            <h6 className="mt-4">
              Start a money relationship today
              <i className="bi bi-arrow-right"></i>
            </h6>
          </div>
          <div className="col-md-6 desktop">
            <div className="d-flex flex-row">
              <div className="support-img">
                <img src={call} alt="" className="img-fluid" />
                <p>Call</p>
              </div>
              <div className="support-img support-img-left">
                <img src={chats} alt="" className="img-fluid" />
                <p>Chat</p>
              </div>
              <div className="support-img support-img-left">
                <img src={mp} alt="" className="img-fluid" />
                <p>Video</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row goals">
          <div className="col-md-6">
            <h2 className="mb-4">Explore</h2>
          </div>
        </div>
        <div className="row footer-dashboard">
          <div className="col-md-3 text-center border-end mb-3">
            <h2>My Family and I</h2>
            <p className="mt-2">A Family that stay together stays forever</p>
            <button type="button" className="btn btn-outline-light footer-btn">
              Coming Soon
            </button>
          </div>
          <div className="col-md-3 text-center border-end mb-3">
            <h2>Invest With Hargon</h2>
            <p className="mt-2">Loan as an investment</p>
            <button type="button" className="btn btn-outline-light footer-btn">
              Coming Soon
            </button>
          </div>
          <div className="col-md-3 text-center border-end mb-3">
            <h2>Business with Ardilla</h2>
            <p className="mt-2">A Partnership where you Earn!</p>
            <button type="button" className="btn btn-outline-light footer-btn">
              Coming Soon
            </button>
          </div>
          <div className="col-md-3 text-center mb-3">
            <h2>Tax Save</h2>
            <p className="mt-2">Where you save while spending</p>
            <button type="button" className="btn btn-outline-light footer-btn">
              Coming Soon
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Sidebar;
