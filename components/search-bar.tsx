import search from "@/public/imgs/search.png";
import calendar from "@/public/imgs/calendar.svg";
import Image from "next/image";

export const SearchBar = () => {
  return (
    <div className="gap-x-2 max-bm:hidden flex items-center rounded-3xl h-12 font-medium leading-[1.375rem] border border-[#DADDDD] bg-white px-4 w-[21.875rem] ">
      <div>
        <Image
          height={search.height}
          width={search.width}
          alt="search icon"
          src={search}
        />
      </div>
      <input type="text" placeholder="Search..."  className="outline-none grow"/>
    </div>
  );
};
