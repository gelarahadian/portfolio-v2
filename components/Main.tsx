"use client";

import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import ArrowLink from "./ArrowLink";
import AnimationText from "./AnimationText";
import { sendGAEvent } from "@next/third-parties/google";

const Main = () => {
  return (
    <section className="flex items-center max-w-[1440px] w-full mx-auto h-screen ">
      <article className="ml-8 sm:ml-16 lg:ml-32 dark:text-primary">
        <AnimationText>
          Hi I'am{" "}
          <AnimationText element="span" className="text-accent">
            Gelar
          </AnimationText>{" "}
        </AnimationText>
        <AnimationText>Front End Software Developer</AnimationText>
        <p className="max-w-[520px] mb-3 text-gray font-normal">
          I'm a passionate front-end developer dedicated to creating engaging
          and interactive web experiences.
        </p>
        <p className="mb-3 text-gray font-normal">
          Here, you'll find my latest projects, skills, and more.
        </p>
        <ArrowLink
          href="#about"
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
