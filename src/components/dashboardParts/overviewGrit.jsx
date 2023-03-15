import React from "react";
import { Link } from "react-router-dom";
import home from "../../img/dashboard/home.svg";
import portfolio from "../../img/dashboard/portfolio.svg";
import investment from "../../img/dashboard/growth.svg";
import saving from "../../img/dashboard/investment.svg";
import dilla from "../../img/dashboard/dilla.svg";
import explore from "../../img/dashboard/explore.svg";
import learn from "../../img/dashboard/learn.svg";
import insurance from "../../img/dashboard/insurance.svg";
import logout from "../../img/dashboard/logout.svg";
import contact from "../../img/dashboard/pay.svg";
import chat from "../../img/dashboard/chat.svg";
import Modal from 'react-bootstrap/Modal';

function Withdrawal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="withdrawal-grit"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <h4 className="mb-4">Do you want your interest (₦40,000) up front ?</h4>
        <Link className='btn btn-outline-primary px-5 py-3 new-btn fs-6 w-75 mb-3' to="/grit/amount">Yes, Withdraw to Dilla</Link>
        <Link onClick={props.onHide} className='btn btn-outline-primary px-5 py-3 later-btn fs-6 w-75 mb-3' to="">No, Withdraw Later</Link>
        <h6>If, No you can always withdraw your interest anytime</h6>
      </Modal.Body>
    </Modal>
  );
}



function OverviewGrit() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <section className="main-dash">
      <div className="sidebar">
        <div className="row">
          <div className="col cadet-name">
            <h2>
              Cadet {"<"}
              Starboy
              {"/>"}
            </h2>
          </div>
        </div>
        <Link to="/dashboard" className="">
          <div className="d-flex flex-row">
            <img src={home} alt="" className="img-fluid me-2 icons" />
            Home
          </div>
        </Link>
        <Link to="/portfolio" className="">
          <div className="d-flex flex-row">
            <img src={portfolio} alt="" className="img-fluid me-2 icons" />
            Portfolio
          </div>
        </Link>
        <Link to="/savings" className="active">
          <div className="d-flex flex-row">
            <img src={saving} alt="" className="img-fluid me-2 icons" />
            Savings
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={investment} alt="" className="img-fluid me-2 icons" />
            Investments <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={insurance} alt="" className="img-fluid me-2 icons" />
            Insurance <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <a href="/dilla">
          <div className="d-flex flex-row">
            <img src={dilla} alt="" className="img-fluid me-2 icons" />
            Dilla
          </div>
        </a>
        <Link>
          <div className="d-flex flex-row">
            <img src={explore} alt="" className="img-fluid me-2 icons" />
            Budgeting <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link to="/learn">
          <div className="d-flex flex-row">
            <img src={learn} alt="" className="img-fluid me-2 icons" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link to="/payment">
            <div className="d-flex flex-row">
              <img src={contact} alt="" className="img-fluid me-2 icons" />
              Payment
            </div>
          </Link>
          <Link>
            <div className="d-flex flex-row">
              <img src={chat} alt="" className="img-fluid me-2 icons" />
              Financial Coach
            </div>
          </Link>
          <Link>
            <div className="d-flex flex-row">
              <img src={logout} alt="" className="img-fluid me-2 icons" />
              Log Out
            </div>
          </Link>
        </div>
      </div>
      <div className="content py-5 px-5 gritsave-bg summary-grit">
        <div className="row">
          <div className="col-md-6">
            <h2>Overview</h2>
            <h6 className="mt-3">Here is your overview for Grit Plan</h6>
          </div>
        </div>
        <div className="row mt-4 justify-content-start">
          <div className="col-md-6 mb-3">
            <div className="over-card">
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4>Name</h4>
                </div>
                <div className="col-md-6 text-end">
                  <h5>Grit</h5>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4>Amount</h4>
                </div>
                <div className="col-md-6 text-end">
                  <h5>₦50,000.00</h5>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4>Start Date</h4>
                </div>
                <div className="col-md-6 text-end">
                  <h5>29-11-2022</h5>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4>Maturity date</h4>
                </div>
                <div className="col-md-6 text-end">
                  <h5>29-10-2023</h5>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4>Interest Rate</h4>
                </div>
                <div className="col-md-6 text-end">
                  <h5>20%</h5>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4>Choose Payment Method</h4>
                </div>
                <div className="col-md-6 text-end">
                  <h5>Dilla - ₦50,000.00 Switch <i className="bi bi-chevron-right"></i></h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 over-grit">
            <div className="form-check mb-5">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" for="flexCheckDefault">
                Four withdrawal limit only lorem ipsum monteren renemdem
              </label>
            </div>
            <Link onClick={() => setModalShow(true)} className='btn btn-outline-primary px-5 py-3 new-btn fs-6 w-75' to="">Create Plan</Link>
          </div>
        </div>
      </div>
      <Withdrawal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="modal-dialog modal-dialog-centered" id="success" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewGrit;
