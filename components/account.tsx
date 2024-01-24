import Image from "next/image";

import face from "@/public/faces/1.png";
import arrow from "@/public/icons/arrow.svg";

export const Account = () => {
  return (
    <div className="border border-[#DADDDD] rounded-full px-2 py-[0.375rem] flex items-center">
      <Image {...face  } alt="face" className="rounded-full " />
      <div className="gap-3 flex">
        <div className="text-right">
          <h2>Justin Bergson</h2>
          <p>Justin@gmail.com</p>
        </div>
        <Image width={20} height={20} alt='arrow' src={arrow}/>
      </div>
    </div>
  );
};
