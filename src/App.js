import Footer from "./components/footer";
import Build from "./components/landingpage/buildSaving";
import Products from "./components/landingpage/product";
import Testimonial from "./components/landingpage/testimonial";
import Videos from "./components/landingpage/video";
import "../node_modules/video-react/dist/video-react.css"
import "./css/App.css";
import "./css/home.css";
import Words from "./components/landingpage/words";
import NewNav from "./components/newNav";
import NewHero from "./components/landingpage/newHero";
import DDV from "./components/landingpage/ddv";
import SeenOn from "./components/landingpage/seenOn";

function App() {
  return (
    <div className="App bg-white">
      {/* <Header /> */}
      <NewNav/>
      <NewHero/>
      <Products />
      <Build />
      <Videos />
      <DDV/>
      <Words/>
      <SeenOn/>
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
