import React from "react";
import dib from "../../img/dib-icon.svg";


function OurSavePlan() {
  return (
    <section className="our-save">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center" >
            <h2>Our <span style={{color: "#E8356D"}}>Savings Plan</span></h2>
            <h6>Check out our savings plan that fits your need and also speaks to you exactly how you want save for a beetter financial stability fo a better future for yourself</h6>
          </div>
        </div>
        <div className="row top-product">
          <div className="col-md-6 p-0" style={{marginTop: "300px"}}>
            <div className="bg-dib">
              <img src={dib} alt="dib" className="img-fluid" />
              <h3 className="mt-4 mb-4">DIB</h3>
              <h5>Never get stranded again</h5>
              <p className="mt-5">Sadly no one can predict the future. However, we don't necessarily have to let unwanted situations get the best of us. With an emergency fund, you can take charge of any situation.</p>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="bg-drims">
              <img src={dib} alt="dib" className="img-fluid" />
              <h3 className="mt-4 mb-4">DREAMS</h3>
              <h5>Dreams come through</h5>
              <p className="mt-5">Do you have a dream phone, house, ride, jewelry, or a Dreams? With the dream plan, you can start saving towards anything you want to achieve..</p>
            </div>
            <div className="bg-vault">
              <img src={dib} alt="dib" className="img-fluid" />
              <h3 className="mt-4 mb-4">VAULT</h3>
              <h5>Money making money</h5>
              <p className="mt-5">It is pretty easy to spend money. It is also pretty depressing wondering how you spent it all. With Ardilla's vault, you can stash that extra cash while making good returns on your money.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSavePlan; 