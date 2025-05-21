"use client";

import Image from "next/image";
import React from "react";
import ArrowLink from "./ArrowLink";
import { sendGAEvent } from "@next/third-parties/google";

const About = () => {
  return (
    <section id="about" className="max-w-[1440px] mx-auto py-16 px-12">
      <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-20 lg:space-x-36">
        <article className="flex-1">
          <div className="w-[300px] sm:w-full h-[400px] sm:h-[640px] relative before:content-[''] before:absolute before:w-[180px] sm:before:w-[300px] before:h-[180px] sm:before:h-[300px] lg:before:w-[360px] lg:before:h-[360px] before:bg-secondary before:-top-4 sm:before:-top-8 before:-left-4 sm:before:-left-8 before:rounded-[40px] sm:before:rounded-[100px] before:hover:blur-3xl before:transition-all before:duration-300 before:ease-linear after:content-[''] after:absolute after:w-[180px] after:h-[180px] sm:after:w-[300px] sm:after:h-[300px] lg:after:w-[360px] lg:after:h-[360px] after:bg-accent after:-bottom-4 sm:after:-bottom-8 after:-right-4 sm:after:-right-8 after:-z-10 after:rounded-[40px] sm:after:rounded-[100px] after:hover:blur-3xl after:transition-all after:duration-300 after:ease-linear">
            <Image
              src={"/gelar_photo.jpg"}
              alt="gelar photo"
              fill
              sizes="960px"
              className="object-cover object-right rounded-ss-[40px] sm:rounded-ss-[80px] rounded-se-[120px] sm:rounded-se-[240px] rounded-ee-[40px] sm:rounded-ee-[80px] rounded-es-[120px] sm:rounded-es-[240px]"
            />
          </div>
        </article>
        <article className="flex-1">
          <p className="text-secondary text-2xl">About Me</p>
          <p className="text-2xl text-justify mb-3">
            Hello, I'm Gelar Rahadian Fajar, a front-end developer with 3 years
            of experience. I have a strong passion for crafting captivating and
            functional user interfaces. With expertise in HTML, CSS, and
            JavaScript, I enjoy collaborating to deliver creative solutions.
            Additionally, I'm eager to continue learning and staying up-to-date
            with the latest web technologies.
          </p>
          <ArrowLink
            href="https://drive.google.com/file/d/1YZRRxXgkITZ7aV3L6v-FoRaapzrIh6hJ/view?usp=drive_link"
            target="_blank"
            type="accent"
            onClick={() =>
              sendGAEvent({
                event: "downloadMyCVButtton",
                value: "download my cv",
              })
            }
          >
            Download My CV
          </ArrowLink>
        </article>
      </div>
    </section>
  );
};

export default About;
