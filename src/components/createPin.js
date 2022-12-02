import React from "react";
import pin from "../img/pin.svg";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";

function CreatePin() {
  return (
    <section className="verify-section">
      
      <div className="container">
        <div className="row logo">
          <div className="col-md-6 ">
            <Link to="/">
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <img src={pin} alt="" className="img-fluid" />
            <h3 className="my-3">Create a 4-digit Pin</h3>
            <h6>This will be used for all your transactions</h6>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <form className="my-5 createpin">
                <label className="form-label mb-2">Create Pin</label>
                <div className="d-flex flex-row mb-3">
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      
                    />
                  </div>
                </div>
                <label className="form-label mb-2">Confirm Pin</label>
                <div className="d-flex flex-row">
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      
                    />
                  </div>
                  <div className="me-2">
                    <input
                      type="text"
                      className="form-control rounded verify-otp"
                      maxLength="1"
                      
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12 text-center">
                    <div className="mt-5 mb-3">
                      <button
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                        style={{ width: "100%" }}
                        type="submit"
                      >
                        OK
                      </button>
                    </div>
                    <div className="logout">
                      <Link className="log-out">
                        <i className="bi bi-power me-2"></i> Log Out
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreatePin;
