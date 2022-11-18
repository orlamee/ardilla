import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/ardilla.svg";
import globe from "../../img/globe.svg";

function LearnHeader() {
  return(
    <nav className="navbar fixed-top navbar-expand-lg navbar-light py-2 px-1">
      <div className='container'>
        <a className='navbar-brand' href="/learn">
          <img src={logo} alt="" className='img-fluid' style={{marginTop: "-8px"}} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="me-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active">Guide</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Testimonies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Updates</Link>
              </li>
            </ul>
          </div>
          <div className='ms-auto' style={{marginTop: "18px"}}>
            <ul className="navbar-nav">
              <li className='nav-item mt-2 desktop'>
                <i className="bi bi-search"></i>
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

export default LearnHeader;