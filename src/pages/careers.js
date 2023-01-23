import React from "react";
import Footer from "../components/footer";
import CareersBreadcrumb from "../components/landingpage/careersBreadcrumb";
import CareersHeader from "../components/landingpage/careersHeader";
import Culture from "../components/landingpage/Culture";
import OurValue from "../components/landingpage/ourValues";

function Careers() {
  return (
    <div className="bg-white">
      <CareersHeader/>
      <CareersBreadcrumb/>
      <Culture/>
      <OurValue/>
      
      
      <Footer/>
    </div>
  );
}

export default Careers;
