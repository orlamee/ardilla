import React from "react";
import { Link } from "react-router-dom";
import homepix from "../../img/homepix.svg";


function NewHero() {
  return (
    <section className="hero-new">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center" >
            <h2>Your Access To More</h2>
            <h6 className="mb-4">Ardilla helps you save and invest in achieving your financial goals, we have the most Flexible and seamless way<br/>to grow your funds.</h6>
            <Link className='btn btn-outline-primary px-5 py-3 white-btn fs-6' to="/login">Get Started</Link>
            <div className="mt-5">
              <img src={homepix} alt="banner" className="img-fluid" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default NewHero; 