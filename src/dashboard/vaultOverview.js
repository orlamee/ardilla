import React from "react";
import SavingsHeader from "../components/dashboardParts/savingsHeader";
import VaultPlanOverview from "../components/dashboardParts/vaultPlanOverview";

function VaultOverview() {
  return (
    <div>
      <SavingsHeader/>
      <VaultPlanOverview/>
    </div>
  )
}

export default VaultOverview;
