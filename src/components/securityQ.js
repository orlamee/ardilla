import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import home from "../img/home-login.svg";
import axios from "axios";
import Swal from "sweetalert2";

function SecurityPage() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  let securityQusetion;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    securityQusetion = {
      question,
      answer,
    };

    try {
      const { data } = await axios.put(
        `https://ardilla-be-app.herokuapp.com/api/auth/security-question/${user.id}`,
        { securityQusetion }
      );

      if (data.success === true) {
        Swal.fire({
          icon: "success",
          text: `${data.msg}`,
        });

        navigate("/login");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: `Server error`,
        text: `please try again.`,
      });
    }
  };

  return (
    <section className="login-section">
      <div className="container">
        <div className="row logo">
          <div className="col-md-6">
            <Link to="/" onClick={() => sessionStorage.clear()}>
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <div className="left text-left">
              <img src={home} alt="" className="img-fluid" />
              <h2 className="my-4">
                Security
                <br />
                Question
              </h2>
              <p className="code mb-5">
                Choose a security question &<br /> fill in your answer
              </p>
            </div>
          </div>
          <div className="col-md-5 aggregate">
            <div className="right">
              <div className="login-form">
                <form className="" onSubmit={handleSubmit}>
                  <select
                    className="form-select mb-3 custom-form"
                    aria-label="Default select example"
                    onChange={(e) => setQuestion(e.target.value)}
                  >
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
                      onChange={(e) => setAnswer(e.target.value)}
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
    </section>
  );
}

export default SecurityPage;
