import Image from "next/image";
import { Inter } from "next/font/google";

import calendar from "@/public/icons/calendar.svg";
import bell from "@/public/icons/bell.png";

import { SearchBar } from "@/components/search-bar";
import { Account } from "@/components/account";
import { Grid } from "@/components/ui/grid";
import { MobileNav } from "@/components/mobile-nav";
import { Calendar } from "./ui/icons/calendar";
import { Bell } from "./ui/icons/bell";
        
const inter  = Inter({ subsets: ["latin"], weight: ["500"] });

export const Header = () => {
  // font-family: "Plus Jakarta Sans";
  return (
    <header className="text-[#26282C] sticky top-0 z-10 border dark:border-[#545454] dark:text-white border-[#DADDDD] dark:bg-[#262626] font-inter ">
      <Grid className="py-[1.125rem] px-5 grow">
        <div className="flex items-center justify-between">
          <h1 className="text-[1.25rem] font-semibold leading-[1.75rem] font-plus max-bm:hidden">
            Dashboard
          </h1>
          <div className='bm:hidden'></div>
          <SearchBar />
          <MobileNav />
        </div>
        <div className="lg:flex items-center gap-x-5 justify-between hidden">
          <div
            className={
              "gap-[10px] flex items-center justify-center p-4  " +
              inter.className
            }
          >
            <Calendar />
            <span>November 15, 2023</span>
          </div>
          <div className="p-[11px] rounded-full border border-[#DADDDD]">
            <Bell/>
          </div>
          <Account />
        </div>
      </Grid>
    </header>
  );
};
