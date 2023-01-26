import React from "react";
import Footer from "../components/footer";
import HalalFaq from "../components/landingpage/halalFaq";
import HalalHero from "../components/landingpage/halalHero";
import HalalSaver from "../components/landingpage/halalSaver";
import HalalWorks from "../components/landingpage/halalWorks";
import IslamFinance from "../components/landingpage/islamicFinance";
import LearnHalal from "../components/landingpage/learnHalal";
import HalalHeader from "../components/landingpage/navbarHalal";
import Steppers from "../components/landingpage/steppers";


function HalalPage() {
  return (
    <div className="bg-white">
      <HalalHeader/>
      <HalalHero/>
      <IslamFinance/>
      <HalalWorks/>
      <LearnHalal/>
      <HalalSaver/>
      <Steppers/>
      <HalalFaq/>
      <Footer/>
    </div>
  );
}
export default HalalPage;
