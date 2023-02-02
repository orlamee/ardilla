import React from "react";
import { Link } from "react-router-dom";
import one from "../../img/guide.svg";
import two from "../../img/money.svg";
import act from "../../img/article.svg";


function GeneralContent() {
  return (
    <section className="testimonial-content">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <img src={one} alt="testimonial" className="img-fluid w-100 mb-3" />
                <span className="bg-test">Testimonials</span>
                <h2 className="my-3">Ardilla just made new partnership with UBA</h2>
                <div className="">
                  <p>By <span style={{color:"#3D0072"}}>Olukoju Matthew</span></p>
                  <p className="float-end auth-date">August 5, 2023</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <img src={two} alt="testimonial" className="img-fluid w-100 mb-3" />
                <span className="bg-test">Updates</span>
                <h2 className="my-3">Saving with Ardilla changed my financial life entirely</h2>
                <div className="">
                  <p>By <span style={{color:"#3D0072"}}>Olukoju Matthew</span></p>
                  <p className="float-end auth-date">August 5, 2023</p>
                </div>
              </div>
              
            </div>
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <img src={one} alt="testimonial" className="img-fluid w-100 mb-3" />
                <span className="bg-test">Hayz & Gen</span>
                <h2 className="my-3">Saving with Ardilla changed my financial life entirely</h2>
                <div className="">
                  <p>By <span style={{color:"#3D0072"}}>Olukoju Matthew</span></p>
                  <p className="float-end auth-date">August 5, 2023</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <img src={two} alt="testimonial" className="img-fluid w-100 mb-3" />
                <span className="bg-test">Updates</span>
                <h2 className="my-3">Saving with Ardilla changed my financial life entirely</h2>
                <div className="">
                  <p>By <span style={{color:"#3D0072"}}>Olukoju Matthew</span></p>
                  <p className="float-end auth-date">August 5, 2023</p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-md-4 latest-aside">
            <div className="latest-articles">
              <h4>Latest Articles</h4>
              <div className="d-flex flex-row mt-4">
                <img src={act} alt="latest-article" className="img-fluid me-3" />
                <div>
                  <h6 className="mb-3">Saving with Ardilla changed my financial life entirely</h6>
                  <span className="auth-date">May 6, 2023</span>
                </div>
              </div>
              <div className="d-flex flex-row mt-4">
                <img src={act} alt="latest-article" className="img-fluid me-3" />
                <div>
                  <h6 className="mb-3">Saving with Ardilla changed my financial life entirely</h6>
                  <span className="auth-date">May 6, 2023</span>
                </div>
              </div>
              <div className="d-flex flex-row mt-4">
                <img src={act} alt="latest-article" className="img-fluid me-3" />
                <div>
                  <h6 className="mb-3">Saving with Ardilla changed my financial life entirely</h6>
                  <span className="auth-date">May 6, 2023</span>
                </div>
              </div>
              <div className="d-flex flex-row mt-4">
                <img src={act} alt="latest-article" className="img-fluid me-3" />
                <div>
                  <h6 className="mb-3">Saving with Ardilla changed my financial life entirely</h6>
                  <span className="auth-date">May 6, 2023</span>
                </div>
              </div>
              <div className="d-flex flex-row mt-4">
                <img src={act} alt="latest-article" className="img-fluid me-3" />
                <div>
                  <h6 className="mb-3">Saving with Ardilla changed my financial life entirely</h6>
                  <span className="auth-date">May 6, 2023</span>
                </div>
              </div>
              <div className="d-flex flex-row mt-4">
                <img src={act} alt="latest-article" className="img-fluid me-3" />
                <div>
                  <h6 className="mb-3">Saving with Ardilla changed my financial life entirely</h6>
                  <span className="auth-date">May 6, 2023</span>
                </div>
              </div>
              <div className="d-flex flex-row mt-4">
                <img src={act} alt="latest-article" className="img-fluid me-3" />
                <div>
                  <h6 className="mb-3">Saving with Ardilla changed my financial life entirely</h6>
                  <span className="auth-date">May 6, 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Link className="older">Older Post</Link>
            </div>
            <div className="col-md-6 text-end">
              <Link className="older">Newer Posts</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeneralContent;
