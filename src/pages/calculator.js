import React from "react";
import Footer from "../components/footer";
import CalcInterest from "../components/landingpage/calcInterest";
import CalculatorHeader from "../components/landingpage/calculatorHeader";
import InterestRates from "../components/landingpage/interestRates";


function Calculator() {
  return (
    <div className="bg-white">
      <CalculatorHeader/>   
      <CalcInterest/>
      <InterestRates/>   
      <Footer/>
    </div>
  );
}

export default Calculator;
