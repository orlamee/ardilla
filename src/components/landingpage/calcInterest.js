import React, { useState } from "react";
import line from "../../img/linegraph.svg";
import { Link } from "react-router-dom";

function CalcInterest() {
  const [amount, setAmout] = useState(0);
  const [months, setMonths] = useState(3);
  const [rate, setRate] = useState(60000);
  const [period, setPeriod] = useState("daily");

  const weekly = (amt, mt) => {
    const calc = amt * 4.34524 * mt;

    return Intl.NumberFormat("en-US").format(calc);
  };

  const monthly = (amt, mt) => {
    const calc = amt * mt;

    return Intl.NumberFormat("en-US").format(calc);
  };

  const daily = (amt, mt) => {
    const calc = amt * 30.4167 * mt;

    return Intl.NumberFormat("en-US").format(calc);
  };

  const yearly = (amt, mt) => {
    const calc = amt * mt;

    return Intl.NumberFormat("en-US").format(calc);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    console.log(value);
  };

  return (
    <section className="calc int-tool">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Calculate Your Interests</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <form className="mt-5 int-form">
              <div className="mb-5">
                <label
                  for="exampleFormControlInput1"
                  className="form-label int-label"
                >
                  How often are you saving?
                </label>
                <select
                  className="form-select int-select"
                  onChange={handleChange}
                >
                  <option selected value="daily">
                    Daily
                  </option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div className="mb-5">
                <label
                  for="exampleFormControlInput1"
                  className="form-label int-label"
                >
                  How much are you saving?
                </label>
                <input
                  type="number"
                  class="form-control int-control"
                  id="exampleFormControlInput1"
                  placeholder="2,000"
                  value={rate}
                />
              </div>
              <div className="mb-5">
                <label
                  for="exampleFormControlInput1"
                  className="form-label int-label"
                >
                  How long are you saving for? (In months)
                </label>
                <input
                  type="number"
                  class="form-control int-control"
                  id="exampleFormControlInput1"
                  placeholder="3"
                  value={months}
                />
              </div>
            </form>
          </div>
          <div className="col-md-6" style={{ marginTop: "50px" }}>
            <div className="int-values bg-white p-5">
              <div>
                <h4>Total Balance</h4>
                <h5 className="mt-2 mb-4">N6,600 </h5>
                <h4>
                  Saving ₦2,000 monthly for 3 months will result in a balance of
                  ₦6,600
                </h4>
              </div>
              <div className="mt-4">
                <h4>Interest</h4>
                <h5 className="mt-2">N600 ( 2%) </h5>
              </div>
              <div className="mt-4">
                <h4>Total Savings</h4>
                <h5 className="mt-2">N{amount} </h5>
              </div>
              <img
                src={line}
                alt="dummy-graph"
                className="img-fluid w-100 mb-5"
                style={{ marginTop: "-20px" }}
              />
              <Link
                className="btn btn-outline-primary px-4 py-3 ardilla-btn fs-6"
                to=""
              >
                Start Saving Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalcInterest;
