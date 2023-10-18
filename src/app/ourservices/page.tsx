import React from "react";
import {
  ArrowUturnLeftIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  TrashIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
const features = [
  {
    name: "NFT Artwork",
    description:
      "Unveil the digital canvas with us and create a piece of the future with our mesmerising NFT Artwork that blurs the line between imagination and reality.",
    list: [" NFT Collection Artwork", "2D Artwork", "3D Artwork"],
    icon: InboxIcon,
  },
  {
    name: "Game Design",
    list: [" NFT Collection Artwork", "2D Artwork", "3D Artwork"],
    description:
      "Level up your gaming journey with our game design expertise, where pixels come alive and thrilling adventures await at every virtual turn.",
    icon: UsersIcon,
  },
  {
    name: "Metaverse",
    list: [" NFT Collection Artwork", "2D Artwork", "3D Artwork"],
    description:
      "Step into a boundless universe of immersive experiences with our Metaverse Design & Development service, where virtual realms become vibrant extensions of your dreams.",
    icon: TrashIcon,
  },
  {
    name: "Interactive Design ",
    list: [" NFT Collection Artwork", "2D Artwork", "3D Artwork"],
    description:
      "Ignite your user’s senses with our visually stunning interfaces and elevate user experiences to new heights through intuitive design that leaves a lasting impression.",
    icon: PencilSquareIcon,
  },
];

const page = () => {
  return (
    <div>
      <main className="mx-auto mt-16 max-w-7xl px-4 px-6 sm:mt-24 lg:mt-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                <span className="block text-white">
                  {" "}
                  Step into a World of Extraordinary Services
                </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Be a part of 2.86 Bn+ dollar Web3 industry with Threeway Studio’s
              expertise in Creation, Engineering and Outreach. <br /> <br /> We
              are here to Empower the Web 3 Evolution by Facilitating Disruptive
              Blockchain Solutions to Catalyse a Decentralised Future. <br />{" "}
              <br /> Threeway Studio offers comprehensive Web3 services that
              help you leverage leading-edge technology to resolve industry
              problems and create innovative products.
            </p>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <svg
              className="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
              width={640}
              height={784}
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x={118}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                y={72}
                width={640}
                height={640}
                className="text-gray-50"
                fill="currentColor"
              />
              <rect
                x={118}
                width={404}
                height={784}
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button
                type="button"
                className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Watch our video to learn more</span>
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                />
                <span
                  className="absolute inset-0 flex h-full w-full items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="h-20 w-20 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <section>
        <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="relative pt-60">
            <div className="sticky bottom-60 z-[3] -mt-48 mb-36 bg-gray-900 py-10 rounded-xl px-5 sm:px-12">
              <div className="grid items-center grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-20">
                <div className="flex-col flex h-full ">
                  <h2 className="font-bold text-white text-3xl md:text-5xl">
                    Design/Creation
                  </h2>
                  <p className="text-white mt-4 text-lg ">
                    Designs that captivate.
                  </p>
                  <div className="">
                    <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                      {features.map((feature) => (
                        <div key={feature.name}>
                          <div>
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10">
                              <feature.icon
                                className="h-8 w-8 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold leading-8 text-white">
                              {feature.name}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-indigo-200">
                              {feature.description}
                            </p>
                            <ul className="mt-2 list-disc mx-4" >
                            {feature.list.map((item) => (
                                
                                <li key={item} className="text-white text-lg">{item}</li>
                               
                            ))}
                             </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-36 top-auto z-[2] -mt-24 mb-12 bg-gray-900 py-10 rounded-xl px-5 sm:px-12">
            <div className="grid items-center grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-20">
                <div className="flex-col flex h-full ">
                  <h2 className="font-bold text-white text-3xl md:text-5xl">
                    Design/Creation
                  </h2>
                  <p className="text-white mt-4 text-lg ">
                    Designs that captivate.
                  </p>
                  <div className="">
                    <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                      {features.map((feature) => (
                        <div key={feature.name}>
                          <div>
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10">
                              <feature.icon
                                className="h-8 w-8 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold leading-8 text-white">
                              {feature.name}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-indigo-200">
                              {feature.description}
                            </p>
                            <ul className="mt-2 list-disc mx-4" >
                            {feature.list.map((item) => (

                                <li key={item} className="text-white text-lg">{item}</li>
                            ))}
                             </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  </div>
                </div>
            </div>
            <div className="sticky bottom-12 top-auto mb-12 bg-gray-900 py-10 rounded-xl px-5 sm:px-12">
            <div className="grid items-center grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-20">
                <div className="flex-col flex h-full ">
                  <h2 className="font-bold text-white text-3xl md:text-5xl">
                    Design/Creation
                  </h2>
                  <p className="text-white mt-4 text-lg ">
                    Designs that captivate.
                  </p>
                  <div className="">
                    <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                      {features.map((feature) => (
                        <div key={feature.name}>
                          <div>
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10">
                              <feature.icon
                                className="h-8 w-8 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold leading-8 text-white">
                              {feature.name}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-indigo-200">
                              {feature.description}
                            </p>
                            <ul className="mt-2 list-disc mx-4" >
                            {feature.list.map((item) => (
                                
                                <li key={item} className="text-white text-lg">{item}</li>
                               
                            ))}
                             </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
