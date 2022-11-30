import React from "react";
import pin from "../img/pin.svg";

function CreatePin() {
  return (
    <section className="verify-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <img src={pin} alt="" className="img-fluid" />
            <h3 className="my-4">Create a 4-digit Pin</h3>
            <h6>This will be used for all your transactions</h6>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <form className="my-4">
                <div className="mb-3">
                  <input type="number" class="form-control custom-form" placeholder="Create Pin"/>
                </div>
                <div className="mb-3">
                  <input type="number" class="form-control custom-form" placeholder="Confirm Pin"/>
                </div>
                <div className="mt-5 mb-3">
                  <button className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6" style={{width: "100%"}}>Ok</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreatePin;