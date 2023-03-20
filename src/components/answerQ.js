import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import home from "../img/home-login.svg";
import axios from "axios";

function AQ() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [ans, setAns] = useState("");
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

        setUserDetail(data.user);
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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      await axios.post(
        `${BACKEND_URL}/api/auth/answer-question`,
        { ans },
        { withCredentials: true }
      );

      // if (userDetail?.securityQusetion?.answer === ans) {
      //   setMsg(`Hey ,${userDetail?.kodeHex} welcome `);
      //   setOnSuccess(true);
      setLoading(false);
      //   //check me out
      navigate("/dashboard");
      // } else {
      //   setLoading(false);
      //   setErr(true);
      //   setMsg("Wrong answer");
      // }
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

  const handleClickSuccess = () => {
    setOnSuccess(false);
  };

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
                    Answer Security Question
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
                    <form onSubmit={handleSubmit}>
                      <span className="q">
                        {userDetail?.securityQusetion?.question}
                      </span>
                      <div class="my-4">
                        <input
                          type="text"
                          class="form-control custom-form"
                          required
                          value={ans}
                          onChange={(e) =>
                            setAns(e.target.value.trim().toLowerCase())
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

export default AQ;
