import React from "react";
import FlexPlanDashboard from "../components/dashboardParts/flexPlanDashboard";
import SavingsHeader from "../components/dashboardParts/savingsHeader";

function FlexDashboard() {
  return (
    <div>
      <SavingsHeader/>
      <FlexPlanDashboard/>
    </div>
  )
}

export default FlexDashboard;
