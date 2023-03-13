import React from "react";
import demo from "../../img/herosave.svg";


function HeroSave() {
  return (
    <section className="hero-save bg-save">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mt-5" >
            <h2 className="desktop">Save with <br/><span style={{color: "#E8356D"}}>Ardilla</span></h2>
            <h2 className="mobile">Save with <br/>To <span style={{color: "#E8356D"}}>Ardilla</span></h2>
            <p className="my-4">Since the beginning of time, saving has been a tried and trusted method <br/>of building wealth. </p>
            <h6>With Ardilla, you can structure your finances better, get financial<br/>security through our saving plans, and lay the groundwork for wealth<br/>building. All while earning more.</h6>
          </div>
          <div className="col-md-6 text-end">
            <img src={demo} alt="" className="img-fluid" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default HeroSave; 