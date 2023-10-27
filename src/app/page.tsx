import Cta from "@/components/Cta";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Merchhero from "@/components/merch/Hero";
import Ourclients from "@/components/Ourclients";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <div className="gradient-03 z-0" />
      <Process />
      <div className="gradient-04 z-0" />
      <Gallery />
      {/* <Merchhero /> */}
      <Link
        href="/merch"
        className=" relative top-[-80px] text-center mx-auto bg-[#DCFA6C] text-black block rounded-lg px-3 py-2 text-base max-w-lg font-semibold leading-7  "
      >
        Visit Swag Store
      </Link>
      <Ourclients/>
      <Cta />
    </div>
  );
};

export default page;
