"use client";
import React, { use } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
const HeroConttent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 gap-20 mt-40 w-full z-[20] "
    >
      <div className="flex flex-col h-full w-full m-auto text-start justify-center gap-5">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-2 border border-[#7042F88B] opacity-[0.9] flex gap-2 items-center justify-center"
        >
          <SparklesIcon className="text-[#7042F8] w-5 h-5" />
          <h1 className="Welcome-text text-[13px]">Full Stack Developer</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-5 text-6xl font-semibold text-[#ffff]  max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e59cff] to-[#9cb2ff]">
              {" "}
              the best
            </span>
          </span>
          <span>project exprience</span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] w-auto h-auto"
        >
          i'am a full stack developer with 3 years of experience in web
          development. i have a passion for creating beautiful and functional
          websites and applications.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(0.9)}
          className="py-2 button-primary text-center max-w-[200px] w-auto h-auto rounded-full  hover:text-white "
        >
          Leatn More
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex w-full h-full items-center justify-center"
      >
        <Image src="/mainIconsdark.svg" alt="hero" width={650} height={650} />
      </motion.div>
    </motion.div>
  );
};

export default HeroConttent;
