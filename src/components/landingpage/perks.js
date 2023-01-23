import React from "react";
import globe from "../../img/universe.svg";
import perks from "../../img/pks.svg";


function Perks() {
  return (
    <section className="perks">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <h2 className="text-white">Besides a competitive salary, we also provide you with the support needed to do your best work, and make your life easier.</h2>
          </div>
        </div>
      </div>
      <div className="container career-top">
        <div className="row">
          <div className="col text-center">
            {/* <h3 className="text-center">Perks</h3> */}
            <img src={perks} alt="perks" className="img-fluid" />
          </div>
        </div>
        <div className="slant">
          <div className="row justify-content-center">
            <div className="col-md-3 mb-3">
              <img src={globe} alt="perks" className="img-fluid" />
              <h5 className="my-4">Work Anywhere</h5>
              <p>As long as you do your work</p>
            </div>
            <div className="col-md-3 mb-3">
              <img src={globe} alt="perks" className="img-fluid" />
              <h5 className="my-4">Work Anywhere</h5>
              <p>As long as you do your work</p>
            </div>
            <div className="col-md-3 mb-3">
              <img src={globe} alt="perks" className="img-fluid" />
              <h5 className="my-4">Work Anywhere</h5>
              <p>As long as you do your work</p>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-3 mb-3">
              <img src={globe} alt="perks" className="img-fluid" />
              <h5 className="my-4">Work Anywhere</h5>
              <p>As long as you do your work</p>
            </div>
            <div className="col-md-3 mb-3">
              <img src={globe} alt="perks" className="img-fluid" />
              <h5 className="my-4">Work Anywhere</h5>
              <p>As long as you do your work</p>
            </div>
            <div className="col-md-3 mb-3">
              <img src={globe} alt="perks" className="img-fluid" />
              <h5 className="my-4">Work Anywhere</h5>
              <p>As long as you do your work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perks;
