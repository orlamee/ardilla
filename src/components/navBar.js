import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/ardilla.svg";

function Header() {
  return(
    <nav className="navbar fixed-top navbar-expand-lg navbar-light py-4 px-1">
      <div className='container'>
        <Link className='navbar-brand' to="/">
          <img src={logo} alt="" className='img-fluid' style={{marginTop: "-10px"}} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="me-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active">Personal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Business</Link>
              </li>
            </ul>
          </div>
          <div className='ms-auto'>
            <ul className="navbar-nav">
              <li className='nav-item'>
                <Link className='nav-link me-3' to="/login">Sign in</Link>
              </li>
              <li className='nav-item'>
                <Link className='btn btn-outline-primary px-4 py-2 ardilla-btn fs-6' to="/sign-up">Create Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;