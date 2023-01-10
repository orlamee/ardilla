import React from "react";
import Footer from "../components/footer";
import Board from "../components/landingpage/leadership";
import LearnHero from "../components/landingpage/learnHero";
import ReadBlog from "../components/landingpage/readBlog";
import LearnHeader from "../components/landingpage/navBarLearn";
// import NavbarSave from "../components/landingpage/saveNavbar";
import StartQuiz from "../components/landingpage/startQuiz";
import WatchVideos from "../components/landingpage/watchVideos";
import LearnEarn from "../components/landingpage/learnEarn";

function Learn() {
  return (
    <div className="bg-white">
      <LearnHeader/>
      {/* <NavbarSave/> */}
      <LearnHero/>
      <ReadBlog/>
      <WatchVideos/>
      <StartQuiz/>
      <LearnEarn/>
      <Board/>
      <Footer/>
    </div>
  );
}

export default Learn;
