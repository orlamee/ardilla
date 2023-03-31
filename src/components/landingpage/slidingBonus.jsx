import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import one from "../../img/1.svg";
import two from "../../img/2.svg";
import three from "../../img/3.svg";
import four from "../../img/4.svg";


import { Autoplay, Pagination } from "swiper";

function SlidingBonus() {
  return (
    <section className="slider-bonus border-bottom border-top">
      <div className="container-fluid">
        <div className="row">
          <div className="py-5">
          <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={false}
              navigation={false} 
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={one} alt="" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={two} alt="" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={three} alt="" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={four} alt="" className="img-fluid" />
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SlidingBonus;
