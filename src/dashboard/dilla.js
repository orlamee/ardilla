import React from "react";
import DillaBody from "../components/dashboardParts/dillaBody";
import DillaHeader from "../components/dashboardParts/dillaHeader";

function DillaMain() {
  return (
    <div className="dark-mode">
      <DillaHeader/>
      <DillaBody/>
    </div>
  )
}

export default DillaMain;
