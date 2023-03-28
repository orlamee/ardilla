import Footer from "../components/footer";
import BreadcrumbLogo from "../components/landingpage/breadcrumbLogo";
import LogosContent from "../components/landingpage/logosContent";
import PressHeader from "../components/landingpage/navbarPress";


function Logos() {
  return (
    <div className="bg-white">
      <PressHeader/>
      <BreadcrumbLogo/>
      <LogosContent/>
      <Footer/>
    </div>
  );
}
export default Logos;
