import React from "react";
import Footer from "../components/footer";
import BreadcrumbPrivacy from "../components/landingpage/breadcrumbPrivacy";
import PrivacyHeader from "../components/landingpage/privacyHeader";


function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <PrivacyHeader/>
      <BreadcrumbPrivacy/>
      <Footer/>
    </div>
  );
}

export default PrivacyPolicy;
