"use client";
import React from "react";
import AnimationText from "./AnimationText";
import Link from "next/link";
import Image from "next/image";
import ArrowLink from "./ArrowLink";
import { Tilt } from "react-tilt";

const Project = () => {
  const projects = [
    {
      type: "Landing Page",
      title: "Lorem  dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      sourceCode: "https//github.com/gelarahadian",
      url: "https://lorem.com/",
      image: "/preview-projects/preview-project1.png",
    },
    {
      type: "Landing Page",
      title: "Lorem ipsum  sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      sourceCode: "https//github.com/gelarahadian",
      url: "https://lorem.com/",
      image: "/preview-projects/preview-project2.png",
    },
    {
      type: "Landing Page",
      title: "Lorem ipsum dolor  amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      sourceCode: "https//github.com/gelarahadian",
      url: "https://lorem.com/",
      image: "/preview-projects/preview-project3.png",
    },
    {
      type: "Landing Page",
      title: "Lorem ipsum dolor sit ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      sourceCode: "https//github.com/gelarahadian",
      url: "https://lorem.com/",
      image: "/preview-projects/preview-project4.png",
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
  return (
    <section id="project" className="max-w-[1440px] mx-auto py-16 px-12">
      <article className="text-center max-w-[736px] mx-auto mb-6">
        <AnimationText>Portfolio & Previous Projects</AnimationText>
        <p>
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
              className={`flex flex-col items-center ${
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
                  index % 2 === 0 ? "" : "sm:text-end items-end"
                }`}
              >
                <p className="uppercase text-secondary mb-3">{project.type}</p>
                <p className="mb-3">{project.title}</p>
                <p className="mb-3">{project.description}</p>
                <ArrowLink href="#" className="mb-3">
                  Go To The App
                </ArrowLink>
                <ArrowLink href="#" type="accent">
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
