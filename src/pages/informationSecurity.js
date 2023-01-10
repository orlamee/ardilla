import React from "react";
import Footer from "../components/footer";
import BreadcrumbSecurity from "../components/landingpage/breadcrumbSecurity";
import ContentSecurity from "../components/landingpage/contentSecurity";
import PrivacyHeader from "../components/landingpage/privacyHeader";


function InformationSecurity() {
  return (
    <div className="bg-white">
      <PrivacyHeader/>
      <BreadcrumbSecurity/>
      <ContentSecurity/>
      <Footer/>
    </div>
  );
}

export default InformationSecurity;
