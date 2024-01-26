import Image from "next/image";
import search from "@/public/imgs/search.png";
import bell from "@/public/icons/bell.png";
import { Account } from "@/components/account";

export const MobileNav = () => {
  return (
    <div className="flex lg:hidden items-center gap-4">
      <div className="p-[11px] rounded-full border border-[#DADDDD] ">
        <Image src={search} alt="" />
      </div>
      <div className="p-[11px] rounded-full border border-[#DADDDD]">
        <Image width={bell.width} height={bell.height} alt="bell" src={bell} />
      </div>
      <Account/>
    </div>
  );
};
