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
import deposit from "../../img/icon-deposit.svg";
import withdraw from "../../img/icon-withdraw.svg";
import hurray from "../../img/hurray.svg";
import chat from "../../img/dashboard/chat.svg";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
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
        <img src={hurray} alt="" className="img-fluid mb-4" />
        <h4 className="mb-4">Congratulations</h4>
        <h6>You have successfully withdrawn your interests of ₦ 20,000 to your Dilla</h6>
        <Link className='btn btn-outline-primary px-5 py-3 new-btn fs-6 w-50 mt-4' to="">Proceed</Link>
      </Modal.Body>
    </Modal>
  );
}



function HousingGrit() {
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
        <div className="row justify-content-between">
          <div className="col-md-5 mb-3">
            <div className="over-card">
              <h1 className="text-white mb-5"><span className="ngn">NGN</span> 10,000</h1>
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4>Name</h4>
                </div>
                <div className="col-md-6 text-end">
                  <h5>Housing</h5>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4>Interest</h4>
                </div>
                <div className="col-md-6 text-end">
                  <h5>₦50,000.00</h5>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4>Frequency</h4>
                </div>
                <div className="col-md-6 text-end">
                  <h5>1 Year</h5>
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
            </div>
            <div className="bg-activity p-4 mt-4 bg-white">
              <h6>Recent Activities</h6>
              <h3 className="float-end" style={{marginTop :"-19px"}}>View all</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Grit</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src={deposit} alt="" className="img-fluid me-2" width={18} /> Transportation</td>
                    <td>30 days</td>
                    <td>₦4000.00 </td>
                  </tr>
                  <tr>
                    <td><img src={withdraw} alt="" className="img-fluid me-2" width={18}/>Travel</td>
                    <td>30 days</td>
                    <td>₦4000.00 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bg-ext p-5">
              <Tabs
                defaultActiveKey="extend"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="extend" title="Extend">
                  <div className="row mt-5">
                    <h3>Extend</h3>
                    <h6>Make preferred changes to your Target</h6>
                    <Form className="mt-4">
                      <Form.Group className="mb-4">
                        <Form.Label>Plan Duration</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>1 Year - 20%</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                          You can’t go below your current plan duration
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                      </Form.Group>
                      <Link className='btn btn-outline-primary px-5 py-3 new-btn fs-6 w-100' to="/grit/dashboard" style={{marginTop: "200px"}}>Submit</Link>
                    </Form>

                  </div>
                </Tab>
                <Tab eventKey="settings" title="Settings">
                  <div className="row mt-5">
                    <h3>Settings</h3>
                    <h6>Make preferred changes to your Plan</h6>
                    <Form className="mt-4">
                      <Form.Group className="mb-4">
                        <Form.Label>Edit Plan name</Form.Label>
                        <Form.Control type="text" placeholder="Housing" />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label>Edit primary source</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Dilla</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                      </Form.Group>
                      <Link className='btn btn-outline-primary px-5 py-3 new-btn fs-6 w-100' to="/grit/dashboard" style={{marginTop: "200px"}}>Submit</Link>
                    </Form>

                  </div>
                </Tab>
                <Tab eventKey="withdrawal" title="Withdrawal">
                  <div className="row mt-5">
                    <h6>Total Interest</h6>
                    <h3>₦50,000.00</h3>
                    <Form className="mt-4">
                      <Form.Group className="mb-4">
                        <Form.Label>Select Interest amount</Form.Label>
                        <Form.Control type="number" placeholder="₦50,000.00" />
                        <Form.Text className="text-muted">
                          You cannot exceed your interest amount
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                      </Form.Group>
                      <Link className='btn btn-outline-primary px-5 py-3 new-btn fs-6 w-100' to="" onClick={() => setModalShow(true)} style={{marginTop: "200px"}}>Withdraw</Link>
                    </Form>

                  </div>
                </Tab>
              </Tabs>
            </div>
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

export default HousingGrit;
