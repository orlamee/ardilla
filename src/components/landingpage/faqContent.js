import React from "react";
import Accordion from "react-bootstrap/Accordion";

function FaqContent() {
  return (
    <section className="faqcontent">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mb-5">
              <h2 className="mb-3">General</h2>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is Ardilla?</Accordion.Header>
                  <Accordion.Body>
                    Ardilla is a financial institution with a vision to increase
                    financial inclusion. Ardilla seeks to create a blanket of
                    financial inclusion across Africa by introducing innovative
                    strategies for building a sense of communal kinship among
                    its users. Ardilla provides guidance and support to its
                    users by offering personally assigned financial advisors,
                    encouraging them to develop healthy financial habits in the
                    long run.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                  <Accordion.Header className="name-acc">
                    What can I do on Ardilla?
                  </Accordion.Header>
                  <Accordion.Body>
                    On Ardilla, you save, budget, insure and invest in our
                    various vetted options, all on our web and mobile
                    application.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="">
                  <Accordion.Header className="name-acc">
                    How do I change my avatar?
                  </Accordion.Header>
                  <Accordion.Body>
                    Sign in to your Ardilla, select your profile where you'll
                    see your bio, and you can update your profile, including
                    your avatar.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="">
                  <Accordion.Header className="name-acc">
                    How do I set up Security questions?
                  </Accordion.Header>
                  <Accordion.Body>
                    Security questions are designed to add an extra layer of
                    security to your account, and we request them at the early
                    signup stage. You can only finish your signup process if you
                    set your OT Question.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="">
                  <Accordion.Header className="name-acc">
                    What is the Ardilla rank system?
                  </Accordion.Header>
                  <Accordion.Body>
                    Ardilla's rank system is inspired by the uniformed forces of
                    power, i.e. the military and their sense of discipline and
                    progress. We hope our users take and build up as much
                    discipline to save money and accomplish various milestones
                    on Ardilla while increasing their rank.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="">
                  <Accordion.Header className="name-acc">
                    How many ranks are on the Ardilla platform?
                  </Accordion.Header>
                  <Accordion.Body>
                    Ardilla has a seven-tier ranking system, and just like the
                    military, you must work on discipline and get
                    accomplishments to grow in rank.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className="">
                  <Accordion.Header className="name-acc">
                    How can I move up the rank?
                  </Accordion.Header>
                  <Accordion.Body>
                    You move your rank by how much you save and how many
                    transactions you make. These ranks are determined by how
                    disciplined you are and the accomplishments you get on
                    Ardilla. If you break your plan - you might move lower in
                    your rank. All users start from the Cadet rank.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="mb-5">
              <h2 className="mb-3">Dilla</h2>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How do I fund my Dilla wallet?
                  </Accordion.Header>
                  <Accordion.Body>
                    Dilla is your primary stash, and it is linked to all savings
                    accounts. There are several ways in which you can fund it.
                    You can transfer money to your Dilla from your SAN, credit
                    card, or a matured savings/investment plan.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                  <Accordion.Header className="name-acc">
                    Is San ID different from the Dilla wallet?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, although they are both flexible stashes. SAN is a
                    unique number that can also serve as a bank account, while
                    Dilla is the primary stash in the application.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="">
                  <Accordion.Header className="name-acc">
                    Can I send money to a friend through my Dilla wallet?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes! With funds in your Dilla wallet, you can Send money to
                    your friends and request money from them. When a user
                    accepts your money request, they set an OTS-Question, i.e.
                    they get to set a one-time security question and share that
                    answer with you before you access the funds. Isn't that
                    swell?
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="mb-5">
              <h2 className="mb-3">SAN ID</h2>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How do I get my SAN ID?</Accordion.Header>
                  <Accordion.Body>
                    You get your SAN ID immediately after your KYC has been
                    approved.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                  <Accordion.Header className="name-acc">
                    Can I receive/send money with my San ID?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, Think of your SAN ID as a bank account, which it is.
                    Your SAN ID has many more capabilities.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="">
                  <Accordion.Header className="name-acc">
                    Can I use my SAN ID to transfer money to other banks?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can. Simply log in to your Ardilla account and select
                    Payment to Bank accounts.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="">
                  <Accordion.Header className="name-acc">
                    Can I use my SAN ID to log in?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, remember we said your SAN ID can do so much more? This
                    is one of the capabilities. You can use the same SAN ID to
                    login into your account. If you need help remembering your
                    SAN ID, kindly visit the signup page and select forget SAN
                    ID. Your SAN ID will be sent to your email.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="mb-5">
              <h2 className="mb-3">SAVINGS PLAN</h2>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is a DIB plan?</Accordion.Header>
                  <Accordion.Body>
                    A DIB plan is an emergency plan. We understand how sudden
                    unwanted situations come about; that's why they are called
                    emergencies. With the DIB plan, you can save money for these
                    moments. Your money isn't locked up, so you can withdraw it
                    whenever.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                  <Accordion.Header className="name-acc">
                    How many times can I withdraw with a DIB plan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Due to our discipline vision, With a DIB plan, you can
                    withdraw 4 times in a 30days. This means that for every
                    30-day sprint, you can only withdraw four times for all
                    emergency needs.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="">
                  <Accordion.Header className="name-acc">
                    Can I stop my savings plan?
                  </Accordion.Header>
                  <Accordion.Body>
                    No, you can't stop an ongoing plan. You can, however, review
                    the plan, edit, withdraw, and break the plan.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="">
                  <Accordion.Header className="name-acc">
                    After my savings plan matures, what's next?
                  </Accordion.Header>
                  <Accordion.Body>
                    The next thing is to withdraw your plan into your Dilla
                    wallet. However, the best thing would be to roll over that
                    savings to continue savings to build more wealth.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="">
                  <Accordion.Header className="name-acc">
                    Can I break my saving plan?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can only break a Dream plan; this, however, means that
                    once you break a plan before maturity, you lose some or all
                    of the interest.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="">
                  <Accordion.Header className="name-acc">
                    What happens when I break my savings plan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Ardilla will be entitled to 5% of the total amount in the
                    savings plan based on the terms and conditions you accepted
                    before creating the plan. The amount will be deposited into
                    your Dilla wallet. You will not be able to continue on that
                    plan as the plan will become void once the money is
                    deposited to your Dilla Wallet. Don't fret though, you can
                    always create as many plans as you want.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className="">
                  <Accordion.Header className="name-acc">
                    Are my savings secure?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, your account is insured up to the NDIC limit. Ardilla
                    works with NDIC-insured banks to store your deposits, namely
                    Stackivy Microfinance Bank.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7" className="">
                  <Accordion.Header className="name-acc">
                    How can I learn more about savings?
                  </Accordion.Header>
                  <Accordion.Body>
                    Visit the Ardilla learning platform on the web or mobile
                    application and get the best knowledge to grant you a
                    wealth-building edge.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8" className="">
                  <Accordion.Header className="name-acc">
                    How much interest am I entitled to under each savings plan?
                  </Accordion.Header>
                  <Accordion.Body>
                    PLANS and INTEREST RATES: DIB - 10% interest per annum,
                    DREAM - 11% interest per annum, VALUT - 12% interest per
                    annum, GRIT - 365 days - 11% per annum ; 1- 2 years - 13.8%
                    per annum ;Over 2 years - 28% - 38.8% per annum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="mb-5">
              <h2 className="mb-3">Halal </h2>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is Halal?</Accordion.Header>
                  <Accordion.Body>
                    At Ardilla, we believe that financial freedom shouldn't come
                    at the cost of your belief. That is why we added the Halal
                    feature to our savings package, where you can choose to save
                    without interest and still get all the best features without
                    any limit. Why can't you have both?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                  <Accordion.Header className="name-acc">
                    What happens to my interest if I switch to Halal?
                  </Accordion.Header>
                  <Accordion.Body>
                    All your savings plans, including the new plans, will take
                    the Halal effect.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="">
                  <Accordion.Header className="name-acc">
                    Can anyone use Halal?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, Halal is available for every user.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="">
                  <Accordion.Header className="name-acc">
                    Do I get the same benefits on Halal?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, Nothing is hidden or restricted from you. You have the
                    Halal functionality and all the best things Ardilla has to
                    give.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="mb-5">
              <h2 className="mb-3">Interest Calculator</h2>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What are your interest rates?
                  </Accordion.Header>
                  <Accordion.Body>
                    DIB - 10% interest per annum DREAM - 11% interest per annum
                    VALUT - 12% interest per annum GRIT - 365 days - 11% per
                    annum 1- 2 years - 13.8% per annum Over 2 years - 28% -
                    38.8% per annum All are subject to change.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                  <Accordion.Header className="name-acc">
                    What is the minimum rate I am entitled to?
                  </Accordion.Header>
                  <Accordion.Body>
                    10% interest rate for the DIB plan.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="">
                  <Accordion.Header className="name-acc">
                    Does my interest change?
                  </Accordion.Header>
                  <Accordion.Body>
                    No. Be rest assured there shall be no fluctuation in your
                    interest without your notice.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="">
                  <Accordion.Header className="name-acc">
                    How do I get better interest?
                  </Accordion.Header>
                  <Accordion.Body>By saving more and more.</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="mb-5">
              <h2 className="mb-3">Learn</h2>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Where can I access the learn Platform?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can access the learning platform on our web application
                    and mobile application.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                  <Accordion.Header className="name-acc">
                    How can I start a course?
                  </Accordion.Header>
                  <Accordion.Body>
                    Simply go over to the learning platform and select the
                    course you'd like to commence.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="">
                  <Accordion.Header className="name-acc">
                    Is learning free on Ardilla?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, this is all for our plan for financial inclusion for
                    all.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="">
                  <Accordion.Header className="name-acc">
                    How many courses can I start with Ardilla?
                  </Accordion.Header>
                  <Accordion.Body>As many as you want!</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="">
                  <Accordion.Header className="name-acc">
                    Do I get a certification after learning?
                  </Accordion.Header>
                  <Accordion.Body>
                    No, but you get badges, and you can also share these with
                    family and friends.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="mb-5">
              <h2 className="mb-3">Financial Coach </h2>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Who are financial coaches?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our financial coaches are pro-vetted financial analysts who
                    are always available to offer you tailored professional
                    guidance on how to make your financial adventure with
                    Ardilla more productive.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                  <Accordion.Header className="name-acc">
                    Do I contact my financial coach?
                  </Accordion.Header>
                  <Accordion.Body>
                    You visit the financial coach section in your application
                    and initiate a meeting request.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="">
                  <Accordion.Header className="name-acc">
                    Can I indulge in my financial coach?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, you can trust our financial coaches with your financial
                    details; simply see them as therapists to solve your
                    financial trauma or challenges and help you succeed in your
                    finances.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="">
                  <Accordion.Header className="name-acc">
                    Is having a financial coach free?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, this is due to our plan for financial freedom for all.
                    What is a financial coach appraisal? Aside from financial
                    coaching, your financial coach will also grade you on your
                    journey. You get a bi-annual review.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqContent;
