import improve from "../../img/improve.svg";
import right from "../../img/two-phones.svg";


function ImproveFinance() {
  return (
    <section className="improvefinance">
      <div className="container">
        <div className="row">
          <div className="col-md-5 top-products">
            <img src={improve} alt="" className="img-fluid" />
            <p className="mt-4">Preparing for the future is about more than money. Real-world<br/>concepts like budgeting, starting a business, and co.</p>
          </div>
          <div className="col-md-7">
            <img src={right} alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImproveFinance;
