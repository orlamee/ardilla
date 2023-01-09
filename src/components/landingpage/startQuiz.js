import React from "react";
import { Link } from "react-router-dom";
import startquiz from "../../img/startquiz.svg";

function StartQuiz() {
  return (
    <section className="startquiz">
      <div className="container">
        <div className="row">
          <div className="col mb-3 text-center dilla-text" >
            <h2 className="">Start a Quiz</h2>
            <h6 className="my-4">Rate your financial growth by taking our quiz.</h6>
            <Link className='btn btn-outline-primary px-5 py-3 ardilla-btn fs-6' to="/">Start Quiz Now</Link>
          </div>
        </div>
        <div className="row top-products">
          <div className="col text-center">
            <Link><img src={startquiz} alt="read" className="img-fluid"/></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartQuiz; 