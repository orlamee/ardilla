import React from "react";
import Footer from "../components/footer";
import GeneralContent from "../components/landingpage/generalContent";
import HazyBreadcrumb from "../components/landingpage/hazyBreadcrumb";
import LearnHeader from "../components/landingpage/navBarLearn";


function General() {
  return (
    <div className="bg-white">
      <LearnHeader/>
      <HazyBreadcrumb/>
      <GeneralContent/>
      <Footer/>
    </div>
  );
}

export default General;
