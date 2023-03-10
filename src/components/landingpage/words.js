import React from "react";
import video from "../../img/miss.svg";
import fine from "../../img/fine.svg";
import culprit from "../../img/culprit.svg";
import lady from "../../img/lady.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";

function Words() {
  return (
    <section className="words-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Don’t Take Our <span style={{color: "#E8356D"}}>Word</span> For It</h2>
            <h6 className="mt-3">Listen to testimonials from Ardilla users building wealth</h6>
          </div>
        </div>
      </div>
      <div className="container top-products">
        <div className="row">
          <div className="col">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={video} alt="" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={culprit} alt="" className="img-fluid interview" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={fine} alt="" className="img-fluid interview" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={lady} alt="" className="img-fluid interview" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={culprit} alt="" className="img-fluid interview" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={fine} alt="" className="img-fluid interview" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )  
}

export default Words;