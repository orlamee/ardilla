import React, { useState } from "react";
import line from "../../img/linegraph.svg";
import { Link } from "react-router-dom";
import { calender } from "../../utils/data";

function CalcInterest() {
  const [months, setMonths] = useState(3);
  const [rate, setRate] = useState(60000);
  const [intrest, setIntrest] = useState();
  const [period, setPeriod] = useState("monthly");
  const [amount, setAmout] = useState((rate * months).toFixed(2));

  const calenderLength = months;
  const currentMonth = new Date().getMonth();
  const R = 0.11;
  const perAnnum = 365;
  const cb = amount;

  let int = [];

  const intrestCalender = calender.splice(currentMonth, calenderLength);

  const intrestPerPeriod = intrestCalender.reduce((p, c, i) => {
    const f1 = (i + 1) * cb;
    const f2 = R * c.day;

    const ipp = (f1 * f2) / perAnnum;

    int.push(ipp);

    return int;
  }, cb);

  console.log(intrestPerPeriod);

  // const interestSum = intrestPerPeriod.reduce((p, c) => {
  //   return p + c;
  // }, 0);

  // setIntrest(interestSum);

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

    console.log(value);

    setPeriod(value);

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

    console.log(period);

    if (period === "daily") {
      daily(value, months);
    } else if (period === "weekly") {
      weekly(value, months);
    } else if (period === "monthly") {
      monthly(value, months);
    } else {
      yearly(value, months);
    }
  };

  const handleMonth = (e) => {
    const value = e.target.value;

    setMonths(value);

    if (period === "daily") {
      daily(rate, value);
    } else if (period === "weekly") {
      weekly(rate, value);
    } else if (period === "monthly") {
      monthly(rate, value);
    } else {
      yearly(rate, value);
    }
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
                  <option value="monthly" selected>
                    Monthly
                  </option>
                  <option value="weekly">Weekly</option>
                  <option value="daily">Daily</option>
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
                <h5 className="mt-2 mb-4">
                  N {Intl.NumberFormat("en-US").format(amount + intrest)}{" "}
                </h5>
                <h4>
                  Saving ₦2,000 monthly for 3 months will result in a balance of
                  ₦6,600
                </h4>
              </div>
              <div className="mt-4">
                <h4>Interest</h4>
                <h5 className="mt-2">N {intrest}( 2%) </h5>
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
