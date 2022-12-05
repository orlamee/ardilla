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
import contact from "../../img/dashboard/contact.svg";
import chat from "../../img/dashboard/chat.svg";
import target from "../../img/dashboard/targetplan.svg";
import question from "../../img/dashboard/question.svg";


function CreateTarget() {
  return (
    <section className="main-dash">
      <div className="sidebar">
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
          <div className="d-flex flex-row" >
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
        <Link>
          <div className="d-flex flex-row">
            <img src={dilla} alt="" className="img-fluid me-2 icons" />
            Dilla
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={explore} alt="" className="img-fluid me-2 icons" />
            Explore
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={learn} alt="" className="img-fluid me-2 icons" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link>
            <div className="d-flex flex-row">
              <img src={contact} alt="" className="img-fluid me-2 icons" />
              Contact Dilla Coach
            </div>
          </Link>
          <Link>
            <div className="d-flex flex-row">
              <img src={chat} alt="" className="img-fluid me-2 icons" />
              Chat Support
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
      <div className="content py-5 px-5">
       <div className="row justify-content-center flex-plan">
        <div className="col-md-9 text-center">
          <img src={target} alt="" className="img-fluid"/>
          <h2 className="my-5">Create your <br/><span style={{color: "#E8356D"}}>Target <Link data-bs-toggle="modal" data-bs-target="#flex" type="button"><img src={question} alt="" className="img-fluid ques" /></Link></span></h2>
          <h6>Lorem ipsum dolor sit amet consectetur. Faucibus sit odio feugiat suspendisse felis<br/> morbi interdum. Eget sit ultricies facilisi elementum. </h6>
          <Link className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-5" to="/create-target" >Create a Target</Link>
          <div
            className="modal flex-modal fade"
            id="flex"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body flex-modal-body">
                  <div className="container">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                              <img src={target} alt="" className="img-fluid" />
                              <h6 className="my-3">Create your <span style={{color: "#E8356D"}}>Target</span> plan?</h6>
                              <p>Save with discipline towards a specific goal or target. Earn interests every day into your Flex wallet.</p>
                              <a className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2" href="/create-target" >Create a Target</a>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                              <img src={target} alt="" className="img-fluid" />
                              <h6 className="my-3">Create your <span style={{color: "#E8356D"}}>Target</span> plan?</h6>
                              <p>Save with discipline towards a specific goal or target. Earn interests every day into your Flex wallet.</p>
                              <a className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2" href="/create-target" >Create a Target</a>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                              <img src={target} alt="" className="img-fluid" />
                              <h6 className="my-3">Create your <span style={{color: "#E8356D"}}>Target</span> plan?</h6>
                              <p>Save with discipline towards a specific goal or target. Earn interests every day into your Flex wallet.</p>
                              <a className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 mt-2" href="/create-target" >Create a Target</a>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="bi bi-chevron-left fs-5 text-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="bi bi-chevron-right fs-5 text-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    
                  </div>
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

export default CreateTarget;
 