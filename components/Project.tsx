"use client";
import React, { useRef } from "react";
import AnimationText from "./AnimationText";
import Link from "next/link";
import Image from "next/image";
import ArrowLink from "./ArrowLink";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const project = useRef(null);

  const projects = [
    {
      type: "Ecommerce",
      title: "Belilar",
      description: "Build With: ReactJs, NextJs, TailwindCss, MongoDB ",
      sourceCode: "https://github.com/gelarahadian/beliar",
      url: "https://belilar.lar.my.id/",
      image: "/preview-projects/preview-project1.png",
    },
    {
      type: "Web Application",
      title: "IMDB Clone",
      description: "Build With: ReactJs, NextJs, TailwindCss, MongoDB ",
      sourceCode: "https://github.com/gelarahadian/imdb-clone-gelar",
      url: "https://imdb-clone.lar.my.id/",
      image: "/preview-projects/preview-project2.png",
    },
    {
      type: "Landing Page",
      title: "Healthacare",
      description: "Build With: ReactJs, NextJs, TailwindCss, ",
      sourceCode:
        "https://github.com/gelarahadian/portfolio-v1/tree/main/app/(project)/healthcare",
      url: "https://gelarahadian-v1.vercel.app/healthcare",
      image: "/preview-projects/preview-project3.png",
    },
    {
      type: "Landing Page",
      title: "Red Store",
      description: "Build With: HTML5, CSS",
      sourceCode: "https://github.com/gelarahadian/redstore",
      url: "https://gelarahadian.github.io/redstore/",
      image: "/preview-projects/preview-project4.png",
    },
    {
      type: "Web Application",
      title: "airbnb clone",
      description: "Build With: JavaScript, ReactJS, NextJS, TailwindCSS",
      sourceCode: "https://github.com/gelarahadian/airbnb-gelar",
      url: "https://airbnb-gelar.vercel.app/",
      image: "/preview-projects/preview-project5.png",
    },
  ];

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.4, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.from(".title", { y: 120, opacity: 0 }).from(
        ".paragraph",
        { y: 120, opacity: 0 },
        "-=0.8"
      );

      ScrollTrigger.create({
        animation: tl,
        trigger: project.current,
        start: "top center",
        toggleActions: "play none none none",
      });

      let projects = gsap.utils.toArray(".project");

      gsap.from(projects, {
        y: 100 * (projects.length - 1),
        scrollTrigger: {
          trigger: ".project",
        },
      });
    },
    { scope: project }
  );
  return (
    <section
      ref={project}
      id="project"
      className=" max-w-[1440px] mx-auto py-16 px-12"
    >
      <article className="text-center max-w-[736px] mx-auto mb-6">
        <h1 className="title text-3xl sm:text-header font-bold mb-6 leading-[100%]">
          <AnimationText>Portfolio & Previous Projects</AnimationText>
        </h1>
        <p className="paragraph">
          I have built various different projects to fit different aspects of
          the client's business. If you want to see more examples of my work
          than the ones showcased in this site, please{" "}
          <Link href={"#contact"} className="text-accent">
            contact me!
          </Link>
        </p>
      </article>
      <article>
        <ul className="space-y-16">
          {projects.map((project, index) => (
            <li
              key={project.title}
              className={`project flex flex-col sm:items-center ${
                index % 2 === 0 ? "sm:flex-row " : "sm:flex-row-reverse "
              } space-y-8 sm:space-y-0 `}
            >
              <section
                className={`flex-1 ${
                  index % 2 === 0 ? "sm:mr-20 lg:mr-32" : "sm:ml-20 lg:ml-32"
                } `}
              >
                <Tilt options={defaultOptions} className="w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={360}
                  />
                </Tilt>
              </section>
              <section
                className={`flex-1 flex flex-col  ${
                  index % 2 === 0 ? "" : "sm:text-end sm:items-end"
                }`}
              >
                <p className="uppercase text-secondary mb-3">{project.type}</p>
                <p className="mb-3">{project.title}</p>
                <p className="mb-3">{project.description}</p>
                <ArrowLink href={project.url} className="mb-3" target="_blank">
                  Go To The App
                </ArrowLink>
                <ArrowLink
                  href={project.sourceCode}
                  target="_blank"
                  type="accent"
                >
                  Source Code
                </ArrowLink>
              </section>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Project;
