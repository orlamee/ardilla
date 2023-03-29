import React from "react";
import Footer from "../components/footer";
import GeneralBreadcrumb from "../components/landingpage/generalBreadcrumb";
import GeneralContent from "../components/landingpage/generalContent";
import LearnHeader from "../components/landingpage/navBarLearn";


function General() {
  return (
    <div className="bg-white">
      <LearnHeader/>
      <GeneralBreadcrumb/>
      <GeneralContent/>
      <Footer/>
    </div>
  );
}

export default General;
