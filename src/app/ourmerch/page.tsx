"use client";
import Hero from "@/components/merch/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Pop from "@/components/Pop";
import { useState } from "react";
const products = [
  
  {
    id: 1,
    name: "Wallet",
    href: "#",
    imageSrc: "/merch/book.gif",
    price: "$140",
  },
  {
    id: 1,
    name: "Tshirt",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/tshirt.gif",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 1,
    name: "Notebook",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/notebook.gif",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 1,
    name: "Keychain",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/keychain.gif",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 1,
    name: "Hoodie",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/hoodie.gif",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  
  {
    id: 1,
    name: "Bag",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/bag.gif",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 1,
    name: "Mug",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/mug.gif",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 1,
    name: "Pen",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/pen.gif",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 1,
    name: "Bottle",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/bottle.gif",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 1,
    name: "Swag Box",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/crate.gif",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
 
  {
    id: 1,
    name: "Badge",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/badge.gif",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
];

export default function Merch() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 sm:pt-12 lg:max-w-7xl lg:px-8">
      <div className="bg-gray-900 ">
        <Swiper
          navigation={true}
          autoplay
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative isolate overflow-hidden rounded-md h-[600px]">
              <img
                src="/merch.jpeg"
                alt=""
                className="absolute inset-0 -z-10 h-[600px] w-full object-cover "
              />
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>

              <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative isolate overflow-hidden rounded-md h-[600px]">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-[600px] w-full object-cover "
              />
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>

              <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className="text-5xl my-24 text-center font-bold text-white">
        Shop Now
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id}>
            <div className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-white">
                  {product.name}
                </h3>
              </div>
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
               
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setIsOpen(true)}
                className="relative flex items-center w-full bg-purple-900 justify-center rounded-md border border-transparent  px-8 py-2 text-sm font-medium text-white hover:bg-purple-800"
              >
                View More <span className="sr-only">, {product.name}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <Pop isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
