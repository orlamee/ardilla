import React, { useState } from "react";
import testimonial from "../img/testimonial.svg";
import register from "../img/code.svg";
import samson from "../img/samson.svg";
import rev from "../img/review.svg";
import rev2 from "../img/review2.svg";
import rev3 from "../img/review3.svg";
import dot from "../img/dott.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
// import Cookies from "js-cookie";

function Register() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await axios.post(
        `${BACKEND_URL}/api/auth/send-otp`,
        { email },
        { withCredentials: true }
      );

      setIsLoading(false);

      navigate("/otp");
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

  return (
    <section className="">
      {err && (
        <div className="row justify-content-center ardilla-alert">
          <div className="col-md-12">
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
      <div className="d-lg-flex half">
        <div to="/login" className="bg order-2 order-md-1 registerbg">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 mb-3">
                <div className="left text-center entry">
                  <img src={register} alt="" className="img-fluid" />
                  <h2 className="my-5 text-white">
                    Never too late, Never too little.<br/>Start saving now.
                  </h2>
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div>
                        <p className="testimonial">
                          {/* "I joined ardilla because I want a savings app that<br/>wasn't as complex as the ones I used before; going pretty great." */}
                          <img src={rev} alt="" className="img-fluid" />
                        </p>
                        <div className="d-flex flex-row mb-3 mt-5 justify-content-center">
                          <img src={testimonial} alt="" className="img-fluid" />
                          <span className="author ms-3 mt-3">- Oyinkan Adeleke</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <p className="testimonial">
                          <img src={rev2} alt="" className="img-fluid" />
                          {/* "Downloading this app might have been the best decision<br/> this week - let goo!" */}
                        </p>
                        <div className="d-flex flex-row mb-3 mt-5 justify-content-center">
                          <img src={samson} alt="" className="img-fluid" />
                          <span className="author ms-3 mt-3">- Samson Godwin</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <p className="testimonial">
                          <img src={rev3} alt="" className="img-fluid" />
                          {/* "At this point it's make it or break it with my<br/>finances; I'll let you know how it goes" */}
                        </p>
                        <div className="d-flex flex-row mb-3 mt-5 justify-content-center">
                          <img src={dot} alt="" className="img-fluid" />
                          <span className="author ms-3 mt-3">- Jane Babalola</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    
                  </Swiper>
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
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control custom-login" id="floatingInput" placeholder="name@example.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value.toLowerCase())}
                        />
                        <label for="floatingInput">
                          <i className="bi bi-envelope-fill me-2"></i> Email address
                        </label>
                      </div>
                      {isLoading ? (
                        <div className="mt-5 mb-4">
                          <button
                            type="button"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                            style={{ width: "100%" }}
                          >
                            Loading
                          </button>
                        </div>
                      ) : (
                        <div className="mt-5 mb-4">
                          <button
                            type="submit"
                            className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                            style={{ width: "100%" }}
                          >
                            Continue
                          </button>
                        </div>
                      )}

                      <div className="bottom text-center">
                        <p className="user">
                          Already have an account? <Link to="/login">Sign in</Link>
                        </p>
                      </div>
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

export default Register;
