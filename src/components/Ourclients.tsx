import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import Swiper from "swiper/react";

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
          <Marquee>
            <img src="/logos/logo8.png" className="mx-12 w-24 " />

            <img src="/logos/logo.png" className="mx-12 w-24 " />

            <img src="/logos/logo9.jfif" className="mx-12 w-24 " />

            <img src="/logos/logo10.jpg" className="mx-12 w-24 " />

            <img src="/logos/logo11.webp" className="mx-12 w-24 " />
            <img src="/logos/logo12.jpg" className="mx-12 w-24 " />

            <img src="/logos/logo13.png" className="mx-12 w-24 " />

            <Link href="https://www.lmnl.app/">
              <img src="/logos/logo30.png" className="mx-12 w-24 " />
            </Link>
            <Link href="https://metakeep.xyz/">
              <img src="/logos/logo31.png" className="mx-12 w-24 invert" />
            </Link>
            <Link href="https://www.gearfi.in/">
              <img src="/logos/logo32.png" className="mx-12 w-24 invert" />
            </Link>
            <Link href="https://komet.me/">
              <img src="/logos/logo33.svg" className="mx-12 w-24 invert" />
            </Link>
            <Link href="https://bnest.in/">
              <img src="/logos/logo35.png" className="mx-12 w-24 invert" />
            </Link>
          </Marquee>
        </div>
        <div className=" my-8">
          <Marquee className="grid gap-x-8" direction="right">
            <img src="/logos/logo2.jpg" className="mx-12   w-24" />
            <img src="/logos/logo3.jpg" className="mx-12   w-24" />
            <img src="/logos/logo4.jpg" className="mx-12   w-24" />
            <img src="/logos/logo5.jpg" className="mx-12   w-24" />
            <img src="/logos/logo6.webp" className="mx-12  w-24" />
            <img src="/logos/logo7.jfif" className="mx-12  w-24" />
            <Link href="https://www.metakraft.live/">
              <img src="/logos/logo24.svg" className="mx-12  w-24" />
            </Link>
            <Link href="https://zeltalabs.com/">
              <img src="/logos/logo25.webp" className="mx-12  w-24" />
            </Link>
            <Link href="https://www.5ire.org/">
              <img src="/logos/logo26.svg" className="mx-12  w-24" />
            </Link>
            <Link href="https://trikon.io/">
              <img src="/logos/logo27.svg" className="mx-12  w-24" />
            </Link>
            <Link href="https://www.usdao.io/">
              <img src="/logos/logo28.svg" className="mx-12  w-24" />
            </Link>
            <Link href="https://engage.isaca.org/newdelhichapter/home">
              <img src="/logos/logo36.svg" className="mx-12  w-24" />
            </Link>
          </Marquee>
        </div>
        <div className="">
          <Marquee className="grid gap-x-8">
            <img src="/logos/logo15.webp" className="mx-12 w-24 " />
            <img src="/logos/logo16.png" className="mx-12 w-24 " />
            <img src="/logos/logo17.jpg" className="mx-12 w-24 " />
            <img src="/logos/logo18.png" className="mx-12 w-24 " />
            <img src="/logos/logo21.jpeg" className="mx-12 w-24 " />
            <Link href="https://www.strv.network/">
              <img src="/logos/logo22.png" className="mx-12 w-24 " />
            </Link>
            <Link href="https://www.decrackle.io/">
              <img src="/logos/logo23.svg" className="mx-12 w-24 " />
            </Link>
            <Link href="https://keploy.io/">
              <img src="/logos/logo29.svg" className="mx-12  w-24" />
            </Link>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Ourclients;
