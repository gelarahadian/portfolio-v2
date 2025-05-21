import React from "react";
import ArrowLink from "./ArrowLink";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { sendGAEvent } from "@next/third-parties/google";

const Contact = () => {
  const medsos = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/gelar-rahadian",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/gelarahadian",
    },
    {
      name: "Instagram",
      icon: <RiInstagramFill />,
      url: "https://www.instagram.com/gelarahadian/",
    },
  ];
  return (
    <section id="contact" className="max-w-[1440px] mx-auto py-16 px-12">
      <article className="flex flex-col sm:flex-row justify-between items-center  max-w-[960px] mx-auto shadow-xl dark:shadow-primary/30 py-8 px-6 mb-6 ">
        <section className="mb-3 sm:mb-0 flex-1">
          <p className="mb-4 text-xs md:text-base">
            If you're interested in collaborating or have any questions, feel
            free to reach out to me:
          </p>
          <h2 className="sm:text-3xl text-secondary">
            gelarahadian38@gmail.com
          </h2>
        </section>
        <section className="flex w-full sm:max-w-48 justify-end">
          <ArrowLink href="#">Hire Me</ArrowLink>
        </section>
      </article>
      <article className="w-full">
        <ul className="text-center text-secondary space-x-2">
          {medsos.map((med) => (
            <a
              href={med.url}
              onClick={() => sendGAEvent({ event: `${med.name}Clicked` })}
              target="_blank"
              key={med.name}
            >
              <li
                key={med.name}
                className="inline-flex relative overflow-hidden items-center mt-2 sm:mt-0 p-2 border hover:text-primary border-secondary rounded-full transition-all duration-150 ease-linear group before:content-[''] before:absolute before:w-8 before:h-8 before:bg-secondary before:rounded-full before:-left-8 before:hover:left-0 before:hover:h-80 before:hover:w-80 before:-z-20 before:transition-all before:duration-300 before:ease-linear "
              >
                {med.icon}
                <span className=" ml-2 group-hover:relative group-hover:opacity-100 group-hover transition-all duration-150 ease-linear ">
                  {med.name}
                </span>
              </li>
            </a>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Contact;
