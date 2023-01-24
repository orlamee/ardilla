import React from "react";
import Footer from "../components/footer";
import CareerFooter from "../components/landingpage/careerFooter";
import CareersBreadcrumb from "../components/landingpage/careersBreadcrumb";
import CareersHeader from "../components/landingpage/careersHeader";
import Culture from "../components/landingpage/Culture";
import Hire from "../components/landingpage/howwehire";
import Openings from "../components/landingpage/openings";
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
      <Openings/>
      <Hire/>
      <CareerFooter/>
      <Footer/>
    </div>
  );
}

export default Careers;
