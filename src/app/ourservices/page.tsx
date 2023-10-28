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
import Cta from "@/components/Cta";
import Link from "next/link";
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
const features1 = [
  {
    name: "NFT ",
    description:
      "Dive into the infinite possibilities of digital assets with our expert NFT development services that redefine ownership in the digital world..",
    list: ["NFT Marketplace", "Music NFT ", "Gaming NFT", "Generative Art"],
    icon: InboxIcon,
  },
  {
    name: "Defi",
    list: [
      "Yield Farming ",
      "Staking",
      "Lending and Borrowing",
      " DAO Development",
    ],
    description:
      "Let's revolutionize the way people manage and grow their finances with the aid of our cutting-edge DeFi solutions, making decentralized finance accessible, secure, and lucrative.",
    icon: UsersIcon,
  },
  {
    name: "Enterprise DAPP",
    list: [
      "Supply Chain",
      "Healthcare",
      "Entertainment",
      "Carbon Credit",
      "Real Estate",
      "Real Estate",
    ],
    description:
      "Drive businesses into the future with our tailored Enterprise DAPP development, combining blockchain technology and enterprise-grade solutions for unmatched efficiency and innovation.",
    icon: TrashIcon,
  },
  {
    name: "Blockchain Development  ",
    list: [
      "BSC Solana",
      "Cardona",
      "Ethereum",
      "Polkadot",
      "Substrate",
      "Cosmos",
      "Algorand blockchain",
    ],
    description:
      "Channelize the power of blockchain with our expertise in Layer 1 and Layer 2 development, creating scalable and secure ecosystems that shape the decentralized landscape.",
    icon: PencilSquareIcon,
  },
];
const features2 = [
  {
    name: "Community Management",
    description:
      "Ignite engagement, foster loyalty, and build thriving communities with our expert community management strategies that fuel meaningful connections.",
    list: [" Discord Management", "Telegram Management"],
    icon: InboxIcon,
  },
  {
    name: "Social Media Management",
    list: [" Instagram", "FaceBook", "Twitter", "LinkedIn", "Quora"],
    description:
      "Be a trendsetter across social platforms with our dynamic social media management solutions that amplify your brand's presence and connect you with your target audience.",
    icon: UsersIcon,
  },
  {
    name: "AR Marketing",
    list: ["Instagram Filters", "Snapchat Filters", "AR Merch"],
    description:
      "Escape the ordinary and unleash the power of augmented reality with marketing strategies that captivates your audience.",
    icon: TrashIcon,
  },
  {
    name: "SEO and Content Creation ",
    list: ["Google Adwords", "Google Analytics"],
    description:
      "Boost your online visibility and captivate your audience with our powerful SEO and content creation strategies that drive organic traffic and deliver compelling, shareable experiences.",
    icon: PencilSquareIcon,
  },
];
const page = () => {
  return (
    <div>
      <main className="mx-auto mt-16 max-w-7xl px-4  sm:mt-24 lg:mt-32">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1085"
          height="745"
          viewBox="0 0 1085 745"
          className="max-w-full absolute left-0 z-[-1]"
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
          className="max-w-full absolute right-0 top-0 z-[-1]"
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
            <p className="mt-3 text-base text-gray-100 sm:mt-5  ">
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
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button
                type="button"
                className="relative block w-full overflow-hidden rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Watch our video to learn more</span>
                <video
                  className="w-full"
                  src="/aboutus.mp4"
                  autoPlay={true}
                  muted
                />
              </button>
            </div>
          </div>
        </div>
      </main>
      <section>
        <div className="py-16 md:py-24 lg:py-32  mx-auto w-full max-w-10xl px-5 md:px-10">
          <div className=" pt-0">
            <div className="backdrop-opacity-95 bg-blur-500 bg-cover mb-16  py-10 rounded-xl px-5 sm:px-12">
              <div className="grid items-center grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-20">
                <div className="flex-col flex h-full ">
                  <h2 className="font-bold text-center text-white text-3xl md:text-5xl">
                    Design/Creation
                  </h2>
                  <p className="text-white text-center mt-4 text-lg ">
                    Designs that captivate.
                  </p>
                  <div className="">
                    <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                      {features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex flex-col p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95"
                        >
                          <div>
                            {/* <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10">
                              <feature.icon
                                className="h-8 w-8 text-white"
                                aria-hidden="true"
                              />
                            </span> */}
                          </div>
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold leading-8 text-white">
                              {feature.name}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-indigo-200">
                              {feature.description}
                            </p>
                            <ul className="mt-2 list-disc mx-4">
                              {feature.list.map((item) => (
                                <li key={item} className="text-white text-lg">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* <Link
                      href="/ourservices/marketing"
                      className="my-10 cursour-pointer  text-center mx-auto bg-[#DCFA6C] text-black block rounded-lg px-3 py-2 text-base max-w-lg font-semibold leading-7  "
                    >
                      Learn More
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-16  bg-cover py-10 rounded-xl px-5 sm:px-12">
              <div className="grid items-center grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-20">
                <div className="flex-col flex h-full ">
                  <h2 className="font-bold text-center text-white text-3xl md:text-5xl">
                    Development/Engineering
                  </h2>
                  <p className="text-white text-center mt-4 text-lg ">
                    Solutions that empower.{" "}
                  </p>
                  <div className="">
                    <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                      {features1.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex flex-col p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95"
                        >
                          <div>
                            {/* <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10">
                              <feature.icon
                                className="h-8 w-8 text-white"
                                aria-hidden="true"
                              />
                            </span> */}
                          </div>
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold leading-8 text-white">
                              {feature.name}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-indigo-200">
                              {feature.description}
                            </p>
                            <ul className="mt-2 list-disc mx-4">
                              {feature.list.map((item) => (
                                <li key={item} className="text-white text-lg">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* <Link
                      href="/design"
                      className="my-10   text-center mx-auto bg-[#DCFA6C] text-black block rounded-lg px-3 py-2 text-base max-w-lg font-semibold leading-7  "
                    >
                      Learn More
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-16  bg-cover py-10 rounded-xl px-5 sm:px-12">
              <div className="grid items-center grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-20">
                <div className="flex-col flex h-full ">
                  <h2 className="font-bold text-center text-white text-3xl md:text-5xl">
                    Marketing/Outreach
                  </h2>
                  <p className="text-white text-center mt-4 text-lg ">
                    Strategies that dominate.
                  </p>
                  <div className="">
                    <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                      {features2.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex flex-col p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95"
                        >
                          <div>
                            {/* <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10">
                              <feature.icon
                                className="h-8 w-8 text-white"
                                aria-hidden="true"
                              />
                            </span> */}
                          </div>
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold leading-8 text-white">
                              {feature.name}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-indigo-200">
                              {feature.description}
                            </p>
                            <ul className="mt-2 list-disc mx-4">
                              {feature.list.map((item) => (
                                <li key={item} className="text-white text-lg">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* <Link
                      href="/design"
                      className="my-10   text-center mx-auto bg-[#DCFA6C] text-black block rounded-lg px-3 py-2 text-base max-w-lg font-semibold leading-7  "
                    >
                      Learn More
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </div>
  );
};

export default page;
