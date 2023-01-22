import React from "react";
import Footer from "../components/footer";
import GuidesBreadcrumb from "../components/landingpage/guidesBreadcrumb";
import GuidesContent from "../components/landingpage/guidesContent";
import LearnHeader from "../components/landingpage/navBarLearn";


function Guides() {
  return (
    <div className="bg-white">
      <LearnHeader/>
      <GuidesBreadcrumb/>
      <GuidesContent/>
      <Footer/>
    </div>
  );
}

export default Guides;
