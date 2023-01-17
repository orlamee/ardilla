import React from "react";
import SavingsCreated from "../components/dashboardParts/savingsCreated";
import SavingsHeader from "../components/dashboardParts/savingsHeader";

function CreatedSavings() {
  return (
    <div>
      <SavingsHeader/>
      <SavingsCreated/>
    </div>
  )
}

export default CreatedSavings;
