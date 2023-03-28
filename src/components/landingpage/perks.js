import React from "react";
import cool from "../../img/cool.svg";
import health from "../../img/health.svg";
import diversity from "../../img/diversity.svg";
import education from "../../img/education.svg";
import bond from "../../img/bond.svg";
import vibe from "../../img/vibe.svg";
import perks from "../../img/pks.svg";


function Perks() {
  return (
    <section className="perks">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <h2 className="text-white">Beyond a competitive salary, we offer so much more in support and necessary tools needed to get the best results.</h2>
          </div>
        </div>
      </div>
      <div className="container career-top">
        <div className="row">
          <div className="col text-center">
            <img src={perks} alt="perks" className="img-fluid" />
          </div>
        </div>
        <div className="slant">
          <div className="row justify-content-center mt-5">
            <div className="col-md-3 mb-3">
              <img src={vibe} alt="perks" className="img-fluid" />
              <h5 className="my-4">Its a vibe</h5>
              <p>Our work culture is a vibe and more.</p>
            </div>
            <div className="col-md-3 mb-3">
              <img src={cool} alt="perks" className="img-fluid" />
              <h5 className="my-4">Cool gadgets</h5>
              <p>You get to work with cool new gadgets.</p>
            </div>
            <div className="col-md-3 mb-3">
              <img src={health} alt="perks" className="img-fluid" />
              <h5 className="my-4">Health benefits</h5>
              <p>We know health is important. So we provided easy access and affordable health benefits.</p>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-3 mb-3">
              <img src={bond} alt="perks" className="img-fluid" />
              <h5 className="my-4">Team bonding</h5>
              <p>We always make out time for fun and getting to know your team mates better.</p>
            </div>
            <div className="col-md-3 mb-3">
              <img src={diversity} alt="perks" className="img-fluid" />
              <h5 className="my-4">Diversity</h5>
              <p>We promote diversity of ideas and people. Anyone from anywhere is welcome.</p>
            </div>
            <div className="col-md-3 mb-3">
              <img src={education} alt="perks" className="img-fluid" />
              <h5 className="my-4">Education and career progression</h5>
              <p>We offer you opportunities to grow, learn, and advance in your career.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perks;
