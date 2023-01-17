import React from "react";

function BreadcrumbFaq() {
  return (
    <section className="breadcrumbfaq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center" >
            <h2 className="">Frequently Asked Questions (FAQS)</h2>
            <h6 className="mt-3">Find answers to our most frequently asked questions. Can’t find the answer you're looking for? Email our member<br/>support team <span style={{color: "#8807F7"}}>help@Ardilla.com</span></h6>
            <div className="row mt-4">
              <div className="search-box">
                <input
                  type="text"
                  class="search-input faq-search"
                  placeholder="Search for a question"
                />
                <button className="search-button faq-button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BreadcrumbFaq; 