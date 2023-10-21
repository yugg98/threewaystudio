import Process from "@/components/Process";
import React from "react";

const page = () => {
  return (
    <div>
      <Process />
      <div>
        <h1 className="mb-4 mt-6 text-2xl text-center text-white font-bold md:text-5xl">
          Our Process
        </h1>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-8">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="max-w-[720px]">
              <h3 className="mb-4 mt-6 text-2xl text-white font-bold md:text-3xl">
              Onboard
              </h3>
              <p className="mb-6 max-w-[480px] text-white md:mb-10 lg:mb-12">
              We begin with the initial ideas via rigorous interviews and sprint planning to turn your concept into unique ideas.
              </p>
              <a
                href="#"
                className="inline-block rounded-lg border border-solid border-[#6B21A8] bg-[#6B21A8] px-6 py-4 text-white text-center font-bold text-black transition hover:border-black hover:bg-white"
              >
                Contact us
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a275_Rectangle%2093.png"
                alt="Features Image"
                className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-8">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div>
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a275_Rectangle%2093.png"
                alt="Features Image"
                className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
              />
            </div>
            <div className="max-w-[720px]">
              <h3 className="mb-4 mt-6 text-2xl text-white font-bold md:text-3xl">
              Strategise
              </h3>
              <p className="mb-6 max-w-[480px] text-white md:mb-10 lg:mb-12">
              Here we focus on dissecting the original idea and realizing it into a feasible & scalable product after conducting extensive research on market opportunities, risks, and constraints.
              </p>
              <a
                href="#"
                className="inline-block rounded-lg border border-solid border-[#6B21A8] bg-[#6B21A8] px-6 py-4 text-white text-center font-bold text-black transition hover:border-black hover:bg-white"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
