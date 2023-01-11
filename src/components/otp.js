import React, { useState, useEffect } from "react";
import logo from "../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import girlie from "../img/girlie.svg";
import axios from "axios";
// import Cookies from "js-cookie";

function OtpPage() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [resend, setResend] = useState(false);
  const [userCheck, setUserCheck] = useState();

  // const token = Cookies.get("token");

  // let user = JSON.parse(sessionStorage.getItem("user"));

  // console.log(user);

  // const { _id, email, verified } = user;

  // console.log(_id, email, verified);

  const navigate = useNavigate();

  // useEffect(() => {
  //   try {
  //     const getUserById = async () => {
  //       const { data } = await axios.get(
  //         `https://dilla-api.onrender.com/api/user/get-user`
  //       );

  //       setUserCheck(data.user);
  //       console.log("new", data);

  //       if (data?.user?.verified === "activated") {
  //         return;
  //       } else if (data?.user?.verified === "otp") {
  //         return navigate("/complete-profile");
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

        setUserCheck(data.user);
        console.log("new stuff", data);

        console.log(data.user.verified);

        if (data?.user?.verified === "activated") {
          return;
        } else if (data?.user?.verified === "otp") {
          return navigate("/complete-profile");
        } else {
          return navigate("/404");
        }
      };

      getUserById();
    } catch (error) {
      console.log(error);
    }
  }, [navigate]);

  setTimeout(() => {
    if (onSuccess) {
      navigate("/complete-profile");
    }
  }, 2000);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setErr(false);
  //   setOnSuccess(false);

  //   try {
  //     const { data } = await axios.post(
  //       `https://ardilla.herokuapp.com/ardilla/api/auth/verify-otp/${token}/${_id}`,
  //       { code }
  //     );

  //     // sessionStorage.setItem("user", JSON.stringify(data.data));

  //     // console.log(data);

  //     if (data.success === true) {
  //       setErr(false);
  //       setMsg(data.msg);
  //       setOnSuccess(true);
  //       setIsLoading(false);
  //     }

  //     setIsLoading(false);
  //   } catch (error) {
  //     setErr(true);
  //     setOnSuccess(false);
  //     setMsg(`${error.response.data.msg}` || "Network error");
  //     setIsLoading(false);
  //   }
  // };

  // const handleClickSuccess = () => {
  //   const getUserById = async () => {
  //     const { data } = await axios.get(
  //       `https://ardilla.herokuapp.com/ardilla/api/user/find/${_id}`
  //     );

  //     setOnSuccess(false);

  //     const { user } = data;
  //     navigate("/complete-profile", { state: { user } });
  //   };

  //   getUserById();
  // };

  // const handleResend = async (e) => {
  //   e.preventDefault();
  //   setOnSuccess(false);
  //   setErr(false);

  //   try {
  //     const { data } = await axios.post(
  //       "https://ardilla.herokuapp.com/ardilla/api/auth/send-otp",
  //       { email }
  //     );

  //     Cookies.remove("token");

  //     sessionStorage.setItem("user", JSON.stringify(data.user));

  //     Cookies.set("token", data.token);

  //     if (data) {
  //       setErr(false);
  //       setMsg(data.msg);
  //       setResend(true);
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     setMsg(`${error.response.data.msg}` || "Network error");
  //     setErr(true);
  //     setOnSuccess(false);
  //     setIsLoading(false);
  //   }
  // };

  // const handleWrongEmail = async () => {
  //   try {
  //     const { data } = await axios.delete(
  //       `https://ardilla.herokuapp.com/ardilla/api/auth/wrong-email/${_id}`
  //     );

  //     Cookies.remove();

  //     if (data.success === true) {
  //       navigate("/sign-up");
  //     }
  //   } catch (error) {
  //     setOnSuccess(false);
  //     setMsg(`${error.response.data.msg || "Network error"} `);
  //     setErr(true);
  //     setIsLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErr(false);
    setOnSuccess(false);

    try {
      const { data } = await axios.post(
        `https://dilla-api.onrender.com/api/auth/verify-otp`,
        { code }
      );

      setErr(false);
      setMsg(data.msg);
      setOnSuccess(true);
      setIsLoading(false);

      setIsLoading(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setErr(true);
      setOnSuccess(false);
      setMsg(message);
      setIsLoading(false);
    }
  };

  const handleClickSuccess = () => {
    navigate("/complete-profile");
  };

  const handleResend = async (e) => {
    e.preventDefault();
    setOnSuccess(false);
    setErr(false);

    const email = userCheck.email;

    try {
      const { data } = await axios.post(
        "https://dilla-api.onrender.com/api/auth/send-otp",
        { email }
      );

      setErr(false);
      setMsg(data.msg);
      setResend(true);
      setIsLoading(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setMsg(message);
      setErr(true);
      setOnSuccess(false);
      setIsLoading(false);
    }
  };

  const handleWrongEmail = async () => {
    try {
      await axios.delete(`https://dilla-api.onrender.com/api/auth/wrong-email`);

      navigate("/sign-up");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setOnSuccess(false);
      setMsg(message);
      setErr(true);
      setIsLoading(false);
    }
  };

  return (
    <section className="login-section">
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
                aria-label="Close"
                onClick={() => setErr(false)}
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
                aria-label="Close"
                onClick={handleClickSuccess}
              ></button>
            </div>
          </div>
        </div>
      )}
      {resend && (
        <div className="row justify-content-center mt-5">
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
                onClick={() => setResend(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row logo">
          <div className="col-md-6">
            <Link to="/sign-up">
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <div className="left text-left">
              <img src={girlie} alt="" className="img-fluid" />
              <h2 className="my-4">
                Enter Code sent to
                <br />
                your email
              </h2>
              <p className="code mb-5">{}</p>
              <h6>
                <button className="resend" onClick={handleWrongEmail}>
                  Wrong Email?
                </button>
              </h6>
            </div>
          </div>
          <div className="col-md-5 aggregate">
            <div className="right">
              <div className="login-form">
                <form className="" onSubmit={handleSubmit}>
                  <div className="">
                    <label className="form-label">
                      <i className="bi bi-key-fill me-2"></i> Code
                    </label>
                    <input
                      type="number"
                      className="form-control custom-login"
                      required
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                  {userCheck?.verified !== "activated" ? (
                    <div className="my-5">
                      <button
                        type="button"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        done
                      </button>
                    </div>
                  ) : isLoading ? (
                    <div className="my-5">
                      <button
                        type="button"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Loading
                      </button>
                    </div>
                  ) : (
                    !isLoading && (
                      <div className="my-5">
                        <button
                          type="submit"
                          className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                          style={{ width: "100%" }}
                        >
                          Continue
                        </button>
                      </div>
                    )
                  )}

                  <div className="bottom">
                    <p className="user">
                      Didn't get OTP?{" "}
                      <button className="resend" onClick={handleResend}>
                        Resend
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtpPage;
