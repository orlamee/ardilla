import React from "react";
import ProfileKYCCompleted from "../components/dashboardParts/completedKYC";
import ProfileHeader from "../components/dashboardParts/profileHeader";

function KYCCompleted() {
  return (
    <div>
      <ProfileHeader/>
      <ProfileKYCCompleted/>
    </div>
  )
}

export default KYCCompleted;
