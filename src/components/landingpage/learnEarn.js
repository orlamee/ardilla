import React from "react";
import { Link } from "react-router-dom";
import startquiz from "../../img/diligent.svg";

function LearnEarn() {
  return (
    <section className="learnearn">
      <div className="container">
        <div className="row">
          <div className="col mb-3 text-center dilla-text" >
            <h2 className="text-white">Learn and Earn</h2>
            <h6 className="my-4 text-white">Start learning, take quizzes and start earning</h6>
            <Link className='btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 text-dark save-white' to="/">Start Learning Now</Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link><img src={startquiz} alt="read" className="img-fluid"/></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearnEarn; 