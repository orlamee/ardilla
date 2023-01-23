import React from "react";
import photos from "../../img/fotos.svg";


function CareerFooter() {
  return (
    <section className="footer-career">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={photos} alt="three" className="img-fluid w-100" />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default CareerFooter;