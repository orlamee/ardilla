import React from "react";
import { Link } from "react-router-dom";
import excerpt from "../../img/excerpt.svg";
import exce from "../../img/exce.svg";

function ReadBlog() {
  return (
    <section className="readblog">
      <div className="container">
        <div className="row">
          <div className="col mb-3 text-center dilla-text" >
            <h2 className="">Read Blogs</h2>
            <h6 className="my-3">Read articles on financial and wealth building tips. Compiled just for you.</h6>
          </div>
        </div>
        <div className="row top-products">
          <div className="col-md-6 text-center">
            <Link><img src={excerpt} alt="read" className="img-fluid"/></Link>
          </div>
          <div className="col-md-6 text-center">
            <Link><img src={exce} alt="read" className="img-fluid"/></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReadBlog; 