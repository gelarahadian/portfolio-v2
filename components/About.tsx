"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const TAGS = [
  "Problem Solver",
  "Detail-Oriented",
  "Performance Focused",
  "Clean Code",
  "Team Player",
];

export default function About() {
  useReveal();

  return (
    <section id="about" className="py-36 relative">
      <div className="max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* ── Image column ── */}
          <div className="reveal relative">
            {/* Decorative badge */}
            <div
              className="absolute -top-5 -right-5 z-10 w-[120px] h-[120px]
                            border border-line bg-surface2 rounded-[20px]
                            flex flex-col items-center justify-center
                            font-display text-[11px] font-semibold uppercase
                            tracking-[0.1em] text-muted text-center"
            >
              <span className="block text-[36px] font-extrabold text-accent leading-none">
                4+
              </span>
              Years of
              <br />
              Experience
            </div>

            {/* Photo */}
            <div className="relative rounded-[20px] overflow-hidden aspect-[4/5] bg-surface">
              <Image
                src="/gelar_photo.png"
                alt="Gelar Rahadian Fajar"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover object-top grayscale-[20%]
                           hover:grayscale-0 hover:scale-[1.03]
                           transition-all duration-500"
              />
            </div>

            {/* Availability badge */}
            <div
              className="absolute bottom-6 left-6
                            flex items-center gap-2.5
                            bg-bg/85 backdrop-blur-xl
                            border border-lineLight rounded-xl px-4 py-3"
            >
              <span
                className="w-2 h-2 bg-green-400 rounded-full"
                style={{ animation: "blink 2s infinite" }}
              />
              <span className="text-[13px] font-medium text-tx">
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* ── Content column ── */}
          <div>
            <p className="section-label reveal">About Me</p>

            <h2
              className="reveal reveal-d1 text-[clamp(36px,4vw,56px)] font-bold
                           leading-[1.05] tracking-tight mb-7"
            >
              Building the web,
              <br />
              one <span className="text-accent">pixel</span> at a time.
            </h2>

            <p
              className="reveal reveal-d2 text-subtle text-[17px] leading-[1.75]
                          font-light mb-5"
            >
              Hi, I&apos;m{" "}
              <strong className="text-tx font-medium">
                Gelar Rahadian Fajar
              </strong>{" "}
              — a full-stack developer based in Indonesia with 4+ years of
              experience crafting web applications that don&apos;t just work,
              they leave an impression.
            </p>

            <p
              className="reveal reveal-d3 text-subtle text-[17px] leading-[1.75]
                          font-light mb-5"
            >
              My focus is on the intersection of{" "}
              <strong className="text-tx font-medium">clean code</strong> and{" "}
              <strong className="text-tx font-medium">thoughtful design</strong>
              . I specialize in React and Next.js ecosystems, building
              everything from sleek landing pages to complex web applications
              with real users and real stakes.
            </p>

            <p
              className="reveal reveal-d3 text-subtle text-[17px] leading-[1.75]
                          font-light"
            >
              When I&apos;m not pushing commits, I&apos;m exploring new
              technologies, contributing to open source, and constantly raising
              the bar for what &ldquo;good&rdquo; looks like on the web.
            </p>

            {/* Tags */}
            <div className="reveal reveal-d4 flex flex-wrap gap-2 mt-8 mb-10">
              {TAGS.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
