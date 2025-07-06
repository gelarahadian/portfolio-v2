"use client";
import React, { useRef } from "react";
import AnimationText from "./AnimationText";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const skill = useRef(null);

  const logos = [
    {
      name: "ReactJs",
      logo: "/logo-skills/reactjs.svg",
    },
    {
      name: "VueJs",
      logo: "/logo-skills/vuejs.svg",
    },
    {
      name: "NextJs",
      logo: "/logo-skills/nextjs.svg",
    },
    {
      name: "NuxtJs",
      logo: "/logo-skills/nuxtjs.svg",
    },
    {
      name: "Tailwind Css",
      logo: "/logo-skills/tailwindcss.svg",
    },
    {
      name: "NodeJs",
      logo: "/logo-skills/nodejs.svg",
    },
    {
      name: "HTML 5",
      logo: "/logo-skills/html5.svg",
    },
    {
      name: "CSS 3",
      logo: "/logo-skills/css3.svg",
    },
    {
      name: "Javascript",
      logo: "/logo-skills/javascript.svg",
    },
    {
      name: "Typescript",
      logo: "/logo-skills/typescript.svg",
    },
    {
      name: "Git",
      logo: "/logo-skills/git.svg",
    },
    {
      name: "Github",
      logo: "/logo-skills/github.svg",
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.from(".info", { y: 120, opacity: 0 })
        .from(".title", { y: 120, opacity: 0 }, "-=0.8")
        .from(".paragraph", { y: 120, opacity: 0 }, "-=0.8")
        .from(".paragraph2", { y: 120, opacity: 0 }, "-=0.8")
        .from(".paragraph3", { y: 120, opacity: 0 }, "-=0.8")
        .from(".logos", { y: 120, opacity: 0 }, "-=0.8");

      ScrollTrigger.create({
        animation: tl,
        trigger: skill.current,
        toggleActions: "play none none none",
        start: "top center",
      });
    },
    { scope: skill }
  );
  return (
    <section
      ref={skill}
      id="skill"
      className="max-w-[1440px] mx-auto py-16 px-12 "
    >
      <article className="text-center max-w-[640px] mx-auto mt-20">
        <p className="info text-grey mb-3">
          A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
        </p>
        <h1 className="title text-3xl sm:text-header font-bold mb-6 leading-[100%]">
          <AnimationText>Skill & Experience</AnimationText>
        </h1>
        <p className="paragraph mb-6">
          The main area of expertise is front end development (client side of
          the web).
        </p>
        <p className="paragraph2 mb-6">
          HTML, CSS, JS, building small and medium web applications with Vue or
          React, custom plugins, features, animations, and coding interactive
          layouts.
        </p>

        <p className="paragraph3 mb-6">
          Visit{" "}
          <Link
            href="https://www.linkedin.com/in/gelar-rahadian
"
            target="_blank"
            className="text-accent"
            onClick={() =>
              sendGAEvent({ event: "linkedInButton", value: "linkedin button" })
            }
          >
            Linkedin
          </Link>{" "}
          for more details.
        </p>
      </article>
      <article>
        <ul className="logos grid grid-cols-2 sm:grid-cols-6 gap-y-6 gap-x-8 max-w-[736px] mx-auto ">
          {logos.map((logo) => (
            <li key={logo.name}>
              <img src={logo.logo} alt={logo.name} className="mb-1 mx-auto" />
              <p className="text-center">{logo.name}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Skill;
