import React, { useState, useEffect } from "react";
import pin from "../img/pin.svg";
import logo from "../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CreatePin() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const [confirmPin1, setConfirmPin1] = useState("");
  const [confirmPin2, setConfirmPin2] = useState("");
  const [confirmPin3, setConfirmPin3] = useState("");
  const [confirmPin4, setConfirmPin4] = useState("");
  // const [userCheck, setUserCheck] = useState();

  // let user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();

  const code = `${pin1}${pin2}${pin3}${pin4}`;
  const confirmCode = `${confirmPin1}${confirmPin2}${confirmPin3}${confirmPin4}`;

  // useEffect(() => {
  //   try {
  //     const getUserById = async () => {
  //       const { data } = await axios.get(
  //         `https://ardilla.herokuapp.com/ardilla/api/user/find/${user._id}`
  //       );

  //       if (data?.user?.verified === "mv") {
  //         return;
  //       } else if (data?.user?.verified === "completed") {
  //         return navigate("/login");
  //       } else {
  //         return navigate("/404");
  //       }
  //     };

  //     getUserById();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [user._id, navigate]);

  useEffect(() => {
    try {
      const getUserById = async () => {
        const { data } = await axios.get(
          `https://dilla-api.onrender.com/api/user/get-user`,
          { withCredentials: true }
        );

        // setUserCheck(data.user);

        console.log(data.user.verified);

        if (data?.user?.verified === "mv") {
          return;
        } else if (data?.user?.verified === "complete") {
          return navigate("/login");
        } else {
          return navigate("/404");
        }
      };

      getUserById();
    } catch (error) {
      console.log(error);
    }
  }, [navigate]);

  const sendRequest = async () => {
    try {
      setLoading(true);
      setErr(false);

      if (code.length < 4 || confirmCode.length < 4) {
        setOnSuccess(false);
        setMsg(`incomplete pin`);
        setLoading(false);
        setErr(true);
        return;
      }

      // const { data } = await axios.post(
      //   `https://ardilla.herokuapp.com/ardilla/api/auth/set-transaction-pin/${user._id}`,
      //   { code, confirmCode }
      // );

      const { data } = await axios.post(
        `https://dilla-api.onrender.com/api/auth/set-pin`,
        { code, confirmCode }
      );

      setMsg(data.msg);
      setErr(false);
      setOnSuccess(true);
      setLoading(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setOnSuccess(false);
      setMsg(message);
      setLoading(false);
      setErr(true);
    }
  };

  const handleClickSuccess = () => {
    setOnSuccess(false);
    navigate("/login");
  };

  setTimeout(() => {
    if (onSuccess) {
      navigate("/login");
    }
  }, 5000);

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest();
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
            <img src={pin} alt="" className="img-fluid" />
            <h3 className="my-3">Create a 4-digit Pin</h3>
            <h6>This will be used for all your transactions</h6>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <form className="my-5 createpin" onSubmit={handleSubmit}>
                <label className="form-label mb-2">Create Pin</label>
                <div className="d-flex flex-row mb-3">
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      required
                      value={pin1}
                      onChange={(e) => setPin1(e.target.value)}
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      required
                      value={pin2}
                      onChange={(e) => setPin2(e.target.value)}
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      required
                      value={pin3}
                      onChange={(e) => setPin3(e.target.value)}
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      required
                      value={pin4}
                      onChange={(e) => setPin4(e.target.value)}
                    />
                  </div>
                </div>
                <label className="form-label mb-2">Confirm Pin</label>
                <div className="d-flex flex-row">
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      required
                      value={confirmPin1}
                      onChange={(e) => setConfirmPin1(e.target.value)}
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      required
                      value={confirmPin2}
                      onChange={(e) => setConfirmPin2(e.target.value)}
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      required
                      value={confirmPin3}
                      onChange={(e) => setConfirmPin3(e.target.value)}
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      required
                      value={confirmPin4}
                      onChange={(e) => setConfirmPin4(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12 text-center">
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

                    <div className="logout">
                      <Link className="log-out">
                        <i className="bi bi-power me-2"></i> Log Out
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreatePin;
