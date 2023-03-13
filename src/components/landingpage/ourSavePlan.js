import React from "react";
import dib from "../../img/dib-icon.svg";


function OurSavePlan() {
  return (
    <section className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0">
            <div className="bg-dib">
              <img src={dib} alt="dib" className="img-fluid" />
              <h3 className="my-5 text-white">DIB</h3>
              <h5 className="text-white">Never get stranded again</h5>
              <p className="text-white top-products">Sadly no one can predict the future. However, we don't necessarily have to let unwanted situations get the best of us. With an emergency fund, you can take charge of any situation.</p>
            </div>
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
              <h3 className="my-5">DREAMS</h3>
              <h5>Dreams come through</h5>
              <p className="top-products">Do you have a dream phone, house, ride, jewelry, or a Dreams? With the dream plan, you can start saving towards anything you want to achieve..</p>
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