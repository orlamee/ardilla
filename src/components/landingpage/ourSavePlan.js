import React from "react";
import dib from "../../img/dib-icon.svg";
import drim from "../../img/drim-icon.svg";
import vault from "../../img/vault-icon.svg";
import grit from "../../img/grit-icon.svg";


function OurSavePlan() {
  return (
    <section className="prods">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0">
            <div className="bg-dib">
              <img src={dib} alt="dib" className="img-fluid" />
              <h3 className="my-5" style={{color: "#3D0072"}}>DIB</h3>
              <h5 className=""  style={{color: "#3D0072"}}>Never get stranded again</h5>
              <p className="top-products"  style={{color: "#3D0072"}}>Nothing beats an unwanted emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund.</p>
            </div>
            <div className="bg-dib bg-gri">
              <img src={grit} alt="dib" className="img-fluid" />
              <h3 className="my-5 text-white">Grit</h3>
              <h5 className="text-white">The 1% class</h5>
              <p className="text-white top-products">The saving platform for the 1%. Save more for the long term, become a VIP, and enjoy mouth watering returns on your money.</p>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="bg-drims">
              <img src={drim} alt="dib" className="img-fluid" />
              <h3 className="my-5">DREAMS</h3>
              <h5>Dreams come through</h5>
              <p className="top-products">Helping you make your dream a reality is important to us. We have helped so many others, we can help you as well.</p>
            </div>
            <div className="bg-dib bg-vau">
            <img src={vault} alt="dib" className="img-fluid" />
              <h3 className="my-5 text-white">VAULT</h3>
              <h5 className="text-white">Money making money</h5>
              <p className="text-white top-products">Lock away excess funds for long periods and make good returns on your money. It certainly beats spending it and wondering what you did with all the money.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSavePlan; 