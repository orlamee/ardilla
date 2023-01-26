import Footer from "../components/footer";
import BreadcrumbPress from "../components/landingpage/breadcrumbPress";
import PressHeader from "../components/landingpage/navbarPress";
import NewsContent from "../components/landingpage/newsContent";


function Press() {
  return (
    <div className="bg-white">
      <PressHeader/>
      <BreadcrumbPress/>
      <NewsContent/>
      <Footer/>
    </div>
  );
}
export default Press;
