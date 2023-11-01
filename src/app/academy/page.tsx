import Cta from "@/components/Cta";
import Ourclients from "@/components/Ourclients";
import Ro from "@/components/Ro";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const page = () => {
  return (
    <div>
      <div className="mx-auto  px-6 lg:px-8 my-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Previous Events
          </p>
          <p className="text-white text-lg mt-4">
            Here&apos;s the glimpse to some of our previous events
          </p>
        </div>
        <div className="my-12   mx-auto py-10">
          <Marquee className="py-10">
            <img
              src="/clients/img1.png"
              className="max-w-md mx-10 hover:scale-125"
            />
            <img
              src="/clients/img2.png"
              className="max-w-md mx-10 hover:scale-125"
            />
            <img
              src="/clients/img3.png"
              className="max-w-md mx-10 hover:scale-125"
            />
            <img
              src="/clients/img4.png"
              className="max-w-md mx-10 hover:scale-125"
            />
            <img
              src="/clients/img5.png"
              className="max-w-md mx-10 hover:scale-125"
            />
            <img
              src="/clients/img6.png"
              className="max-w-md mx-10 hover:scale-125"
            />
            <img
              src="/clients/img7.png"
              className="max-w-md mx-10 hover:scale-125"
            />
          </Marquee>
        </div>
      </div>
      <div className="mx-auto  px-6 lg:px-8 my-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Our Media Publications
          </p>
          <p className="text-white text-lg mt-4">
            Here&apos;s the glimpse to some of our Media Publications
          </p>
        </div>
        <div className="my-12   mx-auto py-10">
          <Marquee className="py-10">
          <Link href="https://youtu.be/E-nL9G-clew?si=VJ6E5lSZSYH7Ro3s">
              <img src="/a12.png" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://coinscapture.com/press-release/Unblocking-Blockchain-Potential-By-Threeway-Studio">
              <img src="/a1.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://bitcoinworld.co.in/empowering-industries-with-blockchain-insights-from-threeway-studios-co-founders/">
              <img src="/a2.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://www.binance.com/en-NG/feed/post/315853">
              <img src="/a3.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://bitcoinworld.co.in/empowering-industries-with-blockchain-insights-from-threeway-studios-co-founders/">
              <img src="/a4.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://viestories.com/young-entrepreneurs-bridging-web3-threeway-studio/?amp=1">
              <img src="/a5.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://www.indiatoday.in/cryptocurrency/story/earn-over-rs-3-2-cr-package-as-blockchain-security-experts-here-s-how-1992145-2022-08-26?utm_source=washare&utm_medium=socialicons&utm_campaign=shareurltracking">
              <img src="/a6.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://yourstory.com/companies/threeway-studio/amp">
              <img src="/a7.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://cryptounity.news/two-young-entrepreneurs-from-central-india-bridging-gap-between-web2-to-web3">
              <img src="/a8.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://www.indiatoday.in/technology/story/crypto-brain-drain-in-india-what-developers-and-exchanges-say-1981462-2022-07-29">
              <img src="/a9.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://dascrypto.in/threeway-studios/">
              <img src="/a10.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://pentaxcoin.com/threeway-studio-the-journey-from-bootstrapped-to-worlds-leading-blockchain-solution-firm/">
              <img src="/a11.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            <Link href="https://pentaxcoin.com/threeway-studio-the-journey-from-bootstrapped-to-worlds-leading-blockchain-solution-firm/">
              <img src="/a11.jpeg" className="max-w-md mx-10 hover:scale-125" />
            </Link>
            
          </Marquee>
        </div>
      </div>
      <Ro/>
      <Cta />
    </div>
  );
};

export default page;
