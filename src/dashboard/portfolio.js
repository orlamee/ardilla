import React from "react";
import PortfolioBody from "../components/dashboardParts/portfolioBody";
import PortfolioHeader from "../components/dashboardParts/portfolioHeader";

function Portfolio() {
  return (
    <div className="dark-mode">
      <PortfolioHeader/>
      <PortfolioBody/>
    </div>
  )
}

export default Portfolio;
