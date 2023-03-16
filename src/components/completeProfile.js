import React, { useState, useEffect } from "react";
// import logo from "../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import complete from "../img/profilecomplete.svg";
import axios from "axios";

function CompleteProfile() {
  const [email, setEmail] = useState();
  const [kodeHex, setKodeHex] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [ip, setIp] = useState("");

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const navigate = useNavigate();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/user/get-user`,
          {
            withCredentials: true,
          }
        );

        setEmail(data.user.email);

        if (data?.user?.verified === "otp") {
          return;
        } else if (data?.user?.verified === "cp") {
          return navigate("/security-question");
        } else {
          return navigate("/404");
        }
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
    };

    getUserById();
  }, [navigate]);

  let apiKey = "e0a2d82b1adc8b0ca0969efcda0ab0e2fdbfd2338fdb1b9c5cea91fc";

  function getIP(url) {
    return fetch(url).then((res) => res.json());
  }

  //send device id here insted
  getIP(`https://api.ipdata.co?api-key=${apiKey}`).then((data) => {
    setIp(data.ip);
  });

  const createDillaWalet = async () => {
    try {
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/dilla-wallet/create-account`,
        { withCredentials: true }
      );
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
  };

  const handleAgree = () => {
    if (!agree) {
      setErr(true);
      setMsg("Please accept terms and conditions first");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setOnSuccess(false);
    setErr(false);

    try {
      const { data } = await axios.put(
        `${BACKEND_URL}/api/auth/complete-profile`,
        { email, firstname, lastname, contact, password, kodeHex, ip },
        { withCredentials: true }
      );

      setErr(false);
      createDillaWalet();
      setMsg(data.msg);
      setOnSuccess(true);
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
      setIsLoading(false);
    }
  };

  const handleClickSuccess = () => {
    setOnSuccess(false);

    navigate("/security-question");
  };

  setTimeout(() => {
    if (onSuccess) {
      navigate("/security-question");
    }
  }, 2000);

  setTimeout(() => {
    if (err) {
      setErr(false);
    }
  }, 3000);

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
      {/* <div className="container">
        <div className="row logo">
          <div className="col-md-6">
            <Link to="/otp">
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          
          
        </div>
      </div> */}
      <div className="d-lg-flex half">
        <Link to="/login" className="bg order-2 order-md-1 registerbg">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 mb-3 send-code">
                <div className="left text-center">
                  <img src={complete} alt="" className="img-fluid" />
                  <h2 className="my-4">
                    Complete your profile
                  </h2>
                  <h6 className="code mb-5">Fill in the Required details</h6>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="contents order-1 order-md-2">
          <div className="container">
            <div className="row align-items-center justify-content-center bg-white">
              <div className="col-md-7">
                <div className="right">
                  <div className="">
                    <form className="" onSubmit={handleSubmit}>
                      <div className="mb-3 form-floating ">
                        <input
                          type="text"
                          className="form-control custom-login" id="floatingInput" placeholder="name@example.com"
                          required
                          value={kodeHex}
                          onChange={(e) => setKodeHex(e.target.value)}
                        />
                        <label for="floatingInput">
                          <i className="bi bi-code-slash me-2"></i> Kode Hex
                          (Nickname)
                        </label>
                      </div>
                      <div className="mb-3 form-floating">
                        <input
                          type="text"
                          className="form-control custom-login" id="floatingInput" placeholder="name@example.com"
                          required
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                        <label for="floatingInput">
                          <i className="bi bi-person-fill me-2"></i> First Name
                        </label>
                        <div id="" class="form-text">
                          Same as your Valid ID
                        </div>
                      </div>
                      <div className="mb-3 form-floating">
                        <input
                          type="text"
                          className="form-control custom-login" id="floatingInput" placeholder="name@example.com"
                          required
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                        />
                        <label for="floatingInput">
                          <i className="bi bi-person-fill me-2"></i> Last Name
                        </label>
                        
                        <div id="" class="form-text">
                          Same as your Valid ID
                        </div>
                      </div>
                      <div className="mb-3 form-floating">
                        
                        <input
                          type="tel"
                          className="form-control custom-login" id="floatingInput" placeholder="name@example.com"
                          required
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                        />
                        <div id="" class="form-text">
                          Enter a valid phone number
                        </div>
                        <label for="floatingInput">
                          <i className="bi bi-telephone-fill me-2"></i>+234 | (000) 000 0000
                        </label>
                      </div>
                      {/* <div className="mb-3">
                        <label className="form-label">
                          <i className="bi bi-envelope-fill me-2"></i> Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control custom-login"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled
                        />
                      </div> */}
                      <div className="mb-3 form-floating">
                        <input
                          type="text"
                          className="form-control custom-login" id="floatingInput" placeholder="name@example.com"
                        />
                        <div id="" class="form-text">
                          Optional
                        </div>
                        <label for="floatingInput">
                          <i className="bi bi-people me-2"></i> Invite code
                        </label>
                      </div>
                      <div className="mb-5 form-floating">
                        <input
                          type="password"
                          className="form-control custom-login" id="floatingInput" placeholder="name@example.com"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label for="floatingInput">
                          <i className="bi bi-shield-lock-fill me-2"></i> Password
                        </label>
                      </div>
                      <div className="cp-a">
                        <label className="form-check-label remember">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            required
                            value={agree}
                            onChange={() => setAgree(!agree)}
                          />{" "}
                          I agree to our{" "}
                          <Link to="/terms-conditions">Terms and Conditions</Link>{" "}
                          and <Link to="/privacy-policy">Privacy Policy</Link>.
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
                            onClick={handleAgree}
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

export default CompleteProfile;
