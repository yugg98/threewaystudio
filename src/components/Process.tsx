import React from "react";

const Process = () => {
  return (
    <div>
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
          <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3">
            <div className=" p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <img
                src="https://uploads-ssl.webflow.com/646603af5972c5339c9b35dc/64663583770995fe70444fa9_Circle%20Image.svg"
                alt=""
                className="inline-block h-16"
              />
              <p className="text-xl text-white font-semibold mt-8">Process</p>
              <p className="text-sm text-white mt-4">
              We have a well-designed 8-step process to ensure measurable progress for your idea.
              </p>
            </div>
            <div className=" p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <img
                src="https://uploads-ssl.webflow.com/646603af5972c5339c9b35dc/64663583770995fe70444fa9_Circle%20Image.svg"
                alt=""
                className="inline-block h-16"
              />
              <p className="text-xl text-white font-semibold mt-8">System</p>
              <p className="text-sm text-white mt-4">
              Our experiences in creating robust blockchain solutions will save you time and avoid mistakes.
              </p>
            </div>
            <div className=" p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <img
                src="https://uploads-ssl.webflow.com/646603af5972c5339c9b35dc/64663583770995fe70444fa9_Circle%20Image.svg"
                alt=""
                className="inline-block h-16"
              />
              <p className="text-xl text-white font-semibold mt-8">People</p>
              <p className="text-sm text-white mt-4">
              Working with our smart and efficient digital digeratis will reduce your project risk and uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
