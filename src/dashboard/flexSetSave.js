import React from "react";
import FlexPlanSuccess from "../components/dashboardParts/flexPlanSuccess";
// import FlexPlanSetSave from "../components/dashboardParts/flexPlanSetSave";
import SavingsHeader from "../components/dashboardParts/savingsHeader";

function FlexSuccess() {
  return (
    <div>
      <SavingsHeader/>
      <FlexPlanSuccess/>
      {/* <FlexPlanSetSave/> */}
    </div>
  )
}

export default FlexSuccess;
