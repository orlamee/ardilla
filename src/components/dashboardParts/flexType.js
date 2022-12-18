import React, { useEffect, useState } from "react";
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
import contact from "../../img/dashboard/contact.svg";
import chat from "../../img/dashboard/chat.svg";
import axios from "axios";

function TypeFlex() {
  const [flexAcct, setFlexAcct] = useState();
  let user = JSON.parse(sessionStorage.getItem("user"));

  // const navigate = useNavigate();

  useEffect(() => {
    const getFlexAccount = async () => {
      try {
        const { data } = await axios.get(
          `https://ardilla.herokuapp.com/ardilla/api/flex-plan/get-flex-account/${user._id}`
        );

        // console.log(data);
        setFlexAcct(data.flexPlan);
        // setLoading(false);
        // navigate("/target-spend");
      } catch (error) {
        // setLoading(false);
        console.log(error);
      }
    };

    getFlexAccount();
  }, [user._id]);

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
        <div className="row justify-content-center flex-type">
          <div className="col-md-7 text-center">
            <h2>Lorem Ipsum</h2>
            <p className="mt-2">Lorem ipsum antares fan tine sin</p>
          </div>
        </div>
        <div className="row cadet mt-4">
          <div className="col-md-6 ms-5">
            <h3>
              Cadet {"<"}
              {user?.kodeHex}
              {"/>"},
            </h3>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 mx-3">
            <div className="automated p-5">
              <h4>Go Automated </h4>
              <div className="text-center my-5 border-bottom">
                <span>Recommended Amount</span>
                <h6>
                  NGN{" "}
                  {flexAcct &&
                    Intl.NumberFormat("en-US").format(flexAcct?.autoSavingRate)}
                </h6>
                <p>Every month for {flexAcct?.autoDuration} months</p>
              </div>
              <div className="row values">
                <div className="col-md-6">
                  <h5>Emergency</h5>
                  <h5>Interest Rate:</h5>
                  <h5>Badge:</h5>
                </div>
                <div className="col-md-6 text-end">
                  <h5>
                    {Intl.NumberFormat("en-US").format(
                      flexAcct?.autoSavingTarget
                    )}
                  </h5>
                  <h5>11%</h5>
                  <h5>Cadet</h5>
                </div>
              </div>
              <div className="text-center">
                <Link
                  className="btn btn-outline-primary px-5 py-3 ardilla-btn automated-btn mt-5"
                  to="/flex-dashboard"
                  style={{ width: "70%" }}
                >
                  Go Automated
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mx-3">
            <div className="automated p-5 customed">
              <h4>Go Custom </h4>
              <div className="text-center my-5 border-bottom">
                <span>Recommended Amount</span>
                <h6>NGN 0</h6>
                <p>Every month for 13months</p>
              </div>
              <div className="row values">
                <div className="col-md-6">
                  <h5>Emergency</h5>
                  <h5>Interest Rate:</h5>
                  <h5>Badge:</h5>
                </div>
                <div className="col-md-6 text-end">
                  <h5>2,160,000</h5>
                  <h5>11%</h5>
                  <h5>-</h5>
                </div>
              </div>
              <div className="text-center">
                <Link
                  className="btn btn-outline-primary px-5 py-3 ardilla-btn custom-btn  mt-5"
                  to="/flex-set-amount"
                  style={{ width: "70%" }}
                >
                  Go Custom
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="automated p-4">
              <h4>Go Automated </h4>
              <div className="text-center my-5 ">
                <span>Recommended Amount</span>
                <h6>NGN 180,000</h6>
                <p>Every month for 13months</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default TypeFlex;
