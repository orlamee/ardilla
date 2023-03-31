import React from "react";
import LearnHeader from "../components/landingpage/navBarLearn";
import Footer from "../components/footer";
import PostSingle from "./postSingle";



function SinglePost() {
  return (
    <div className="bg-white">
      <LearnHeader/>
      <PostSingle/>
      <Footer/>
    </div>
  );
}

export default SinglePost;
