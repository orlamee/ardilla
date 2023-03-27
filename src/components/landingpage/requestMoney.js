import React from "react";
import mon from "../../img/reqq.svg";


function RequestMoney() {
  return (
    <section className="req">
      <div className="container">
        <div className="row">
          <div className="col text-center dilla-text" >
           <h2 className="text-white">Request Money</h2>
           <h6 className="mt-3 dilla-text text-white">Create unique links and request money from family and friends.</h6>
          </div>
         <div className="row justify-content-center mt-5">
          <div className="col-md-12 text-center">
             <img src={mon} alt="send money" className="img-fluid mt-5" />
          </div>
         </div>
        </div>
      </div>
    </section>
  )
}
export default RequestMoney; 