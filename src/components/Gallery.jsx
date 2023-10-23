import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="mx-auto  px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Our Various Handoffs
        </p>
        <p className="text-white text-lg mt-4">
          Here's the glimpse to some of our previous works
        </p>
      </div>
      <div className="my-12   mx-auto py-10">
        <Marquee>
          <img src="/krida.webp" className="max-w-md mx-10 hover:scale-125" />
          <img src="/krida.webp" className="max-w-md mx-10 hover:scale-125" />
          <img src="/krida.webp" className="max-w-md mx-10 hover:scale-125" />
          <img src="/krida.webp" className="max-w-md mx-10 hover:scale-125" />
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
