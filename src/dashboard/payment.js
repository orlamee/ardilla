import React from "react";
import PaymentHeader from "../components/dashboardParts/paymentHeader";
import PaymentSAN from "../components/dashboardParts/paymentSAN";

function Payment() {
  return (
    <div className="dark-mode">
      <PaymentHeader/>
      <PaymentSAN/>
    </div>
  )
}

export default Payment;
