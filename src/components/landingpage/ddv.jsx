import React from "react";
import { Link } from "react-router-dom";
import shield from "../../img/newdreams.svg";
import dib from "../../img/newdibb.svg";
import vault from "../../img/newvault.svg";
import grit from "../../img/grittttttt.svg";
import fly from "../../img/fly-fff.svg";


function DDV() {
  return(
    <section className="videos bg-white bg-ddv">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="mb-3 text-white">Access More With Your Money</h2>
            <h6 className="mb-5 text-white">Plan towards your future by saving with ardilla,  Grow your money with pro-vetted savings plans just for you.</h6>
            <button type="button" class="btn btn-outline-light new-light">Learn more about Savings <img src={fly} alt="fly" className="img-fluid ms-3" /></button>
          </div>
        </div>
        <div className="top-products graphbg">
          <div className="row mb-4 justify-content-around">
            <div className="col-md-4 mb-3">
              <div className="ddv-cards">
                <img src={dib} alt="" className="img-fluid" style={{marginLeft: "-56px"}} />
                <h1 style={{color: "#FEFCE8"}}>DIB</h1>
                <p className="my-4">Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund.</p>
                <Link to="/save" className="text-white">Learn More</Link>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="ddv-cards">
                <img src={shield} alt="" className="img-fluid" style={{marginLeft: "-56px"}} />
                <h1 style={{color: "#F0FDFA"}}>Dreams</h1>
                <p className="my-4">Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well. </p>
                <Link to="/save" className="text-white">Learn More</Link>
              </div>
              
            </div>
          </div>
          <div className="row top-products justify-content-around">
            <div className="col-md-4 mb-3">
              <div className="ddv-cards">
                <img src={vault} alt="" className="img-fluid" style={{marginLeft: "-56px"}} />
                <h1 style={{color: "#FCE8EE"}}>Vault</h1>
                <p className="my-4">Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to. </p>
                <Link to="/save" className="text-white">Learn More</Link>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="ddv-cards">
                <img src={grit} alt="" className="img-fluid" style={{marginLeft: "-56px"}} />
                <h1 style={{color: "#FEFCE8"}}>Grit</h1>
                <p className="my-4">Become a VIP when you save more money with us. Enjoy better benefits.</p>
                <Link to="/save" className="text-white">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DDV;