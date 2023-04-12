import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/react-circular-progressbar/dist/styles.css";
import badge from "../../img/dashboard/b-cadet.svg";
import medal from "../../img/dashboard/medal.svg";
// import Cookies from "js-cookie";
import axios from "axios";
// import { useIdleTimer } from "react-idle-timer";
import chart from "../../img/dashboard/new-graph.png";
import donecheck from "../../img/dashboard/done-check.svg";
import ceo from "../../img/dashboard/ceo.svg";
import jar from "../../img/dashboard/new-jar.svg";
import shield from "../../img/dashboard/new-shield.svg";
import daylight from "../../img/dashboard/daylight.svg";
import op from "../../img/dashboard/op.svg";
import paywithcard from "../../img/paywithcard.svg";
import mc from "../../img/mc.svg";
import addnew from "../../img/addnew.svg";
import flutterwave from "../../img/flutterwave.svg";
import paystack from "../../img/paystack.svg";
import dwdapp from "../../img/dwd-app.svg";
import wii from "../../img/wii.svg";
import stand from "../../img/stand.svg";
import dillalogo from "../../img/dillalogo.svg";
import put from "../../img/put.svg";
import ir from "../../img/ir.svg";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Icon } from '@iconify/react';
// import Modal from 'react-bootstrap/Modal';
import CurrencyInput from 'react-currency-input-field';


// function AddMoney(props) {
//   const [dillaShow, setDillaShow] = React.useState(false);

//   return (
//     <Modal
//       {...props}
//       size=""
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       className="add-modal"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
          
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <div className="row t-card p-3 logo-modal">
//                 <div className="col-md-6">
//                   <img
//                     src={dillalogo}
//                     alt=""
//                     className="img-fluid"
//                   />
//                 </div>
//                 <div className="col-md-6 text-end mt-2">
//                   <h4>
//                    Available Balance: <span className="text-white">₦ 0</span>
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row mt-5 justify-content-center add-amount">
//             <div className="col-md-7 text-center">
//               <form>
//                 <div class="mb-3">
//                   <label for="exampleInputEmail1" class="form-label">Input Amount</label>
//                   <CurrencyInput
//                     prefix="₦"
//                     id="input-example"
//                     name="input-name"
//                     defaultValue={1000}
//                     className="form-control"
//                     decimalsLimit={2}
//                     onValueChange={(value, name) => console.log(value, name)}
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </Modal.Body>
//       <Modal.Footer className="text-center">
//         <button type="button" class="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6 my-4 w-100" data-bs-toggle="modal" data-bs-target="#topup-dilla">Continue</button>
//       </Modal.Footer>
//       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//               ...
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" class="btn btn-primary">Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <DillaMoney
//         show={dillaShow}
//         onHide={() => setDillaShow(false)}
//       />
//     </Modal>
    
//   );
// }




// function DillaMoney(props) {
//   return (
//     <Modal
//       {...props}
//       size=""
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       className="add-modal"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
          
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <div className="row t-card p-3 logo-modal">
//                 <div className="col-md-6">
//                   <img
//                     src={dillalogo}
//                     alt=""
//                     className="img-fluid"
//                   />
//                 </div>
//                 <div className="col-md-6 text-end mt-2">
//                   <h4>
//                    Available Balance: <span className="text-white">₦ 0</span>
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row mt-5">
//             <div className="col p-0">
//               Choose a Payment Method 
//               <div className="border p-3 mb-3">
//                 Bank Transfer
//                 <span className="float-end"><i className="bi bi-chevron-right"></i></span>
//               </div>
//               <div className="border p-3 mb-3">
//                 Bank Transfer
//                 <span className="float-end"><i className="bi bi-chevron-right"></i></span>
//               </div>
//               <div className="border p-3 mb-3">
//                 Bank Transfer
//                 <span className="float-end"><i className="bi bi-chevron-right"></i></span>
//               </div>
//               <div className="border p-3 mb-3">
//                 Bank Transfer
//                 <span className="float-end"><i className="bi bi-chevron-right"></i></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );



