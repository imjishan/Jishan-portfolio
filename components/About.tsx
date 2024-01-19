"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-8 font-light"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
        I'm Jishan, currently navigating the academic landscape while delving
        deep into the world of web development. My days are filled with coding
        adventures, where I harness the power of{" "}
        <span className="font-semibold">
          NextJS, React, NodeJS, ExpressJS and MongoDB
        </span>{" "}
        to bring ideas to life. Crafting seamless user experiencing and solving
        complex challenges fuel my passion for web development.
      </p>
      <p>
        Beyond the screen, I find my escape in the virtual realms of video
        games, immersing myself in captivating storylines. To maintain balance,
        I'm equally committed to physical well-being, incorporating workouts
        into my routine. Join me in this journey where technology meets play,
        and let's explore the exciting possibilities in the ever-evolving web
        development landscape.
      </p>
    </motion.section>
  );
};
export default About;