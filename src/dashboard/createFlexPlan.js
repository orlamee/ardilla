import React from "react";
import FlexPlanCreate from "../components/dashboardParts/flexPlanCreate";
import SavingsHeader from "../components/dashboardParts/savingsHeader";

function CreateFlexPlan() {
  return (
    <div className="overflow-hidden">
      <SavingsHeader/>
      <FlexPlanCreate/>
    </div>
  )
}

export default CreateFlexPlan;
