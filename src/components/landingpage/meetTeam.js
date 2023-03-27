import React from "react";
import { Link } from "react-router-dom";
import mo from "../../img/mo.svg";
import lore from "../../img/lore.svg";
import mulan from "../../img/mulan.svg";

function MeetTeam() {
  return (
    <section className="meetteam">
      <div className="container">
        <div className="row">
          <div className="col mb-3 text-center dilla-text" >
            <h2 className="">Meet The Team</h2>
            <h6 className="my-3">Ardilla is a success because of a great team of dreamers who share the same<br/>vision of financial inclusiveness for everyone on the continent.</h6>
          </div>
        </div>
        <div className="row top-products">
          <div className="col-md-6">
            <Link><img src={mo} alt="read" className="img-fluid"/></Link>
            <h3 className="my-4">{"<"}Big Mo{"/>"} (CO - Founder)</h3>
            <p>{"<"}Big Mo{"/>"} is a well-established businessman who has worked in the financial,<br/>travel, and tour industries for over five years. His industry reputation is growing<br/>as clients admire his openness, work ethic, and exceptional service delivery.</p>
          </div>
          <div className="col-md-6">
            <Link><img src={lore} alt="read" className="img-fluid"/></Link>
            <h3 className="my-4">{"<"}Mavrick{"/>"} (CO - Founder)</h3>
            <p>{"<"}Mavrick{"/>"} is a highly motivated individual with experience in engineering,<br/>business, and data mechanics. He has a bright future in the financial and<br/>information technology industries.</p>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-6">
            <Link><img src={mulan} alt="read" className="img-fluid"/></Link>
            <h3 className="my-4">{"<"}Mulan{"/>"} (CO - Founder)</h3>
            <p>{"<"}Mulan{"/>"} is a versatile professional with several years of experience and a<br/>diversified history in customer service, sales, marketing operations, and<br/> growing a company. All while maintaining solid relationships with current clients.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetTeam; 