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
import contact from "../../img/dashboard/pay.svg";
import chat from "../../img/dashboard/chat.svg";
import interest from "../../img/dashboard/int.svg";
import big from "../../img/dashboard/big-graph.png";
import save from "../../img/dashboard/save-i.svg";
import axios from "axios";

function VaultDashboard() {
  const [targetAcct, setTargetAcct] = useState();
  let user = JSON.parse(sessionStorage.getItem("user"));

  const calculateIntrest = async () => {
    console.log("test");
    // try {
    //   // setLoading(true);

    //   const { data } = await axios.get(
    //     `https://ardilla.herokuapp.com/ardilla/api/target-plan/calculate-intrest/${user._id}`
    //   );

    //   // setLoading(false);
    //   // navigate("/target-dashboard");
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    const getTargetAccount = async () => {
      try {
        const { data } = await axios.get(
          `https://ardilla.herokuapp.com/ardilla/api/target-plan/get-target-account/${user._id}`
        );

        setTargetAcct(data.targetPlan);
      } catch (error) {
        console.log(error);
      }
    };

    getTargetAccount();
    // calculateIntrest();
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
        <Link to="/dilla">
          <div className="d-flex flex-row">
            <img src={dilla} alt="" className="img-fluid me-2 icons" />
            Dilla
          </div>
        </Link>
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
          <Link>
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
      <div className="content py-5 px-5 earning-section">
        <div className="row backto">
          <Link to="/vault-type">
            <span>
              <i className="bi bi-chevron-left me-3"></i>Back
            </span>
          </Link>
        </div>
        <div className="row mt-5 dashboard-t">
          <div className="col-md-12">
            {/* <img src={verticalthree} alt="" className="img-fluid"/> */}
            <h2>
              Cadet {"<"}
              {user.kodeHex}
              {"/>"},
            </h2>
            <p>
              Here is your overview for custom{" "}
              <span style={{ color: "#3C0071" }}>Housing</span>{" "}
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6">
                <div className="int px-4">
                  <div className="d-flex flex-row">
                    <img src={interest} alt="" className="img-fluid" />
                    <div className="ms-3">
                      <p onClick={calculateIntrest}>Badge</p>
                      <h3 className="mt-3">{targetAcct?.badge}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="earn-c px-4">
                  <div className="d-flex flex-row">
                    <img src={save} alt="" className="img-fluid" />
                    <div className="ms-3">
                      <p>Earn </p>
                      {targetAcct && (
                        <h3 className="mt-3">
                          {" "}
                          {Intl.NumberFormat("en-US").format(targetAcct?.earn)}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="spend-c px-4">
                  <div className="d-flex flex-row">
                    <img src={interest} alt="" className="img-fluid" />
                    <div className="ms-3">
                      <p>Spend </p>
                      {targetAcct && (
                        <h3 className="mt-3">
                          {Intl.NumberFormat("en-US").format(targetAcct?.exp)}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="save-c px-4">
                  <div className="d-flex flex-row">
                    <img src={interest} alt="" className="img-fluid" />
                    <div className="ms-3">
                      <p>Save</p>

                      {targetAcct && targetAcct?.type === "custom" ? (
                        <h3 className="mt-3">
                          NGN{" "}
                          {Intl.NumberFormat("en-US").format(
                            targetAcct?.customSavingRate
                          )}
                        </h3>
                      ) : (
                        <h3 className="mt-3">
                          NGN{" "}
                          {Intl.NumberFormat("en-US").format(
                            targetAcct?.autoSavingRate
                          )}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <img src={big} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6">
                <div className="int px-4">
                  <p>Total left</p>
                  {targetAcct && targetAcct?.type === "custom" ? (
                    <h3 className="mt-3">
                      NGN{" "}
                      {Intl.NumberFormat("en-US").format(
                        targetAcct?.earn -
                          targetAcct?.exp -
                          targetAcct?.customSavingRate
                      )}
                    </h3>
                  ) : (
                    <h3 className="mt-3">
                      NGN{" "}
                      {Intl.NumberFormat("en-US").format(
                        targetAcct?.earn -
                          targetAcct?.exp -
                          targetAcct?.autoSavingRate
                      )}
                    </h3>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="int px-4">
                  <p>Target</p>
                  {targetAcct && targetAcct?.type === "custom" ? (
                    <h3 className="mt-3">
                      NGN{" "}
                      {Intl.NumberFormat("en-US").format(
                        targetAcct?.customSavingTarget
                      )}
                    </h3>
                  ) : (
                    <h3 className="mt-3">
                      NGN{" "}
                      {Intl.NumberFormat("en-US").format(
                        targetAcct?.autoSavingTarget
                      )}
                    </h3>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col">
                <div className="int px-4">
                  <p>Duration</p>
                  {targetAcct && targetAcct?.type === "custom" ? (
                    <h3 className="mt-3">
                      {Intl.NumberFormat("en-US").format(
                        targetAcct?.customDuration
                      )}
                    </h3>
                  ) : (
                    <h3 className="mt-3">
                      {Intl.NumberFormat("en-US").format(
                        targetAcct?.autoDuration
                      )}
                    </h3>
                  )}
                </div>
              </div>
              <div className="col">
                <div className="int px-4">
                  <p>Interest</p>
                  {targetAcct && (
                    <h3 className="mt-3">
                      NGN{" "}
                      {Intl.NumberFormat("en-US").format(
                        targetAcct?.totalIntrest
                      )}
                    </h3>
                  )}
                </div>
              </div>
              <div className="col">
                <div className="int px-4">
                  <p>Total</p>
                  {targetAcct && targetAcct?.type === "custom" ? (
                    <h3 className="mt-3">
                      NGN{" "}
                      {Intl.NumberFormat("en-US").format(
                        targetAcct?.customSavingTarget +
                          targetAcct?.totalIntrest
                      )}
                    </h3>
                  ) : (
                    <h3 className="mt-3">
                      NGN{" "}
                      {Intl.NumberFormat("en-US").format(
                        targetAcct?.autoSavingTarget + targetAcct?.totalIntrest
                      )}
                    </h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-10 right-table">
            <div className="breakdown">
              <h6 className="p-4">Breakdown</h6>
              <table className="table table-borderless">
                <thead className="table-dark">
                  <tr>
                    <th scope="col" className="headtable">
                      DATE
                    </th>
                    <th scope="col" className="headtable">
                      AMOUNT (₦)
                    </th>
                    <th scope="col" className="headtable">
                      INTEREST - 11%P.A(₦)
                    </th>
                    <th scope="col" className="headtable">
                      TOTAL BALANCE (₦)
                    </th>
                    <th scope="col" className="headtable">
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {targetAcct?.breakdown?.map((data) => {
                    return (
                      <tr>
                        <td>
                          {targetAcct?.paymentDate}-{data.date.month}-
                          {data.date.year}
                        </td>
                        <td>
                          {Intl.NumberFormat("en-US").format(data.amount)}
                        </td>
                        <td>{Intl.NumberFormat("en-US").format(data.ipp)}</td>
                        <td>
                          {Intl.NumberFormat("en-US").format(
                            data.ipp + data.amount
                          )}
                        </td>
                        <td>
                          <span className="statuses">Not Active</span>
                        </td>
                      </tr>
                    );
                  })}
                  {/* <tr>
                    <td>29-11-2022</td>
                    <td>180,000</td>
                    <td>1,650</td>
                    <td>1,650</td>
                    <td>
                      <span className="statuses">Not Active</span>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td>29-11-2022</td>
                    <td>180,000</td>
                    <td>1,650</td>
                    <td>1,650</td>
                    <td>
                      <span className="statuses">Not Active</span>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td>29-11-2022</td>
                    <td>180,000</td>
                    <td>1,650</td>
                    <td>1,650</td>
                    <td>
                      <span className="statuses">Not Active</span>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td>29-11-2022</td>
                    <td>180,000</td>
                    <td>1,650</td>
                    <td>1,650</td>
                    <td>
                      <span className="statuses">Not Active</span>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-2 left-table">
            <div className="form-check mb-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                lorem ipsum in adrem eff antares encrypt infer inde
              </label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
                lorem ipsum in adrem eff antares encrypt infer inde
              </label>
            </div>
            <div>
              <Link
                className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-4"
                to="/vault-save"
                style={{ width: "100%" }}
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VaultDashboard;