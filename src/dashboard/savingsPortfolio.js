import React from "react";
import SavingPortfolio from "../components/dashboardParts/savingPortfolio";
import SavingsHeader from "../components/dashboardParts/savingsHeader";

function PortfolioSavings() {
  return (
    <div className="overflow-hidden">
      <SavingsHeader/>
      <SavingPortfolio/>
    </div>
  )
}

export default PortfolioSavings;
