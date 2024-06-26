"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const Ourclients = () => {
  return (
    <div id="partner">
      <div className="mx-auto mb-8 px-6 lg:px-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 className="mb-4 mt-6 text-3xl font-extrabold text-white md:text-5xl">
          Our Clients and Partners
        </h2>
        <p className="mx-auto mt-4 max-w-[528px] text-white">
          We’ve collaborated and helped many companies succeed in the
          <span className="text-purple-400 font-bold"> Web3.0 </span>space
        </p>
      </div>
      <div>
        <div className="pt-10">
          <Marquee pauseOnHover>
            <Link href="https://www.startshorts.com/">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="https://www.startshorts.com/_next/static/media/logo.dae52ec8.png"
                className="mx-12 invert  w-24"
              />
            </Link>
            <Link href="https://www.aarohanagro.com/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo.png"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://www.linkedin.com/company/craterclub/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo9.jfif"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://www.cryptocapable.community/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo10.jpg"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://twitter.com/mydesicrypto?s=11&t=yfkLzBNkr_sK4Uy0Vhnf6A">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo12.jpg"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://krida.fans/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo13.png"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://www.lmnl.app/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo30.png"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://finance.yahoo.com/news/w3wc-dubai-event-where-visionaries-134500078.html">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="            data:image/png;base64,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
"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://metakeep.xyz/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo31.png"
                className="mx-12 w-24 invert"
              />
            </Link>
            <Link href="https://www.gearfi.in/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo32.png"
                className="mx-12 w-24 invert"
              />
            </Link>
            <Link href="https://komet.me/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo33.svg"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://bnest.in/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo35.png"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://www.chillinq.com/">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src=" https://www.chillinq.com/chillinq.svg"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://www.mirchmedia.com">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src=" https://www.mirchmedia.com/images/logo.png"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://www.linkedin.com/company/atpatafood/">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src=" https://media.licdn.com/dms/image/C560BAQEkiO91oNM5-w/company-logo_200_200/0/1679292038491?e=1725494400&v=beta&t=MYdkUAs7TQee6Icmp-jlUuzxLSGGSt4LoSImtlkzvQ8"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://www.giakaa.com/">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/hi.jpeg"
                className="mx-12 w-24 "
              />
            </Link>
          </Marquee>
        </div>
        <div className=" my-8">
          <Marquee className="grid gap-x-8" direction="right" pauseOnHover>
            <Link href="http://artfi.world/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo2.jpg"
                className="mx-12   w-24"
              />
            </Link>
            <Link href="https://twitter.com/being_bunnynft?s=11&t=OAdTUG46erbkk5y-w6yT0w">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo3.jpg"
                className="mx-12   w-24"
              />
            </Link>
            <Link href="http://www.blockwee.com/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo4.jpg"
                className="mx-12   w-24"
              />
            </Link>
            <Link href="https://www.buidlup.io/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo5.jpg"
                className="mx-12   w-24"
              />
            </Link>
            <Link href="https://cafeyoda.com/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo6.webp"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://www.codeate.in/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo7.jfif"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://www.metakraft.live/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo24.svg"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://zeltalabs.com/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo25.webp"
                className="mx-12  w-24"
              />
            </Link>

            <Link href="https://www.jumbochain.org">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="https://www.jumbochain.org/images/logo.svg"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://www.5ire.org/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo26.svg"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://trikon.io/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo27.svg"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://www.usdao.io/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo28.svg"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://engage.isaca.org/newdelhichapter/home">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo36.svg"
                className="mx-12 invert  w-24"
              />
            </Link>
            <Link href="https://foundershiphq.com/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo38.svg"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://www.zeeve.io/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo39.svg"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://copperx.io/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo40.svg"
                className="mx-12 invert w-24"
              />
            </Link>
            <Link href="https://app.social3.club/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo41.svg"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://solidityscan.com/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo42.png"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://securedapp.io/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo43.svg"
                className="mx-12  w-24"
              />
            </Link>
          </Marquee>
        </div>
        <div className="">
          <Marquee className="grid gap-x-8" pauseOnHover>
            <Link href="https://mundum.com/">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="https://mundum.com/images/1C715DFE-043E-48DF-B21A-00FA5EE09945-p-500.png"
                className="mx-12  w-24"
              />
            </Link>

            <Link href="https://into-the-verse-frontend-mu.vercel.app/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo47.jpeg"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://www.peoplesmediacollege.com/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo15.webp"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://audits.quillhash.com/smart-contract-audit">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo16.png"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="#">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo17.jpg"
                className="mx-12 w-24 "
              />
            </Link>
            <Image
              width={200}
              alt="Logos"
              loading="lazy"
              height={200}
              src="/logos/logo18.png"
              className="mx-12 w-24 "
            />
            <Image
              width={200}
              alt="Logos"
              loading="lazy"
              height={200}
              src="/logos/logo21.jpeg"
              className="mx-12 w-24 "
            />
            <Link href="https://www.strv.network/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo22.png"
                className="mx-12 w-24 "
              />
            </Link>
            <Link href="https://keploy.io/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo29.svg"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://marytachibananft.medium.com/official-partnership-announcement-mary-tachibana-x-threeway-studio-ae2b7492c26b">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo37.jpeg"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://metamerch.store/">
              <svg
                className="invert"
                width="50"
                height="50"
                viewBox="0 0 775 617"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 462.476C275.121 631.081 487.057 634.23 760.773 462.476"
                  stroke="black"
                  stroke-width="53.3333"
                  stroke-miterlimit="10"
                />
                <path
                  d="M26.9004 282.72L63.0551 86.0864L182.342 328.149L304.326 77.9184L384.543 382.665L462.702 75.9997L594.276 328.149L711.272 85.3144L748.754 281.954"
                  stroke="black"
                  stroke-width="53.3333"
                  stroke-miterlimit="10"
                />
              </svg>
            </Link>
            <Link href="https://www.rivametaverse.io//">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo44.png"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://www.hashcase.co/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo45.webp"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://www.befikracommunity.in/">
              <Image
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/logos/logo46.png"
                className="mx-12  w-24"
              />
            </Link>

            <Link href="https://vaeral.com/">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src=" https://vaeral.com/wp-content/uploads/2023/07/image_2023-07-10_203328829.png"
                className="mx-12  w-24"
              />
            </Link>

            <Link href="https://mansaconsulting.xyz/">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="https://mansaconsulting.xyz/wp-content/uploads/2023/08/cropped-mansa_vis_card-removebg-preview.png"
                className="mx-12  w-24"
              />
            </Link>
            <Link href="https://reworks.in/">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="/reworks.png"
                className="mx-12  w-24"
              />
            </Link>

            <Link href="https://pageantparadise.com/">
              <img
                width={200}
                alt="Logos"
                loading="lazy"
                height={200}
                src="https://pageantparadise.com/wp-content/uploads/2024/02/cropped-pegeant_16-1.png"
                className="mx-12  w-24"
              />
            </Link>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default Ourclients;
