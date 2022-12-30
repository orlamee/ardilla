import React from "react";
import SavingsHeader from "../components/dashboardParts/savingsHeader";
import VaultCreate from "../components/dashboardParts/vaultCreate";

function CreateVault() {
  return (
    <div>
      <SavingsHeader/>
      <VaultCreate/>
    </div>
  )
}

export default CreateVault;
