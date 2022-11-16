import React, { useState } from "react";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import girlie from "../img/girlie.svg";
import axios from "axios";
import Swal from "sweetalert2";

function OtpPage() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const user = JSON.parse(sessionStorage.getItem("user"));

  // const verifyReq = axios.create({
  //   headers: {
  //     Authorization: `Bearer ${user?.token}`,
  //   },
  // });

  // const navigate = useNavigate();
  // , useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `https://ard-illa.herokuapp.com/ardilla/api/auth/verify-otp/${user?.token}`,
        { code }
      );

      console.log(data);
      // if (data.success === true) {
      //   Swal.fire({
      //     icon: "success",
      //     title: `email verification successful`,
      //     text: `Goodluck on your next phase`,
      //   });

      //   navigate("/complete-profile");
      // } else {
      //   Swal.fire({
      //     icon: "error",
      //     title: `${d`,
      //     text: `Please try again`,
      //   });
      // }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: `${error.message}`,
        text: `Please try again`,
      });
    }
  };

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
              <p className="code mb-5">{user?.email}</p>
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
