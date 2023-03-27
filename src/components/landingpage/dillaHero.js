import React from "react";
import demo from "../../img/dilla-cards.svg";


function DillaHero() {
  return (
    <section className="banner h-dilla">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mb-3 offset-md-2 learn-top" >
            <h2 className=""><span style={{color: "#E8356D"}}>Ardilla Digital Wallet</span></h2>
            <h6 className="my-5 desktop">Dilla, offers you the convenience of sending, requesting, and receiving<br/>money anytime, anywhere. All without having to go through the challenges<br/>or limitations of a regular bank account</h6>
            <h6 className="my-5 mobile">Dilla, offers you the convenience of sending, requesting, and receiving money anytime, anywhere. All without having to go through the challenges or limitations of a regular bank account</h6>
            {/* <Link className='btn btn-outline-primary px-5 py-4 ardilla-btn fs-6' to="/">Get Started</Link> */}
          </div>
          <div className="col-md-5 offset-md-1 p-0">
            <img src={demo} alt="" className="img-fluid w-100" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default DillaHero; 