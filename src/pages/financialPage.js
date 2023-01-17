
import Wonder from "../components/landingpage/aFinancialCoach";
import Coach from "../components/landingpage/coach";
import DidYouKnow from "../components/landingpage/didYouKnow";
import FinancialCoaching from "../components/landingpage/financialCoaching";
import FooterFinancial from "../components/footerFinancial";
import NavbarSave from "../components/landingpage/saveNavbar";
import "../css/App.css";
import "../css/home.css";

function FincancialPage() {
  return (
    <div className="bg-white">
      <NavbarSave className="bg-dark"/>
      <Coach/>
      <FinancialCoaching/>
      <Wonder/>
      <DidYouKnow/>
      <FooterFinancial/>
    </div>
  );
}

export default FincancialPage;
