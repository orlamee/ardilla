import React from "react";
import qr from "../../img/qr.svg";
import stores from "../../img/stores.svg";

function Downloading() {
  return (
    <section className="downloading">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 mb-3 text-center dilla-text" >
            <h2 className="">Try Ardilla Today</h2>
            <h6 className="mt-3 mb-5">Scan the QR code with your phone camera to download the Ardilla App<br/>Signing up is simple. You’ll be ready to go in less than 5 minutes.</h6>
            <img src={qr} alt="scancode" className="img-fluid" />
            <div className="mt-5">
              <img src={stores} alt="scancode" className="img-fluid " />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Downloading; 