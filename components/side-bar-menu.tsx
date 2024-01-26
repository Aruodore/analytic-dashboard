import Image from "next/image";

import { ThemeToggle } from "./theme-toggle";

import logo from "@/public/icons/logo.svg";
import category from "@/public/imgs/category.png";
import trendUp from "@/public/imgs/trend-up.png";
import profile from "@/public/imgs/profile-2user.png";
import discount from "@/public/icons/discount-shape.png";
import info from "@/public/icons/info-circle.png";

import arrowRight from "@/public/icons/arrow-right.png";
import setting from "@/public/icons/setting-2.png";
import logout from "@/public/icons/logout.png";

const NAV = [category, trendUp, profile, discount, info];
const NAV2 = [arrowRight, setting, logout];

export const SideBarMenu = () => {
  return (
    <div className="w-20">
      <div className="flex flex-col py-5 justify-between gap-y-48 bg-[#F7F8FA] border border-[#EBECF2] ">
        <div className="w-full">
          <div className="flex justify-center mb-5">
            <span className="w-10 h-10 flex justify-center items-center">
              <Image src={logo} alt="" className="w-10 h-10" />
            </span>
          </div>
          <nav className="w-full">
            <ul className="flex flex-col gap-y-4 w-full items-stretch">
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
          <ul className="flex flex-col gap-y-4 w-full items-stretch">
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
  );
};
