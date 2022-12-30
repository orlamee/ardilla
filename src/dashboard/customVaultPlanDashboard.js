import React from "react";
import CustomVaultDashboard from "../components/dashboardParts/customVaultDashboard";
import SavingsHeader from "../components/dashboardParts/savingsHeader";

function CustomVault() {
  return (
    <div>
      <SavingsHeader/>
      <CustomVaultDashboard/>
    </div>
  )
}

export default CustomVault;
