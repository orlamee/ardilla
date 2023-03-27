import React from "react";
import mon from "../../img/ots.svg";


function ReceiveMoney() {
  return (
    <section className="receivemoney" style={{marginBottom: "200px"}}>
      <div className="container">
        <div className="row">
          <div className="col text-center dilla-text" >
           <h2>Receive Money</h2>
           <h6 className="mt-3 dilla-text">Receive money swiftly from any bank account or financial institution.</h6>
          </div>
          <div className="bg-gy text-center">
            <img src={mon} alt="send money" className="img-fluid mt-5" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ReceiveMoney; 