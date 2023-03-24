import React from "react";
import SavingsBody from "../components/dashboardParts/savingsBody";
import SavingsHeader from "../components/dashboardParts/savingsHeader";

function Savings() {
  return (
    <div className="dark-mode">
      <SavingsHeader/>
      <SavingsBody/>
    </div>
  )
}

export default Savings;
