import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      {/* last tutorial was stop at the time 4:43:51 */}
    </main>
  );
}
