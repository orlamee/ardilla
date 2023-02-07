import React, { useState } from "react";
import line from "../../img/linegraph.svg";
import { Link } from "react-router-dom";

function CalcInterest() {
  const [months, setMonths] = useState(3);
  const [rate, setRate] = useState(60000);
  const [amount, setAmout] = useState((rate * months).toFixed(2));

  const weekly = (amt, mt) => {
    const calc = amt * 4.34524 * mt;

    setAmout(calc.toFixed(2));

    return Intl.NumberFormat("en-US").format(setAmout);
  };

  const monthly = (amt, mt) => {
    const calc = amt * mt;

    setAmout(calc.toFixed(2));

    return Intl.NumberFormat("en-US").format(setAmout);
  };

  const daily = (amt, mt) => {
    const calc = amt * 30.4167 * mt;

    setAmout(calc.toFixed(2));

    return Intl.NumberFormat("en-US").format(setAmout);
  };

  const yearly = (amt, mt) => {
    const calc = amt * mt;

    setAmout(calc.toFixed(2));

    return Intl.NumberFormat("en-US").format(setAmout);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "daily") {
      daily(rate, months);
    } else if (value === "weekly") {
      weekly(rate, months);
    } else if (value === "monthly") {
      monthly(rate, months);
    } else {
      yearly(rate, months);
    }
  };

  const handleRate = (e) => {
    const value = e.target.value;

    setRate(value);

    daily(value, months);
  };

  const handleMonth = (e) => {
    const value = e.target.value;

    setMonths(value);

    daily(rate, value);
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
                  onChange={handleRate}
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
                  onChange={handleMonth}
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
                <h5 className="mt-2">
                  N {Intl.NumberFormat("en-US").format(amount)}
                </h5>
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
