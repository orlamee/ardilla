import React from "react";
import demo from "../../img/dilla-cards.svg";


function DillaHero() {
  return (
    <section className="banner h-dilla">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mb-3 offset-md-2 learn-top" >
            <h2 className=""><span style={{color: "#E8356D"}}>Dilla</span></h2>
            <h6 className="my-5 desktop">Ardilla's digital wallet offers you the convenience of sending and receiving<br/> money. Any time, anywhere. Without having to go through the challenges<br/> or limitations of a bank account.</h6>
            <h6 className="my-5 mobile">Ardilla's digital wallet offers you the convenience of sending and receiving money. Any time, anywhere. Without having to go through the challenges or limitations of a bank account.</h6>
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