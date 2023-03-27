import React from "react";
// import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";


function Openings() {
  return (
    <section className="openings culture-text">
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-5">
            <h2>Open Positions </h2>
          </div>
        </div>
        <div className="career-top">
          {/* <Carousel>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="bg-op">
                    <h4>Design</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op eng">
                    <h4>Engineering</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6 mb-3">
                  <div className="bg-op writer">
                    <h4>Content Writer</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op adv">
                    <h4>Financial Advisor</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="bg-op">
                    <h4>Design</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op eng">
                    <h4>Engineering</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6 mb-3">
                  <div className="bg-op writer">
                    <h4>Content Writer</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op adv">
                    <h4>Financial Advisor</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="bg-op">
                    <h4>Design</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op eng">
                    <h4>Engineering</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6 mb-3">
                  <div className="bg-op writer">
                    <h4>Content Writer</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op adv">
                    <h4>Financial Advisor</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel> */}
          <Swiper
            scrollbar={{
              hide: false,
            }}
            modules={[Autoplay, Scrollbar]}
            className="mySwiper"
            navigation={false} 
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="bg-op">
                    <h4>Design</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op eng">
                    <h4>Engineering</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6 mb-3">
                  <div className="bg-op writer">
                    <h4>Content Writer</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op adv">
                    <h4>Financial Advisor</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="bg-op">
                    <h4>Design</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op eng">
                    <h4>Engineering</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6 mb-3">
                  <div className="bg-op writer">
                    <h4>Content Writer</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op adv">
                    <h4>Financial Advisor</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="bg-op">
                    <h4>Design</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op eng">
                    <h4>Engineering</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6 mb-3">
                  <div className="bg-op writer">
                    <h4>Content Writer</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="bg-op adv">
                    <h4>Financial Advisor</h4>
                    <p className="my-5">Hello! This Privacy Policy (the “Policy”) has been created to describe your privacy rights regarding how we collect, use, process, disclose and </p>
                    <h6>Position Closed</h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
      
    </section>
  );
}

export default Openings;
