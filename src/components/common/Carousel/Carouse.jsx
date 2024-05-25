import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import "./carousel.css"
import image1 from "../../../assests/Doctor1.png"
import image2 from "../../../assests/Doctor2.png"
import image3 from "../../../assests/Doctor3.png"
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

// import required modules
import { Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
      slidesPerView={4} // Display 3 slides in one view
      spaceBetween={30} // Space between each slide
    //   loop={true} // Enable loop mode
      pagination={{ dynamicBullets: true }} // Enable pagination with dynamic bullets
      navigation={true} // Enable navigation arrows
      allowSlidePrev={true} // Allow slide to previous
      allowSlideNext={true} // Allow slide to next
      className="mySwiper"
    //   allowTouchMove
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
    >
        <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
    
      </Swiper>
    </>
  );
}
