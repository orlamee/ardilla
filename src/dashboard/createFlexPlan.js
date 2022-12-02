import React from "react";
import FlexPlanCreate from "../components/dashboardParts/flexPlanCreate";
import SavingsHeader from "../components/dashboardParts/savingsHeader";

function CreateFlexPlan() {
  return (
    <div>
      <SavingsHeader/>
      <FlexPlanCreate/>
    </div>
  )
}

export default CreateFlexPlan;
