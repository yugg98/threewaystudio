import React from "react";

const page = () => {
  return (
    <div>
      <div className="gradient-03 z-[-1] max-w-full md:flex hidden" />
      <div className="gradient-04 z-[-1] max-w-full md:flex hidden" />
      <div className=" mx-auto mb-8 w-full max-w-5xl text-center py-20 pb-10">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl text-white">
          Roadmap
        </h1>
        <p className="mx-auto mb-5 max-w-3xl text-sm text-gray-200 sm:text-lg md:mb-6 lg:mb-8">
          Our roadmap is a sneak peek into the magic we&apos;re creating. Let&apos;s dive
          into the milestones that will shape Mirage into something truly
          extraordinary.
        </p>
      </div>
      <div className="max-w-4xl my-8 border border-white roadmap rounded-xl md:mx-auto rounded-5xl md:p-12 p-8 mx-4">
        <p className="text-2xl font-semibold text-white">Dec 2020</p>
        <p className="text-2xl font-semibold text-white">
        The Blueprint Phase
        </p>
        <p className="text-lg my-1 text-white">Innovative Sparks Ignite ~ Charting a new path in Web2 & Web3 space</p>
        
        <p className="text-md text-white mt-2">
          April to May 2023 is our creative incubation period. We finalized
          feature requirements and sculpted the very essence of Mirage. We were
          getting people ready to witness the birth of a vision as we draft our
          metaverse strategy and set up community channels. It&apos;s wan’t just
          about features; it was about creating a movement.
        </p>
      </div>
      
    </div>
  );
};

export default page;