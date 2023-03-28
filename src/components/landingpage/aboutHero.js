import React from "react";
import goal from "../../img/goal.svg";
import roc from "../../img/roc.svg";
import book from "../../img/bro.svg";
import bulb from "../../img/light-bulb.svg";


function AboutHero() {
  return (
    <section className="abouthero">
      <div className="container">
        <div className="col">
          <div className="bg-about text-center">
            <h4>Everyone talks a big game about financial<br/>freedom, but it takes so much more.</h4>
            <h6 className="my-4 text-white">Did you know that over 300 million African adults lack access to the financial system?</h6>
            <p className="text-white">At Ardilla, we are taking action by providing financial education and tools so anyone can get plugged into the financial system.<br/>We Provide an inclusive financial platform where anyone can get started on their journey to becoming financially free.</p>
          </div>
        </div>
      </div>
      <div className="container top-product">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="obj-bg">
              <h2>Our Objective</h2>
              <p>Make financial freedom and wealth-building desirable<br/>across the continent.</p>
              <img src={goal} alt="goal" className="img-fluid img-tops" />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="obj-bg">
              <h2>Our Mission</h2>
              <p>To get everyone across the continent financially free,<br/>one person at a time.</p>
              <img src={roc} alt="goal" className="img-fluid img-top" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 mb-3">
            <div className="obj-bg">
              <h2>Our Vision</h2>
              <p>To become the foremost wealth-building platform on<br/>the continent.</p>
              <img src={bulb} alt="goal" className="img-fluid img-tops" />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="obj-bg">
              <h2>Our Story</h2>
              <p>Ardilla is leveraging technology to provide financial education and tools<br/>to ensure financial inclusion for everyone.</p>
              <img src={book} alt="goal" className="img-fluid img-to" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero; 