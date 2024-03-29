import search from "@/public/imgs/search.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const SearchBar = ({className}:{className?:string}) => {
  return (
    <div className={cn("gap-x-2 max-bm:hidden flex items-center dark:bg-[#171717] rounded-3xl h-12 font-medium leading-[1.375rem] border border-[#DADDDD] bg-white px-4 w-[21.875rem] ", className)}>
      <div>
        <Image
          height={search.height}
          width={search.width}
          alt="search icon"
          src={search}
        />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="outline-none grow dark:bg-[#171717]"
      />
    </div>
  );
};
