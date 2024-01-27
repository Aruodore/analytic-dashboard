import Image from "next/image";

import face from "@/public/faces/1.png";
import arrow from "@/public/icons/arrow.svg";
import { AccountDropDown } from "./ui/account-dropdown";
import { ArrowDown } from "./ui/icons/arrow-down";


export const Account = () => {
  return (
    <AccountDropDown trigger={ <Trigger/> } />
  );
};

const Trigger = () => {
  return (
    <div className="border border-[#DADDDD] rounded-full px-2 py-[0.375rem] flex items-center gap-2">
      <Image {...face} alt="face" className="rounded-full " />
      <div className="lg:gap-3 flex items-center">
        <div className="text-right text-[#26282C] dark:text-white max-lg:hidden flex flex-col gap-[.2rem]  ">
          <h2 className='leading-none'>Justin Bergson</h2>
          <p className="font-[0.875rem] text-[#787486] leading-none">Justin@gmail.com</p>
        </div>
        <ArrowDown/>
      </div>
    </div>
  );
}
