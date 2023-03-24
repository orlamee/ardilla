import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import home from "../img/home-login.svg";
import axios from "axios";

function SecurityPage() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getUserById = async () => {
        const { data } = await axios.get(`${BACKEND_URL}/api/user/get-user`, {
          withCredentials: true,
        });

        if (data?.user?.verified === "cp") {
          return;
        } else if (data?.user?.verified === "sq") {
          return navigate("/verify-mobile");
        } else {
          return navigate("/404");
        }
      };

      getUserById();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setMsg(message);
      setErr(true);
    }
  }, [navigate, BACKEND_URL]);

  const handleClickSuccess = () => {
    setOnSuccess(false);
    navigate("/bvn-verify");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr(false);

    try {
      const { data } = await axios.put(
        `${BACKEND_URL}/api/auth/security-question`,
        { question, answer },
        { withCredentials: true }
      );

      setErr(false);
      setMsg(data.msg);
      setOnSuccess(true);
      setLoading(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setMsg(message);
      setErr(true);
      setLoading(false);
    }
  };

  setTimeout(() => {
    if (onSuccess) {
      navigate("/bvn-verify");
    }
  }, 2000);

  return (
    <section className="">
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

<div className="d-lg-flex half">
        <div to="/login" className="bg order-2 order-md-1 registerbg">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 mb-3">
                <div className="left text-center entry">
                  <img src={home} alt="" className="img-fluid" />
                  <h2 className="mb-3 mt-5 text-white">
                    Set Security Question & answer
                  </h2>
                  <p>Prevents unauthorized access to your account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contents order-1 order-md-2">
          <div className="container">
            <div className="row align-items-center justify-content-center bg-white">
              <div className="col-md-6">
                <div className="right">
                  <div className="">
                    <form className="" onSubmit={handleSubmit}>
                      <select
                        className="form-select mb-3 custom-form"
                        aria-label="Default select example"
                        required
                        onChange={(e) => setQuestion(e.target.value)}
                      >
                        <option value="">Select security question</option>
                        {/* <option defaultValue>Open this select menu</option> */}
                        <option value="What is the name of your favorite pet?">
                          What is the name of your favorite pet?
                        </option>
                        <option value=" What is your mother's maiden name?">
                          What is your mother's maiden name?
                        </option>
                        <option value="Where did you meet your spouse?">
                          Where did you meet your spouse?
                        </option>
                        <option value="What is your first crush name?">
                          What is your first crush name?
                        </option>
                      </select>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control custom-form"
                          placeholder="Your Answer"
                          required
                          value={answer}
                          onChange={(e) =>
                            setAnswer(e.target.value.trim().toLowerCase())
                          }
                        />
                      </div>
                      {loading ? (
                        <div className="">
                          <button
                            type="button"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                            style={{ width: "100%" }}
                          >
                            Loading
                          </button>
                        </div>
                      ) : (
                        <div className="">
                          <button
                            type="submit"
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
        </div>
      </div>
    </section>
  );
}

export default SecurityPage;
