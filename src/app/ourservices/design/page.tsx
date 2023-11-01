"use client"
import Cta from "@/components/Cta";
import Link from "next/link";
import React, { useState } from "react";
import Popimg from '@/components/Poimg'


const page = () => {
  const [open,setOpen] = useState(false)
  const [data,setData] = useState({})

  return (
    <div className="bg-black sticky z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1085"
        height="745"
        viewBox="0 0 1085 745"
        className="max-w-full absolute left-0 z-[1]"
        fill="none"
      >
        <g filter="url(#filter0_f_153_1464)">
          <circle cx="463" cy="622" r="123" fill="#EC79F5" />
        </g>
        <defs>
          <filter
            id="filter0_f_153_1464"
            x="-159"
            y="0"
            width="1244"
            height="1244"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="249.5"
              result="effect1_foregroundBlur_153_1464"
            />
          </filter>
        </defs>
      </svg>
      <svg
        className="max-w-full absolute right-0 top-0 z-[1]"
        xmlns="http://www.w3.org/2000/svg"
        width="663"
        height="765"
        viewBox="0 0 663 765"
        fill="none"
      >
        <g filter="url(#filter0_f_153_1463)">
          <circle cx="478" cy="287" r="79" fill="#DCFA6C" />
        </g>
        <defs>
          <filter
            id="filter0_f_153_1463"
            x="0"
            y="-191"
            width="956"
            height="956"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="199.5"
              result="effect1_foregroundBlur_153_1463"
            />
          </filter>
        </defs>
      </svg>
      <div className="relative overflow-hidden  pb-32 pt-16">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
              <div>
                <div className="mt-6">
                  <h1 className="text-xl mb-2 tracking-tight text-white">
                    NFT Artwork
                  </h1>
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Transforming Art into Digital Masterpieces with NFTs
                  </h2>
                  <p className="mt-4  text-gray-200">
                    Blockchain is here to expand its realms in every domain
                    including Fine Arts, Gaming, Music, etc. Leveraging that
                    power, The Threeway Studio ensures that your artwork becomes
                    a unique, verifiable, and immutable asset on the
                    decentralised network. Through the use of non-fungible
                    tokens (NFTs), your creations gain authenticity and
                    scarcity, making them truly one-of-a-kind. Our expertise
                    extends to fractionalized NFTs, enabling broader ownership
                    and investment opportunities. Once you create your NFT
                    artwork with us, it is securely stored on the blockchain,
                    allowing you to showcase and sell it in thriving digital art
                    marketplaces.{" "}
                  </p>
                  <div className="mt-6">
                    <Link
                       href="/contactus"
                      className="inline-flex sticky z-50 rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className=" lg:relative lg:m-0 lg:h-full lg:px-0">
                <video
                  className="w-full max-w-full"
                  src="/d1.mp4"
                  autoPlay={true}
                  muted
                  loop
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1085"
            height="745"
            viewBox="0 0 1085 745"
            className="max-w-full absolute left-0 z-[1]"
            fill="none"
          >
            <g filter="url(#filter0_f_153_1464)">
              <circle cx="463" cy="622" r="123" fill="#EC79F5" />
            </g>
            <defs>
              <filter
                id="filter0_f_153_1464"
                x="-159"
                y="0"
                width="1244"
                height="1244"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="249.5"
                  result="effect1_foregroundBlur_153_1464"
                />
              </filter>
            </defs>
          </svg>
          <svg
            className="max-w-full absolute right-0 top-0 z-[1]"
            xmlns="http://www.w3.org/2000/svg"
            width="663"
            height="765"
            viewBox="0 0 663 765"
            fill="none"
          >
            <g filter="url(#filter0_f_153_1463)">
              <circle cx="478" cy="287" r="79" fill="#DCFA6C" />
            </g>
            <defs>
              <filter
                id="filter0_f_153_1463"
                x="0"
                y="-191"
                width="956"
                height="956"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="199.5"
                  result="effect1_foregroundBlur_153_1463"
                />
              </filter>
            </defs>
          </svg>
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
              <div>
                <div className="mt-6">
                  <h1 className="text-xl mb-2 tracking-tight text-white">
                    Game Design
                  </h1>
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Next-Gen Designs for Immersive Gameplay
                  </h2>
                  <p className="mt-4  text-gray-200">
                    Threeway Studio understands the power & demand of digital
                    games that transport players to new realities and provide
                    unforgettable experiences. From storyboard creation to
                    avatar design, and leveraging the cutting-edge technologies
                    of Unity and Unreal Engine, we are dedicated to
                    conceptualising, designing, and developing games with
                    stunning visuals, engaging gameplay mechanics, and immersive
                    storytelling that captivate players worldwide. Whether
                    you&apos;re an aspiring game engineer or a pro gaming
                    studio, our team of gaming virtuosos specialises in crafting
                    next-gen designs that push the boundaries of what&apos;s
                    possible in the gaming world.
                  </p>{" "}
                  <div className="mt-6">
                    <button
                      onClick={()=>{
                        setData({images:["/game/img1.jpeg","/game/img2.jpeg","/game/img3.jpeg","/game/img4.jpeg"]})
                        setOpen(true)
                      }}
                      className="inline-flex sticky z-50 rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="   lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="grid p-4 grid-cols-2 grid-rows-2 md:gap-6 gap-4 max-w-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full  lg:max-w-full"
                    src="/game/img1.jpeg"
                    alt="Customer profile user interface"
                  />
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:h-full  lg:max-w-full"
                    src="/game/img2.jpeg"
                    alt="Customer profile user interface"
                  />
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:h-full  lg:max-w-full"
                    src="/game/img3.jpeg"
                    alt="Customer profile user interface"
                  />
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:h-full  lg:max-w-full"
                    src="/game/img4.jpeg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1085"
            height="745"
            viewBox="0 0 1085 745"
            className="max-w-full absolute left-0 z-[1]"
            fill="none"
          >
            <g filter="url(#filter0_f_153_1464)">
              <circle cx="463" cy="622" r="123" fill="#EC79F5" />
            </g>
            <defs>
              <filter
                id="filter0_f_153_1464"
                x="-159"
                y="0"
                width="1244"
                height="1244"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="249.5"
                  result="effect1_foregroundBlur_153_1464"
                />
              </filter>
            </defs>
          </svg>
          <svg
            className="max-w-full absolute right-0 top-0 z-[1]"
            xmlns="http://www.w3.org/2000/svg"
            width="663"
            height="765"
            viewBox="0 0 663 765"
            fill="none"
          >
            <g filter="url(#filter0_f_153_1463)">
              <circle cx="478" cy="287" r="79" fill="#DCFA6C" />
            </g>
            <defs>
              <filter
                id="filter0_f_153_1463"
                x="0"
                y="-191"
                width="956"
                height="956"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="199.5"
                  result="effect1_foregroundBlur_153_1463"
                />
              </filter>
            </defs>
          </svg>
          <div className="lg:mx-auto z-[100] lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
              <div>
                <div className="mt-6">
                  <h1 className="text-xl mb-2 tracking-tight text-white">
                    Metaverse Design
                  </h1>
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Shaping Virtual Realities with Revolutionary Designs
                  </h2>
                  <p className="mt-4  text-gray-200">
                    Threeway Studio is here to help you capitalise the
                    transformative potential of the Metaverse. We empower your
                    ideas by integrating cutting-edge technologies and
                    decentralisation elements into your Metaverse design,
                    unlocking the true potential of digital assets ownership,
                    user-driven economies, and seamless interactions within the
                    virtual world. Collaborating closely with you, our
                    metaversal artisans will conceptualise and bring to life a
                    virtual world that embodies your vision, while considering
                    aesthetics, user interactions, and immersive elements. We
                    invite all visionary entrepreneurs, creative individuals, &
                    forward-thinking organisations to embark on a journey of
                    limitless possibilities and start designing your own
                    Blockchain-based Virtual Realms with us.{" "}
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contactus"
                      className="inline-flex sticky z-50 rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-32 rounded-lg m-4">
              <div className=" lg:relative lg:m-0 lg:h-full lg:px-0">
                <video
                  className="w-full max-w-full"
                  src="/metaverse.mp4"
                  autoPlay={true}
                  muted
                  loop
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1085"
            height="745"
            viewBox="0 0 1085 745"
            className="max-w-full absolute left-0 z-[1]"
            fill="none"
          >
            <g filter="url(#filter0_f_153_1464)">
              <circle cx="463" cy="622" r="123" fill="#EC79F5" />
            </g>
            <defs>
              <filter
                id="filter0_f_153_1464"
                x="-159"
                y="0"
                width="1244"
                height="1244"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="249.5"
                  result="effect1_foregroundBlur_153_1464"
                />
              </filter>
            </defs>
          </svg>
          <svg
            className="max-w-full absolute right-0 top-0 z-[1]"
            xmlns="http://www.w3.org/2000/svg"
            width="663"
            height="765"
            viewBox="0 0 663 765"
            fill="none"
          >
            <g filter="url(#filter0_f_153_1463)">
              <circle cx="478" cy="287" r="79" fill="#DCFA6C" />
            </g>
            <defs>
              <filter
                id="filter0_f_153_1463"
                x="0"
                y="-191"
                width="956"
                height="956"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="199.5"
                  result="effect1_foregroundBlur_153_1463"
                />
              </filter>
            </defs>
          </svg>
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
              <div>
                <div className="mt-6">
                  <h1 className="text-xl mb-2 tracking-tight text-white">
                    Interactive Design
                  </h1>
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Crafting Engaging Experiences with Stunning Visuals
                  </h2>
                  <p className="mt-4  text-gray-200">
                    At Threeway Studio, we understand the need to go above and
                    beyond to create captivating visual designs and intuitive
                    user interfaces (UI/UX) that leave your audience in an awe.
                    Our team of artistic innovators plies a user- centered
                    approach, iterative design processes, and user testing to
                    refine and optimise the UI/UX elements, ensuring a seamless
                    and engaging experience for your users. To further enhance
                    brand consistency and streamline the design process, we
                    provide a comprehensive Brand Kit that encompasses
                    typography, color palettes, fonts, imagery, and visual
                    creatives.
                  </p>{" "}
                  <div className="mt-6">
                  <button
                      onClick={()=>{
                        setData({images:["/game/m1.jpeg","/game/m2.jpeg","/game/m3.jpeg","/game/m4.jpeg"]})
                        setOpen(true)
                      }}
                      className="inline-flex sticky z-50 rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-36">
              <div className="   lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="grid p-4 grid-cols-2 grid-rows-2 md:gap-6 gap-4 max-w-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full  lg:max-w-full"
                    src="/game/m1.jpeg"
                    alt="Customer profile user interface"
                  />
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:h-full  lg:max-w-full"
                    src="/game/m2.jpeg"
                    alt="Customer profile user interface"
                  />
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:h-full  lg:max-w-full"
                    src="/game/m3.jpeg"
                    alt="Customer profile user interface"
                  />
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:h-full  lg:max-w-full"
                    src="/game/m4.jpeg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Popimg isOpen={open} setIsOpen={setOpen} data={data}/>

        <Cta />
      </div>
    </div>
  );
};

export default page;
