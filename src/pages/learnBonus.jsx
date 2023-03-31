import Footer from "../components/footer";
import BonusHero from "../components/landingpage/bonusHero";
import ImproveFinance from "../components/landingpage/improveFinance";
import LearnFoot from "../components/landingpage/learnFoot";
import LearnHeader from "../components/landingpage/navBarLearn";
import RankBonus from "../components/landingpage/rankBonus";
import SlidingBonus from "../components/landingpage/slidingBonus";


function LearnBonus() {
  return (
    <div>
      <LearnHeader/>
      <BonusHero/>
      <ImproveFinance/>
      <SlidingBonus/>
      <RankBonus/>
      <LearnFoot/>
      <div style={{background: "#fffdf2"}}>
        <Footer/>
      </div>
    </div>
  );
}

export default LearnBonus;