function Sidebar() {
  // const [modalShow, setModalShow] = React.useState(false);
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
                <Icon icon="pajamas:eye" className="float-end text-white" />
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

                <Link data-bs-toggle="modal" data-bs-target="#topup-dilla"
                  className="add-money float-end btn btn-outline-primary px-4 py-3 ardilla-btn-inverted fs-6 desktop"
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
                {/* <AddMoney
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                /> */}
                
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
                    NGN{" "}
                    {Intl.NumberFormat("en-US").format(
                      dillaWallet?.accountBalance
                    )}
                  </span>
                ) : (
                  <span className="amount">0</span>
                )}
                <Icon icon="pajamas:eye" className="float-end text-white" />
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
                <Link data-bs-toggle="modal" data-bs-target="#topup-dilla"
                  style={{ marginTop: "-14px" }}
                  className=" btn btn-outline-primary px-4 py-3 dilla-wallet-btn fs-6"
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
                <Icon icon="pajamas:eye" className="float-end" style={{color: "#3D007280"}} />
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
            <div className="card-new-one jar-bg">
              <img src={jar} alt="charts" className="img-fluid" />
              <h6 className="my-3">
                Build your savings, rise in<br/>the ranks
              </h6>
              <p>12% Monthly ROI</p>
              <Link to="/savings">
                Start Saving <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-3 text-center">
            <div className="card-new-one carder-bottom">
              <img src={op} alt="charts" className="img-fluid" />
              <h6 className="my-3">
                Become a top-ranked<br/>investor
              </h6>
              <p>20% Monthly ROI</p>
              <Link>
                Start Investing <span className="cs-dash">Coming Soon</span>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-3 text-center">
            <div className="card-new-one shield-bg">
              <img src={shield} alt="charts" className="img-fluid" />
              <h6 className="my-3">
                Safeguard your interests,<br/>get insured
              </h6>
              <p>12% Monthly ROI</p>
              <Link>
                Make your first claim <span className="cs-dash">Coming Soon</span>
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
                  <p>Move up your rank by engaging the various tools on the Ardilla platform.</p>
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
                <div className="col-md-7">
                  <h1 style={{ color: "#3C0071" }}>Beginner</h1>
                  <p>Earn more badges as you take courses and pass the Ardilla quiz on the learn more platform</p>
                </div>
                <div className="col-md-5 text-end">
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
              <p>Invite using your Kode Hex.</p>
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
                    <p>You can withdraw your interest immediately when you save with Grit. Click to get started now </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-wii">
                    <img src={ir} alt="" className="img-fluid"/>
                    <h2 className="my-4" style={{color: "#E8356D"}}>20% Interest Rate</h2>
                    <p>Enjoy upto 20% interest when you save with Grit on Ardilla. </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="bg-wii">
                    <img src={put} alt="" className="img-fluid"/>
                    <h2 className="my-4" style={{color: "#F59E0B"}}>Put your money to work</h2>
                    <p>Make your money work for you and earn passively when you save with Grit.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-wii">
                    <img src={stand} alt="" className="img-fluid"/>
                    <h2 className="my-4" style={{color: "#8807F7"}}>Stand out in the Ardilla community</h2>
                    <p>join the circle of high savers on Ardilla and get access to other amazing benefits</p>
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
            <h2>Clan</h2>
            <p className="mt-2">A Family that stay together stays forever</p>
            <button type="button" className="btn pe-none btn-outline-light footer-btn">
              Coming Soon
            </button>
          </div>
          <div className="col-md-3 text-center border-end mb-3">
            <h2>Invest With Hargon</h2>
            <p className="mt-2">Loan as an investment</p>
            <button type="button" className="btn pe-none btn-outline-light footer-btn">
              Coming Soon
            </button>
          </div>
          <div className="col-md-3 text-center border-end mb-3">
            <h2>Business with Ardilla</h2>
            <p className="mt-2">A Partnership where you Earn!</p>
            <button type="button" className="btn pe-none btn-outline-light footer-btn">
              Coming Soon
            </button>
          </div>
          <div className="col-md-3 text-center mb-3">
            <h2>Budgeting</h2>
            <p className="mt-2">Save while spending and watch your financial portfolio rise.</p>
            <button type="button" className="btn pe-none btn-outline-light footer-btn">
              Coming Soon
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* Top Up Modal */}
      <div
        className="modal add-modal fade"
        id="topup-dilla"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="row t-card p-3 logo-modal">
                      <div className="col-md-6">
                        <img
                          src={dillalogo}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6 text-end mt-2">
                        <h4>
                         Available Balance: <span className="text-white">₦ 0</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 justify-content-center add-amount">
                  <div className="col-md-7 text-center">
                    <form>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Input Amount</label>
                        <CurrencyInput
                          prefix="₦"
                          id="input-example"
                          name="input-name"
                          defaultValue={1000}
                          className="form-control"
                          decimalsLimit={2}
                          onValueChange={(value, name) => console.log(value, name)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6 my-4 w-100" data-bs-toggle="modal" data-bs-target="#selectpayment">Continue</button>
            </div>
          </div>
        </div>
      </div>

      {/* Select Payment */}
      <div
        className="modal add-modal curvy fade"
        id="selectpayment"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="row t-card p-3 logo-modal">
                      <div className="col-md-6">
                        <img
                          src={dillalogo}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6 text-end mt-2">
                        <h4>
                         Available Balance: <span className="text-white">₦ 0</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col p-0">
                    <span className="text-white" style={{fontSize: "14px"}}>Choose a Payment Method </span>
                    <div className="border p-3 mb-3 sel-pay">
                      <Link to="" data-bs-toggle="modal" data-bs-target="#banktransfer">Bank Transfer</Link>
                      <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                    </div>
                    <div className="border p-3 mb-3 sel-pay">
                      <Link to="" data-bs-toggle="modal" data-bs-target="#ussd">USSD</Link>
                      <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                    </div>
                    <div className="border p-3 mb-5 sel-pay">
                      <Link to="" data-bs-toggle="modal" data-bs-target="#cardpayment">Card</Link>
                      <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Transfer */}
      <div
        className="modal add-modal fade"
        id="banktransfer"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="row t-card p-3 logo-modal">
                      <div className="col-md-6">
                        <img
                          src={dillalogo}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6 text-end mt-2">
                        <h4>
                         Available Balance: <span className="text-white">₦ 0</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col tran-details">
                    <div mb-3>
                      <h3>Amount to pay :</h3>
                      <h3 className="float-end text-white" style={{fontWeight:"500", marginTop: "-25px"}}>NGN 30,250</h3>
                    </div>
                    <hr/>
                    <div>
                      <h3>Account Number :</h3>
                      <h3 className="float-end text-white" style={{fontWeight:"500", marginTop: "-25px"}}>1234567678 <i className="bi bi-files ms-2"></i></h3>
                    </div>
                    <hr/>
                    <div>
                      <h3>Bank :</h3>
                      <h3 className="float-end text-white" style={{fontWeight:"500", marginTop: "-25px"}}>Eyowo Bank</h3>
                    </div>
                    <hr/>
                    <div>
                      <h3>Name :</h3>
                      <h3 className="float-end text-white" style={{fontWeight:"500", marginTop: "-25px"}}>John Doe</h3>
                    </div>
                    <hr/>
                    <div>
                      <h3>Narration :</h3>
                      <h3 className="float-end text-white" style={{fontWeight:"500", marginTop: "-25px"}}>Billing</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6 my-4 w-100" data-bs-toggle="modal" data-bs-target="#paid">I Have Paid</button>
            </div>
          </div>
        </div>
      </div>

      {/* Paid */}
      <div
        className="modal add-modal curvy fade"
        id="paid"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row justify-content-center py-5 paid">
                  <div className="col-md-9 text-center">
                    <img src={donecheck} alt="" className="img-fluid" />
                    <h3 className="text-white mt-5 mb-3">Deposit In-review</h3>
                    <p>Your deposit has been processed and is being reviewed, your Dilla wallet will be credited accordingly. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Payment  */}
      <div
        className="modal add-modal curvy fade"
        id="cardpayment"
        tabIndex="-1"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="row t-card p-3 logo-modal">
                      <div className="col-md-6">
                        <img
                          src={paywithcard}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col p-0">
                    <span className="text-white" style={{fontSize: "14px"}}>Select Card </span>
                    <div className="border p-3 mb-3 sel-pay">
                      <Link to="" data-bs-toggle="modal" data-bs-target="#cardoptions"><img src={mc} alt="" className="img-fluid" /></Link>
                      <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                    </div>
                    <div className="border p-3 mb-5 sel-pay">
                      <Link to="" data-bs-toggle="modal" data-bs-target="#cardoptions"><img src={addnew} alt="" className="img-fluid" width="101px" /></Link>
                      <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Options */}
      <div
        className="modal add-modal curvy fade"
        id="cardoptions"
        tabIndex="-1"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="row t-card p-3 logo-modal">
                      <div className="col-md-6">
                        <img
                          src={paywithcard}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col p-0">
                    <span className="text-white" style={{fontSize: "14px"}}>Select Card </span>
                    <div className="border p-3 mb-3 sel-pay text-center">
                      <Link to="" data-bs-toggle="modal" data-bs-target="#topup-card"><img src={paystack} alt="" className="img-fluid" /></Link>
                    </div>
                    <div className="border p-3 mb-5 sel-pay text-center">
                      <Link to="" data-bs-toggle="modal" data-bs-target="#topup-card"><img src={flutterwave} alt="" className="img-fluid" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Input  */}
       <div
        className="modal add-modal fade"
        id="topup-card"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="row t-card p-3 logo-modal">
                      <div className="col-md-6">
                        <img
                          src={dillalogo}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6 text-end mt-2">
                        <h4>
                         <span className="text-white">**** **** 4574</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 justify-content-center add-amount">
                  <div className="col-md-7 text-center">
                    <form>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Input Amount</label>
                        <CurrencyInput
                          prefix="₦"
                          id="input-example"
                          name="input-name"
                          defaultValue={1000}
                          className="form-control"
                          decimalsLimit={2}
                          onValueChange={(value, name) => console.log(value, name)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer text-center">
              <div className="text-center mb-4">
                <p>₦250.00 <span style={{color: "#9CA3AF" , fontWeight: "400"}}>(1.5% fee caped at ₦250) </span></p>
              </div>
              <button type="button" class="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6 my-4 w-100" data-bs-toggle="modal" data-bs-target="#auth">Pay</button>
            </div>
          </div>
        </div>
      </div>

      {/* Auth */}
      <div
        className="modal add-modal curvy fade"
        id="auth"
        tabIndex="-1"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="row t-card p-3 logo-modal">
                      <div className="col-md-6">
                        <img
                          src={dillalogo}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6 text-end mt-2">
                        <h4>
                         <span className="text-white">**** **** 4574</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col text-center">
                    <span className="text-white" style={{fontSize: "14px"}}>Authentification </span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col tran-details">
                    <div className="mb-5">
                      <h3>Amount :</h3>
                      <h3 className="float-end text-white" style={{fontWeight:"500", marginTop: "-25px"}}>NGN 30,250</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* USSD */}
      <div
        className="modal add-modal fade"
        id="ussd"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="row t-card p-3 logo-modal">
                      <div className="col-md-6">
                        <img
                          src={dillalogo}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6 text-end mt-2">
                        <h4>
                         Available Balance: <span className="text-white">₦ 0</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 justify-content-center add-amount">
                  <div className="col-md-7 text-center">
                    <form>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Amount to pay</label>
                        <h4 className="text-white fw-bold">₦30,250.00</h4>
                      </div>
                    </form>
                  </div>
                </div>
                <hr/>
                <div className="row mt-4 justify-content-center">
                  <div className="col text-center">
                    <label className="form-label">Dial this code to complete the transaction</label>
                    <h4 className="text-white fw-bold">*949*2004434887*30250#</h4>
                  </div>
                </div>
                <div className="row justify-content-end mt-3">
                  <div className="col-md-4">
                    <form>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>GTBank</option>
                        <option value="1">Globus Bank</option>
                        <option value="2">Access Bank</option>
                        <option value="3">Sterling Bank</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-outline-primary px-5 py-3 ardilla-btn outline-btn fs-6 my-4 w-100" data-bs-toggle="modal" data-bs-target="#paid">I Have Paid</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Sidebar;
