import Image from "next/image";
import { Inter } from "next/font/google";

import calendar from "@/public/icons/calendar.svg";
import bell from "@/public/icons/bell.png";

import { SearchBar } from "@/components/search-bar";
import { Account } from "@/components/account";
import { Grid } from "./ui/grid";
        
const inter  = Inter({ subsets: ["latin"], weight: ["500"] });

export const Header = () => {
  // font-family: "Plus Jakarta Sans";
  return (
    <header className="text-[#26282C] border-b border-[#DADDDD] ">
      <Grid className="py-[1.125rem] px-5 grow">
        <div className="flex items-center justify-between">
          <h1 className="text-[1.25rem] font-semibold leading-[1.75rem]">
            Dashboard
          </h1>
          <SearchBar />
        </div>
        <div className="flex items-center gap-x-5">
          <div
            className={
              "gap-[10px] flex items-center justify-center  " + inter.className
            }
          >
            <Image width={20} height={20} src={calendar} alt="calender" />
            <span>November 15, 2023</span>
          </div>
          <div className="p-[11px] rounded-full border border-[#DADDDD]">
            <Image
              width={bell.width}
              height={bell.height}
              alt="bell"
              src={bell}
            />
          </div>
          <Account />
        </div>
      </Grid>
    </header>
  );
};
