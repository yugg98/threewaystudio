import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
export default function MyDialog({ isOpen, setIsOpen, data }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center ">
        <Dialog.Panel className="w-full rounded-xl p-4 max-w-md   bg-[#0E0E10]">
          <Dialog.Title className="text-white text-3xl text-center">
            {data.name}
          </Dialog.Title>
          <div className="mt-4">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                disabledClass: "disabled_swiper_button",
              }}
              style={{
                "--swiper-navigation-size": "20px",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  showSwitchArrows: false,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  showSwitchArrows: false,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1280: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img src={data.imageSrc} />
              </SwiperSlide>
              {data.images?.map((e, id) => (
                
                <SwiperSlide key={id} >
                  <div className="flex justify-center items-center h-full w-full">
                  <img src={e} className=" mx-auto" />
                  </div>
                </SwiperSlide>
              ))}

              <Link
                href="https://calendly.com/threeway-studio/blockchain-consultation"
                className="items-center font-display justify-center hidden px-4 py-3 text-white rounded md:flex buttonbg hover:scale-95 active:scale-90 font-semibold transition-all duration-150 !bg-[#6c36ab] hover:text-white shadow-sm shadow-[#c977d6] hover:shadow-md hover:shadow-[#c977d6] ease-in-out"
              >
                Buy Now
              </Link>
            </Swiper>
          </div>

          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
