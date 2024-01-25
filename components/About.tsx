"use client";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-8 font-light scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4 text-gray-800">
        I'm Jishan, currently navigating the academic landscape while delving
        deep into the world of web development. My days are filled with coding
        adventures, where I harness the power of{" "}
        <span className="font-semibold">
          NextJS, React, NodeJS, ExpressJS and MongoDB
        </span>{" "}
        to bring ideas to life. Crafting seamless user experiencing and solving
        complex challenges fuel my passion for web development.
      </p>
      <p className="text-gray-800">
        Beyond the screen, I find my escape in the virtual realms of video
        games, immersing myself in captivating storylines. To maintain balance,
        I'm equally committed to physical well-being, incorporating workouts
        into my routine. Join me in this journey where technology meets play,
        and let's explore the exciting possibilities in the ever-evolving web
        development landscape.
      </p>
    </section>
  );
};
export default About;
