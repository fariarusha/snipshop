import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
export default function Hero() {
  return (
    <div className="hero-section-wrapper">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-5 hero-first-section">
            <p>100% QUALITY, 100% SATISFACTION</p>
            <h1>Where the world comes to shop.</h1>
            <h5>
              Life is hard enough already. Let us make it a little easier,
              Vision of Snipshop for a better outlook.
            </h5>
          </div>
          <div className="col-md-4">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="hero-middle-wrapper">
                  <div className="hero-middle-row">
                    <div className="hero-middle-right-image">
                      <img src="../../assets/images/camera.png" alt="Camera" />
                    </div>
                    <div className="hero-middle-left-text">
                      <p>Start from</p>
                      <h5>110.00$</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-middle-wrapper">
                  <div className="hero-middle-row">
                    <div className="hero-middle-right-image">
                      <img src="../../assets/images/camera.png" alt="Camera" />
                    </div>
                    <div className="hero-middle-left-text">
                      <p>Start from</p>
                      <h5>110.00$</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-middle-wrapper">
                  <div className="hero-middle-row">
                    <div className="hero-middle-right-image">
                      <img src="../../assets/images/camera.png" alt="Camera" />
                    </div>
                    <div className="hero-middle-left-text">
                      <p>Start from</p>
                      <h5>110.00$</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-middle-wrapper">
                  <div className="hero-middle-row">
                    <div className="hero-middle-right-image">
                      <img src="../../assets/images/camera.png" alt="Camera" />
                    </div>
                    <div className="hero-middle-left-text">
                      <p>Start from</p>
                      <h5>110.00$</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-3">
            <div className="vertical-slider-container">
              <Swiper
                direction={"vertical"}
                slidesPerView={2}
               
                // spaceBetween={30}
               autoplay={{
                   delay: 2500,
                   disableOnInteraction: false,
                 }}
                 modules={[Autoplay]}
                className="verticalHeroSlider"
              >
                <SwiperSlide>
                  <div className="vertical-slider-content">
                    <img src="../../assets/images/cam2.png" alt="Camera" />
                    <p>
                      Fuji 14mm <br /> Lens
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vertical-slider-content">
                    <img src="../../assets/images/cam3.png" alt="Camera" />
                    <p>
                      Camera <br /> Stand
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vertical-slider-content">
                    <img src="../../assets/images/cam2.png" alt="Camera" />
                    <p>
                      Fuji 14mm <br /> Lens
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vertical-slider-content">
                    <img src="../../assets/images/cam3.png" alt="Camera" />
                    <p>
                      Camera <br /> Stand
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* <div className="col-md-4">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="hero-middle-wrapper">
                  <div className="hero-middle-row">
                    <div className="hero-middle-right-image">
                      <img src="../../assets/images/camera.png" alt="Camera" />
                    </div>
                    <div className="hero-middle-left-text">
                      <p>Start from</p>
                      <h5>110.00$</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-middle-wrapper">
                  <div className="hero-middle-row">
                    <div className="hero-middle-right-image">
                      <img src="../../assets/images/cam4.jpg" alt="Camera" />
                    </div>
                    <div className="hero-middle-left-text">
                      <p>Start from</p>
                      <h5>110.00$</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="hero-middle-wrapper">
                  <div className="hero-middle-row">
                    <div className="hero-middle-right-image">
                      <img src="../../assets/images/camera.png" alt="Camera" />
                    </div>
                    <div className="hero-middle-left-text">
                      <p>Start from</p>
                      <h5>110.00$</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="hero-middle-wrapper">
                  <div className="hero-middle-row">
                    <div className="hero-middle-right-image">
                      <img src="../../assets/images/cam5.jpg" alt="Camera" />
                    </div>
                    <div className="hero-middle-left-text">
                      <p>Start from</p>
                      <h5>110.00$</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-3">
            <div className="vertical-slider-container">
              <Swiper
                direction={"vertical"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{ clickable: true }}
                className="verticalHeroSlider"
              >
                <SwiperSlide>
                  <div className="vertical-slider-content">
                    <img src="../../assets/images/cam5.jpg" alt="Camera" />
                    <p>test</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vertical-slider-content">
                    <img src="../../assets/images/cam5.jpg" alt="Camera" />
                    <p>test</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vertical-slider-content">
                    <img src="../../assets/images/cam5.jpg" alt="Camera" />
                    <p>test</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vertical-slider-content">
                    <img src="../../assets/images/cam5.jpg" alt="Camera" />
                    <p>test</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
