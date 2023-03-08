import React from "react";
import { Link } from "react-router-dom";
import shield from "../../img/draem.svg";
import dib from "../../img/DIB.svg";
import vault from "../../img/Vault.svg";
import fly from "../../img/fly.svg";


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
              <div className="">
                <img src={shield} alt="" className="img-fluid" style={{marginLeft: "-56px"}} />
                <h1>Dreams</h1>
                <p className="my-4">Lorem ipsum dolor sit amet consectetur. Felis proin ut proin aliquet semper congue malesuada. Eget penatibus </p>
                <Link className="text-white">Learn More</Link>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="">
                <img src={dib} alt="" className="img-fluid" style={{marginLeft: "-56px"}} />
                <h1>DIB</h1>
                <p className="my-4">Lorem ipsum dolor sit amet consectetur. Felis proin ut proin aliquet semper congue malesuada. Eget penatibus </p>
                <Link className="text-white">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="row top-products justify-content-around">
            <div className="col-md-4 mb-3">
              <div className="">
                <img src={dib} alt="" className="img-fluid" style={{marginLeft: "-56px"}} />
                <h1>DIB</h1>
                <p className="my-4">Lorem ipsum dolor sit amet consectetur. Felis proin ut proin aliquet semper congue malesuada. Eget penatibus </p>
                <Link className="text-white">Learn More</Link>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="">
                <img src={vault} alt="" className="img-fluid" style={{marginLeft: "-56px"}} />
                <h1>Vault</h1>
                <p className="my-4">Lorem ipsum dolor sit amet consectetur. Felis proin ut proin aliquet semper congue malesuada. Eget penatibus </p>
                <Link className="text-white">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DDV;