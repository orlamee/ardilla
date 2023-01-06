import React from "react";
import { Link } from "react-router-dom";
import demo from "../../img/home-hero.svg";


function Hero() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mt-5" >
            <h2 className="desktop">Your <span style={{color: "#E8356D"}}>Access</span> <br/>To <span style={{color: "#E8356D"}}>More</span></h2>
            <h2 className="mobile">Your <span style={{color: "#E8356D"}}>Access</span> To <span style={{color: "#E8356D"}}>More</span></h2>
            <h6 className="my-5 desktop">Ardilla helps you save and invest in achieving your financial goals, we<br/>have the most flexible and seamless way to grow your funds.</h6>
            <h6 className="my-5 mobile">Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to grow your funds.</h6>
            <Link className='btn btn-outline-primary px-5 py-4 ardilla-btn fs-6' to="/">Get Started</Link>
          </div>
          <div className="col-md-6 text-end">
            <img src={demo} alt="" className="img-fluid" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero; 