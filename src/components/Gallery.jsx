"use client"
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Gallery = () => {
  return (
    <div className="mx-auto  px-6 lg:px-8 gallery">
      <div className="mx-auto max-w-xl text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Our Various Handoffs
        </p>
        <p className="text-white text-lg mt-4">
          Here&apos;s the glimpse to some of our previous works
        </p>
      </div>
      <div className="my-12   mx-auto py-10">
        <Swiper
         modules={[ Autoplay,Navigation]}
         spaceBetween={50}
         slidesPerView={1}
         breakpoints={{
           320: {
             slidesPerView: 1,
             showSwitchArrows: false
           },
           640: {
             slidesPerView: 1,
             spaceBetween: 20,
             showSwitchArrows: false
           },
           1024: {
             slidesPerView: 2,
             spaceBetween: 40,
           },
           1280: {
             slidesPerView: 3,
             spaceBetween: 30,
           },
         }}
         navigation
         loop={true}
         autoplay={{
           delay: 1000,
           disableOnInteraction: false,
         }}
         pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <a href="https://sustainogram.com/">
              <img
                src="/clients/img1.png"
                className="md:max-w-md max-w-full"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://rywards.com/">
              <img
                src="/clients/img2.png"
                className="md:max-w-md max-w-full "
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://aarohan-three.vercel.app/">
              <img
                src="/clients/img3.png"
                className="md:max-w-md max-w-full "
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.artfi.world/">
              <img
                src="/clients/img4.png"
                className="md:max-w-md max-w-full "
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://cafeyoda.com/">
              <img
                src="/clients/img5.png"
                className="md:max-w-md max-w-full   "
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://into-the-verse-frontend-mu.vercel.app/metaverse">
              <img
                src="/clients/img6.png"
                className="md:max-w-md max-w-full   "
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://game.krida.fans/">
              <img
                src="/clients/img7.png"
                className="md:max-w-md max-w-full   "
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.decrackle.io/">
              <img
                src="/clients/img8.png"
                className="md:max-w-md max-w-full   "
              />
            </a>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
