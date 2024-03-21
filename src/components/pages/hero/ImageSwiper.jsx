import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.png";
import banner3 from "../../images/banner3.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const ImageSwiper = () => {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="inline" src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="inline" src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="inline" src={banner3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ImageSwiper;
