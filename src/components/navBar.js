import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

function Header() {
  return(
    <nav className="navbar fixed-top navbar-expand-lg navbar-light py-4 px-2">
      <div className='container'>
        <Link className='navbar-brand' to="/">
          <img src={logo} alt="" className='logo img-fluid' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* <div className='ms-auto'>
            <ul className="navbar-nav">
              
              <li className='nav-item'>
                <Link className='btn btn-outline-primary px-5 ardilla-btn-outline text-dark' to="/">Open an Account</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Header;