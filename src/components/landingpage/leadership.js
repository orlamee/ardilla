import React from "react";
import { Link } from "react-router-dom";
import lead from "../../img/leadership.svg";

function Board() {
  return (
    <section className="leader-board">
      <div className="container">
        <div className="row">
          <div className="col mb-3 text-center dilla-text" >
            <h2 className="">Leadership Board</h2>
            <h6 className="my-4">Get our quiz right and be at the top of our leaderboard and also get yourself a badge upgrade.</h6>
            <Link className='btn btn-outline-primary px-5 py-3 ardilla-btn fs-6' to="/">Start Quiz Now</Link>
          </div>
        </div>
        <div className="row top-products">
          <div className="col text-center">
            <Link><img src={lead} alt="read" className="img-fluid"/></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Board; 