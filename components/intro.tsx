"use client";

import Image from "next/image";
import Jishan from "@/public/jishan.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Jishan}
              alt="Jishan Portfolio"
              quality={75}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
              delay: 0.1,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>

      {/* intro start from here */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl text-neutral-800"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Jishan.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      {/* intro end from here */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* contact */}
        <Link
          href="#contact"
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition ease-in-out"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition ease-in-out" />
        </Link>
        {/* download */}
        <a
          className="group border border-black/10 bg-white px-7 py-3 flex items-center gap-2 cursor-pointer rounded-full outline-none focus:scale-110 hover:scale-110 transition ease-in-out"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-2 transition ease-in-out" />
        </a>

        {/* linkedin */}
        <a
          href="https://www.linkedin.com/in/jishanahmed11"
          target="_blank"
          className="bg-white p-4 cursor-pointer text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </a>

        {/* github */}
        <a
          href="https://github.com/imjishan"
          target="_blank"
          className="bg-white p-4 text-gray-700 cursor-pointer flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition border border-black/10"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};
export default Intro;
