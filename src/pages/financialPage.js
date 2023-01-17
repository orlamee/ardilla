
import Footer from "../components/footer";
import Wonder from "../components/landingpage/aFinancialCoach";
import Coach from "../components/landingpage/coach";
import FinancialCoaching from "../components/landingpage/financialCoaching";
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
      <Footer/>
    </div>
  );
}

export default FincancialPage;
