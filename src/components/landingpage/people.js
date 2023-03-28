import React from "react";
import ui from "../../img/uiux.png";


function People() {
  return (
    <section className="people culture-text">
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-5">
            <h2>People are what matters </h2>
          </div>
        </div>
        <div className="row career-top">
          <div className="col-md-6 mb-3">
            <div className="d-flex flex-row">
              <img src={ui} alt="people" className="img-fluid me-4" />
              <p className="mt-5">Working with Ardilla has exposed me to innovative ideas and advanced technology.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="d-flex flex-row">
              <img src={ui} alt="people" className="img-fluid me-4" />
              <p className="mt-5">Ardilla places a premium on team work and collaboration which has helped me gain better insights and become better at my job</p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <div className="d-flex flex-row">
              <img src={ui} alt="people" className="img-fluid me-4" />
              <p className="mt-5">At Ardilla, I get to work in an environment that is constantly pushing me to learn, develop, and be better.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="d-flex flex-row">
              <img src={ui} alt="people" className="img-fluid me-4" />
              <p className="mt-5">Although Ardilla is challenging, it is the type of challenge that gets you motivated.</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default People;
