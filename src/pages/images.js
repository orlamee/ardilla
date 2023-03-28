import Footer from "../components/footer";
import BreadcrumbProduct from "../components/landingpage/breadcrumbProduct";
import PressHeader from "../components/landingpage/navbarPress";
import ProductImages from "../components/landingpage/productImages";


function Images() {
  return (
    <div className="bg-white">
      <PressHeader/>
      <BreadcrumbProduct/>
      <ProductImages/>
      <Footer/>
    </div>
  );
}
export default Images;
