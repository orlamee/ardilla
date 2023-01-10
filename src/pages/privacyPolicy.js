import React from "react";
import Footer from "../components/footer";
import BreadcrumbPrivacy from "../components/landingpage/breadcrumbPrivacy";
import ContentPrivacy from "../components/landingpage/contentPrivacy";
import PrivacyHeader from "../components/landingpage/privacyHeader";


function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <PrivacyHeader/>
      <BreadcrumbPrivacy/>
      <ContentPrivacy/>
      <Footer/>
    </div>
  );
}

export default PrivacyPolicy;
