import React from "react";
import LearnBody from "../components/dashboardParts/learnBody";
import LearnHeader from "../components/dashboardParts/learnHeader";


function LearnMain() {
  return (
    <div className="dark-mode">
      <LearnHeader/>
      <LearnBody/>
    </div>
  )
}

export default LearnMain;
