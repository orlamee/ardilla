import React from "react";
import Footer from "../components/footer";
import CareersBreadcrumb from "../components/landingpage/careersBreadcrumb";
import CareersHeader from "../components/landingpage/careersHeader";
import Culture from "../components/landingpage/Culture";
import OurValue from "../components/landingpage/ourValues";
import People from "../components/landingpage/people";
import Perks from "../components/landingpage/perks";

function Careers() {
  return (
    <div className="bg-white">
      <CareersHeader/>
      <CareersBreadcrumb/>
      <Culture/>
      <OurValue/>
      <People/>
      <Perks/>
      
      <Footer/>
    </div>
  );
}

export default Careers;
