"use client";
import Image from "next/image";

import { IoIosMenu } from "react-icons/io";

import { ThemeToggle } from "./theme-toggle";

import logo from "@/public/icons/logo.svg";
import trendUp from "@/public/imgs/trend-up.png";
import profile from "@/public/imgs/profile-2user.png";
import discount from "@/public/icons/discount-shape.png";
import info from "@/public/icons/info-circle.png";

import arrowRight from "@/public/icons/arrow-right.png";
import setting from "@/public/icons/setting-2.png";
import logout from "@/public/icons/logout.png";
import { useState } from "react";
import { Category } from "./ui/icons/category";
import {Dialog, DialogOverlay, DialogTrigger } from "./ui/dialog";

const NAV = [trendUp, profile, discount, info];
const NAV2 = [arrowRight, setting, logout];

export const SideBarMenu = () => {
  const [shown, setShown] = useState(false);

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <DialogOverlay onClick={()=>setShown(false)} />
          <button
            className={`fixed top-8 md:hidden left-4 z-20 transition-transform`}
            onClick={() => setShown(!shown)}
          >
            <IoIosMenu size={28} />
          </button>
        </DialogTrigger>
      </Dialog>
      <div className={`w-20  sidebar max-md:hidden ${shown && "show"} `}>
        <div className="flex flex-col max-md:px-1 py-5 justify-between sticky top-0 z-[100] max-h-[100dvh] h-full   bg-[#F7F8FA] dark:bg-[#262626]  dark:border-[#545454] border border-[#EBECF2] ">
          <div className="w-full">
            <div className="flex justify-center mb-5">
              <span className="w-10 h-10 flex justify-center items-center">
                <Image src={logo} alt="" className="w-10 h-10" />
              </span>
            </div>
            <nav className="w-full">
              <ul className="flex flex-col w-full items-stretch">
                <li className="p-[0.625rem]">
                  <span className="h-10 flex justify-center dark:text-white items-center w-full">
                    <Category />
                  </span>
                </li>
                {NAV.map((el) => (
                  <li className="p-[0.625rem]" key={Math.random()}>
                    <span className="h-10 flex justify-center items-center w-full">
                      <Image src={el} alt="" className="w-6 h-6" />
                    </span>
                  </li>
                ))}
                <li className="flex justify-center">
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </div>
          <nav className="w-full">
            <ul className="flex flex-col w-full items-stretch">
              {NAV2.map((el) => (
                <li className="p-[0.625rem]" key={Math.random()}>
                  <span className="h-10 flex justify-center items-center w-full">
                    <Image src={el} alt="" className="w-6 h-6" />
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
