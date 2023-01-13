import React from "react";
import Footer from "../components/footer";
import BreadcrumbFaq from "../components/landingpage/breadcrumbFaq";
import FaqContent from "../components/landingpage/faqContent";
import NavbarSave from "../components/landingpage/saveNavbar";

function FAQ() {
  return (
    <div className="bg-white">
      <NavbarSave/>
      <BreadcrumbFaq/>
      <FaqContent/>
      <Footer/>
    </div>
  );
}

export default FAQ;
