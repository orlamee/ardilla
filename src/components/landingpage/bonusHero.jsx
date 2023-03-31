import le from "../../img/le.svg";
import learning from "../../img/learning.svg";

function BonusHero() {
  return (
    <section className="learn-bonus">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <img src={le} alt="" className="img-fluid mb-4" />
            <h6 className="mb-5">Learn & Earn lorem ipsum antares Learn & Earn lorem ipsum antares<br/>Learn & Earn lorem ipsum antares </h6>
            <img src={learning} alt="" className="img-fluid w-100" style={{marginBottom: "-41px"}} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BonusHero;
