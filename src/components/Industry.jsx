"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Industries = () => {
  return (
    <div id="industries" className="py-12 w-[90%] mx-auto xl:w-full">
      <p className="text-5xl font-semibold text-center text-white">
        Our Industry
      </p>
      <p className="text-lg text-center text-white my-4 mb-16">
        Threeway Studio unleashes potential through tailored Web3 solutions
        across diverse Industries
      </p>

      <div className="rounded  hover:text-white-0 !px-0">
        <div className="grid lg:grid-cols-2 grid-row-reverse">
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-3 overflow-hidden">
              {/* <div> */}
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/Education.svg"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="icon1"
                />
                <p className="my-4 text-gray-300  font-medium  truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  Education
                </p>
              </div>
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/Finance.svg"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="icon1"
                />
                <p className="my-4 text-gray-300  font-medium  truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  Banking & Finance
                </p>
              </div>
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/Healthcare.svg"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="icon1"
                />
                <p className="my-4 text-gray-300  font-medium  truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  Healthcare & Insurance
                </p>
              </div>
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/advertise.png"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="icon1"
                />
                <p className="my-4 text-gray-300  font-medium truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  Advertising
                </p>
              </div>
              {/* </div> */}
              {/* <div> */}
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/Logistics.svg"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="icon1"
                />
                <p className="my-4 text-gray-300  font-medium  truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  Logistics
                </p>
              </div>
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/defence.png"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="icon1"
                />
                <p className="my-4 text-gray-300  font-medium  truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  Defence
                </p>
              </div>
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/Media.svg"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="icon1"
                />
                <p className="my-4 text-gray-300  font-medium  truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  Art & Entertainment
                </p>
              </div>
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/carbonm.png"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="Carbon Market"
                />
                <p className="my-4 text-gray-300  font-medium  truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  Carbon Market
                </p>
              </div>
              {/* </div> */}
              {/* <div> */}
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/RealEstate.svg"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="icon1"
                />
                <p className="my-4 text-gray-300  font-medium  truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  RealEstate
                </p>
              </div>
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/Retail.svg"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="icon1"
                />
                <p className="my-4 text-gray-300  font-medium  truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  E-Commerce
                </p>
              </div>
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/Travel.svg"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="icon1"
                />
                <p className="my-4 text-gray-300  font-medium  truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  Automobile
                </p>
              </div>
              <div className="rounded  hover:text-white flex hover:bg-[#4AAC6120]  group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                <Image
                  width={200}
                  height={200}
                  src="/logo/vote.png"
                  className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"
                  alt="icon1"
                />
                <p className="my-4 text-gray-300  font-medium  truncate md:w-full w-[90%] text-center text-sm group-hover:scale-110 transition-all duration-150 ease-in-out">
                  Voting & Governance
                </p>
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="flex flex-col justify-center px-10 my-12">
            <div>
              <h2 className="text-4xl font-lg font-dmserif tracking-tight text-white font-semibold sm:text-5xl">
                Crafting Customized Blockchain Solutions for Specific Industry
                Challenges
              </h2>

              <p className="md:text-md mt-4 hover:text-white text-gray-400">
                Our skilled team works intimately with clients, gaining a deep
                understanding of their specific challenges and goals. This
                collaborative approach enables us to revolutionize industries
                with custom, scalable, and effective blockchain solutions,
                crafted to meet the unique requirements of each sector.
              </p>
			  <a target="_blank" href="https://calendly.com/threeway-studio/blockchain-consultation" className="flex text-center w-full rounded-full py-2 flex justify-center my-4 font-semibold text-white bg-green-600">Get Started</a>
            </div>
            <div>
              <div className="mt-4">
                <button
                  className="wpfull"
                  display="flex"
                  link="#"
                  text="Get Started"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
