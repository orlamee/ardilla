import React from "react";
import { Link } from "react-router-dom";
import fone from "../img/fone.svg";
import logo from "../img/ardilla.svg";


function Footer() {
  return(
    <section>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row footer-top">
              <div className="col-md-6">
                <h2>Download for free<br/>Start saving Today</h2>
                <form className="mt-5">
                  <div className="input-group">
                    <input type="text" className="form-control input-lg download" placeholder="Your email"/>
                    <span className="input-group-btn" style={{marginLeft: "-9px"}}>
                      <Link className="btn download-btn btn-lg">Download for free</Link>
                    </span>
                  </div>
                </form>
              </div>
              <div className="col-md-6 text-center" >
                <img src={fone} alt="" className="img-fluid" style={{marginTop: "49px"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer;