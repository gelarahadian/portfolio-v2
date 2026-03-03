import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeBanner />
      <About />
      <div className="divider h-8" />
      <Skills />
      <div className="divider" />
      <Projects />
      <Contact />
    </main>
  );
}
