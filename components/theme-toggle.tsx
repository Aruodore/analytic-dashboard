import Image from "next/image";

import brightness from "@/public/icons/brightness.png";
import moon from "@/public/icons/moon.png";

export const ThemeToggle = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-2 rounded-full bg-white">
      <div className="text-[1.875rem] aspect-square rounded-full bg-[#34CAA5] flex items-center justify-center p-[0.4rem]">
        <Image alt="" src={brightness} />
      </div>
      <div>
        <Image alt="" src={moon} />
      </div>
    </div>
  );
};
