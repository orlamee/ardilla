import Footer from "../components/footer";
import BreadcrumbPress from "../components/landingpage/breadcrumbPress";
import PressHeader from "../components/landingpage/navbarPress";
import ProductImages from "../components/landingpage/productImages";


function Images() {
  return (
    <div className="bg-white">
      <PressHeader/>
      <BreadcrumbPress/>
      <ProductImages/>
      <Footer/>
    </div>
  );
}
export default Images;
