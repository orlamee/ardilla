import React from "react";
import icon from "../../img/dashboard/logo.svg";
import nots from "../../img/dashboard/nots.svg";
import ham from "../../img/ham.svg";
import settings from "../../img/dashboard/settings.svg";
import { Link } from "react-router-dom";
import d from "../../img/dashboard/profile-icon.svg";
import c from "../../img/dashboard/account-icon.svg";
import avi from "../../img/dashboard/nots-img.svg";
import alla from "../../img/dashboard/arlla.svg";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Header() {
  return (
    <section className="dashboard-header sticky-top">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <img src={icon} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="d-flex flex-row float-end desktop cogs">
          <div className="dropdown">
            <img src={nots} alt="" className="img-fluid me-4 dropdown-toggle header-toggle" role="button" data-bs-toggle="dropdown" />
            <ul className="dropdown-menu nots-menu">
              <div className="row m-5">
                <div className="col">
                  <h3 className="text-white mb-4">Notification</h3>
                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3 togss"
                    justify
                    onClick={event => event.stopPropagation()}
                  >
                    <Tab eventKey="home" title="Notifications" >
                      <div className="row mt-5">
                        <div className="col">
                          <h4 className="text-white">Today</h4>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-3">
                        <div><img src={avi} alt="" className="img-fluid" /></div>
                        <div className="ms-3"><p className="text-white">{"<"}Olaide{"/>"} sent you <span className="fw-bold">₦50,000.00</span></p></div>
                      </div>
                      <div className="d-flex flex-row mt-3">
                        <div><img src={avi} alt="" className="img-fluid" /></div>
                        <div className="ms-3"><p className="text-white">{"<"}Olaide{"/>"} sent you <span className="fw-bold">₦50,000.00</span></p></div>
                      </div>
                      <div className="d-flex flex-row mt-3">
                        <div><img src={avi} alt="" className="img-fluid" /></div>
                        <div className="ms-3"><p className="text-white">{"<"}Olaide{"/>"} sent you <span className="fw-bold">₦50,000.00</span></p></div>
                      </div>
                      <div className="d-flex flex-row mt-3">
                        <div><img src={avi} alt="" className="img-fluid" /></div>
                        <div className="ms-3"><p className="text-white">{"<"}Olaide{"/>"} sent you a request of <span className="fw-bold">₦50,000.00</span></p></div>
                      </div>
                    </Tab>
                    <Tab eventKey="profile" title="Messages">
                      <div className="row mt-5">
                        <div className="col">
                          <h4 className="text-white">Today</h4>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-3">
                        <div><img src={alla} alt="" className="img-fluid" /></div>
                        <div className="ms-3">
                          <span>New Release</span>
                          <p className="text-white">Check out our New Dollar Transaction<br/>rate and get the best rates you will hardly find anywhere</p>
                          <div className="d-flex flex-row">
                            <Link
                              className="btn btn-outline-primary px-3 py-1 not-btn me-3"
                            >
                              Check Now
                            </Link>
                            <span className="mt-2">10:38 PM</span>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col">
                          <h4 className="text-white">Older</h4>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-3">
                        <div><img src={alla} alt="" className="img-fluid" /></div>
                        <div className="ms-3">
                          <span>New Release</span>
                          <p className="text-white">Check out our New Dollar Transaction<br/>rate and get the best rates you will hardly find anywhere</p>
                          <div className="d-flex flex-row">
                            <Link
                              className="btn btn-outline-primary px-3 py-1 not-btn me-3"
                            >
                              Check Now
                            </Link>
                            <span className="mt-2">10:38 PM</span>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </ul>
          </div>
          <div className="dropdown">
            <Link to="" className="dropdown-toggle header-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={settings} alt="" className="img-fluid" /></Link>
            <ul className="dropdown-menu">
              <div className="row m-3">
                <div className="col">
                  <Link to="/profile" className="d-flex flex-row settings">
                    <img src={d} alt="" className="img-fluid me-2"/>
                    <p className="mt-3">Profile</p>
                  </Link>
                  <Link to="/explore" className="d-flex flex-row settings">
                    <img src={c} alt="" className="img-fluid me-2"/>
                    <p className="mt-3">Explore</p>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
          
        </div>
        <div className="d-flex flex-row  desktop cogs" style={{marginLeft: "36px", marginTop: "-44px"}}>
          <Link to=""><img src={ham} alt="" className="img-fluid me-4 w-75" /></Link>
        </div>
      </div>
    </section>
  )
}

export default Header;