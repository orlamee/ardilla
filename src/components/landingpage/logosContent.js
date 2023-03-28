import React from "react";
import ardilla from "../../img/ard.svg";
import inverted from "../../img/inverted-logo.svg";
import flm from "../../img/flm.svg";
import plm from "../../img/plm.svg";
import ilm from "../../img/ilm.svg";
import flat from "../../img/flat-logo.svg";
import left from "../../img/bottom-image.svg";
import right from "../../img/bottom-image-1.svg";

function LogosContent() {
  return (
    <section className="newspress">
      <div className="container">
        <div className="row">
          <div className="col" >
            <h4>Ardilla is a financial platform that has derived its logo inspiration from the Tree squirrels. These animals are known for their diligent nature as they work hard to save nuts and small fruits to prepare for the winter and colder days ahead. Moreover, Tree squirrels are also admired for their sharp-wittedness, making them an ideal representation for a financial platform that values intelligence and resourcefulness. </h4>
          </div>
        </div>
        <div className="row btns-press ardlogo">
          <div className="col-md-4 mb-3">
            <div>
              <img src={ardilla} alt="logo" className="img-fluid w-100 mb-3" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div>
              <img src={inverted} alt="logo" className="img-fluid w-100 mb-3" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div>
              <img src={flat} alt="logo" className="img-fluid w-100 mb-3" />
            </div>
          </div>
        </div>
        <div className="row btns-press ardlogo">
          <div className="col-md-4 mb-3">
            <div>
              <img src={plm} alt="logo" className="img-fluid w-100 mb-3" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div>
              <img src={ilm} alt="logo" className="img-fluid w-100 mb-3" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div>
              <img src={flm} alt="logo" className="img-fluid w-100 mb-3" />
            </div>
          </div>
        </div>
        <div className="row btns-press ardlogo">
          <div className="col">
            <h4 className="mb-4">Don’ts</h4>
            <p>Our logo represents our brand and it's important that it's well presented consistently everywhere.</p>
            <p className="" style={{color: "#9CA3AF"}}>No squashing or pulling<br/>
            No drop shadows</p>
            <p className="" style={{color: "#9CA3AF"}}>No gradients<br/>
            No tracing or recreation</p>
          </div>
        </div>
        <div>
          <div className="row my-5">
            <div className="col-md-6 mb-3">
              <img src={left} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src={right} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-5 text-center">
            <hr/>
            <span className="text-center" style={{color: "#9CA3AF"}}>Last modified: March 28, 2023 at 12:00PM</span>
          </div>
        </div>
        
        
        
        
      </div>
    </section>
  )
}

export default LogosContent; 