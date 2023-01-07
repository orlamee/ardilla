import React from "react";
import int from "../../img/int.svg";



function CalculateInterest() {
  return (
    <section className="calc">
      <div className="container">
        <div className="row">
          <div className="col" >
            <h2>Calculate Your Interests</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <form className="mt-5 int-form">
              <div className="mb-5">
                <label for="exampleFormControlInput1" className="form-label int-label">How often are you saving?</label>
                <select className="form-select int-select">
                  <option selected>Monthly</option>
                  <option value="1">Monthly</option>
                  <option value="2">Quaterly</option>
                  <option value="3">Yearly</option>
                </select>
              </div>
              <div className="mb-5">
                <label for="exampleFormControlInput1" className="form-label int-label">How much are you saving?</label>
                <input type="number" class="form-control int-control" id="exampleFormControlInput1" placeholder="2,000"/>
              </div>
              <div className="mb-5">
                <label for="exampleFormControlInput1" className="form-label int-label">How long are you saving for? (In months)</label>
                <input type="number" class="form-control int-control" id="exampleFormControlInput1" placeholder="3"/>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src={int} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CalculateInterest; 