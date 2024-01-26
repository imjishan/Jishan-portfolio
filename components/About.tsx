"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey there, I am Jishan, currently navigating the academic landscape while delving deep into the world of web development. My days are filled with coding adventures, where I harness the power of Next.js, React, Redux, TypeScript, Node, and Express to bring ideas to life. Crafting seamless user experiences and solving complex challenges fuel my passion for front-end development.
      </p>

      <p>
        Beyond the screen, I find my escape in the virtual realms of video games, immersing myself in captivating storylines. To maintain balance, I am equally committed to physical well-being, incorporating workouts into my routine. Join me in this journey where technology meets play, and let explore the exciting possibilities in the ever-evolving web development landscape.
      </p>
    </motion.section>
  );
}
