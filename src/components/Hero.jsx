"use client";

import { motion } from "framer-motion";

import styles from "../utils/styles";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";

const Hero = () => (
  <div>
    <section
      className={`${styles.yPaddings} sm:pl-16 pl-6 overflow-x-hidden overflow-y-hidden`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold mt-20 lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
          >
            Three Way
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center "
          >
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              Stu
            </h1>
            <div className="md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]" />
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              io
            </h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <video
            alt="hero_cover"
            autoPlay
            muted
            className="w-full md:h-[500px] lg:block hidden  h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <video
            alt="hero_cover"
            autoPlay
            muted
            className="w-full md:h-[500px]   lg:hidden block   h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          >
            <source src="/cta.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>
    </section>
    <section
      className={`${styles.paddings} relative z-10 pt-0 mt-20 max-w-7xl mx-auto`}
    >
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <p className="text-center text-white"> About Threeway Studio</p>

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-2xl text-lg text-center text-white"
        >
          <span className="font-semibold text-white">Threeway Studio</span> was
          born with the passion for innovative technology and determination to
          stay ahead of the curve. It all began in 2020, when we set out to
          create a remarkable impact with blockchain tech in real life that was
          set out to change the game for businesses everywhere. With the rapidly
          evolving landscape of Web3 Space, we aim to build something that could
          stand the test of time and serve the needs of the future of AI.
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let&apos;s{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>
      </motion.div>
    </section>
  </div>
);

export default Hero;
