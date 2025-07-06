"use client";

import React, { useRef } from "react";
import ArrowLink from "./ArrowLink";
import AnimationText from "./AnimationText";
import { sendGAEvent } from "@next/third-parties/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Main = () => {
  const main = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { duration: 0.9 } });
      tl.from(".title", { x: -300, opacity: 0, delay: 1.8 })
        .from(".title2", { x: -300, opacity: 0 }, "-=0.7")
        .from(".paragraph", { x: -300, opacity: 0 }, "-=0.7")
        .from(".paragraph2", { x: -300, opacity: 0 }, "-=0.7")
        .from(".link-about", { x: -300, opacity: 0 }, "-=0.7");
    },
    { scope: main }
  );
  return (
    <section
      ref={main}
      className=" flex items-center max-w-[1440px] w-full mx-auto h-screen "
    >
      <article className="ml-8 sm:ml-16 lg:ml-32 dark:text-primary">
        <h1 className="title text-3xl sm:text-header font-bold mb-6 leading-[100%]">
          <AnimationText>
            Hi I'am{" "}
            <span className="text-accent">
              <AnimationText>Gelar</AnimationText>
            </span>{" "}
          </AnimationText>
        </h1>
        <h1 className="title2 text-3xl sm:text-header font-bold mb-6 leading-[100%]">
          <AnimationText>Front End Software Developer</AnimationText>
        </h1>
        <p className="paragraph max-w-[520px] mb-3 text-gray font-normal">
          I'm a passionate front-end developer dedicated to creating engaging
          and interactive web experiences.
        </p>
        <p className="paragraph2 mb-3 text-gray font-normal">
          Here, you'll find my latest projects, skills, and more.
        </p>
        <ArrowLink
          href="#about"
          className="link-about"
          onClick={() =>
            sendGAEvent({ event: "homeAboutButton", value: "about button" })
          }
        >
          About Me
        </ArrowLink>
      </article>
    </section>
  );
};

export default Main;
