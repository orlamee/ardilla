import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import checklist from "../../img/checklist.svg";
// import learn from "../../img/learn-home.svg";
import saver from "../../img/product-save.svg";
import learn from "../../img/product-learn.svg";
import insure from "../../img/product-insurance.svg";
import budget from "../../img/product-budget.svg";
import invest from "../../img/product-invest.svg";
import { Autoplay, Pagination } from "swiper";
function Products() {
  return(
    <section className="features-product">
      <div className="container">
        <div className="row">
          <h2>Products</h2>
        </div>
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          navigation={false} 
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="mb-5">
            <div className="row justify-content-around" style={{marginTop: "40px"}}>
              <div className="col-md-5" id="style-8">
                <div className="">
                  <h3>Save</h3>
                  <h6>Save at your own pace!</h6>
                  <p>Save your money daily, weekly, or monthly. No pressure. We work at your pace</p>
                  <div className="" style={{marginTop: "60px"}}>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Create Unlimted savings plans</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Withdraw anytime</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Save with Friends with SAN ID</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Be better at saving</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Accountability profile</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Activity and report</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <img src={saver} alt="savings" className="img-fluid w-100" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-5">
            <div className="row justify-content-around" style={{marginTop: "40px"}}>
              <div className="col-md-5" id="style-8">
                <div className="">
                  <h3>Learn</h3>
                  <h6>Financial freedom begins with You and Ardilla</h6>
                  <p>Ardila offers wealth-building tips from great financial minds to help you get to where you need to be.</p>
                  <div className="" style={{marginTop: "60px"}}>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Learn to invest in 2hrs</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Get a portfolio manager</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Stay on top of your finances</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Learn with family and friends</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Earn points and reward</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Activity and report</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <img src={learn} alt="savings" className="img-fluid w-100" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-5">
            <div className="row justify-content-around" style={{marginTop: "40px"}}>
              <div className="col-md-5" id="style-8">
                <div className="">
                  <h3>Invest</h3>
                  <h6>Save at your own pace!</h6>
                  <p>Save your money daily, weekly, or monthly. No pressure. We work at your pace</p>
                  <div className="" style={{marginTop: "60px"}}>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Create Unlimted savings plans</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Withdraw anytime</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Save with Friends with SAN ID</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Be better at saving</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Accountability profile</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Activity and report</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <img src={invest} alt="savings" className="img-fluid w-100" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-5">
            <div className="row justify-content-around" style={{marginTop: "40px"}}>
              <div className="col-md-5" id="style-8">
                <div className="">
                  <h3>Budget</h3>
                  <h6>Save at your own pace!</h6>
                  <p>Save your money daily, weekly, or monthly. No pressure. We work at your pace</p>
                  <div className="" style={{marginTop: "60px"}}>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Create Unlimted savings plans</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Withdraw anytime</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Save with Friends with SAN ID</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Be better at saving</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Accountability profile</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Activity and report</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <img src={budget} alt="savings" className="img-fluid w-100" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-5">
            <div className="row justify-content-around" style={{marginTop: "40px"}}>
              <div className="col-md-5" id="style-8">
                <div className="">
                  <h3>Insure</h3>
                  <h6>Save at your own pace!</h6>
                  <p>Save your money daily, weekly, or monthly. No pressure. We work at your pace</p>
                  <div className="" style={{marginTop: "60px"}}>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Create Unlimted savings plans</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Withdraw anytime</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Save with Friends with SAN ID</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Be better at saving</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Accountability profile</h5>
                    </div>
                    <div className="d-flex flex-row mb-4">
                      <img src={checklist} alt="check" className="img-fluid"/>
                      <h5 className="ms-4 mt-1">Activity and report</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <img src={insure} alt="savings" className="img-fluid w-100" />
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
        
        
      </div>
    </section>
  )
}

export default Products;