import React from "react";
import PortfolioBody from "../components/dashboardParts/portfolioBody";
import Header from "../components/dashboardParts/header";

function Portfolio() {
  return (
    <div className="dark-mode">
      <Header/>
      <PortfolioBody/>
    </div>
  )
}

export default Portfolio;
