"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const SKILLS = [
  { name: "React",      logo: "/logo-skills/reactjs.svg"     },
  { name: "Next.js",    logo: "/logo-skills/nextjs.svg"      },
  { name: "Vue.js",     logo: "/logo-skills/vuejs.svg"       },
  { name: "Nuxt.js",    logo: "/logo-skills/nuxtjs.svg"      },
  { name: "TypeScript", logo: "/logo-skills/typescript.svg"  },
  { name: "JavaScript", logo: "/logo-skills/javascript.svg"  },
  { name: "Tailwind",   logo: "/logo-skills/tailwindcss.svg" },
  { name: "HTML5",      logo: "/logo-skills/html5.svg"       },
  { name: "CSS3",       logo: "/logo-skills/css3.svg"        },
  { name: "Node.js",    logo: "/logo-skills/nodejs.svg"      },
  { name: "Git",        logo: "/logo-skills/git.svg"         },
  { name: "GitHub",     logo: "/logo-skills/github.svg"      },
];

export default function Skills() {
  useReveal();

  return (
    <section id="skills" className="py-36">
      <div className="max-w-6xl mx-auto px-10">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <p className="section-label reveal">Tech Stack</p>
            <h2 className="reveal reveal-d1 text-[clamp(36px,4vw,56px)] font-bold
                           leading-[1.05] tracking-tight">
              Skills &amp;<br />Experience
            </h2>
          </div>
          <p className="reveal reveal-d2 text-subtle text-[17px] leading-[1.7] font-light">
            Focused on the frontend, with a growing understanding of the full stack.
            I build fast, accessible, and maintainable interfaces using modern tools
            and best practices.
          </p>
        </div>

        {/* Grid */}
        <div className="reveal grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6
                        gap-0.5 border border-line rounded-[20px] overflow-hidden
                        bg-border">
          {SKILLS.map((s) => (
            <div key={s.name} className="skill-item group">
              {/* Accent hover overlay */}
              <div className="absolute inset-0 bg-accent/10 opacity-0
                              group-hover:opacity-100 transition-opacity duration-300
                              pointer-events-none" />
              <Image
                src={s.logo}
                alt={s.name}
                width={40}
                height={40}
                className="skill-icon"
              />
              <span className="skill-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
