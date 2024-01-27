import Image from "next/image";
import search from "@/public/imgs/search.png";
import bell from "@/public/icons/bell.png";
import { Account } from "@/components/account";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell } from "./ui/icons/bell";

export const MobileNav = () => {
  return (
    <div className="flex lg:hidden items-center gap-4">
      <Popover>
        <PopoverTrigger>
          <div className="p-[11px] rounded-full border bm:hidden border-[#DADDDD] ">
            <Image src={search} alt="" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="bm:hidden"><input type="text" className="w-full h-full py-2 px-1 outline-[none]" placeholder='Search...' /></PopoverContent>
      </Popover>
      <div className="p-[11px] rounded-full border border-[#DADDDD]">
        <Bell/>
      </div>
      <Account />
    </div>
  );
};
