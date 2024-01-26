"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from 'framer-motion';

import brightness from "@/public/icons/brightness.png";
import moon from "@/public/icons/moon.png";

export const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log('')
  return (
    <div className="p-2 rounded-full bg-white relative dark:bg-black ">
      <div
        className="flex flex-col items-center gap-4 z-10 "
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        <div className="text-[1.875rem] aspect-square rounded-full flex items-center justify-center p-[0.4rem]">
          <Image alt="" src={brightness} />
        </div>
        <div>
          <Image alt="" src={moon} />
        </div>
      </div>
      {/* <span className="aspect-square rounded-full m-2 bg-[#34CAA5] absolute top-0 dark:bottom-0 left-0 w-[1.875rem] "></span> */}
      {currentTheme == "dark" && (
        <motion.span
          layoutId="lan"
          transition={{ duration: 0.4 }}
          className="aspect-square rounded-full m-2 bg-[#34CAA5] absolute top-0 dark:bottom-0 left-0 w-[1.875rem] "
        />
      )}
    </div>
  );
};
