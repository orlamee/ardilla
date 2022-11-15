import React, { useState } from "react";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import girlie from "../img/girlie.svg";
import axios from "axios";
import Swal from "sweetalert2";

function OtpPage() {
  // const navigate = useNavigate();
  // , useNavigate

  const [code, setCode] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const user = JSON.parse(sessionStorage.getItem("user"));

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `https://ardilla-app.herokuapp.com/ardilla/api/auth/user/${user}`
      );

      setData(data.data);

      console.log(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Try again`,
        text: `oops something went wrong`,
      });
    }
  };

  getUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "https://ardilla-app.herokuapp.com/ardilla/api/auth/verify-otp",
        { code }
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // if (emailToken === data.emailToken) {
  //   Swal.fire({
  //     icon: "success",
  //     title: `email verification successful`,
  //     text: `Goodluck on your next phase`,
  //   });

  //   setIsLoading(false);

  //   navigate("/complete-profile");
  // } else {
  //   setIsLoading(false);
  //   Swal.fire({
  //     icon: "error",
  //     title: `Invalid pin`,
  //     text: `check your pin and try again`,
  //   });
  // }

  return (
    <section className="login-section">
      <div className="container">
        <div className="row logo">
          <div className="col-md-6">
            <Link to="/">
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
              <p className="code mb-5">{data.email}</p>
              <h6>
                <Link>Wrong Email?</Link>
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
                      Didn't get OTP? <Link>Resend</Link>
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
