import rank from "../../img/rankbest.svg";


function RankBonus() {
  return (
    <section className="rankbonus">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <img src={rank} alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RankBonus;
