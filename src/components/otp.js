import React, { useState } from "react";
import logo from "../img/logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import girlie from "../img/girlie.svg";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OtpPage() {
  const location = useLocation();

  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = Cookies.get("token");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const { id, email } = location.state.data;

    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `https://ardilla-be-app.herokuapp.com/ardilla/api/auth/verify-otp/${token}`,
        { code }
      );

      if (data.success === true) {
        console.log(data);
        toast(`Token validated`);
        navigate("/complete-profile", { state: { id, email } });
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast(`${error.response.data.msg || error.message}`);
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    const email = location.state.data.email;

    try {
      const { data } = await axios.post(
        "https://ardilla-be-app.herokuapp.com/ardilla/api/auth/send-otp",
        { email }
      );

      Cookies.remove("token");

      Cookies.set("token", data.token);

      if (data) {
        Swal.fire({
          icon: "success",
          text: `verification token has been resent`,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Something went wrong`,
        text: `Please try again`,
      });
    }
  };

  const handleWrongEmail = async () => {
    try {
      const id = location.state.data.id;
      const { data } = await axios.delete(
        `https://ardilla-be-app.herokuapp.com/ardilla/api/auth/wrong-email/${id}`
      );

      Cookies.remove();

      if (data.success === true) {
        navigate("/sign-up");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Something went wrong`,
        text: `Please try again`,
      });
    }
  };

  return (
    <section className="login-section">
      <ToastContainer />
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
              <p className="code mb-5">{location.state.data.email}</p>
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
                  {isLoading ? (
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
                    <div className="my-5">
                      <button
                        type="submit"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Continue
                      </button>
                    </div>
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
