import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School",
    location: "Assam, India",
    description:
      "I Completed my High School in science stream from Gurucharan college, Silchar",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Graduation, Computer Application",
    location: "Guwahati, Assam, India",
    description:
      "Currently pursuing my graduation in Bachelor's in Computer Application from Krishna Kanta Handiqui State Open University, Guwahati",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2027",
  },
  {
    title: "Full-Stack Developer",
    location: "Assam, India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Daily Bloghunter",
    description:
      "A Blog App for People to share their knowledge, built using MERN stack with a touch of Tailwind and cool features like notification system, modern editor and much more.",
    tags: ["React", "Tailwind", "NodeJS", "ExpressJS", "MongoDB"],
    imageUrl: project2,
  },
  {
    title: "Hilink",
    description:
      "Responsive Travel Website, Built a feature-rich travel app using NextJS 14 and Tailwind CSS, covering everything from a sleek UI to mobile-first best practices.",
    tags: ["React", "Next.js", "Tailwind", "Typescript"],
    imageUrl: project1,
  },
  {
    title: "Portfolio",
    description:
      "A Personal Portfolio to showcase my projects and skills, built using NextJS, Typescript, Tailwind CSS and Framer Motion for cool animations.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Framer Motion"],
    imageUrl: project3,
  },
] as const;

export const skillsData = [
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Express",
  "Node.js",
  "MongoDB",
  "Linux",
  "HTML",
  "Framer Motion",
  "CSS",
  "GSAP",
  "Tailwind",
  "Git",
  "Photoshop",
  "Excel",
  "Canva",
] as const;
