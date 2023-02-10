import React from "react";
import press from "../../img/press.svg";
import onweb from "../../img/onweb.svg";


function SeenOn() {
  return (
    <section className="words-section bg-white">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img src={press} alt="press" className="img-fluid"/>
          </div>
        </div>
        <div className="row top-product justify-content-center text-center">
          <div className="col-md-10">
            <div className="webapp">
              <h4>Also Available on Web</h4>
              <p className="mt-3 mb-5">Increase your bread & butter on the app or on the web. The Ardilla app services are <br/>also available on the web.</p>
              <img src={onweb} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )  
}

export default SeenOn;