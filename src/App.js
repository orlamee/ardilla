import Footer from "./components/footer";
import Build from "./components/landingpage/buildSaving";
import Hero from "./components/landingpage/hero";
import Products from "./components/landingpage/product";
import Testimonial from "./components/landingpage/testimonial";
import Videos from "./components/landingpage/video";
import Header from "./components/navBar";
import "./css/App.css";
import "./css/home.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Hero />
      <Products />
      <Build />
      <Videos />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
