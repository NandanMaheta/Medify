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
import { useWidth } from "../../../customhook";

export default function Carousel1() {
  const { width } = useWidth();

  if (width > 1023) {
    return (
      <>
        <Swiper
          slidesPerView={4} // Display 4 slides in one view
          spaceBetween={30} // Space between each slide
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1800,
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
            <div className="SlideWrapper">
              <img src={image1} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Heena Sachdeva</span>
                <span className="DoctorSpe">Orthopadics</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image2} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ankur Sharma</span>
                <span className="DoctorSpe">Medicine</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image3} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ahmad Khan</span>
                <span className="DoctorSpe">Neurologist</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image1} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Heena Sachdeva</span>
                <span className="DoctorSpe">Orthopadics</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image2} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ankur Sharma</span>
                <span className="DoctorSpe">Medicine</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image3} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ahmad Khan</span>
                <span className="DoctorSpe">Neurologist</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  } else if (width > 767 && width < 1024) {
    return (
      <>
        <Swiper
          slidesPerView={2} // Display 4 slides in one view
          spaceBetween={30} // Space between each slide
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1800,
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
            <div className="SlideWrapper">
              <img src={image1} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Heena Sachdeva</span>
                <span className="DoctorSpe">Orthopadics</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image2} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ankur Sharma</span>
                <span className="DoctorSpe">Medicine</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image3} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ahmad Khan</span>
                <span className="DoctorSpe">Neurologist</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image1} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Heena Sachdeva</span>
                <span className="DoctorSpe">Orthopadics</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image2} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ankur Sharma</span>
                <span className="DoctorSpe">Medicine</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image3} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ahmad Khan</span>
                <span className="DoctorSpe">Neurologist</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  } else {
    return (
      <>
        <Swiper
          slidesPerView={1} // Display 4 slides in one view
          spaceBetween={30} // Space between each slide
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1900,
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
            <div className="SlideWrapper">
              <img src={image1} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Heena Sachdeva</span>
                <span className="DoctorSpe">Orthopadics</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image2} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ankur Sharma</span>
                <span className="DoctorSpe">Medicine</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image3} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ahmad Khan</span>
                <span className="DoctorSpe">Neurologist</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image1} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Heena Sachdeva</span>
                <span className="DoctorSpe">Orthopadics</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image2} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ankur Sharma</span>
                <span className="DoctorSpe">Medicine</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideWrapper">
              <img src={image3} />
              <div className="TextWrapper">
                <span className="DoctorName">Dr. Ahmad Khan</span>
                <span className="DoctorSpe">Neurologist</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}
