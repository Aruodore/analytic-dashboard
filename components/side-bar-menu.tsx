import Image from "next/image";
import logo from "@/public/icons/logo.svg";

export const SideBarMenu = () => {
  return (
    <div className="flex flex-col justify-between py-5 w-20 items-center bg-[#F7F8FA] border border-[#EBECF2]">
      <div className="p-[10px]">
        <span className="w-10 h-10 flex justify-center items-center">
          <Image src={logo} alt="" className="w-6 h-6" />
        </span>
      </div>
      <nav className="w-full">
        <ul className="flex flex-col gap-y-4 w-full justify-stretch">
          <li className="p-[10px] hover:bg-red-300 ">
            <span className="h-10 flex justify-center items-center w-full">
              <Image src={logo} alt="" className="w-6 h-6" />
            </span>
          </li>
          <li className="p-[10px] hover:bg-red-300">
            <span className="h-10 flex justify-center items-center w-full">
              <Image src={logo} alt="" className="w-6 h-6" />
            </span>
          </li>
          <li className="p-[10px] hover:bg-red-300">
            <span className="h-10 flex justify-center items-center w-full">
              <Image src={logo} alt="" className="w-6 h-6" />
            </span>
          </li>
          <li className="p-[10px] hover:bg-red-300">
            <span className="h-10 flex justify-center items-center w-full">
              <Image src={logo} alt="" className="w-6 h-6" />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
