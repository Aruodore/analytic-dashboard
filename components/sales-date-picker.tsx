import Image from "next/image";
import { DatePicker } from "./ui/date-picker";

import arrow from "@/public/icons/arrow.svg";

const Trigger = () => {
  return (
    <button className="px-3 py-[0.375rem] rounded-full border border-[#DADDDD] flex gap-[0.625rem]">
      <div className="text-right text-[#3A3F51] font-sm ">
        <span>Weekly</span>
      </div>
      <Image width={20} height={20} alt="arrow" src={arrow} />
    </button>
  );
};

export const SalesDatePicker = () => {
  return <DatePicker trigger={<Trigger />} />;
};
