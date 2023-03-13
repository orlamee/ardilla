
import Footer from "../components/footer";
import CalculateInterest from "../components/landingpage/calculateInterest";
import HeroSave from "../components/landingpage/heroSave";
import OurSavePlan from "../components/landingpage/ourSavePlan";
import NavbarSave from "../components/landingpage/saveNavbar";
import JoinCircle from "../components/landingpage/joinCircle";
import "../css/App.css";
import "../css/home.css";
import Halal from "../components/landingpage/halal";
import SaveMonth from "../components/landingpage/saveMonth";
import NewSavePlan from "../components/landingpage/newSavePlan";

function Save() {
  return (
    <div className="bg-white">
      <NavbarSave/>
      <HeroSave/>
      <NewSavePlan/>
      <OurSavePlan/>
      <CalculateInterest/>
      <JoinCircle/>
      <Halal/>
      <SaveMonth/>
      <Footer/>
    </div>
  );
}

export default Save;
