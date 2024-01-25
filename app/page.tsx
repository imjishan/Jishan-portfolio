import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 sm:overflow-x-auto">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      {/* last tutorial was stop at the time 4:43:51 */}
    </main>
  );
}
