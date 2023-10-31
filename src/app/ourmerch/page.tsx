"use client";
import Hero from "@/components/merch/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Pop from "@/components/Pop";
import { useState } from "react";
import {
  CheckBadgeIcon,
  LockClosedIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
const products = [
  {
    id: 1,
    name: "Wallet",
    href: "#",
    imageSrc: "/merch/book.gif",
    price: "$140",
    images: ["/m/wallet.png"],
  },
  {
    id: 2,
    name: "Tshirt",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/tshirt.gif",
    images: ["/m/tshirt3.png"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 3,
    name: "Notebook",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/notebook.gif",
    images: ["/m/notebook1.png", "/m/notebook2.png"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 4,
    name: "Keychain",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/keychain.gif",
    images: ["/m/keychain.png","/m/keychain.jpg"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 5,
    name: "Hoodie",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/hoodie.gif",
    images: ["/m/hoodie1.png", "/m/hoodie2.png", "/m/hoodie3.png"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },

  {
    id: 6,
    name: "Bag",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/bag.gif",
    images: ["/m/bag2.jpg", "/m/bag3.jpg"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 7,
    name: "Mug",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/mug.gif",
    images: ["/m/mug1.jpg"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 8,
    name: "Pen",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/pen.gif",
    images: ["/m/pen1.png", "/m/pen2.png"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
];

const Viewmore = [
  {
    id: 9,
    name: "Bottle",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/bottle.gif",
    images: ["/m/bottle.jpg"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 10,
    name: "Swag Box",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/crate.gif",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 11,
    name: "Badge",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/badge.gif",
    images: ["/m/badge.png", "/m/badge1.png", "/m/badge2.png", "/m/badge4.jpg"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 11,
    name: "Stickers",
    color: "White and black",
    href: "#",
    imageSrc: "/m/sticker1.png",
    images: ["/m/wagmi.png","/m/rocket.png","/m/spaceman.png","/m/threeway.png"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 12,
    name: "Mousepad",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/mousepad.gif",
    images: ["/m/mousepad1.jpg", "/m/mousepad2.jpg"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 9,
    name: "Paperweight",
    color: "White and black",
    href: "#",
    imageSrc: "/merch/paperweight.gif",
    images: ["/m/paperweight.png"],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 10,
    name: "Umbrella",
    color: "White and black",
    href: "#",
    imageSrc: "/m/umbrella.png",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  
  {
    id: 11,
    name: "Mask",
    color: "White and black",
    href: "#",
    imageSrc: "/m/mask4.jpg",
    images: ["/m/mask5.jpg",],
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
];

const features = [
  {
    name: "Hassle-Free Shipping and Returns",
    icon: CheckBadgeIcon,
  },
  {
    name: "Secured Payments",
    icon: LockClosedIcon,
  },
  {
    name: "Customer Service",
    icon: TruckIcon,
  },
];

export default function Merch() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
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
            <div className="relative isolate overflow-hidden rounded-md md:h-[600px] h-[200px]">
              <img
                src="/merch.jpeg"
                alt=""
                className="absolute inset-0 -z-10 md:h-[600px] h-[200px] w-full object-cover "
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
          {/* <SwiperSlide>
            <div className="relative isolate overflow-hidden rounded-md md:h-[600px] h-[200px]">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg"
                alt=""
                className="absolute inset-0 -z-10 md:h-[600px] h-[200px] w-full object-cover "
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
          </SwiperSlide> */}
        </Swiper>
      </div>
      <h2 className="text-5xl my-24 text-center font-bold text-white">
        Shop Now
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id}>
            <div className="relative">
              <div className=" h-72 w-full overflow-hidden rounded-lg">
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
            </div>
            <div className="mt-6">
              <button
                onClick={() => {
                  setData(product);
                  setIsOpen(true);
                }}
                className="relative flex items-center w-full bg-purple-900 justify-center rounded-md border border-transparent  px-8 py-2 text-sm font-medium text-white hover:bg-purple-800"
              >
                View More <span className="sr-only">, {product.name}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="py-2 w-full mt-4 ">
              {!open?
              <>
              <img
                src="/arrow.svg"
                className={
                  open ? "rotate-180 mt-4 transform mx-auto" : "mx-auto   "
                }
              />
              <p className="text-white mt-4">View More</p> </>:null}
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
              <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {Viewmore.map((product) => (
                  <div key={product.id}>
                    <div className="relative">
                      <div className=" h-72 w-full overflow-hidden rounded-lg">
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
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={() => {
                          setData(product);
                          setIsOpen(true);
                        }}
                        className="relative flex items-center w-full bg-purple-900 justify-center rounded-md border border-transparent  px-8 py-2 text-sm font-medium text-white hover:bg-purple-800"
                      >
                        View More{" "}
                        <span className="sr-only">, {product.name}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Pop isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
      <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-32 lg:max-w-7xl">
        <dl className="grid  grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative md:pl-16">
              <dt className="text-base text-center text-white font-semibold leading-7 t">
                <feature.icon
                  className="h-7 mx-auto w-7 text-[#DCFA6C]"
                  aria-hidden="true"
                />
                <p className="mt-4 text-xl">{feature.name}</p>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
