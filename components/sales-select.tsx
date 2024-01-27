'use client'
import Image from "next/image";
import { SortSelect } from "./ui/sales-select-dropdown";

import arrow from "@/public/icons/arrow.svg";
import { useState } from "react";
import { ArrowDown } from "./ui/icons/arrow-down";

const Trigger = ({label}:{label:string}) => {
  return (
    <button className="px-3 py-[0.375rem] rounded-full  border border-[#DADDDD] flex items-center gap-[0.625rem]">
      <div className="text-right text-[#3A3F51]  dark:text-white font-sm ">
        <span>{label}</span>
      </div>
      <ArrowDown />
    </button>
  );
};

export const SalesSelect = () => {
  const [selected, setSelected] = useState('Weekly')

  return <SortSelect getValue={setSelected} trigger={<Trigger label={selected}  />} />;
};
