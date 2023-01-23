import React from "react";
import Footer from "../components/footer";
import AboutHero from "../components/landingpage/aboutHero";
import Insurance from "../components/landingpage/insurance";
import MeetTeam from "../components/landingpage/meetTeam";
import NavbarSave from "../components/landingpage/saveNavbar";

function AboutUsPage() {
  return (
    <div className="bg-white">
      <NavbarSave/>
      <AboutHero/>
      <Insurance/>
      <MeetTeam/>
      <Footer/>
    </div>
  );
}
export default AboutUsPage;
