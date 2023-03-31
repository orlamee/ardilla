import earnwithkids from "../../img/earnwithkids.svg";
import right from "../../img/footer-learn.svg";


function LearnFoot() {
  return (
    <section className="learnfooter">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-3">
            <img src={earnwithkids} alt="" className="img-fluid" />
          </div>
          <div className="col-md-7">
            <img src={right} alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnFoot;
