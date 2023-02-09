import Footer from "../components/footer";
import DillaHero from "../components/landingpage/dillaHero";
import ReceiveMoney from "../components/landingpage/receiveMoney";
import RequestMoney from "../components/landingpage/requestMoney";
import SendMoney from "../components/landingpage/sendMoney";
import HeaderDilla from "../components/navbarDilla";
import "../css/App.css";
import "../css/home.css";

function DillaWallet() {
  return (
    <div className="bg-white">
      <HeaderDilla/>
      <DillaHero/>
      <SendMoney/>
      <ReceiveMoney/>
      <RequestMoney/>
      <Footer />
    </div>
  );
}

export default DillaWallet;
