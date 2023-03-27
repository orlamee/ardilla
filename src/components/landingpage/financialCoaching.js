import React from "react";

function FinancialCoaching () {
  return (
    <section className="f-c">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3>Financial coaching for your unique financial needs</h3>
            <h6 className="text-white mt-5">Every financial journey has unique challenges, and we get it. Our pro-vetted financial analysts are always available to<br/> offer you tailored professional guidance on how to make your financial adventure with Ardilla more productive.</h6>
          </div>
        </div>
        <div className="row numbers">
          <div className="col-md-6 mb-3">
            <div>
              <h5>01</h5>
              <h3 className="my-4 text-white">All day access</h3>
              <p className="text-white">Our coaches are available all day for your questions or consultations. Schedule a meeting or start a chat anytime. Get unfettered access to financial advice you can trust.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div>
              <h5>02</h5>
              <h3 className="my-4 text-white">Experienced professionals</h3>
              <p className="text-white">Experienced financial analysts and coaches. Who have been vetted and have a wealth of experience. They will guide you through your wealth-building journey.</p>
            </div>
          </div>
        </div>
        <div className="row numbers">
          <div className="col-md-6 mb-3">
            <div>
              <h5>03</h5>
              <h3 className="my-4 text-white">Appraisals</h3>
              <p className="text-white">Sometimes we need a scoreboard to estimate our performance correctly. Your financial coach offers that scoreboard through periodic appraisals in your wealth-building journey.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div>
              <h5>04</h5>
              <h3 className="my-4 text-white">Free</h3>
              <p className="text-white">No hidden or extra charges. We care about your financial planning & decisions. So we are making it easier with free access to financial coaches.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancialCoaching;