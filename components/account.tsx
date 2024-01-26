import Image from "next/image";

import face from "@/public/faces/1.png";
import arrow from "@/public/icons/arrow.svg";

export const Account = () => {
  return (
    <div className="lg:border lg:border-[#DADDDD] rounded-full lg:px-2 lg:py-[0.375rem] flex items-center gap-2">
      <Image {...face  } alt="face" className="rounded-full " />
      <div className="gap-3 hidden lg:flex">
        <div className="text-right text-[#26282C]  ">
          <h2>Justin Bergson</h2>
          <p className="font-[0.875rem] text-[#787486]">Justin@gmail.com</p>
        </div>
        <Image width={20} height={20} alt='arrow' src={arrow}/>
      </div>
    </div>
  );
};
