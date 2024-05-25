import "./carousel.css";
import image1 from "../../../assests/Doctor1.png";
import image2 from "../../../assests/Doctor2.png";
import image3 from "../../../assests/Doctor3.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={4} // Display 4 slides in one view
        spaceBetween={30} // Space between each slide
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        allowTouchMove={true} 
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="SlideWrapper"><img src={image1} />
          <div className="TextWrapper"><span className="DoctorName">Dr. Nandan Maheta</span><span className="DoctorSpe">Cardiologist</span></div></div>
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
