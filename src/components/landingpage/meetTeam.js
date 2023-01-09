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
            <h3 className="my-4">{"<"}Big Mo{"/>"} (Founder)</h3>
            <p>A businessman and visionary who has had a lot of success in the<br/> financial, marketing, and travel sector.</p>
          </div>
          <div className="col-md-6">
            <Link><img src={lore} alt="read" className="img-fluid"/></Link>
            <h3 className="my-4">{"<"}Mavrick{"/>"} (CO-Founder)</h3>
            <p>A rising star in the business world who has had tremendous success with<br/>multiple start-ups..</p>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-6">
            <Link><img src={mulan} alt="read" className="img-fluid"/></Link>
            <h3 className="my-4">{"<"}Mulan{"/>"} (Founder)</h3>
            <p>A businessman and visionary who has had a lot of success in the<br/> financial, marketing, and travel sector.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetTeam; 