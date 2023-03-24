import React from "react";
import FinancialCoach from "../components/dashboardParts/financialCoach";
import FinancialHeader from "../components/dashboardParts/financialHeader";

function CoachFinancial() {
  return (
    <div className="dark-mode">
      <FinancialHeader/>
      <FinancialCoach/>
    </div>
  )
}

export default CoachFinancial;
