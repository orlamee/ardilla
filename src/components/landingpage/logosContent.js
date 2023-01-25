import React from "react";
import ardilla from "../../img/ard.svg";

function LogosContent() {
  return (
    <section className="newspress">
      <div className="container">
        <div className="row">
          <div className="col-md-5" >
            <h4>The Ardilla name itself is just another name for Squirrel. The squirrel saves its nuts inside the ground for dry days</h4>
          </div>
        </div>
        <div className="row btns-press ardlogo">
          <div className="col-md-4 mb-3">
            <div>
              <img src={ardilla} alt="logo" className="img-fluid w-100 mb-3" />
              <span className="mt-4">Primary Logo</span>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div>
              <img src={ardilla} alt="logo" className="img-fluid w-100 mb-3" />
              <span className="mt-4">Inverted Logo</span>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div>
              <img src={ardilla} alt="logo" className="img-fluid w-100 mb-3" />
              <span className="mt-4">Flat Logo</span>
            </div>
          </div>
        </div>
        <div className="row btns-press ardlogo">
          <div className="col-md-4 mb-3">
            <div>
              <img src={ardilla} alt="logo" className="img-fluid w-100 mb-3" />
              <span className="mt-4">Primary Logo Mark</span>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div>
              <img src={ardilla} alt="logo" className="img-fluid w-100 mb-3" />
              <span className="mt-4">Inverted Logo Mark</span>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div>
              <img src={ardilla} alt="logo" className="img-fluid w-100 mb-3" />
              <span className="mt-4">Flat Logo Mark</span>
            </div>
          </div>
        </div>
        <div className="row btns-press ardlogo">
          <div className="col">
            <h4 className="mb-4">Don’ts</h4>
            <p>Our logo represents our brand and it's important that it's well presented consistently everywhere.</p>
            <p>No squashing or pulling<br/>
            No drop shadows</p>
            <p>No gradients<br/>
            No tracing or recreation</p>
          </div>
        </div>
        
        
        
        
      </div>
    </section>
  )
}

export default LogosContent; 