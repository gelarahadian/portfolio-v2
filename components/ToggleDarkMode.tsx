"use client";

import React, { FC } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { FaLightbulb } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

interface ToggleDarkModeProps {
  className?: string;
}

const ToggleDarkMode: FC<ToggleDarkModeProps> = ({ className }) => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <div className={className}>
      <button
        onClick={toggleTheme}
        suppressHydrationWarning
        className={`  flex p-1 items-center justify-center relative bg-secondary rounded-full text-primary after:content-[''] after:absolute after:w-4 after:h-4 after:bg-primary after:rounded-full after:transition-all after:duration-300 after:ease-linear ${
          theme === "light"
            ? "after:left-1 after:translate-x-0"
            : "after:left-[46px] after:translate-x-[-100%]"
        } after:active:w-5}`}
      >
        <div className="flex space-x-[10px] py-[2px] px-1 ">
          <FaLightbulb className="text-xs" />
          <MdDarkMode className="text-xs" />
        </div>
      </button>
    </div>
  );
};

export default ToggleDarkMode;
