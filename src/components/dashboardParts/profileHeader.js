import React from "react";
import icon from "../../img/dashboard/profile-head.svg";
import nots from "../../img/dashboard/nots.svg";
import settings from "../../img/dashboard/settings.svg";
import { Link } from "react-router-dom";
import d from "../../img/dashboard/profile-icon.svg";
import c from "../../img/dashboard/account-icon.svg";
import s from "../../img/dashboard/explore-icon.svg";

function ProfileHeader() {
  return (
    <section className="dashboard-header fixed-top">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <img src={icon} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="d-flex flex-row float-end desktop cogs">
          <Link to=""><img src={nots} alt="" className="img-fluid me-4" /></Link>
          <span to="" className="dropdown-toggle header-toggle" href="#" role="button" data-bs-toggle="dropdown"><img src={settings} alt="" className="img-fluid" />
            <ul className="dropdown-menu">
              <div className="row m-3">
                <div className="col">
                  <Link to="/profile" className="d-flex flex-row settings">
                    <img src={d} alt="" className="img-fluid me-2"/>
                    <p className="mt-3">Profile</p>
                  </Link>
                  <Link to="/66" className="d-flex flex-row my-3 settings">
                    <img src={s} alt="" className="img-fluid me-2"/>
                    <p className="mt-3">Account</p>
                  </Link>
                  <Link to="/" className="d-flex flex-row settings">
                    <img src={c} alt="" className="img-fluid me-2"/>
                    <p className="mt-3">Explore</p>
                  </Link>
                </div>
              </div>
            </ul>
          </span>
        </div>
      </div>
    </section>
  )
}

export default ProfileHeader;