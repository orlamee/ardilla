import React from "react";
// import { Link } from "react-router-dom";
import videos from "../../img/videosgrouped.svg";

function WatchVideos() {
  return (
    <section className="watchvid">
      <div className="container">
        <div className="row">
          <div className="col mb-3 text-center dilla-text" >
            <h2 className="">Watch Videos</h2>
            <h6 className="mt-4">Watch videos from the best financial minds in the industry.</h6>
            {/* <Link className='btn btn-outline-primary px-5 py-3 ardilla-btn fs-6' to="/">Watch Now</Link> */}
          </div>
        </div>
        <div className="row top-products">
          <div className="col text-center">
            <img src={videos} alt="read" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WatchVideos; 