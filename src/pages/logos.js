import Footer from "../components/footer";
import BreadcrumbPress from "../components/landingpage/breadcrumbPress";
import LogosContent from "../components/landingpage/logosContent";
import PressHeader from "../components/landingpage/navbarPress";


function Logos() {
  return (
    <div className="bg-white">
      <PressHeader/>
      <BreadcrumbPress/>
      <LogosContent/>
      <Footer/>
    </div>
  );
}
export default Logos;
