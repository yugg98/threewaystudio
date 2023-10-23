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
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
          </Marquee>
        </div>
        <div className=" my-8">
          <Marquee className="grid gap-x-8" direction="right">
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
          </Marquee>
        </div>
        <div className="">
          <Marquee className="grid gap-x-8">
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
            <img src="/logo.svg" className="mx-12 h-24 w-24" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Ourclients;
