import Cta from "@/components/Cta";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Merchhero from "@/components/merch/Hero";
import Ourclients from "@/components/Ourclients";
import Process from "@/components/Process";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <div className="gradient-03 z-0 max-w-full md:flex hidden" />
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
            <h2 className="mb-4 mt-6 text-3xl font-extrabold text-white md:text-5xl">
              Web3 Made Simple
            </h2>
            <p className="mx-auto mt-4 max-w-[528px] text-white">
              Navigating Uncertainties with Our Structured Approach
            </p>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-3 md:grid-cols-4">
            <div className=" p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
            <img src="/design.svg" className="w-12 h-12"/>
              <p className="text-xl text-white font-semibold mt-8">Design</p>
              <p className=" text-white mt-4">
                Our team of creative experts is committed of addressing the
                basics of the metaverse and blockchain, providing customised
                solutions for all the Web3 needs
              </p>
            </div>
            <div className=" p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
            <img src="/dev.svg" className="w-12 h-12"/>
              <p className="text-xl text-white font-semibold mt-8">Develop</p>
              <p className=" text-white mt-4">
                We make sure that our professional design attracts your audience
                and investors while making your product stand out from the
                competitors.
              </p>
            </div>
            <div className=" p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <img src="/market.svg" className="w-12 h-12"/>
              <p className="text-xl text-white font-semibold mt-8">Market</p>
              <p className=" text-white mt-4">
                Achieving your product&apos;s full potential and bringing the people
                into a time ruled by your ideals are both possible with the
                right marketing methods with the help of our expertise
              </p>
            </div>
            <div className=" p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
            <img src="/blockchain.png" className="w-12 h-12"/>
              <p className="text-xl text-white font-semibold mt-8">
                Web3/ Blockchain consultancy
              </p>
              <p className=" text-white mt-4">
                Threeway provides blockchain consulting services to make the
                most of technology&apos;s potential and help learn more about your
                initiatives in the Web3 Space
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="gradient-04 z-0 max-w-full md:flex hidden" />
      <Gallery />
      <Merchhero />
      <Link
        href="/merch"
        className=" md:relative  m-10 top-[-120px] text-center mx-auto bg-[#DCFA6C] text-black block rounded-lg px-3 py-2 text-base max-w-xs font-semibold leading-7  "
      >
        Visit Swag Store
      </Link>
      <Ourclients />
      <Cta />
    </div>
  );
};

export default page;
