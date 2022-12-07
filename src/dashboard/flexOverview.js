import React from "react";
import FlexPlanOverview from "../components/dashboardParts/flexPlanOverview";
import SavingsHeader from "../components/dashboardParts/savingsHeader";

function FlexOverview() {
  return (
    <div>
      <SavingsHeader/>
      <FlexPlanOverview/>
    </div>
  )
}

export default FlexOverview;
