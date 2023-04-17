import React from "react";
import { Link } from "react-router-dom";
import fone from "../img/fone.svg";
import facebook from "../img/facebook.svg";
import twitter from "../img/twitter.svg";
import linkedin from "../img/linkedin.svg";


function Footer() {
  return(
    <section className="">
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row footer-top">
              <div className="col-md-6 mb-3">
                <h2 className="mb-4">Download for free<br/>Start saving Today</h2>
                <Link to="/downloadardilla" className="btn download-btn btn-lg">Download for free</Link>
              </div>
              <div className="col-md-6 text-center" >
                <img src={fone} alt="" className="img-fluid w-100"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-bottom">
        <div className="container">
          <div className="row bottom-line" >
            <div className="col-md-12">
              <div className="row">
                <div className="col-sm mb-3">
                  <h4>Products</h4>
                  <ul className="list-unstyled links">
                    <li><Link to="/save">Savings</Link></li>
                    <li><Link to="/dilla-wallet">Dilla</Link></li>
                    <li><Link to="/coach">Financial Coach</Link></li>
                    <li><Link to="/halal">Halal</Link></li>
                    <li><Link to="">Budgetting</Link> <span className="foot-bg border border-white">Coming Soon</span></li>
                    <li><Link to="">Investment</Link> <span className="foot-bg border border-white">Coming Soon</span></li>
                    <li><Link to="">Insurance</Link> <span className="foot-bg border border-white">Coming Soon</span></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h4>Company</h4>
                  <ul className="list-unstyled links">
                    <li><Link to="/about-us">About us</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/press">Press</Link></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h4>Transparency</h4>
                  <ul className="list-unstyled links">
                    <li><Link to="/terms-conditions">Terms & conditions</Link></li>
                    <li><Link to="/information-security">Information security policy</Link></li>
                    <li><Link to="/privacy-policy">Privacy policy</Link></li>
                    <li><Link to="/interest">Interest Tool</Link></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h4>Developer</h4>
                  <ul className="list-unstyled links">
                    <li>Connect API <span className="foot-bg border border-white">Coming Soon</span></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h4>Address</h4>
                  <ul className="list-unstyled links">
                    <li>33B, Ogundana street, Allen, Ikeja.</li>
                  </ul>
                  <h4 className="mb-3">Contact</h4>
                  <ul className="list-unstyled links">
                    <li>support@ardilla.africa</li>
                    <li>(234)801 000 1234</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-md-10 mb-3">
              <h6>© 2023 Ardilla. All right reserved</h6>
              <h6 className="mt-3">Ardilla operates under the coorperative license of Ardilla Multipurpose Cooperative Society, LSC 18245, We provide Savings and Fixed deposit services to our users</h6>
            </div>
            <div className="col-md-2">
              <div className="d-flex flex-row">
                <Link to="/"><img src={facebook} alt="" className="img-fluid me-3" /></Link>
                <Link to="/"><img src={linkedin} alt="" className="img-fluid me-3" /></Link>
                <Link to="/"><img src={twitter} alt="" className="img-fluid me-3" /></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer;