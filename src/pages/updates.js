import React from "react";
import Footer from "../components/footer";
import UpdatesBreadcrumb from "../components/landingpage/updatesBreadcrumb";
import LearnHeader from "../components/landingpage/navBarLearn";
import UpdatesContent from "../components/landingpage/updatesContent";


function Updates() {
  return (
    <div className="bg-white">
      <LearnHeader/>
      <UpdatesBreadcrumb/>
      <UpdatesContent/>
      <Footer/>
    </div>
  );
}

export default Updates;
