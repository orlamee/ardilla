import React from "react";
import SavingsBody from "../components/dashboardParts/savingsBody";
// import SavingsHeader from "../components/dashboardParts/savingsHeader";
import Header from "../components/dashboardParts/header";

function Savings() {
  return (
    <div className="dark-mode">
      {/* <SavingsHeader/> */}
      <Header/>
      <SavingsBody/>
    </div>
  )
}

export default Savings;
