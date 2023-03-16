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
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import hurray from "../../img/hurray.svg";
// import icon from "../../img/dashboard/ICON.svg";


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
        <img src={hurray} alt="" className="img-fluid mb-4" />
        <h4 className="mb-4">Congratulations</h4>
        <h6>You have successfully withdrawn your interests of ₦ 20,000 to your Dilla</h6>
        <Link className='btn btn-outline-primary px-5 py-3 new-btn fs-6 w-50 mt-4' to="">Proceed</Link>
      </Modal.Body>
    </Modal>
  );
}



function WithdrawGrit() {
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
      <div className="content py-5 px-5 gritsave-bg">
        <div className="row justify-content-start">
          <div className="col-md-4 withgrit">
            <h2>Withdraw</h2>
            <h6>Withdraw your fund</h6>
            <Form className="mt-5">
              <Form.Group className="mb-4">
                <Form.Label>Choose Withdrawal destination</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Dilla</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-4" controlId="">
                <Form.Label>Pin</Form.Label>
                <Form.Control type="password" placeholder="Enter Pin" />
              </Form.Group>
              <Link className='btn btn-outline-primary px-5 py-3 new-btn fs-6 w-100' to="" onClick={() => setModalShow(true)} style={{marginTop: "50px"}}>Withdraw</Link>
            </Form>
          </div>
        </div>
      </div>
      <Withdrawal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
}

export default WithdrawGrit;
