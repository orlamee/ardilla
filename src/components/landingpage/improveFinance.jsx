import improve from "../../img/improve.svg";
import right from "../../img/two-phones.svg";


function ImproveFinance() {
  return (
    <section className="improvefinance">
      <div className="container">
        <div className="row">
          <div className="col-md-5 top-products">
            <img src={improve} alt="" className="img-fluid" />
            <p className="mt-4">Financial freedom is so much more than just money. Learn real<br/>world concepts that help you become and stay financially free.</p>
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
