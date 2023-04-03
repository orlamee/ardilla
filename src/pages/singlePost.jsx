import React from "react";
import LearnHeader from "../components/landingpage/navBarLearn";
import Footer from "../components/footer";
import PostSingle from "./postSingle";
import Replies from "./replies";



function SinglePost() {
  return (
    <div className="bg-white">
      <LearnHeader/>
      <PostSingle/>
      <Replies/>
      <Footer/>
    </div>
  );
}

export default SinglePost;
