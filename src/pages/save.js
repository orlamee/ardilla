
import HeroSave from "../components/landingpage/heroSave";
import OurSavePlan from "../components/landingpage/ourSavePlan";
import NavbarSave from "../components/landingpage/saveNavbar";
import "../css/App.css";
import "../css/home.css";

function Save() {
  return (
    <div>
      <NavbarSave/>
      <HeroSave/>
      <OurSavePlan/>
    </div>
  );
}

export default Save;
