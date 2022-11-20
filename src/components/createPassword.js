import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../img/logo.svg";

function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password === confirmPassword) {
      try {
        const { data } = await axios.put(
          `https://ardilla-be-app.herokuapp.com/ardilla/api/auth/reset-password/${id}`,
          {
            password,
          }
        );

        setLoading(false);

        if (data.success === true) {
          Swal.fire({
            icon: "success",
            text: `${data.msg}`,
          });

          navigate("/login");
        }
      } catch (error) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Server error.",
          text: "Oops, something went wrong",
        });
      }
    } else {
      setLoading(false);
      Swal.fire("Password don't match");
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
          <div className="col-md-5">
            <div className="right">
              <div className="login-form">
                <div className="text-center mb-5">
                  <h2 className="fs-1">Create New Password</h2>
                </div>
                <form className="" onChange={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-shield-lock-fill me-2"></i> New
                      Password
                    </label>
                    <input
                      type="password"
                      name="pass"
                      className="form-control custom-login"
                      id="pass_log_id"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      toggle="#password-field"
                      className="fa fa-fw fa-eye field_icon toggle-password"
                    ></span>
                  </div>
                  <div className="">
                    <label className="form-label">
                      <i className="bi bi-shield-lock-fill me-2"></i> Confirm
                      New Password
                    </label>
                    <input
                      type="password"
                      name="pass"
                      className="form-control custom-login"
                      id="pass"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span
                      toggle="#password-field"
                      className="fa fa-fw fa-eye field_icon toggle-pass"
                    ></span>
                  </div>
                  {loading ? (
                    <div className="mt-5">
                      <button
                        type="button"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Loading
                      </button>
                    </div>
                  ) : (
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Done
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

export default CreatePassword;
