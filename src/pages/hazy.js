import React from "react";
import Footer from "../components/footer";
import GuidesContent from "../components/landingpage/guidesContent";
import HazyBreadcrumb from "../components/landingpage/hazyBreadcrumb";
import LearnHeader from "../components/landingpage/navBarLearn";


function Hazy() {
  return (
    <div className="bg-white">
      <LearnHeader/>
      <HazyBreadcrumb/>
      <GuidesContent/>
      <Footer/>
    </div>
  );
}

export default Hazy;
