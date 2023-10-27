import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

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
        <Marquee>
          <a href="https://sustainogram.com/">
          <img src="/clients/img1.png" className="max-w-md  mx-10 hover:scale-125" />
          </a>
          <a href="https://rywards.com/">
          <img src="/clients/img2.png" className="max-w-md  mx-10 hover:scale-125" />
          </a>
          <a href="https://aarohan-three.vercel.app/">
          <img src="/clients/img3.png" className="max-w-md  mx-10 hover:scale-125" />
          </a>
          <a href="https://www.artfi.world/">
          <img src="/clients/img4.png" className="max-w-md  mx-10 hover:scale-125" />
          </a>
          <a href="https://cafeyoda.com/">
          <img src="/clients/img5.png" className="max-w-md  mx-10 hover:scale-125" />
          </a>
          <a href="https://into-the-verse-frontend-mu.vercel.app/metaverse">
          <img src="/clients/img6.png" className="max-w-md  mx-10 hover:scale-125" />
          </a>
          <a href="https://game.krida.fans/">
          <img src="/clients/img7.png" className="max-w-md  mx-10 hover:scale-125" />
          </a>
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
