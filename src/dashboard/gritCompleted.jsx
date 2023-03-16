import React from "react";
import CompletedGrit from "../components/dashboardParts/completedGrit";
import SavingsHeader from "../components/dashboardParts/savingsHeader";

function GritCompleted() {
  return (
    <div>
      <SavingsHeader/>
      <CompletedGrit/>
    </div>
  )
}

export default GritCompleted;
