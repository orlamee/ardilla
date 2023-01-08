import React from "react";
import mon from "../../img/mon.svg";


function SendMoney() {
  return (
    <section className="sendmoney">
      <div className="container">
        <div className="row">
          <div className="col text-center dilla-text" >
           <h2>Send Money</h2>
           <h6 className="mt-3 dilla-text">Send money safely and conveniently to friends and families. Send to Dilla wallets or bank accounts.</h6>
          </div>
          <img src={mon} alt="send money" className="img-fluid mt-5" />
        </div>
      </div>
    </section>
  )
}
export default SendMoney; 