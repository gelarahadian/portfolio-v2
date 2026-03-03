"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

interface Project {
  type: string;
  year: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  sourceCode: string;
  image: string;
  reverse?: boolean;
}

const PROJECTS: Project[] = [
  {
    type: "E-Commerce",
    year: "2024",
    title: "Belilar",
    description:
      "A full-featured e-commerce platform built for seamless online shopping. Includes product management, cart system, secure checkout, and a clean admin dashboard.",
    stack: ["Next.js", "React", "TailwindCSS", "MongoDB"],
    url: "https://belilar.vercel.app/",
    sourceCode: "https://github.com/gelarahadian/beliar",
    image: "/preview-projects/preview-project1.png",
  },
  {
    type: "Web App",
    year: "2024",
    title: "IMDB Clone",
    reverse: true,
    description:
      "A feature-rich movie discovery platform with real-time data from the TMDB API. Browse trending films, search by genre, and save your watchlist.",
    stack: ["Next.js", "React", "TailwindCSS", "MongoDB"],
    url: "https://imdb-clone-gelar.vercel.app/",
    sourceCode: "https://github.com/gelarahadian/imdb-clone-gelar",
    image: "/preview-projects/preview-project2.png",
  },
  {
    type: "AI Chat Text Generation",
    year: "2026",
    title: "ChatAI",
    description:
      "ChatAI is a text generation AI chatbot built with Next.js and OpenAI. It allows users to interact with AI-powered chatbots and generate text-based responses.",
    stack: ["Next.js", "React", "TailwindCSS", "OpenAI"],
    url: "https://www.chatai.my.id/",
    sourceCode: "https://github.com/gelarahadian/chatai-gelar",
    image: "/preview-projects/preview-project6.png",
  },
  {
    type: "Web App",
    year: "2024",
    title: "Airbnb Clone",
    reverse: true,
    description:
      "A rental marketplace clone featuring property listings, map integration, filtering, and a responsive booking interface that mirrors the Airbnb experience.",
    stack: ["Next.js", "React", "TailwindCSS", "JavaScript"],
    url: "https://airbnb-gelar.vercel.app/",
    sourceCode: "https://github.com/gelarahadian/airbnb-gelar",
    image: "/preview-projects/preview-project5.png",
  },
];

const SMALL_PROJECTS: Project[] = [
  {
    type: "Landing Page", year: "2024", title: "Healthacare",
    description:
      "Modern healthcare landing page with smooth animations and clean, conversion-focused design.",
    stack: ["Next.js", "React", "TailwindCSS"],
    url: "https://gelarahadian-v1.vercel.app/healthcare",
    sourceCode: "https://github.com/gelarahadian/portfolio-v1",
    image: "/preview-projects/preview-project3.png",
  },
  {
    type: "Landing Page", year: "2023", title: "Red Store",
    description:
      "A vibrant product landing page built with HTML & CSS, demonstrating strong fundamentals in semantic structure and responsive design.",
    stack: ["HTML5", "CSS3"],
    url: "https://gelarahadian.github.io/redstore/",
    sourceCode: "https://github.com/gelarahadian/redstore",
    image: "/preview-projects/preview-project4.png",
  },
];

export default function Projects() {
  useReveal();

  return (
    <section id="projects" className="py-36">
      <div className="max-w-6xl mx-auto px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between
                        items-start md:items-end gap-10 mb-20">
          <div>
            <p className="section-label reveal">Selected Work</p>
            <h2 className="reveal reveal-d1 text-[clamp(36px,4vw,56px)] font-bold
                           leading-[1.05] tracking-tight max-w-[560px]">
              Projects that<br />make an impact.
            </h2>
          </div>
          <p className="reveal reveal-d2 text-subtle text-base leading-[1.7]
                        font-light max-w-xs">
            A curated selection of projects I&apos;ve built — from e-commerce platforms
            to complex web applications. Each one crafted with care.
          </p>
        </div>

        {/* Large cards */}
        <div className="flex flex-col gap-0.5">
          {PROJECTS.map((p, i) => (
            <LargeCard key={p.title} project={p} delay={i} />
          ))}

          {/* 2-col small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
            {SMALL_PROJECTS.map((p, i) => (
              <SmallCard key={p.title} project={p} delay={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Large card ─── */
function LargeCard({ project: p, delay }: { project: Project; delay: number }) {
  return (
    <div
      className={`reveal reveal-d${delay}
                  bg-surface hover:bg-surface2 transition-colors duration-300
                  rounded-[20px] overflow-hidden
                  grid grid-cols-1 md:grid-cols-2
                  ${p.reverse ? "md:[direction:rtl]" : ""}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10] bg-bg md:[direction:ltr]">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500
                     hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="p-8 md:p-12 flex flex-col justify-between md:[direction:ltr]">
        <div>
          <div className="flex items-center justify-between mb-5">
            <span className="project-type-badge">{p.type}</span>
            <span className="text-[13px] text-muted">{p.year}</span>
          </div>
          <h3 className="text-[clamp(24px,3vw,40px)] font-bold leading-[1.1]
                         tracking-tight mb-4">
            {p.title}
          </h3>
          <p className="text-subtle text-[15px] leading-[1.7] font-light">
            {p.description}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-1.5 mt-6 mb-8">
            {p.stack.map((t) => <span key={t} className="stack-tag">{t}</span>)}
          </div>
          <div className="flex gap-3">
            <a href={p.url}        target="_blank" rel="noreferrer" className="project-link-primary">Live Demo ↗</a>
            <a href={p.sourceCode} target="_blank" rel="noreferrer" className="project-link-ghost">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Small card ─── */
function SmallCard({ project: p, delay }: { project: Project; delay: number }) {
  return (
    <div
      className={`reveal reveal-d${delay} rounded-[16px] overflow-hidden flex flex-col transition-colors duration-300`}
      style={{ background: "#111111" }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#181818")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#111111")}
    >
      <div className="relative aspect-video overflow-hidden bg-bg">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="project-type-badge">{p.type}</span>
          <span className="text-xs text-muted">{p.year}</span>
        </div>
        <h3 className="text-[22px] font-bold leading-[1.1] tracking-tight mb-2.5">
          {p.title}
        </h3>
        <p className="text-subtle text-sm leading-[1.7] font-light flex-1 mb-5">
          {p.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.stack.map((t) => <span key={t} className="stack-tag">{t}</span>)}
        </div>
        <div className="flex gap-2.5">
          <a href={p.url}        target="_blank" rel="noreferrer" className="project-link-primary">Live Demo ↗</a>
          <a href={p.sourceCode} target="_blank" rel="noreferrer" className="project-link-ghost">GitHub</a>
        </div>
      </div>
    </div>
  );
}
