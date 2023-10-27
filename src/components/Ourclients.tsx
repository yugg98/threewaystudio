import React from "react";
import Marquee from "react-fast-marquee";

const Ourclients = () => {
  return (
    <div>
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 className="mb-4 mt-6 text-3xl font-extrabold text-white md:text-5xl">
          Our Clients and Partners
        </h2>
        <p className="mx-auto mt-4 max-w-[528px] text-white">
          We’ve collaborated and helped many companies succeed in the
          <span className="text-purple-400 font-bold"> Web3.0 </span>space
        </p>
      </div>
      <div>
        <div className="">
          <Marquee className="grid gap-x-8">
            <img src="/logos/logo8.png" className="mx-12 h-24 " />
            <img src="/logos/logo.png" className="mx-12 h-24 " />
            <img src="/logos/logo9.jfif" className="mx-12 h-24 " />
            <img src="/logos/logo10.jpg" className="mx-12 h-24 " />
            <img src="/logos/logo11.webp" className="mx-12 h-24 " />
            <img src="/logos/logo12.jpg" className="mx-12 h-24 " />
            <img src="/logos/logo13.png" className="mx-12 h-24 " />
            <img src="/logos/logo14.jpg" className="mx-12 h-24 " />
          </Marquee>
        </div>
        <div className=" my-8">
          <Marquee className="grid gap-x-8" direction="right">
            <img src="/logos/logo1.webp" className="mx-12 h-24 w-24" />
            <img src="/logos/logo2.jpg" className="mx-12 h-24 w-24" />
            <img src="/logos/logo3.jpg" className="mx-12 h-24 w-24" />
            <img src="/logos/logo4.jpg" className="mx-12 h-24 w-24" />
            <img src="/logos/logo5.jpg" className="mx-12 h-24 w-24" />
            <img src="/logos/logo6.webp" className="mx-12 h-24 w-24" />
            <img src="/logos/logo7.jfif" className="mx-12 h-24 w-24" />
          </Marquee>
        </div>
        <div className="">
          <Marquee className="grid gap-x-8">
            <img src="/logos/logo15.webp" className="mx-12 h-24 " />
            <img src="/logos/logo16.png" className="mx-12 h-24 " />
            <img src="/logos/logo17.jpg" className="mx-12 h-24 " />
            <img src="/logos/logo18.png" className="mx-12 h-24 " />
            <img src="/logos/logo19.svg" className="mx-12 h-24 " />
            <img src="/logos/logo20.jfif" className="mx-12 h-24 " />
            <img src="/logos/logo21.jfif" className="mx-12 h-24 " />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Ourclients;
