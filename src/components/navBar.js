import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/ardilla.svg";
import globe from "../img/globe.svg";
import save from "../img/save.svg";
import wallet from "../img/wallet.svg";
import learn from "../img/learn.svg";
import claim from "../img/claim.svg";
import invest from "../img/invest.svg";

function Header() {
  return(
    <nav className="navbar fixed-top navbar-expand-lg navbar-light py-2 px-1">
      <div className='container header'>
        <Link className='navbar-brand' to="/">
          <img src={logo} alt="" className='img-fluid' style={{marginTop: "-8px"}} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="me-auto">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" to="/">Products</Link>
                <div className="dropdown-menu dropdown-large">
                  <div className='row'>
                    <div className="col-md-6 border-end">
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={save} alt="" className="img-fluid" />
                          <div className="mt-3">
                            <h2 className="active">Save</h2>
                            <h6>Save at your pace</h6>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={invest} alt="" className="img-fluid" />
                          <div className="mt-3">
                            <h2>Invest</h2>
                            <h6>Unlimited Returns opportunities</h6>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={claim} alt="" className="img-fluid" />
                          <div className="mt-3">
                            <h2>Make a claim</h2>
                            <h6>Create a claim at any time</h6>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={wallet} alt="" className="img-fluid" />
                          <div className="mt-3">
                            <h2>Wallet</h2>
                            <h6>Unlimited transactions</h6>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={learn} alt="" className="img-fluid" />
                          <div className="mt-3">
                            <h2>Learn</h2>
                            <h6>Learn and get paid</h6>
                          </div>
                        </div>
                      </Link>
                    </div>                      
                    <div className="col-md-6 px-5 pt-3">
                      <div className="d-flex flex-row mb-3">
                        <i className="bi bi-check2 me-3"></i>
                        <h4 className="mt-1">Flex Savings Plan</h4>
                      </div>
                      <div className="d-flex flex-row mb-3">
                        <i className="bi bi-check2 me-3"></i>
                        <h4 className="mt-1">Target Savings Plan</h4>
                      </div>
                      <div className="d-flex flex-row mb-3">
                        <i className="bi bi-check2 me-3"></i>
                        <h4 className="mt-1">For me Plan</h4>
                      </div>
                      <div className="d-flex flex-row mb-3">
                        <i className="bi bi-check2 me-3"></i>
                        <h4 className="mt-1">Savings Challenge</h4>
                      </div>
                    </div>                      
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Business <span className="nav-badge ms-2">Beta</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Company</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/learn" target="_blank">Learn</Link>
              </li>
            </ul>
          </div>
          <div className='ms-auto' style={{marginTop: "18px"}}>
            <ul className="navbar-nav">
              <li className='nav-item'>
                <Link className='nav-link me-3' to="/login">Sign in</Link>
              </li>
              <li className='nav-item'>
                <Link className='btn btn-outline-primary px-4 py-2 ardilla-btn fs-6' to="/sign-up">Create Account</Link>
              </li>
              <li className='nav-item'>
                <img src={globe} alt="" className="img-fluid globe" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;