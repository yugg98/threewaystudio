"use client";

import { useState } from "react";
import Cta from "@/components/Cta";


const stats = [
  { label: "Underpaid employees", value: "30+" },
  { label: "Placated clients  ", value: "50+" },
];



export default function Abotuus() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <main className="isolate ">
        <div className="relative isolate -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="486"
            height="788"
            viewBox="0 0 486 788"
            fill="none"
            className="absolute right-0 max-w-full"
          >
            <g filter="url(#filter0_f_142_358)">
              <circle cx="485.5" cy="316.5" r="86.5" fill="#DCFA6C" />
            </g>
            <defs>
              <filter
                id="filter0_f_142_358"
                x="0"
                y="-169"
                width="971"
                height="971"
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
                  result="effect1_foregroundBlur_142_358"
                />
              </filter>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 max-w-full"
            width="622"
            height="788"
            viewBox="0 0 622 788"
            fill="none"
          >
            <g filter="url(#filter0_f_142_371)">
              <circle cy="474" r="123" fill="#EC79F5" />
            </g>
            <defs>
              <filter
                id="filter0_f_142_371"
                x="-622"
                y="-148"
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
                  result="effect1_foregroundBlur_142_371"
                />
              </filter>
            </defs>
          </svg>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
                    Hello Tech Savvy Maestros,
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-200 sm:max-w-md lg:max-w-none">
                    We&apos;re Threeway Studio, A creative GaaS & BaaS (Growth &
                    Blockchain as a Service Company) focused on Creation,
                    Engineering & Outreach!
                    <br />
                    <br />
                    We are on Mission to Ignite Change, Empower Patrons, and
                    Shape a New Era of Innovation, Security, and Trust in the
                    Blockchain Arena.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="img5.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/img.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                       src="/img2.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="img3.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="img4.jpeg"
                        alt=""
                        className="aspect-[6/6] w-[30]  rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto  -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-200">
                  From Tech Enthusiasts to Tech-Solutions Venture, we&apos;ve
                  come a long way in building the Threeway Studio.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-200">
                  <p>
                    Threeway Studio was born with the passion for innovative
                    technology and determination to stay ahead of the curve. It
                    all began in 2020, when we set out to create a remarkable
                    impact with blockchain tech in real life that was set out to
                    change the game for businesses everywhere. With the rapidly
                    evolving landscape of Web3 Space, we aim to build something
                    that could stand the test of time and serve the needs of the
                    future of AI.
                  </p>
                  <p className="mt-10">
                    5+ years of being in business and we&apos;ve already helped
                    many businesses across various domains to step into the web3
                    world and to expedite their business growth with our
                    expertise in design, development and marketing of everything
                    Web3.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-200">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-white">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <ol className="md:grid grid-cols-4 grid-rows-2 mt-16">
            <li className="relative mb-6 sm:mb-0 ">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8 p-6 ing-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-full cursor-pointer hover:scale-95">
                <h3 className="text-lg font-semibold text-white">Dec 2020</h3>

                <p className="text-base mt-2 font-normal text-gray-500 dark:text-gray-400">
                  Innovative Sparks Ignite ~ Charting a new path in Web 2 & Web3
                  space
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 ">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8 p-6 ing-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-full cursor-pointer hover:scale-95">
                <h3 className="text-lg font-semibold  text-white">
                  Game Began
                </h3>

                <p className="text-base mt-2 font-normal text-gray-500 dark:text-gray-400">
                  A Fusion of Tech and Strategy Forging into Unstoppable
                  Reality! space
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 ">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8 p-6 ing-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-full cursor-pointer hover:scale-95">
                <h3 className="text-lg font-semibold  text-white">
                  Empowering Businesses{" "}
                </h3>

                <p className="text-base mt-2 font-normal text-gray-500 dark:text-gray-400">
                  Realising the true potential of Web2 into Web3 and optimising
                  business operations.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 ">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8 p-6 ing-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-full cursor-pointer hover:scale-95">
                <h3 className="text-lg font-semibold  text-white">
                  February 2020
                </h3>

                <p className="text-base mt-2 font-normal text-gray-500 dark:text-gray-400">
                  Uniting Forces ~ Threeway Studio Emerges as a Creative
                  Development Studio
                </p>
              </div>
            </li>
            <div className="md:grid grid-cols-4 col-span-4 ">
              <li className="relative mb-6 sm:mb-0 ">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8 p-6 ing-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-full cursor-pointer hover:scale-95">
                  <h3 className="text-lg font-semibold  text-white">
                    Team Growth
                  </h3>

                  <p className="text-base mt-2 font-normal text-gray-500 dark:text-gray-400">
                    From Seeds to Forest ~ Threeway Studio&apos;s Team
                    Flourishes from 1 to 25+ members
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0 ">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8 p-6 ing-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-full cursor-pointer hover:scale-95">
                  <h3 className="text-lg font-semibold  text-white">
                    November 2022
                  </h3>

                  <p className="text-base mt-2 font-normal text-gray-500 dark:text-gray-400">
                    Unveiling the Artistry Revolution: Beginning the journey of
                    blockchain excellence
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0 ">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8 p-6 ing-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-full cursor-pointer hover:scale-95">
                  <h3 className="text-lg font-semibold  text-white">
                    Enriching our client
                  </h3>

                  <p className="text-base mt-2 font-normal text-gray-500 dark:text-gray-400">
                    January 2023 marks the milestone of expanding our client
                    base
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0 ">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8 p-6 ing-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-full cursor-pointer hover:scale-95">
                  <h3 className="text-lg font-semibold  text-white">
                    August 2023{" "}
                  </h3>

                  <p className="text-base mt-2 font-normal text-gray-500 dark:text-gray-400">
                    Academy welcomes Web3 enthusiasts, embarks on educational
                    mission.
                  </p>
                </div>
              </li>
            </div>
          </ol>
        </div>

        {/* Image section */}

        <div className="mx-auto my-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What makes us different?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We&apos;re a team of dedicated, enthusiastic, passionate & tech -
              savvy Decentralised Digeratis, who relish pushing the boundaries
              of what&apos;s possible. Since many years, we&apos;re working
              beyond the horizon to help individuals and businesses make the
              leap from the old, traditional Web2 framework to the
              groundbreaking new world of Web3. With our budding knowledge &
              wealth of experience in all things blockchain, we&apos;re the ones
              to trust when it comes to making the transition as seamless and
              effortless as possible.
            </p>
          </div>
        </div>
        <p className="text-5xl text-white text-center my-24">Our Clientle</p>
        <div className="relative my-24  flex w-full h-[550px]">
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-30 right-60 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-40 right-[460px] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-80 left-60 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </div>
        </div>
        <Cta />
      </main>
    </>
  );
}
