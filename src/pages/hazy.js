import React from "react";
import Footer from "../components/footer";
import LearnHeader from "../components/landingpage/navBarLearn";


function Hazy() {
  return (
    <div className="bg-white">
      <LearnHeader/>
      {/* <GuidesBreadcrumb/>
      <GuidesContent/> */}
      <Footer/>
    </div>
  );
}

export default Hazy;
