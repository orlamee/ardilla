import React from "react";
import SavingsHeader from "../components/dashboardParts/savingsHeader";
import TargetPlanCreate from "../components/dashboardParts/targetPlanCreate";

function CreateTargetPlan() {
  return (
    <div>
      <SavingsHeader/>
      <TargetPlanCreate/>
    </div>
  )
}

export default CreateTargetPlan;