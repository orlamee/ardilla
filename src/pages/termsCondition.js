import React from "react";
import Footer from "../components/footer";
import Breadcrumb from "../components/landingpage/breadCrumb";
import ContentTerms from "../components/landingpage/contentTerms";
import PrivacyHeader from "../components/landingpage/privacyHeader";


function TermsCondition() {
  return (
    <div className="bg-white">
      <PrivacyHeader/>
      <Breadcrumb/>
      <ContentTerms/>
      <Footer/>
    </div>
  );
}

export default TermsCondition;
