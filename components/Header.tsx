"use client";
import React, { useEffect, useRef, useState } from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface NavItem {
  title: string;
  url: string;
}

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [navActive, setNavActive] = useState<NavItem>({
    title: "Home",
    url: "#",
  });
  const header = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { duration: 0.9 } });
      tl.from(".logo", { x: -300, opacity: 0 })
        .from(".home", { x: -300, opacity: 0 }, "-=0.7")
        .from(".about", { x: -300, opacity: 0 }, "-=0.7")
        .from(".skill", { x: -300, opacity: 0 }, "-=0.7")
        .from(".project", { x: -300, opacity: 0 }, "-=0.7")
        .from(".contact", { x: -300, opacity: 0 }, "-=0.7")
        .from(".toggle", { x: -300, opacity: 0 }, "-=0.7");
    },
    { scope: header }
  );

  const nav: NavItem[] = [
    { title: "Home", url: "#" },
    { title: "about", url: "#about" },
    { title: "skill", url: "#skill" },
    { title: "project", url: "#project" },
    { title: "contact", url: "#contact" },
  ];

  const handleNavClick = (item: NavItem) => {
    setNavActive(item);
    sendGAEvent({ event: `${item.title}Clicked`, value: `${item}` });
  };

  const handleShowNav = () => setShowNav(!showNav);

  return (
    <>
      <header ref={header} className="fixed w-full z-50 px-6">
        <div className="flex justify-between items-center max-w-[960px] w-full mx-auto px-6 py-4 mt-6 shadow-xl dark:shadow-primary/30 rounded-full bg-primary dark:bg-black transition-all duration-300 ease-linear">
          <a href="/" className="flex items-center space-x-4 logo">
            <Image
              src={"/lar-logo.png"}
              height={24}
              width={24}
              alt="logo gelar"
            ></Image>
            <h3 className="text-2xl font-normal text-gray-900 dark:text-primary uppercase">
              Gelar
            </h3>
          </a>
          <nav className="hidden sm:block">
            <ul className="flex space-x-6">
              {nav.map((item) => (
                <a
                  href={item.url}
                  key={item.title}
                  className={`dark:text-primary ${item.title.toLocaleLowerCase()}`}
                >
                  <li
                    className={`${
                      navActive.url === item.url
                        ? "bg-secondary text-primary"
                        : ""
                    } py-1 px-3 rounded-full hover:bg-secondary hover:text-primary uppercase transition-all duration-300 ease-linear `}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.title}
                  </li>
                </a>
              ))}
            </ul>
          </nav>
          <ToggleDarkMode className="hidden sm:block toggle" />
          <button className="block sm:hidden" onClick={() => handleShowNav()}>
            <RxHamburgerMenu />
          </button>
        </div>
        <div className={``}>
          <nav
            className={`p-2 block sm:hidden  absolute right-6 bg-primary dark:bg-black rounded-2xl shadow-xl dark:shadow-primary/30 py-4 mt-4 transition-all duration-300 ease-linear ${
              showNav
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[100%]"
            }`}
          >
            <ul className="flex flex-col space-y-2 ">
              {nav.map((item) => (
                <a
                  href={item.url}
                  key={item.title}
                  className="dark:text-primary"
                >
                  <li
                    className={`${
                      navActive.url === item.url
                        ? "bg-secondary text-primary"
                        : ""
                    } py-1 px-3 rounded-full hover:bg-secondary hover:text-primary uppercase transition-all duration-300 ease-linear `}
                    onClick={() => {
                      handleNavClick(item);
                      handleShowNav();
                    }}
                  >
                    {item.title}
                  </li>
                </a>
              ))}
            </ul>
            <ToggleDarkMode className="mt-2 ml-2" />
          </nav>
        </div>
      </header>
      <div
        className={` sm:hidden fixed inset-0 ${showNav ? "block" : "hidden"} `}
        onClick={() => handleShowNav()}
      ></div>
    </>
  );
};

export default Header;
