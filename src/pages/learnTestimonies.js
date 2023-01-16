import React from "react";
import Footer from "../components/footer";
import LearnHeader from "../components/landingpage/navBarLearn";
import TestimoniesBreadcrumb from "../components/landingpage/testimoniesBreadcrumb";
import TestimoniesContent from "../components/landingpage/testimoniesContent";

function Testimonies() {
  return (
    <div className="bg-white">
      <LearnHeader/>
      <TestimoniesBreadcrumb/>
      <TestimoniesContent/>
      <Footer/>
    </div>
  );
}

export default Testimonies;
