import React from "react";
import mon from "../../img/reqq.svg";


function RequestMoney() {
  return (
    <section className="req">
      <div className="container">
        <div className="row">
          <div className="col text-center dilla-text" >
           <h2 className="text-white">Request Money</h2>
           <h6 className="mt-3 dilla-text text-white">Send money safely and conveniently to friends and families. Send to Dilla wallets or bank accounts.</h6>
          </div>
         <div className="row justify-content-center mt-5">
          <div className="col-md-10 text-center">
             <img src={mon} alt="send money" className="img-fluid mt-5" />
          </div>
         </div>
        </div>
      </div>
    </section>
  )
}
export default RequestMoney; 