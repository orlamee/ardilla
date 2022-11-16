import Hero from './components/landingpage/hero';
import Products from './components/landingpage/product';
import Header from './components/navBar';
import './css/App.css';
import "./css/home.css";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Products/>
    </div>
  );
}

export default App;
