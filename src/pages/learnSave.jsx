import React from "react";
import Footer from "../components/footer";
import LearnHeader from "../components/landingpage/navBarLearn";
import SaveBreadcrumb from "../components/landingpage/saveBreadcrumb";
import SaveContent from "../components/landingpage/saveContent";


function LearnSave() {
  return (
    <div className="bg-white">
      <LearnHeader/>
      <SaveBreadcrumb/>
      <SaveContent/>
      <Footer/>
    </div>
  );
}

export default LearnSave;
