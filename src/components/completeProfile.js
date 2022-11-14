import React, { useState } from "react";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import complete from "../img/profilecomplete.svg";
import axios from "axios";
import Swal from "sweetalert2";

function CompleteProfile() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `https://ardilla-app.herokuapp.com/ardilla/api/auth/complete-profile/${user._id}`,
        { email, firstname, lastname, contact, password }
      );

      Swal.fire({
        icon: "success",
        title: `Hey <${data?.firstname}/> `,
        text: `Your account has been created `,
      });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: `Oops, something went wrong`,
        text: `please try again.`,
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
              <img src={complete} alt="" className="img-fluid" />
              <h2 className="my-4">
                Complete your <br />
                profile
              </h2>
              <p className="code mb-5">Fill in the Required details</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="right">
              <div className="login-form">
                <form className="" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-person-fill me-2"></i> First Name
                    </label>
                    <input
                      type="text"
                      className="form-control custom-login"
                      required
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-person-fill me-2"></i> Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control custom-login"
                      required
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-phone-fill me-2"></i> Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control custom-login"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-envelope-fill me-2"></i> Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control custom-login"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-shield-lock-fill me-2"></i> Password
                    </label>
                    <input
                      type="password"
                      className="form-control custom-login"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-check-label remember">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        required
                        value={agree}
                        onChange={() => setAgree(!agree)}
                      />{" "}
                      I agree to our Terms and Conditions and Privacy Policy.
                    </label>
                  </div>
                  {agree ? (
                    isLoading ? (
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
                    )
                  ) : (
                    <div className="my-5">
                      <button
                        type="button"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompleteProfile;
