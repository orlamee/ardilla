import Footer from "../components/footer";
import BreadcrumbPress from "../components/landingpage/breadcrumbPress";
import PressHeader from "../components/landingpage/navbarPress";


function Logos() {
  return (
    <div className="bg-white">
      <PressHeader/>
      <BreadcrumbPress/>
      
      <Footer/>
    </div>
  );
}
export default Logos;
