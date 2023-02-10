import React from "react";
import { Link } from "react-router-dom";
import shield from "../../img/draem.svg";
import dib from "../../img/DIB.svg";
import vault from "../../img/Vault.svg";

function DDV() {
  return(
    <section className="videos bg-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="mb-3"><span style={{color: "#E8356D"}}>Access More</span><span style={{color: "#3D0072"}}> With Your Money</span></h2>
            <h6 className="mb-3">Plan towards your future by saving with ardilla,  Grow your money with pro-vetted savings plans just for you.</h6>
            <Link>Learn more about Savings <i className="bi bi-chevron-right"></i></Link>
          </div>
        </div>
        <div className="row top-products justify-content-around">
          <div className="col-md-4 mb-3">
            <div className="">
              <img src={shield} alt="" className="img-fluid" style={{marginLeft: "-56px"}} />
              <h1>Dreams</h1>
              <p className="my-4">Lorem ipsum dolor sit amet consectetur. Felis proin ut proin aliquet semper congue malesuada. Eget penatibus </p>
              <Link>Learn More</Link>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="">
              <img src={dib} alt="" className="img-fluid" style={{marginLeft: "-56px"}} />
              <h1>DIB</h1>
              <p className="my-4">Lorem ipsum dolor sit amet consectetur. Felis proin ut proin aliquet semper congue malesuada. Eget penatibus </p>
              <Link>Learn More</Link>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="">
              <img src={vault} alt="" className="img-fluid" style={{marginLeft: "-56px"}} />
              <h1>Vault</h1>
              <p className="my-4">Lorem ipsum dolor sit amet consectetur. Felis proin ut proin aliquet semper congue malesuada. Eget penatibus </p>
              <Link>Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DDV;