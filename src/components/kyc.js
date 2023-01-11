import React, { useState } from "react";
import kyc from "../img/kyc-props.svg";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import axios from "axios";

function Kyc() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [bvn, setBvn] = useState("");

  let user = JSON.parse(sessionStorage.getItem("user"));

  // setTimeout(() => {
  //   if (onSuccess) {
  //     navigate("/login");
  //   }
  // }, 2000);

  const handleClickSuccess = () => {
    setOnSuccess(false);
    // navigate("/login");
  };

  const addBVN = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr(false);
    try {
      if (bvn.length < 11 || bvn.length > 11) {
        setOnSuccess(false);
        setMsg(`this is not a Valid BVN`);
        setLoading(false);
        setErr(true);
        return;
      }
      const { data } = await axios.put(
        `https://ardilla.herokuapp.com/ardilla/api/auth/add-bvn/${user._id}`,
        { bvn }
      );
      setMsg(data.msg);
      setErr(false);
      setOnSuccess(true);
      setLoading(false);
    } catch (error) {
      setOnSuccess(false);
      setMsg(`${error.response.data.msg} `);
      setLoading(false);
      setErr(true);
    }
  };
  return (
    <section className="verify-section">
      {err && (
        <div className="row justify-content-center  ardilla-alert">
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
      {onSuccess && (
        <div className="row justify-content-center mt-5  ardilla-alert">
          <div className="col-md-6">
            <div
              className="alert alert-success alert-dismissible fade show text-center text-success"
              role="alert"
            >
              <i className="bi bi-patch-check-fill me-3"></i>
              {msg}
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="alert"
                onClick={handleClickSuccess}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row logo">
          <div className="col-md-6 ">
            <Link to="/">
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <img src={kyc} alt="" className="img-fluid" />
            <h3 className="my-4">KYC Verification</h3>
            <h6>Enter your Bank Verification number (BVN)</h6>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <form className="my-4" onSubmit={addBVN}>
                <div className="mb-3">
                  <input
                    type="number"
                    class="form-control custom-form"
                    placeholder="Enter BVN"
                    required
                    value={bvn}
                    onChange={(e) => setBvn(e.target.value)}
                  />
                </div>

                {loading ? (
                  <div className="mt-5 mb-3">
                    <button
                      className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                      style={{ width: "100%" }}
                      type="button"
                    >
                      Loading
                    </button>
                  </div>
                ) : (
                  <div className="mt-5 mb-3">
                    <button
                      className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                      style={{ width: "100%" }}
                      type="submit"
                    >
                      OK
                    </button>
                  </div>
                )}
                <div className="logout text-center">
                  <Link className="log-out">
                    <i className="bi bi-power me-2"></i> Log Out
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kyc;
